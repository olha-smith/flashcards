function map(array, callback) {
    const result = []
    for (const elem in array) {
        const newElem = callback(elem)
        result.push(newElem)
    }
    return result
}

const arr = [1, 2, 3]
const res = map(arr, (elem) => { return elem * 2 })
console.log(res)