import { getLocalJson } from "./json/funcs";
// import { getLocalSqlite } from "./sqlite/funcs";

/*
  The main, default api route for getting the most common, primary dataset.
*/

export async function GET(request: Request) {
	// const viaSqlite = await getLocalSqlite();
	// OR
	const viaJson = await getLocalJson();

	return new Response(JSON.stringify(viaJson));
}
