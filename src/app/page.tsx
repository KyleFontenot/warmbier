import PlayerConfig from "./PlayerConfig";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div id="App">
				<div id="Left">
					{[0, 1, 2, 3, 4].map((playerKey, index) => (
						<PlayerConfig playerKey={playerKey} key={index} left={true} />
					))}
				</div>

				<div id="Right">
					{[5, 6, 7, 8, 9].map((playerKey, index) => (
						<PlayerConfig playerKey={playerKey} key={index} left={false} />
					))}
				</div>
			</div>
		</main>
	);
}
