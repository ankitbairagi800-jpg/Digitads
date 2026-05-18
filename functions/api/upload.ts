export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const url = new URL(request.url);
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Generate a unique filename using timestamp
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
    const objectKey = `uploads/${fileName}`;

    // Upload to R2 Bucket
    await context.env.STORAGE.put(objectKey, file.stream(), {
      httpMetadata: {
        contentType: file.type
      }
    });

    // The public URL assuming a custom domain or r2.dev domain is set up
    // Note: To access the image publicly, the bucket needs public access enabled
    // and ideally a custom domain attached in the Cloudflare dashboard.
    // For now, we return the R2 bucket dev URL or custom domain URL.
    // Since we don't know the exact dev URL, we will use the origin + a route that could serve it
    // or typically we set a custom domain for R2 like cdn.domain.com
    
    // Cloudflare Pages gives us request.url, we'll assume a public bucket or similar.
    // Actually, R2 public buckets usually have a predictable URL if mapped.
    // Let's create an endpoint to fetch images if public access isn't directly on.
    
    // Let's just return a placeholder for the dev URL if it's not known, or ideally the user configures a public bucket URL.
    const publicUrl = `https://digitalads-storage.r2.dev/${objectKey}`;

    return new Response(JSON.stringify({ 
      success: true, 
      url: publicUrl,
      fileName: fileName
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
