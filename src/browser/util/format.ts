export const formatTime = (raw: number | undefined | null) => {
	if (!raw) return;
	const totalSeconds = Math.floor(raw / 1000);
	const milliseconds = Math.floor(raw % 1000);
	const seconds = totalSeconds % 60;
	const totalMinutes = Math.floor(totalSeconds / 60);
	const minutes = totalMinutes % 60;
	const hours = Math.floor(totalMinutes / 60);

	if (hours === 0) {
		return `${minutes.toString().padStart(2)}:${seconds
			.toString()
			.padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
	}

	return `${hours.toString().padStart(2)}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
		.toString()
		.padStart(3, "0")}`;
};
