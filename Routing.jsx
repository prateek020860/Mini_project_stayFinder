import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navBar";
import Home from "./Home";
import {ProductListing} from "./listing";
import Wishlist from "./wishlist";
import Contact from "./contact"
import NopageFound from "./Nopage";
import FB from "./FB";
import TN from "./TN";
import  IG  from "./IG";

export function Routing(){
    return(
        <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/hotels" element={<ProductListing/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/contact" element={<Contact />}>
    <Route path="FB" element={<FB />} />
    <Route path="IG" element={<IG />} />
    <Route path="TN" element={<TN />} />
    </Route>
    <Route path="*" element={<NopageFound/>} />


    </Routes>
    </>
    )
}