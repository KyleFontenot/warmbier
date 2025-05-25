import { getSeasonChanges } from "./funcs";

export async function GET() {
	const viaSqlite = await getSeasonChanges();

	const res = new Response(JSON.stringify(viaSqlite));
	res.headers.set("Cache-Control", "max-age=800");
	return res;
}
