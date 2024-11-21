
import { useEffect, useState } from "react"

export function useFetch(url , retry){
    const[data, setdata] = useState({});
    console.log(url)
    async function getPosts(){
      const response = await fetch(url);
      const json = await response.json();
      setdata(json);
      }
  
    useEffect(()=>{
      getPosts();
    },[url])
    
    useEffect(()=>{
        const intervalid = setInterval(()=>{
            getPosts();
        },retry * 1000);

        return(()=>{
            clearInterval(intervalid)
        })
    },[retry])

    return{
        data: data
    }
}