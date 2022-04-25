const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    const arr = members;
    if (!Array.isArray(arr)) {
        return false;
    }
    if (arr.length === 0) {
        return null;
    }
    let resStr = '';
    arr.forEach(i => {
        if (typeof i === 'string') {
            let itenStr = i;
                while (itenStr.slice(0,1) == ' ') {
                    itenStr = itenStr.slice(1, itenStr.length);
                }
            resStr = resStr + itenStr.slice(0,1).toUpperCase();
        }   
    })
    function bubbleSort(arr) {
        for (var i = 0, endI = arr.length - 1; i < endI; i++) {
            for (var j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j] > arr[j + 1]) {
                    var swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                }
            }
        }
        return arr;
    }
    resArr = resStr.split('');
    let sortedArr = bubbleSort(resArr);
    const result = sortedArr.join('');
    return result;
}

module.exports = {
  createDreamTeam
};
