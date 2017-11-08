(function(exports){

    var assert = {
        isTrue: function(assertionToCheck) {
            if (!assertionToCheck) {
                failed({type: "Failed test", details: {assertion: assertionToCheck, expected: true}});
                throw new Error("Failed: " + assertionToCheck + " is not truthy");
            }
            else {
                passed({type: "Passed test", details: {assertion: assertionToCheck, expected: true}});
            }
        },
        isArray: function(assertionToCheck) {
            if (assertionToCheck instanceof Array) {
                passed({type: "Passed test", details: {assertion: assertionToCheck, expected: true}});
            }
            else {
                failed({type: "Failed test", details: {assertion: assertionToCheck, expected: true}});
                throw new Error("Assertion Failed: " + assertionToCheck + " is not an Array");
            }
        },
        toBe: function(actual, expected) {
            if(actual !== expected) {
                failed({type: "Failed test", details: {actual: actual, expected: expected}});
                throw new Error('Assertion: Failed. ' + actual + ' does not equal ' + expected + '.');
            } else {
                passed({type: "Passed test", details: {actual: actual, expected: expected}});
            }
        },
        itContains: function(list, obj) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    passed({type: "Passed test", details: {list: list, expectedToFind: obj}});
                    return;
                }
            }
            failed({type: "Failed test", details: {actual: list, toContain: obj}});
            throw new Error('Assertion: Failed! list does not contain the object');
        }
    };

    var passed = function(infoObj = ''){
        console.log('%c \u2714 Assertion: Passed ', 'color: green;', infoObj)
    };

    var failed = function(infoObj = ''){
        console.log('%c \u2718 Assertion: Failed', 'color: red;', infoObj)
    }

    exports.assert = assert;
})(this);

(function(exports){
    var describe = function(message, testFunc) {
        try {
            console.log('%c ' + message, 'font-weight: bold;');
            testFunc();
        } catch(err) {
            console.error("Failure", err, 'color: red; font-weight: bold;');
        }
    };

    exports.describe = describe;
})(this);

(function(exports){
    var it = function(message, testFunc) {
        try {
            console.log('%c ' + message, 'color: green; font-weight: bold;');
            testFunc();
        } catch(err) {
            console.error("Failure", err, 'color: red; font-weight: bold;');
        }
    };

    exports.it = it;
})(this);