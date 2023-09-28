//const coding = ['javascript', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item
// })

// console.log(values);

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = nums.filter((num) => {
//    return num > 4
// })

// const newnums = []

// nums.forEach((num) => {
//     if(num > 4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);

const mynumbers = [1,2,3,4,5,6,7,8,9]

// const newnumbs = mynumbers.map((num) => {return num+10})

const newnumbs = mynumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

console.log(newnumbs);