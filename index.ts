
// interface user {
//    readonly name : string ,
// }
 

// interface gemera extends user{
//     age : number ,
// }

// interface hone extends gemera, user {
// }
// // type usr = {
// //     name : string 
// // }

// let obj :hone = {
//     name : "Asliddin",
//     age : 18.5,
// }
// interface  writtable{
//     name ?: string, 
//     age ?: number 
// } 

// let ow:writtable = obj

// console.log(ow.name  = " assadfaffafsa")


// interface Props<Type,OutLet > {
//     age: Type;
//     name: OutLet
//     check ?: ()=> void
//     [index:string ] :string | undefined| Function|Type |OutLet
// }

// let obj :Props<number,string> = {
//     age: 12121,
//     name : "Asliddin",
//     check:()=>{
//         return true
//     }
    
// }

// interface user {
//      age ?: number, 

// }

// class Person  implements user {
//     constructor(name: string){}
//     #name = "Web";
//     private title  = "webbrain "
//     age = 12121
//     getData (){
//         console.log(this.#name, this.title)
//     }
// }

// let person = new Person("webba")
// console.log(person.getData())


type courses = "frontrend" | "backend" | "mobile"

let course : courses = "mobile"