import "./styles.css";
import {useEffect, useState} from "react";


export default function App() {
const myApi="www.typicode.com/classes";
const[searchText,setSearchText]=useState("");


useEffect(()=>{

},[])
const apiCaller=fetch(`myApi${searchText}`)
.then((body)=>body.json);

return(
   <div className="App">
    <input 
    name="search" 
    value={searchText}
    type="text"
     onChange={(e)=>setSearchText(e.target.value)}/>
    </div>
  );
}
