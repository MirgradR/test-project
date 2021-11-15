const findMinIndex = (arr, direction, element) => {
    let minIndex = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (direction) {
            if (arr[i][element] < arr[minIndex][element]) {
                minIndex = i
            }
        } else {
            if (arr[i][element] > arr[minIndex][element]) {
                minIndex = i
            } 
        }
    }
    return minIndex
}
export const sortR = (arr, direction, element) => {
    let result = []
    while (arr.length !== 0) {
        let minIndex = findMinIndex(arr, direction, element)
        result.push(arr[minIndex])
        arr.splice(minIndex, 1)
    }
    return result
}

