import { getLocalJson } from "./funcs";

export async function GET() {
	const viaJson = await getLocalJson();

	const res = new Response(JSON.stringify(viaJson));
	res.headers.set("Cache-Control", "max-age=800");

	return res;
}
