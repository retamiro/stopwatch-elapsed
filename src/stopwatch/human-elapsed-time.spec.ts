import { HumanElapsedTime } from './human-elapsed-time'

describe('HumanElapsedTime Test', () => {
	let instance: HumanElapsedTime

	beforeEach(() => {
		instance = new HumanElapsedTime()
	})

	test('instance', () => {
		expect(instance).toBeDefined()
	})

	test('Test days', () => {
		const d1 = new Date()
		const d2 = new Date()

		d1.setDate(d2.getDate() - 1)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('1D')

		d1.setDate(d2.getDate() - 2)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('2D')
	})

	test('Test hours', () => {
		const d1 = new Date()
		const d2 = new Date()

		d1.setHours(d2.getHours() - 1)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('1h')

		d1.setHours(d2.getHours() - 2)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('2h')
	})

	test('Test minutes', () => {
		const d1 = new Date()
		const d2 = new Date()

		d1.setMinutes(d2.getMinutes() - 1)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('1m')

		d1.setMinutes(d2.getMinutes() - 2)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('2m')
	})

	test('Test seconds', () => {
		const d1 = new Date()
		const d2 = new Date()

		d1.setSeconds(d2.getSeconds() - 1)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('1s')

		d1.setSeconds(d2.getSeconds() - 2)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('2s')
	})

	test('Test milliseconds', () => {
		const d1 = new Date()
		const d2 = new Date()

		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('0ms')

		d1.setMilliseconds(d2.getMilliseconds() - 1)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('1ms')

		d1.setMilliseconds(d2.getMilliseconds() - 2)
		expect(instance.toHumanElapsed(d2.getTime() - d1.getTime())).toBe('2ms')
	})
})
