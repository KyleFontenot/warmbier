import React from "react";
import styles from "./CodeDisplay.module.css";
interface Props {
	header: string;
	code: string;
}
const CodeDisplay = ({ header, code }: Props) => {
	return (
		<div className={styles.whole}>
			<div className={styles.header}>
				<h2>{header}</h2>
			</div>
			<div className={styles.code}>
				<code>{code}</code>
			</div>
		</div>
	);
};
export default CodeDisplay;
