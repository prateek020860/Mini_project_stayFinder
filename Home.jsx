import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const url = "https://demohotelsapi.pythonanywhere.com/hotels/";

  async function DataFetch() {
    try {
      const res = await fetch(url);
      const hotelData = await res.json();

      setHotels(hotelData.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    DataFetch();
  }, []);

  function searchHotels() {
    if (selectedLocation === "") {
      alert("Please select a location.");
      return;
    }

    const result = hotels.filter(
      (hotel) => hotel.location === selectedLocation
    );

    setFilteredHotels(result);
  }

  // Get unique locations from API
  const locations = [...new Set(hotels.map((hotel) => hotel.location))];

  return (
    <div className="min-h-screen text-white p-6">

      <h1 className='text-4xl font-bold bg-linear-to-r from-red-800 to-white bg-clip-text text-transparent transition-transform duration-700 hover:-translate-y-2 hover:scale-105'>Welcome</h1>


      {/* Search Section */}
      <div className="flex justify-center gap-4 mb-10 mt-10">
         <div className="flex">
        <div >
        <label htmlFor="start">📅Check-In :</label>
         <input
          type="date"
          id="start"
          className="border border-gray-400 rounded "
          />
          </div>

        <div>
        <label htmlFor="end">📅Check-Out :</label>
         <input
          type="date"
          id="end"
          className="border border-gray-400 rounded px-2 py-1"
          />
        </div>



         </div>
        

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-70 px-2 py-1 rounded-lg text-gray-500 font-medium border border-gray-400"
        >
          <option value="">Select Location</option>

          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <button
          onClick={searchHotels}
          className="bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
        >
          Search Hotels
        </button>

      </div>

      {/* No Hotel Found */}
      {filteredHotels.length === 0 && (
        <h2 className="text-center text-gray-400 text-xl">
          Here you will find all the hotels according to your convenince.
        </h2>
      )}

      {/* Hotel Cards */}

      {filteredHotels.map((el) => (
        <Hotel
          key={el.id}
          id={el.id}
          name={el.name}
          thumbnail={el.thumbnail}
          price={el.price}
          location={el.location}
          des={el.description}
          rating={el.rating}
        />
      ))}
    </div>
  );
}

function Hotel({ id, name, thumbnail, price, location, des, rating }) {
  const navigate = useNavigate();

  function todetailPage(id) {
    navigate(`/hotel/${id}`);
  }

  return (
    <div
      onClick={() => todetailPage(id)}
      className="flex bg-gray-900 border border-gray-700 rounded-xl overflow-hidden my-6 cursor-pointer hover:scale-[1.02] transition duration-300 shadow-xl"
    >
      <img
        src={thumbnail}
        alt={name}
        className="w-80 h-64 object-cover"
      />

      <div className="flex flex-col justify-between flex-1 p-6">

        <div>
          <h2 className="text-3xl font-bold text-white">
            {name}
          </h2>

          <p className="text-gray-300 mt-4 line-clamp-3">
            {des}
          </p>
        </div>

        <div>

          <div className="flex justify-between mt-5 text-white">
            <p>📍 {location}</p>

            <p>{rating}⭐</p>
          </div>

          <div className="flex justify-between items-center mt-5">

            <p className=" font-bold text-gray-400">
              ₹{price}
            </p>

            <button
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black px-5 py-2 rounded-lg hover:bg-slate-500"
            >
              Wishlist
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}