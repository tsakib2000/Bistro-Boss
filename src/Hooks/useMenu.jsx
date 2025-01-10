// import { useEffect } from "react"
// import { useState } from "react"

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


const useMenu=()=>{
const axiosPublic =useAxiosPublic();
    // const [menu,setMenu]=useState([]);
    // const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
   
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])
    const {data:menu = [],isPending:loading ,refetch} =useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const {data}= await axiosPublic.get(`/menu`)
            return data 
        }
    })
    return [menu,loading,refetch]
}
export default useMenu