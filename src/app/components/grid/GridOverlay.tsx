import styles from "./GridOverlay.module.css";

export default function GridOverlay() {
	return (
		<div className={styles.root} aria-hidden='true'>
			<div className={styles.container}>
				{Array.from({ length: 12 }).map((_, i) => (
					<div key={i} className={styles.col} />
				))}
			</div>
		</div>
	);
}
