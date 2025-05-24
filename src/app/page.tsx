// import PlayerConfig from "./PlayerConfig";
import PlayerConfig from "@/components/PlayerConfig";
import CodeDisplay from "@/components/CodeDisplay";
import styles from "./page.module.css";

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
	const fileSystemJson = await benchmark(
		() => import("./seasonchanges/json/data.json"),
	);

	const fetchJson = await benchmark(() => fetch("/seasonchanges/json"));

	return (
		<main className={styles.main}>
			<h1>Season Data</h1>
			<CodeDisplay
				header={`Directly from whole local JSON (${directJson.time}): `}
				code={JSON.stringify(directJson.returned)}
			/>

			<div id="App">
				<div id="Left">
					{[0, 1, 2, 3, 4].map((playerKey) => (
						<PlayerConfig playerKey={playerKey} key={playerKey} left={true} />
					))}
				</div>

				<div id="Right">
					{[5, 6, 7, 8, 9].map((playerKey) => (
						<PlayerConfig playerKey={playerKey} key={playerKey} left={false} />
					))}
				</div>
			</div>
		</main>
	);
}
