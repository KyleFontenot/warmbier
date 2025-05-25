"use client";
import type { MouseEvent } from "react";
import styles from "./PlayerConfig.module.css";

interface Props {
	rightside?: boolean;
	playerKey: number;
	key: number;
}

export default function PlayerConfig({
	rightside = false,
	playerKey,
	key,
}: Props) {
	let activePlayer = 0;

	let activeItem = 0;

	function toggleMenu(something: unknown) {
		console.log("hello");
	}

	// TODO can use the rightside prop for grid layout similar to the original's css

	return (
		<div
			className={`${styles.player} ${rightside ? styles.rightside : ""}`}
			key={key}
		>
			{/* <div className="god_buttons"> */}
			<div
				className={styles.godIcon}
				onKeyUp={() => {
					activePlayer = playerKey;
					// toggleMenu(GodSelectMenu);
				}}
				onClick={() => {
					activePlayer = playerKey;
					// toggleMenu(GodSelectMenu);
				}}
			>
				<div className="icon">{""}</div>
			</div>

			{[0, 1, 2, 3, 4, 5].map((itemKey) => (
				<div
					className="item"
					key={itemKey}
					onKeyUp={() => {
						activePlayer = playerKey;
						activeItem = itemKey;
						// toggleMenu(ItemSelectMenu);
					}}
					onClick={() => {
						activePlayer = playerKey;
						activeItem = itemKey;
						// toggleMenu(ItemSelectMenu);
					}}
				>
					{""}
				</div>
			))}
			<div className={styles.godBars}>
				<div
					className="god_health"
					onMouseDown={(e: MouseEvent) => {
						activePlayer = playerKey;
						// TODO change the this to data accurately to the updateHealthMana function
						//updateHealthMana(this, e);
					}}
					onMouseUp={() => {
						return;
						// clearHMUpdate()
					}}
					onMouseOut={() => {
						return;
						//clearHMUpdate()
					}}
					onBlur={() => {
						return;
						//clearHMUpdate()
					}}
				>
					&nbsp;100%&nbsp;
				</div>
				<div
					className="god_mana"
					onMouseDown={(e: MouseEvent) => {
						activePlayer = playerKey;
						// updateHealthMana(this, e);
					}}
					onMouseUp={() => {
						return;
						// clearHMUpdate();
					}}
					onMouseOut={() => {
						return;
						// clearHMUpdate()
					}}
					onBlur={() => {
						return;
						// clearHMUpdate()
					}}
				>
					&nbsp;100%&nbsp;
				</div>
			</div>

			<div
				className="god_options"
				onClick={() => {
					activePlayer = playerKey;
					//toggleMenu(GodOptionsMenu);
				}}
				onKeyUp={() => {
					activePlayer = playerKey;
					//toggleMenu(GodOptionsMenu);
				}}
			>
				{""}
			</div>
			<div
				className="god_info"
				onKeyUp={() => {
					activePlayer = playerKey;
					//toggleMenu(GodInfoMenu);
				}}
				onClick={() => {
					activePlayer = playerKey;
					//toggleMenu(GodInfoMenu);
				}}
			>
				{""}
			</div>
		</div>
	);
}
