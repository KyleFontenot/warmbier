// import PlayerConfig from "./PlayerConfig";
import PlayerConfig from "@/components/PlayerConfig";
import CodeDisplay from "@/components/CodeDisplay";
import styles from "./page.module.css";
import { headers } from "next/headers";

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

export default async function Page() {
	const headersList = await headers();
	const host = headersList.get("host");
	const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
	const origin = `${protocol}://${host}`;

	const fileSystemJson = await benchmark(
		() => import("./seasonchanges/json/data.json"),
	);

	const fetchUrl = `${origin}/seasonchanges/sqlite`;

	const fetchJson = await benchmark(async () => {
		const fetched = await fetch(fetchUrl);
		if (fetched.ok) {
			return await fetched.json();
		}
		return null;
	});

	return (
		<main className={styles.main}>
			<h1>Season Data</h1>
			<CodeDisplay
				header={`Directly from whole local JSON (${fileSystemJson.time}): `}
				code={JSON.stringify(fileSystemJson.returned)}
			/>

			<CodeDisplay
				header={`Directly from whole local JSON (${fetchJson.time}): `}
				code={JSON.stringify(fetchJson.returned)}
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
