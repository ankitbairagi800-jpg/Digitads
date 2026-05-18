export const onRequestGet = async (context: any) => {
  try {
    const { results } = await context.env.DB.prepare("SELECT * FROM services").all();
    
    // Parse features back into arrays and convert reverseLayout
    const formatted = results.map((s: any) => ({
      ...s,
      features: s.features ? s.features.split(",") : [],
      reverseLayout: s.reverseLayout === 1
    }));
    
    // Sort by order manually
    formatted.sort((a: any, b: any) => a.order - b.order);
    
    return new Response(JSON.stringify(formatted), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};

export const onRequestPost = async (context: any) => {
  try {
    const body: any = await context.request.json();
    const { id, title, price, description, features, icon, visualTitle, visualDescription, reverseLayout, order } = body;
    
    const featuresString = Array.isArray(features) ? features.join(",") : (features || "");
    const reverseNum = reverseLayout ? 1 : 0;
    const orderNum = order || 0;
    
    await context.env.DB.prepare(`
      INSERT INTO services (id, title, price, description, features, icon, visualTitle, visualDescription, reverseLayout, "order") 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET 
        title=excluded.title, price=excluded.price, description=excluded.description, 
        features=excluded.features, icon=excluded.icon, visualTitle=excluded.visualTitle, 
        visualDescription=excluded.visualDescription, reverseLayout=excluded.reverseLayout, 
        "order"=excluded."order"
    `).bind(
      id, title, price || "", description || "", featuresString, icon || "", 
      visualTitle || "", visualDescription || "", reverseNum, orderNum
    ).run();
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};

export const onRequestDelete = async (context: any) => {
  try {
    const url = new URL(context.request.url);
    const id = url.searchParams.get("id");
    if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });

    await context.env.DB.prepare("DELETE FROM services WHERE id = ?").bind(id).run();
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
