let users: string[]=['qasim','zyan','zain','fahad','Admin']
for (let user of users)
    if (user ==='Admin'){
        console.log('hello! admin ,would you like to see a status repoert')
    }
    else {
        console.log(`hello${user}thank you for loging in again`)
    }