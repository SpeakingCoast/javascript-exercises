const removeFromArray = function(passedArray, ...args) {
    const newArray = []
    passedArray.forEach(items => {
        if (!args.includes(items)) {
            newArray.push(items)
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
