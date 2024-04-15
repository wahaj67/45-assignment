let personname: string = "wahaj ali";
let lowercasename: string = personname.toLowerCase()
console.log(lowercasename)
let uppercasename: string = personname.toUpperCase()
console.log(uppercasename)

let words: string[] = personname.split("")
let titlecasename: string = ""
for (let i=0; i < words.length; i++){
    console.log(titlecasename +words[i])
}