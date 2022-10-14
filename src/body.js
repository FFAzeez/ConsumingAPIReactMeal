import React, { useEffect, useState } from "react";
import axios from "axios";
const Body=()=>{
    const[result,setresult]=useState([]);
    const url ='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    useEffect(()=>{
    axios.get(url)
    .then((res)=>{
        console.log(res);
        setresult(res.data.meals);
    }).catch((error)=>{
        console.log(error);
    })
    },[url]);
    const styling ={width: '250px',height:'250px'};
    const getResult = result.map((ans)=>{
        return(<div className="col-md-3 m-2 bg-success">
            <p>{ans.strMeal}</p>
            <p>{ans.idMeal}</p>
            <img src={ans.strMealThumb} alt='meal image' style={styling}/>
        </div>);
    });
    return<div className="row justify-content-center">

        {getResult}
    </div>
}
export default Body;