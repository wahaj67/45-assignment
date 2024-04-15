function describe_city(city:string , country:string = 'pakistan'){
    console.log(`${city} is in ${country}`)
}
describe_city('karachi')
describe_city('france', 'europe')
describe_city('lahore','is in punjab')