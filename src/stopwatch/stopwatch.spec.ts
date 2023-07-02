import { Constants } from './constants'
import { StopWatch } from './stopwatch'
import { Timer } from './timer'

describe('StopWatch Test', () => {
	let sw: StopWatch
	const sleep = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms))

	beforeEach(() => {
		sw = new StopWatch('sw')
	})

	test('instance', () => {
		expect(sw).toBeDefined()
	})

	test('must add a timer', () => {
		const timerName = 'timet1'
		expect(sw.getTimer(timerName)).toBeUndefined()
		const timer = sw.start(timerName)
		expect(timer).toBeDefined()

		const timerFind = sw.getTimer(timerName)
		expect(timer).toBe(timerFind)
	})

	test('must not have timer running, add and have timer running', () => {
		expect(sw.isRunning()).toBeFalsy()
		const timerName = 'timet1'
		sw.start(timerName)
		expect(sw.isRunning()).toBeTruthy()
	})

	test('must not have timer running, add and have timer running, stop it and it must not be running and print elapsed human output', async () => {
		const elapsedHumanNotInitialized = '-1ms'
		const timerName = 'timet1'
		expect(sw.toString()).toBe(elapsedHumanNotInitialized)
		const t = sw.start(timerName)
		expect(t.toString()).toBe(elapsedHumanNotInitialized)
		expect(sw.isRunning()).toBeTruthy()
		expect(t.isRunning()).toBeTruthy()

		await sleep(10)
		t.stop()
		expect(t.toString()).not.toBe(elapsedHumanNotInitialized)
		expect(sw.isRunning()).toBeFalsy()
		expect(t.isRunning()).toBeFalsy()

		expect(sw.toString()).not.toBe(elapsedHumanNotInitialized)
	})

	test('must add two stopwatches, they must be running and when stopping all of them, they must be stopped', () => {
		expect(sw.getTimerCount()).toBe(0)

		const t1 = sw.start('timet1')
		expect(sw.getTimerCount()).toBe(1)

		const t2 = sw.start('timet2')
		expect(sw.getTimerCount()).toBe(2)

		expect(sw.isRunning()).toBeTruthy()
		expect(t1.isRunning()).toBeTruthy()
		expect(t2.isRunning()).toBeTruthy()

		t2.stop()
		expect(sw.isRunning()).toBeTruthy()
		expect(t1.isRunning()).toBeTruthy()
		expect(t2.isRunning()).toBeFalsy()

		sw.stop()
		expect(sw.isRunning()).toBeFalsy()
		expect(t1.isRunning()).toBeFalsy()
		expect(t2.isRunning()).toBeFalsy()
	})

	// test('must add timer and log correctly', async () => {
	//   expect(sw.isRunning()).toBeFalsy()
	//   const timers = [30, 20]
	//   const timersTotal = timers.reduce((a, b) => a + b, 0)

	//   const firstTimerName = 'Timer 1'
	//   sw.start(firstTimerName)
	//   await sleep(timers[0])
	//   expect(sw.isRunning()).toBeTruthy()
	//   sw.stop()
	//   expect(sw.isRunning()).toBeFalsy()

	//   const secondTimerName = 'Timer 2'
	//   sw.start(secondTimerName)
	//   await sleep(timers[1])
	//   sw.stop()
	//   expect(sw.getTimerCount()).toBe(2)

	//   const rawTotal = sw.elapsed
	//   expect(rawTotal).toBeGreaterThanOrEqual(timersTotal)

	//   const noTimer = sw.getTimer('No timer')
	//   expect(noTimer).toBeUndefined()

	//   const timerOne = sw.getTimer(firstTimerName)
	//   expect(timerOne).toBeInstanceOf(Timer)
	// })

	test('must throw an error when calling start with blank id', () => {
		expect(() => sw.start('')).toThrow()
	})

	test('must throw error when calling stop without stopwatch', () => {
		expect(() => sw.stop()).toThrow()
	})

	test('must throw an error when calling stop the second time', async () => {
		sw.start('time1')
		await sleep(1)
		sw.stop()
		expect(() => sw.stop()).toThrow()
	})
})
