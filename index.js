function largestSubarraySum(array){
    let sum = 0
    let largestSum = 0
    let contSum = 0
    for(let ind in array){
        if(array[ind] >= 0){
            sum += array[ind]
        }else{
            contSum = Math.max(sum, contSum)
            largestSum = Math.max(largestSum, contSum)
            sum = 0
        }
        contSum += array[ind]
    }
    return Math.max(largestSum, sum)
}