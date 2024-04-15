let magician = ['alber','robert','thomas']
function show_magician(magician){
    magician.forEach(function (magician){
        console.log(magician)
    }

    )
        
    
}
show_magician(magician)
function make_great(magician){
    for(let i=0; i< magician.length;i++ ){
        magician[i]= magician[i] +'the great'
    }
}
make_great(magician)
show_magician(magician)


function make_great2(magician:string[]):string[]{
    const greatMagicians:string[]=[]
    for(let i=0; i< magician.length; i++){
        greatMagicians.push(magician[i]+'the great')
 
    }
    return greatMagicians
}
const magician3:string[]=['alber','jennifer','ayesha']
const greatMagicians2:string[]=make_great2(magician3)
show_magician(magician3)
show_magician(greatMagicians2)