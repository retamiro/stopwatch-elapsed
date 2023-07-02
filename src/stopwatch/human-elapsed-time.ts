export class HumanElapsedTime {
	/**
	 * Return elapsed time in human format
	 */
	toHumanElapsed(t: number) {
		const out = []
		const ms = t % 1000
		t = (t - ms) / 1000

		const sd = Math.floor(t % 60)
		t = (t - sd) / 60

		const nd = Math.floor(t % 60)
		t = (t - nd) / 60

		const hd = Math.floor(t % 24)
		t = (t - hd) / 24

		const dd = t

		if (dd) out.push(dd + 'D')
		if (hd) out.push(hd + 'h')
		if (nd) out.push(nd + 'm')
		if (sd) out.push(sd + 's')
		if (ms || !out.length) out.push(ms + 'ms')
		return out.join(' ')
	}
}
