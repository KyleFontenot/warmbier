import { getLocalJson } from "./funcs";

export async function GET(request: Request) {
	const viaJson = await getLocalJson();

	return new Response(JSON.stringify(viaJson));
}
