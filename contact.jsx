import { Outlet , useNavigate } from "react-router-dom"


export default function Contact(){
    let navigate = useNavigate();
    return(
        <>
        <h1 className='text-3xl font-bold text-green-700 transition-transform duration-700 hover:-translate-y-2 hover:scale-105'>Contact Details</h1>

        <div className='flex gap-20 justify-center mt-20'>

            <button  className='bg-blue-700 text-black font-bold py-3 px-6 rounded-xl hover:bg-blue-500' onClick={()=>{navigate("FB")}}>FaceBook</button>
            <button className='bg-linear-to-r from-purple-700 to-pink-700 text-black  px-6 py-3 rounded-lg font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300'  onClick={()=>{navigate("IG")}}>Instagram</button>
            <button className='bg-green-800 text-black font-bold py-3 px-6 rounded-xl hover:bg-green-600' onClick={()=>{navigate("TN")}}>Telephon No.</button>
            

        </div>
        <Outlet/>
        
        </>
    )
}





