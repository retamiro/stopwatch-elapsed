import { Constants } from './constants'
import { HumanElapsedTime } from './human-elapsed-time'
import { StopWatch } from './stopwatch'

/**
 * Class that implements the timer
 */
export class Timer {
	private _elapsed = Constants.TIMER_NOT_INITIALIZED

	constructor(private _id: string, private _start: number, private stopWatch: StopWatch) {}

	/**
	 * Return the timer identifier
	 */
	get id() {
		return this._id
	}

	/**
	 * Return the elapsed time of the timer
	 */
	get elapsed() {
		return this._elapsed
	}

	/**
	 * Return whether the timer is currently running
	 */
	isRunning() {
		return this._elapsed === Constants.TIMER_NOT_INITIALIZED
	}

	/**
	 * stop timer
	 */
	stop(): void {
		if (this.isRunning()) {
			this._elapsed = Date.now() - this._start
			this.stopWatch['setElapsed']()
		}
	}

	/**
	 * Return elapsed time in human format
	 */
	toString() {
		return new HumanElapsedTime().toHumanElapsed(this.elapsed)
	}
}
