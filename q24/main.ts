let car : string = 'subaru'
let age:number= 20
let number: number[]= [3,6,9,12,15,]
// string test
console.log(`is car =="subaru"?i predict true`)
console.log(car == "subaru")

console.log(`is car !="subaru"? i predict false`)
console.log(car != "subaru")

console.log(`is car .tolowercase() == "subaru"? i predict true`)
console.log(car.toLowerCase()=='subaru')

console.log(` is car.tolowercase() =='toyota'? i predict false`)
console.log(car.toLowerCase() =='toyota')

//  

console.log(`is age ==20 i predict true`)
console.log(age == 20)

console.log(`is age != 25? i predict true`)
console.log(age != 25)

console.log(`is age > 18 i predict true` )
console.log(age > 18)

console.log(`is age <18 i predict false`)
console.log(age <18 )

console.log(`is age >= 18 i predict true`)
console.log(age >= 18)






console.log(`is age <=15 i predict false`)
console.log(age <= 15)




console.log(`is 10< age < 25? i predict true`)
console.log( age < 25 && age > 10);

console.log(`is age >5 or age <15? i predict false`)
console.log(age > 20  || age <15)

console.log(`is 3 in number ? i predict true`)
console.log(3 in number)

console .log(`is 7 in number? i predict false`)
console.log(7 in number)