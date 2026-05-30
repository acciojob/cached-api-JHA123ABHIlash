import "regenerator-runtime/runtime";
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {
  const url='https://jsonplaceholder.typicode.com/posts';

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);

async function fetchdata() {
    setLoading(true);
    try {
      const res=await fetch(url);
      const value=await res.json();
      setData(value);
     
    } catch (error) {
      setData([]);
      console.log(error);
    }
    setLoading(false);
  }
  

  const memoizedData = useMemo(() => {
  return data;
}, [data]);

  useEffect(()=>{
    fetchdata()
     
  },[]);

console.log(data);
  return (
    <div>
     {
      loading ? (<div>Loading...</div>):(
         <ul>
        {
       memoizedData.map((el)=>(
           <li>
           <h4>{el.title}</h4>
            <p>{el.body}</p>
          </li>
        ))
      }
      </ul>
      )
     }
    </div>
  )
}

export default App
