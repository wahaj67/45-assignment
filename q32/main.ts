let currentUser :string[]=['albert','john','thomas','jennifer','robert']
let newUser:string[]=['wahaj ali']
newUser.forEach((newUser)=> {
    if (
        currentUser.some(
            (currentUser)=> currentUser.toLowerCase()=== newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new user name`)
    }

    else{
        console.log(`${newUser} is available`)
    }
})
    



