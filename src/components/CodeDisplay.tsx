import React from "react";
import styles from "./CodeDisplay.module.css";
interface Props {
	header: string;
	code: string;
	time: string;
}
const CodeDisplay = ({ header, code, time }: Props) => {
	return (
		<div className={styles.whole}>
			<div className={styles.header}>
				<h2 className={styles.header}>
					{time ? <span className={styles.timestamp}>{time} :: </span> : ""}
					{header}
				</h2>
			</div>
			<div className={styles.code}>
				<code>{code}</code>
			</div>
		</div>
	);
};
export default CodeDisplay;
