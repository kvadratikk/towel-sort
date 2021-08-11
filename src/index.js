
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return []

    let res = []

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            iterationEven(matrix[i], res)
        } else {
            iterationOdd(matrix[i], res)
        }
    }

    return res
}

function iterationEven(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i])
    }
}

function iterationOdd(arr, res) {
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
}
