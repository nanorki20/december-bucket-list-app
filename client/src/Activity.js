import { useEffect, useState } from "react";


const Activity = () => {

const [ activity_list, setActivityList ] = useState('');


// useEffect(()=>{ fetchActivityList() },[])
    
const fetchActivityList = () => {
    fetch('http://127.0.0.1:3000/activities')
    .then(res => res.json())
    .then(res => {
        if(res.ok){
            setActivityList(res)
        }else{
            alert("Error: Activity list was not fetched")
        }
    })
}

{ activity_list ? console.log(activity_list) : console.log() }

    return ( 
        <>
        <h1> Activity </h1>
        </>
     );
}
 
export default Activity;