import { getSeasonChanges } from "./funcs";

export async function GET() {
	const viaSqlite = await getSeasonChanges();
	return new Response(JSON.stringify(viaSqlite));
}
