import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faPlaneArrival,
    faPlaneDeparture,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
//   import { DateRange } from "react-date-range";
  import { useState } from "react";
//   import "react-date-range/dist/styles.css"; // main css file
//   import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
    import { useNavigate } from "react-router-dom";
  
  function Header({type}) {

    const [destination,setDestination] =useState("")
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

  const [startDate, setStartDate] = useState(new Date());
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };

    
      const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
      };
    
    return (
        <div className='header'>
            <div  className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }>

                <div className='headerList' >
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                    <>
                <h1 className="headerTitle">
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels – unlock instant savings of 10% or
                    more with a free Lamabooking account
                </p>
                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                          onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>

                    <div className="headerSearchText" onClick={() =>setOpenDate(!openDate)}>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <DatePicker className="headerSearchText" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div  className="headerSearchText" onClick={() =>setOpenDate(!openDate)}>
        
                        <DatePicker className="headerSearchText" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>

                    {/* <DatePicker className="input" selected={startDate} onChange={(date) => setStartDate(date)} />to */}
                    {/* <DatePicker className="input"selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                      
                        {/* <FontAwesomeIcon icon={faPlaneArrival} className="headerIcon" />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

                
                     {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
{/* 
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${DatePicker(date[0].startDate, "MM/dd/yyyy"
                        )} to ${DatePicker( date[0].endDate,"MM/dd/yyyy"
                        )}`}</span> */}
                         {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        {/* <span onClick={()=>setStartDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy"
                        )} to ${format( date[0].endDate,"MM/dd/yyyy"
                        )}`}</span> */}
{/* 
                     { openDate &&  <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            // minDate={new Date()}
                        />} */}
                    <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
                    
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>

                </div>
                </>}
            </div>
        </div>

    )
}

export default Header
