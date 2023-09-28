const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currvalu: ${currval}`);
//     return acc + currval
// }, 0)

const mytotal = mynums.reduce((acc, currval)=>{
    return acc + currval
},0)

console.log(mytotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999,
    },
    {
        itemName: 'python course',
        price: 3999,
    },
    {
        itemName: 'mobile development course',
        price: 5999,
    },
    {
        itemName: 'java developer course',
        price: 1999,
    },
    {
        itemName: 'data science course',
        price: 8999,
    },
]

const pricetopay = shoppingCart.reduce((acc , item) => acc + item.price,0)

console.log(pricetopay);