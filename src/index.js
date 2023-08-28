
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix !== "object") {
        return []
    }
    function min (arr) {
        const mergedArr = arr
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

    function max (arr) {
        const mergedArr = arr
        let arrf = mergedArr.length;
        let SuperNuzniyIndex;
        function min(array) {    
            let index;
            let remember = array[0]
            let SuperNuzniyIndex;
            for (index = 1; index < array.length; ++index) {
                if (array[index] > remember) {
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
    let index;
    let result = []
    for (index = 0; index < matrix.length; ++index) {
        if (index === 0) {
            result.push(min(matrix[0]))     
        } else if (index % 2 === 0) {
            result.push(min(matrix[index])) 
        } else {
            result.push(max(matrix[index])) 
            console.log()
        }
    }
    return [].concat.apply([], result);
}
