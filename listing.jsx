import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export function ProductListing(){

    let pageSize = 33;
    let [totalcount, setCount] = useState(0);
    let [current,setCurrent] = useState(0);
    let [hotels,setHotels] = useState([]);
    let url = `https://demohotelsapi.pythonanywhere.com/hotels/?limit=${pageSize}&&skip=${current*pageSize}`;
    
    async function DataFetch(){
        let res = await fetch(url);
        let hotelData = await res.json();
        // console.log(hotelData);
        setCount(hotelData.count);
        setHotels(hotelData.data);

    }
    useEffect(()=>{
        DataFetch();
    } ,[current])

    let totalpage = Math.ceil(totalcount/pageSize);

    
    
    return(
       <>
       <div>
        {
            hotels.map((el)=>(
        <Hotel
        key = {el.id}
        id = {el.id}
        name = {el.name}
        thumbnail = {el.thumbnail}
        price = {el.price}
        location = {el.location}
        des = {el.description}
        rating = {el.rating}
        />


         ))}
       </div>

       <div className='flex gap-5 justify-center'>
        {
            Array(totalpage).keys().map((el)=>(
                <button onClick={()=> setCurrent(el)} className='bg-slate-700 px-2 py-1 hover:bg-slate-600'>{el+1}</button>
            ))
        }

       </div>

       

       </>
    )
}

function Hotel({id,name,thumbnail,price,location,des,rating}){

    let navigate = useNavigate();

    function todetailPage(id){
        navigate(`/hotel/${id}`);
    }

    return (
        <div onClick={() => todetailPage(id)} className='flex bg-gray-900 border border-gray-700 rounded-xl overflow-hidden my-6 cursor-pointer hover:scale-[1.02] transition duration-300 shadow-xl'>
            <img className="w-80 h-64 shrink-0 object-cover" src={thumbnail} alt={name}/>
            <div className='flex flex-col'>
            <div >
                <h2 className='text-3xl font-bold text-center text-white'>{name}</h2>
                <p className='mt-4 text-gray-300 leading-7 max-w-3xl mx-auto text-center line-clamp-3'>{des}</p>
            </div>
            <div className='flex flex-col'>
            <div className='flex justify-between mt-6 mx-4 '>
                <p className='text-shadow-amber-100'>📍Location: {location}</p>
                <p>Rating: {rating}⭐</p>
            </div>
            <div className='flex justify-between mt-6 mx-4'>
                <p >Price: ₹{price}</p>
                <button className='bg-white text-black hover:bg-slate-700 px-5 py-2 rounded-lg  '>Wishlist</button>
            </div>
            </div>
            </div>
        </div>
    );

}