// it is a custom hook for fetching services data 
import React, { useEffect, useState } from 'react';
const useServices = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Minhaj-47/json/main/services.json')
        .then(result=>result.json())
        .then(data=>setServices(data))
    },[]);
    return [services]
};

export default useServices;