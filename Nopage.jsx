import { useLocation } from "react-router-dom"

export default function NopageFound(){

    const {pathname} = useLocation();

    return (
        <>
        <h1 className="text-3xl font-bold animate-bounce ">---Page Not Found at {pathname}----</h1>
        
        </>
    )
}