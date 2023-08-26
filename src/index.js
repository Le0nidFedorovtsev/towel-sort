
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const mergedArr = [].concat.apply([], matrix);
    let arrf = mergedArr.length;
    let SuperNuzniyIndex;
    function min(array) {    
        let index;
        let remember = array[0]
        let SuperNuzniyIndex;
        for (index = 1; index < array.length; ++index) {
            if (array[index] < remember) {
                remember = array[index]
                SuperNuzniyIndex = index
            }
        }
        const SuperArr = [remember, SuperNuzniyIndex]
        return SuperArr
    }
    let str = []
    let remember1;
    let i;
    for (i = 0; i < arrf; ++i) {
        remember1 = min(mergedArr)
        mergedArr.splice(remember1[1], 1);
        str.push(remember1[0])
    }
    return str
}
