import Database from "better-sqlite3";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
// import sqlitefile from "@/db/seasonchanges.sqlite";

const __filename = fileURLToPath(import.meta.url);
const dir = dirname(__filename);

// const db = new Database(path.resolve(dir, "./seasonchanges.sqlite"));

const db = new Database(
	path.join(process.cwd(), "src/db/seasonchanges.sqlite"),
);

export async function getSeasonChanges() {
	const all = db.prepare("SELECT * FROM releases").all();
	return all;
}
// export async function updateLocalSqlite() {}
// export async function upsertLocalSqlite() {}
// export async function deleteLocalSqlite() {}

export async function getLatestSeasonChange() {
	const latest = db
		.prepare(
			"SELECT * FROM releases  WHERE version_numeric = (SELECT MAX(version_numeric) FROM releases);",
		)
		.all();
	return latest;
}

export let first = true;
export function firstOff() {
	first = false;
}

// export async function seedDB() {
// 	for (let i = 0; i < 10; i++) {
// 		const insert = await db
// 			.prepare("INSERT INTO releases (version, description) VALUES (?, ?)")
// 			.all([
// 				`1.1.${i}`,
// 				`Placeholder description for version ${i}, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum `,
// 			]);
// 	}
// 	console.log("Seeded 10");
// }

// Generated from AI.
function sanitizeSQL(input: string) {
	const maxLength = 100;
	const allowWhitespace = true;
	const strictMode = false;

	if (!input || typeof input !== "string") {
		return "";
	}

	if (input.length > maxLength) {
		throw new Error(`Input exceeds maximum length of ${maxLength}`);
	}

	let sanitized = input;

	// Remove specific problematic control characters
	const controlChars = ["\0", "\x08", "\x1a", "\r", "\t", "\x0B", "\x0C"];
	controlChars.forEach((char) => {
		sanitized = sanitized.replace(new RegExp(char, "g"), "");
	});

	if (strictMode) {
		// Whitelist approach - only allow safe characters
		const safePattern = allowWhitespace ? /[a-zA-Z0-9\s._-]/ : /[a-zA-Z0-9._-]/;
		let result = "";
		for (const char of sanitized) {
			if (safePattern.test(char)) {
				result += char;
			}
		}
		sanitized = result;
	} else {
		// Blacklist approach - remove dangerous patterns
		const dangerousPatterns = [
			/--.*$/gm,
			/\/\*[\s\S]*?\*\//g,
			/['"`;\\]/g,
			/\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b/gi,
			/(\|\||&&)/g,
		];

		dangerousPatterns.forEach((pattern) => {
			sanitized = sanitized.replace(pattern, "");
		});
	}

	// Clean up whitespace
	sanitized = sanitized.replace(/\s+/g, " ").trim();

	return sanitized;
}
export { db };
