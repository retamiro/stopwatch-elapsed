import { Constants } from './constants'
import { HumanElapsedTime } from './human-elapsed-time'
import { Timer } from './timer'

/**
 * Class that implements the stopwatch
 */
export class StopWatch {
	private started = Constants.TIMER_NOT_INITIALIZED
	private _elapsed = Constants.TIMER_NOT_INITIALIZED
	private timers: Timer[] = []

	constructor(private id = '') {}

	/**
	 * start a timer with identifier
	 */
	start(id: string) {
		!id && this.throwError('Identifier needs to be informed')
		const start = Date.now()
		if (this.started === Constants.TIMER_NOT_INITIALIZED) this.started = start
		this.timers.push(new Timer(id, start, this))
		return this.timers[this.timers.length - 1]
	}

	/**
	 * stop all timers
	 */
	stop(): void {
		!this.timers.length && this.throwError('No timer started')
		!this.isRunning() && this.throwError('All timer has been stopped')
		this.timers.filter(t => t.isRunning()).forEach(t => t.stop())
		this.setElapsed()
	}

	/**
	 * Return whether any timers are currently running
	 */
	isRunning(): boolean {
		return this.timers.find(t => t.isRunning()) != null
	}

	/**
	 * Return the timer number on the stopwatch
	 */
	getTimerCount(): number {
		return this.timers.length
	}

	/**
	 * Return a timer matching the given id
	 */
	getTimer(id: string): Timer | undefined {
		const timer = this.timers.find(timer => timer.id === id)
		return timer
	}

	/**
	 * Return the total running time in milliseconds
	 */
	get elapsed() {
		return this._elapsed
	}

	/**
	 * Return elapsed time in human format
	 */
	toString() {
		return new HumanElapsedTime().toHumanElapsed(this.elapsed)
	}

	private throwError(msg: string): never {
		throw new Error(msg)
	}

	private setElapsed() {
		this._elapsed = Date.now() - this.started
	}
}
