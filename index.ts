

const getData = (a:string |number) =>{
  typeof a !== "number" && a.repeat(3)
}

const Check = (a:string  | null | string[]) =>{
    if(a){
        for(let i of a){
            console.log(i)
        }
    
  }}

  function time (key:string): string{
    let data = new Date 

    switch(key){
        case "ll" :
            return `${data.getDate()} ${data.getDay()} ${data.getFullYear()}`
        case "l" :
            return `${data.getDate()} ${data.getDay()}`
        default : return `${data.getDate()} ${data.getDay()}`
    }
  }
// console.log(time("ll"))
// console.log(time("l"))

function get (str?: string){
    let title : string = str!;  
    if(typeof str === "string" ){

    }
}

function gets ():unknown{
    throw new Error ("SDFASFASfa")
}

// never  hichnima qaytarilmaydi 

let man :never 