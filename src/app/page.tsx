// import PlayerConfig from "./PlayerConfig";
import PlayerConfig from "@/components/PlayerConfig";
import CodeDisplay from "@/components/CodeDisplay";
import styles from "./page.module.css";
import { headers } from "next/headers";
import { Suspense } from "react";
import { lazy } from "react";

import {
	db,
	getSeasonChanges,
	getLatestSeasonChange,
} from "./seasonchanges/sqlite/funcs";

// In App Router
async function benchmark(
	fn: () => unknown | Promise<unknown>,
): Promise<{ returned: unknown; time: string }> {
	const before = performance.now();
	const executed = await fn();
	const after = performance.now();
	return {
		returned: executed ?? undefined,
		time: `${(after - before).toFixed(2)}ms`,
	};
}

const Loading = <div>Loading...</div>;

export default async function Page() {
	const headersList = await headers();
	const host = headersList.get("host");
	const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
	const origin = `${protocol}://${host}`;

	const importJson = await benchmark(async () => {
		const j = await import("./seasonchanges/json/data.json");
		return j.default;
	});

	const importSqlite = await benchmark(async () => {
		const query = await getSeasonChanges();
		return query;
	});

	const importSqliteLatest = await benchmark(async () => {
		const query = await getLatestSeasonChange();
		return query;
	});

	const fetchJsonUrl = `${origin}/seasonchanges/json`;
	const fetchJson = await benchmark(async () => {
		const fetched = await fetch(fetchJsonUrl);
		if (fetched.ok) {
			return await fetched.json();
		}
		return null;
	});

	const fetchSqliteUrl = `${origin}/seasonchanges/sqlite`;
	const fetchSqlite = await benchmark(async () => {
		const fetched = await fetch(fetchSqliteUrl);
		if (fetched.ok) {
			return await fetched.json();
		}
		return null;
	});

	return (
		<main className={styles.main}>
			<h1>Season Data</h1>

			<CodeDisplay
				time={importJson.time}
				header={`Directly from whole local fs JSON (${importJson.time}): `}
				code={JSON.stringify(importJson.returned)}
			/>

			<CodeDisplay
				time={importSqlite.time}
				header={`Directly from whole local fs sqlite file (${importSqlite.time}): `}
				code={JSON.stringify(importSqlite.returned)}
			/>

			<CodeDisplay
				time={importSqliteLatest.time}
				header={`local fs sqlite query for grabbing latest row based on version number  (${importSqliteLatest.time}): `}
				code={JSON.stringify(importSqliteLatest.returned)}
			/>

			<CodeDisplay
				time={fetchJson.time}
				header={`By using fetch to endpoint: ${fetchJsonUrl} (${fetchJson.time}): `}
				code={JSON.stringify(fetchJson.returned)}
			/>

			<CodeDisplay
				time={fetchSqlite.time}
				header={`By using fetch to endpoint: ${fetchSqliteUrl} (${fetchSqlite.time}): `}
				code={JSON.stringify(fetchSqlite.returned)}
			/>

			<div id={styles.teams}>
				<div id={styles.left}>
					{[0, 1, 2, 3, 4].map((playerKey) => (
						<PlayerConfig playerKey={playerKey} key={playerKey} />
					))}
				</div>

				<div id="Right">
					{[5, 6, 7, 8, 9].map((playerKey) => (
						<PlayerConfig
							playerKey={playerKey}
							key={playerKey}
							rightside={true}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
