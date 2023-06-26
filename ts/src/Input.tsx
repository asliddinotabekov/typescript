import { type } from "@testing-library/user-event/dist/type"
import React from "react"


// interface Actions {
//   type?  :string
// }

// interface Props extends Actions {
//   value:string
//   title?:string
//   onChange : (e:React.MouseEvent)=>{} | void
//   children : React.ReactNode
// }

// const Input:React.FC<Props> =(props)=> {
//   return <h1>
//     {props.value}
//   </h1>
 
// }
// type tips = string | number

   const fruit = [
    {id:1, name:"Orange"},
    {id:2, name:"Banana"},
    {id:3, name:"Kiwi"},
    {id:4, name:"Apricot"},
    {id:5, name:"Apple"},
   ]

const Input=()=> {
  type Actions  = {type:"add", value :string}|{type:"remove", id:number}

  type Todos  ={
    id: number,
    name:string
  }

  type State = Todos[]

  const [state , dispatch] =React.useReducer((state:State,action:Actions)=>{
    switch(action.type){
      case "add" :
        return [...state,{id:state.length +2 ,name:action.value}];
      case  "remove":
        let result =   state.filter(vl=>vl.id !== action.id)
        return result
    }
    return state
  } ,fruit)

  return(<div>
    {
      state.map((val)=>{
        return(
          <>
          <h1>
            {val.id} -{val.name }
          </h1>
          <button onClick={()=>dispatch({type:"add",value:"Peach"})}>add</button>
          <button  onClick={()=>dispatch({type:"remove", id:val.id})}>delete</button>

          </>
        )
      })
    }
  </div>)
// ================================= Ref ============================================

  // const btnRef =React.useRef<HTMLButtonElement>(null)
  // const inRef =React.useRef<HTMLInputElement>(null)
  // console.log(btnRef, inRef );
  // return (
  //   <div>
  //       <button ref={btnRef}>
  //         button
  //         </button>
  //         <input ref={inRef} type="text" />
  //   </div>
// ================================= State ============================================
// const [count ,setCount ] = React.useState<tips>(1)
    //return <h1 onClick={(e)=>props.onChange(e)}>
    //   {props.value}
    //   {props.title}
    //   {props.children}
    //   {/* <button onClick={()=>setCount(1)}>change to number</button>
  //   <button onClick={()=>setCount("wdqdq")}>change to str</button> */}
  // </h1>
  
 
}

export default Input;
