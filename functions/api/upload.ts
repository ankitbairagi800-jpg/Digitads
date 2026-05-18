export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = "597be61ad644051616f919ba786155fd"; // Hardcoded for frictionless deployment
    if (!apiKey) {

    const imgbbFormData = new FormData();
    // ImgBB requires the file in the "image" field
    imgbbFormData.append("image", file);

    const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: imgbbFormData
    });

    const imgbbData = await imgbbResponse.json() as any;

    if (imgbbData.success) {
      return new Response(JSON.stringify({ 
        success: true, 
        url: imgbbData.data.url, // Direct public URL from ImgBB
        fileName: file.name
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      throw new Error(imgbbData.error?.message || "Failed to upload to ImgBB");
    }

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
