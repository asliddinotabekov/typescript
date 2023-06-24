let usr  = {name:"webbrain" , age:111 }
let title : string = "Webbrain"
title = "adasdsa"
let anyData : any = "wwww"
anyData= Boolean
let anyDataAr: [] =[]
anyDataAr = []

// union

let union : string | number  = "Asliddin"
// union = true

let arUnion : [string | number]= [11]
arUnion = ["Webb"]

let arUnionAny : any[string | number]= [false] // ichidagilarni atkaz qilib yuboradi 

// Tyuple
let tuple :[string,number][] ;

tuple =[["sdsds",1212],["sdsds",1212]]

// Enum

enum dir {
    up=2,
    down
}
console.log(dir.up,dir.down)
// drop down uchun ishlatiladi 

let id : any  =123
let uId  = <string>id
let uIds  = id as number
uId = '111'
uIds = 1111