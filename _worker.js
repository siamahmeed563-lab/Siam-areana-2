export default {
  async fetch(r) {
    const t = new URL(r.url).searchParams.get("url");
    if (!t) return new Response("Missing url");
    const res = await fetch(t, {headers:{"User-Agent":"Mozilla/5.0"}});
    const h = new Headers(res.headers);
    h.set("Access-Control-Allow-Origin","*");
    return new Response(res.body, {status:res.status, headers:h});
  }
}
