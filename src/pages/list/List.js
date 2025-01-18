// import "./list.css"
// import Navbar from "../../components/navbar/Navbar"
// import Header from "../../components/header/Header"
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import { format } from "date-fns";
// // import { DateRange } from "react-date-range";
// import SearchItem from "../../components/searchItem/SearchItem";
// import useFetch from "../../hooks/useFetch";

// function List() {
//   const location = useLocation();
  
//   // Use optional chaining and provide default values
//   const [destination, setDestination] = useState(location.state?.destination || "");
//   const [startDate, setStartDate] = useState(new Date());
//   // const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date() }]);
//   const [openDate, setOpenDate] = useState(false);
//   const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });
//   const [min, setMin] = useState(undefined);
//   const [max, setMax] = useState(undefined);

//   const { data, loading, error, reFetch } = useFetch(
//     `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
//   );
//   return (
    
//     <div>
//     <Navbar/>
//     <Header type="list"/>
//     <div className="listContainer">
//         <div className="listWrapper">
//           <div className="listSearch">
//             <h1 className="lsTitle">Search</h1>
//             <div className="lsItem">
//               <label>Destination</label>
//               <input 
//                 placeholder={destination} 
//                 type="text" 
//                 value={destination} // Set the input value to destination state
//                 onChange={(e) => setDestination(e.target.value)} // Update destination state
//               />
//             </div>
//             <div className="lsItem">
//               <label>Check-in Date</label>
//               <span onClick={() => setOpenDate(!openDate)}>
//               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> <span>to</span>
//               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//               </span>
//               {/* {openDate && (
//                 <DateRange
//                   onChange={(item) => setDate([item.selection])}
//                   minDate={new Date()}
//                   ranges={date}
//                 />
//               )} */}
            
//             </div>
//             <div className="lsItem">
//               <label>Options</label>
//               <div className="lsOptions">
//                 <div className="lsOptionItem">
//                   <span className="lsOptionText">
//                     Min price <small>per night</small>
//                   </span>
//                   <input type="number" className="lsOptionInput" />
//                 </div>
//                 <div className="lsOptionItem">
//                   <span className="lsOptionText">
//                     Max price <small>per night</small>
//                   </span>
//                   <input type="number" className="lsOptionInput" />
//                 </div>
//                 <div className="lsOptionItem">
//                   <span className="lsOptionText">Adult</span>
//                   <input
//                     type="number"
//                     min={1}
//                     className="lsOptionInput"
//                     placeholder={options.adult}
//                   />
//                 </div>
//                 <div className="lsOptionItem">
//                   <span className="lsOptionText">Children</span>
//                   <input
//                     type="number"
//                     min={0}
//                     className="lsOptionInput"
//                     placeholder={options.children}
//                   />
//                 </div>
//                 <div className="lsOptionItem">
//                   <span className="lsOptionText">Room</span>
//                   <input
//                     type="number"
//                     min={1}
//                     className="lsOptionInput"
//                     placeholder={options.room}
//                   />
//                 </div>
//               </div>
//             </div>
//             <button>Search</button>
//           </div>
//           <div className="listResult">
//           {loading ? (
//               "loading"
//             ) : (
//               <>
//                 {data.map((item) => (
//                   <SearchItem item={item} key={item._id} />
//                 ))}
//               </>
//             )}
//             </div>
//             </div>
//             </div>
//     </div>
//   )
// }

// export default List


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import SearchItem from "../../components/searchItem/SearchItem";

// function List() {
//   const location = useLocation();
//   const [destination, setDestination] = useState(location.state?.destination || "");
//   const [min, setMin] = useState(undefined);
//   const [max, setMax] = useState(undefined);

//   const url = destination ? `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}` : "";
//   console.log("API URL:", url);

//   const { data, loading, error, reFetch } = useFetch(url);

//   return (
//     <div>
//       <Navbar />
//       <Header type="list" />
//       <div className="listContainer">
//         <div className="listWrapper">
//           <div className="listSearch">
//             <h1 className="lsTitle">Search</h1>
//             <div className="lsItem">
//               <label>Destination</label>
//               <input
//                 placeholder={destination}
//                 type="text"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//               />
//             </div>
//             <button onClick={reFetch}>Search</button>
//           </div>
//           <div className="listResult">
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p>{error}</p>
//             ) : data.length > 0 ? (
//               data.map((item) => <SearchItem item={item} key={item._id} />)
//             ) : (
//               <p>No data found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default List;

//chatgpt code 

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // Use the backend base URL for the API
  const backendBaseUrl = "http://localhost:3005";
  const url = destination
    ? `${backendBaseUrl}/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    : "";
  console.log("API URL:", url);

  const { data, loading, error, reFetch } = useFetch(url);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button onClick={reFetch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message || "Something went wrong"}</p> // Handle error safely
            ) : data && data.length > 0 ? (
              data.map((item) => <SearchItem item={item} key={item._id} />)
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;

