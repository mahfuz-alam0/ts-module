"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('There is nothing to search');
    }
    else {
        console.log('searching...');
    }
};
// searchName(null)
// convert kmh to ms
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`Your car speed is: ' ${convertedSpeed} 'ms^-1`);
    }
    else if (typeof speed === 'string') {
        const value = speed.split(' ')[0];
        const convertedSpeedString = (parseFloat(value) * 1000) / 3600;
        console.log(`Your car speed is: ' ${convertedSpeedString} 'ms^-1`);
    }
    else {
        console.log('Please provide a number');
    }
};
// getMyCarSpeed(100)
// getMyCarSpeed('100 kmh^-1')
// getMyCarSpeed(true)
// never Type
function throwError(message) {
    throw new Error(message);
}
// throwError('This is an error');
