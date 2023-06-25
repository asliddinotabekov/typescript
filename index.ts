
// function getData (){}
// console.log(getData()) //undefined return qilmadi 

// getData()

function SetData (a:number,b:number): number | void {

    // return a ** b
}
// funcsiyada boshqa bir funcsiya kelishiga callback func deyiladi 

// console.log(SetData (25,2))


/// =========== Call Back  = =================


// type param = {
    //     key: string,
    //     value?: number // bermasa ham boladi 
    // }
    
    // const callback = (prop:param):CallProp =>{
        //     return (a:number) => a
        // }
        // console.log(callback({key:"asas",value:1212}))


        
// type CallProp = {
//     new () : Object
// }


// const getData = (fn:CallProp) : string=>{
//     return new fn().toString()
// }

// function ConstFun(){
//     return  Date
// }

// console.log(getData(ConstFun()))

//  let ar : string[] = []
//   function Generic(value : string ,ar:string[]) {
//     ar.push(value)
//     console.log(ar)

//   }

//   Generic("frontend",ar)

// let ar : string[] = []



// function Generic<Type,OutSet>( ar:Type[]) {
//   return (value : Type) : OutSet | string=> {
//       ar.push(value)
//       console.log(ar)
//       return 'sd'
// }
// }

// const stArra =Generic<string,number>([])
// const numArra =Generic<number,number>([])
// stArra("Frontend")
// numArra(1111)

// function getData<Type extends {length: number}>(a:Type){
    
//     console.log(a.length)
// }

// getData<string>("asliddin")
// getData<number[]>([1,2,3,4])
// getData<number>(1)

function getData (a:string):string;
function getData (a:string , b:string, c:string):string;
function getData (a?:string , b?:string, c?:string){
    return "str"
}

console.log(getData("dasad","sada","scsc"))