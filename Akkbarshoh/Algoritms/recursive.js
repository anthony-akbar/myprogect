// const recursiveFunc =(a) =>{
//     console.log(a)
//     a=a-1
//     if(a<0){
//         return a
//     }
//     return recursiveFunc(a)
// }
//
// recursiveFunc(5)

const sum = (a,...numbers) => {
    const sumNums = numbers.reduce((sum,item)=>sum+item)
    return a*sumNums
}

console.log(sum(3,2,4))