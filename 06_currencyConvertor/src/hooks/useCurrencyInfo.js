import { useEffect, useState } from "react";
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])//jaise he dependency array ke elements mein koi change hoga tabh automatically useEffect kaam mein aa jayega
    //currency mein agar koi change ho toh api call ho
    return data;
}
export default useCurrencyInfo;


//custom hooks designing