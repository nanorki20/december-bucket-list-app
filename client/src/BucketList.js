import { useEffect, useState } from "react";

const BucketList = () => {

const [ bucket_list, setBucketList ] = useState('');

// useEffect(()=>{ fetchBucketList() },[])

const fetchBucketList = () => {
    fetch('http://127.0.0.1:3000/bucket_lists')
    .then(res => res.json())
    .then(res => {
        if(res.ok){
            setBucketList(res)
        }else{
            alert("Error: Bucket list was not fetched")
        }
    })
}

{ bucket_list ? console.log(bucket_list) : console.log() }



    return ( 
    <>
    <h1>Bucket List</h1>
    </> 
    );
}
 
export default BucketList;