import { useState,useEffect } from 'react';
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
// const url =`https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
const url =`https://api.giphy.com/v1/gifs/random?api_key=MOkTOz41T6cR7Mmk2ZXQbGW79dEEWZ55`;

const useGif = (tag) => {
    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState('false')
     
    async function fetchData(tag)
    {
      setLoading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource=data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } 
  
    useEffect( ()=>{
      fetchData();
    },[] )
    
    return {gif,loading,fetchData};
}
export default useGif