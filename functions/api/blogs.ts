export const onRequestGet = async (context: any) => {
  try {
    const { results } = await context.env.DB.prepare("SELECT * FROM blogs").all();
    
    // Parse tags back into arrays and convert isFeatured
    const formatted = results.map((b: any) => ({
      ...b,
      tags: b.tags ? b.tags.split(",") : [],
      isFeatured: b.isFeatured === 1
    }));
    
    // Sort by date manually as string dates can be tricky
    formatted.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
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
    const { id, title, excerpt, content, category, readTime, date, tags, slug, icon, isFeatured } = body;
    
    const tagsString = Array.isArray(tags) ? tags.join(",") : (tags || "");
    const featuredNum = isFeatured ? 1 : 0;
    
    await context.env.DB.prepare(`
      INSERT INTO blogs (id, title, excerpt, content, category, readTime, date, tags, slug, icon, isFeatured) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET 
        title=excluded.title, excerpt=excluded.excerpt, content=excluded.content, 
        category=excluded.category, readTime=excluded.readTime, date=excluded.date, 
        tags=excluded.tags, slug=excluded.slug, icon=excluded.icon, isFeatured=excluded.isFeatured
    `).bind(
      id, title, excerpt || "", content, category || "", readTime || "", 
      date || "", tagsString, slug, icon || "", featuredNum
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

    await context.env.DB.prepare("DELETE FROM blogs WHERE id = ?").bind(id).run();
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
