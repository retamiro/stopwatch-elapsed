# stopwatch-elapsed

[![npm version](https://img.shields.io/npm/v/stopwatch-elapsed.svg?style=flat)](https://www.npmjs.com/package/stopwatch-elapsed)
[![install size](https://packagephobia.com/badge?p=stopwatch-elapsed)](https://packagephobia.com/result?p=stopwatch-elapsed)
[![npm downloads](https://img.shields.io/npm/dm/stopwatch-elapsed.svg?style=flat)](http://npm-stat.com/charts.html?package=stopwatch-elapsed)

### Description

Stopwatch with elapsed time calculation in human format
The stopwatch can have multiple Timers, to use multiple timers, enter the name of a specific timer. 

Timer name must be a string


## Installing

```shell
npm install stopwatch-elapsed
```

## Features

### StopWatch
```javascript
    `start(identifier: string)` start a timer with identifier and return Timer instance

    `stop()` stop all timers

    `isRunning()` Return whether any timers are currently running

    `getTimerCount()` Return the timer number on the stopwatch

    `getTimer(identifier: string)` Return a timer matching the given identifier

    `toString()` Return elapsed time in human format

```

### Timer
```javascript
    `start(identifier: string)` start a timer with identifier and return Timer instance

    `id` Return the timer identifier

    `elapsed` Return the elapsed time of the timer

    `isRunning()` Return whether the timer is currently running

    `stop()` stop timer and calculate elapsed

    `toString()` Return elapsed time in human format

```




## Usage

### Example 1

```typescript

import { StopWatch } from 'stopwatch-node';

(async () => {
const sleep = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms))

    const sw = new StopWatch('sw');
    sw.start('Timer 1');
    await sleep(1003);

    // Checks if the StopWatch is currently running
    console.info(`StopWatch running: ${sw.isRunning()}`);

    sw.stop()

    // Checks if the StopWatch is currently running
    console.info(`StopWatch running: ${sw.isRunning()}`);

    // Print Elapsed StopWatch
    console.info(`Elapsed StopWatch ${sw.toString()}`);
})()
```

#### Output Example 1
```
StopWatch running: true
StopWatch running: false
Elapsed StopWatch 1s 3ms
```


### Example 2

```typescript

import { StopWatch } from 'stopwatch-node';

(async () => {
const sleep = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms))

    const sw = new StopWatch('sw');
    const timer1 = sw.start('Timer 1');
    await sleep(1003); // 1 seconds 3 milliseconds

    const timer2 = sw.start('Timer 2');

    // Checks if the timer1 is currently running
    console.info(`Timer1 running: ${timer1.isRunning()}`);

    // Checks if the timer2 is currently running
    console.info(`Timer2 running: ${timer2.isRunning()}`);

    // Checks if the StopWatch is currently running
    console.info(`StopWatch running: ${sw.isRunning()}`);

    timer1.stop()
    console.info(`Elapsed Timer1 ${timer1.toString()}`);

    // Checks if the StopWatch is currently running
    console.info(`StopWatch running: ${sw.isRunning()}`);

    await sleep(60000 + 5006); // 1 minutes 5 seconds 6 milliseconds

    timer2.stop()
    console.info(`Elapsed Timer2 ${timer2.toString()}`);


    // Checks if the StopWatch is currently running
    console.info(`StopWatch running: ${sw.isRunning()}`);


    // Checks if the timer2 is currently running
    console.info(`Timer2 running: ${timer2.isRunning()}`);

    // Print Elapsed StopWatch
    console.info(`Elapsed StopWatch ${sw.toString()}`);
})()
```

#### Output Example 2
```
Timer1 running: true
Timer2 running: true
StopWatch running: true
Elapsed Timer1 1s 3ms
StopWatch running: true
Elapsed Timer2 1m 5s 6ms
StopWatch running: false
Timer2 running: false
Elapsed StopWatch 1m 6s 9ms
```