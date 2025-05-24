"use client";
import type { MouseEvent } from "react";

interface Props {
	left: boolean;
	playerKey: number;
	key: number;
}

export default function PlayerConfig({ left, playerKey, key }: Props) {
	let activePlayer = 0;

	let activeItem = 0;

	function toggleMenu(something: unknown) {
		console.log("hello");
	}

	// TODO can use the left prop for grid layout similar to the original's css

	return (
		<div className="player" key={key}>
			<div className="god_buttons">
				<div
					className="god_options"
					onClick={() => {
						activePlayer = playerKey;
						//toggleMenu(GodOptionsMenu);
					}}
				></div>
				<div
					className="god_info"
					onClick={() => {
						activePlayer = playerKey;
						//toggleMenu(GodInfoMenu);
					}}
				></div>
			</div>
			<div
				className="god_icon"
				onClick={() => {
					activePlayer = playerKey;
					// toggleMenu(GodSelectMenu);
				}}
			>
				<div className="icon"></div>
			</div>
			<div className="god_items">
				{[0, 1, 2, 3, 4, 5].map((itemKey, index) => (
					<div
						className="item"
						key={index}
						onClick={() => {
							activePlayer = playerKey;
							activeItem = itemKey;
							// toggleMenu(ItemSelectMenu);
						}}
					></div>
				))}
			</div>
			<div className="god_bar">
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
				>
					&nbsp;100%&nbsp;
				</div>
			</div>
		</div>
	);
}
