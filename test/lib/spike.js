(function(exports){

    var assert = {
        isTrue: function(assertionToCheck) {
            if (!assertionToCheck) {
                console.log('%c \u2718 Assertion: Failed', 'color: red;');
                throw new Error("Failed: " + assertionToCheck + " is not truthy");
            }
            else {
                console.log('%c \u2714 Assertion: Passed ', 'color: green;')
            }
        },
        isArray: function(assertionToCheck) {
            if (assertionToCheck instanceof Array) {
                console.log('%c \u2714 Assertion: Passed ', 'color: green;')
            }
            else {
                console.log('%c \u2718 Assertion: Failed', 'color: red;');
                throw new Error("Failed: " + assertionToCheck + " is not an Array");
            }
        },
        toBe: function(actual, expected) {
            if(actual !== expected) {
                console.log('%c \u2718 Assertion: Failed', 'color: red;');
                throw new Error('Assertion: Failed', {type: "Failed test", details: {actual: actual, expected: expected}});
            } else {
                console.log('%c \u2714 Assertion: Passed', 'color: green;',
                    {type: "Passed test", details: {actual: actual, expected: expected}});
            }
        },
        itContains: function(list, obj) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    console.log('%c \u2714 Assertion: Passed ', 'color: green;')
                    return;
                }
            }
            console.log('%c \u2718 Assertion: Failed', 'color: red;');
            console.log({type: "Failed test", details: {actual: list, toContain: obj}});
            throw new Error('Assertion: Failed! list does not contain the object');
        }
    };

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