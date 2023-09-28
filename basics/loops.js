// const programing = ['ruby', 'js', 'java', 'cpp']

// for (const key of programing){
//     console.log(key);
// }

// const map = new Map()
// map.set('IN', "India");
// map.set('USA', "United States of America")

// for (const key in map) {
//     console.log(key)
// }

// const coding = ['js', 'rs', 'java', 'ruby']

// coding.forEach( function(item) {
//     console.log(item);
// })

// coding.forEach((item) =>{
//     console.log(item);
// })

// function print(item){
//     console.log(item);
// }

// coding.forEach(print)

// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })


const coding = [
    {
        languagename: 'javascript',
        languagefilename: 'js'
    },
    {
        languagename: 'python',
        languagefilename: 'py'
    }
]

coding.forEach((item) =>{
    console.log(item.languagefilename);
})