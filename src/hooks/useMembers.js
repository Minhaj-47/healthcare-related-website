// it is a custom hook for fetching team members data 
import React, { useEffect, useState } from 'react';
const useMembers = () => {
    const [members,setMembers] =useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Minhaj-47/json/main/teamMember.json')
        .then(result=>result.json())
        .then(data=>setMembers(data))
    },[]);
    return [members];
};

export default useMembers;