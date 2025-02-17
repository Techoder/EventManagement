import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function MehndiArtists() {
  const [data, setData] = useState([]);
  const [range, setRange] = useState(-1);
  const [drop, setDrop] = useState("");
  // const [radio,setRadio] = useState(-1);
  // const [check,setCheck] = useState([]);
  // const [budget,setBudget] = useState(-1);
  const [search, setSearch] = useState("");
  const range_arr = ["1000-2500", "2500-5000", "5000-7500", "7500-9000", "9000-11500", "11500+"];
  const rating_arr = ["<3", "3-4", "4-4.5", "4.5-4.8", "4.8-5"];
  const budget_arr = ["<=25K", "25K-50K", "50K-1L", "1L-2L", "2L-5L", "5L+"];
  const [selectedVenues, setSelectedVenues] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:4000/Mehendi', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const responseData = await response.json(); // Parse the response JSON
      console.log('Response data from server:', responseData); // Debugging line

      setData(responseData); // Set the fetched data to the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const options = ["Nadiad", "Anand", "Mumbai", "Vadodara", "Navsari", "Bhavnagar"];

  const filters = () => {
    // Add your filter logic here
    console.log('Applying filters...');
    console.log('Range:', range);
    console.log('city:', drop);
    // console.log('Rating:', radio);
    // console.log('Selected Venues:', selectedVenues);
    // console.log('Budget:', budget);
    // console.log("sending data");
    // if(range!=-1)
    // document.getElementById("filter1").style="display:block";
    // if(radio!=-1)
    // document.getElementById("filter2").style="display:block";
    // if(check.length != 0)
    // document.getElementById("filter3").style="display:block";
    // if(budget!=-1)
    // document.getElementById("filter4").style="display:block";
    sendData();
  };
  const reset = () => {
    // document.getElementById("filter1").style="display:none";
    // document.getElementById("filter2").style="display:none";
    // document.getElementById("filter3").style="display:none";
    // document.getElementById("filter4").style="display:none";
    collectData();
  };
  useEffect(() => {
    console.log("collecting data");
    collectData();

    // toggleVenue();
  }, []);

  // useEffect(() => {
  //   console.log('Selected Venues:', selectedVenues);
  //   setCheck(selectedVenues);
  // }, [selectedVenues]);


  // const toggleVenue = (venue) => {
  //   setSelectedVenues(prevSelectedVenues => {
  //     if (prevSelectedVenues.includes(venue)) {
  //       return prevSelectedVenues.filter(v => v !== venue);
  //     } else {
  //       return [...prevSelectedVenues, venue];
  //     }

  //   });
  //   //  console.log(selectedVenues);
  // }

  const venueTypes = [
    '4 Star+ Hotels', 'Banquet Halls', 'FarmHouses',
    'Hotel', 'Resort', 'Restaurant',
    'Destination Wedding', 'Heritage Property'
  ];


  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:4000/filter_mehendi', {
        method: 'post',
        body: JSON.stringify({ range, drop }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error('API response not okay:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const searchData = async () => {
    console.log(search);
    try {
      const response = await fetch('http://localhost:4000/search_mehendi', {
        method: 'post',
        body: JSON.stringify({ search }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error('API response not okay:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <Wrapper>
      <div className='top-container'>
        {/* Offcanvas filters */}
        <a
          className="btn btn-primary btn-filters"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Filters
        </a>
        <div className="row">
          <div className="col-md-8 pad">
            <h1>Mehendi Artists</h1>
          </div>
          <div className="col-md-2">
            <input
              className="form-control me-sm-2 mob-width"
              type="search"
              placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary mob-btn" type="submit" onClick={searchData}>
              Search
            </button>
          </div>
        </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h1 className="offcanvas-title" id="offcanvasExampleLabel">Filters</h1>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            {/* <fieldset className="form-group">
            <legend className="mt-4">Price Range</legend>
            <label htmlFor="customRange1" className="form-label">Select Price Range</label>
            {/* <input type="range" className="form-range" id="customRange1" min="0" max="20000" step="1000" /> */}
            {/* <input type="range" className="form-range" id="customRange1" />
            <div className='row'>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>&lt;100</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>100-250</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>250-500</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='oneline'><b>500-1000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='oneline'><b>1000-2000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicator'><b>2000+</b></div>
                </div>
              </div>
          </fieldset> */}
            <div className='row'>
              <div className='col-md-12'>
                Select Price Range
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <br />
                <input type="range" className="form-range" min="0" max="5" step="1" id="customRange3" value={range} onChange={(e) => setRange(e.target.value)} />
              </div>
            </div>
            <div className='row'>
              <div className="col-md-2 indi-width">
                <div className='indicators'><b>1000-2500</b></div>
              </div>
              <div className="col-md-2 indi-width">
                <div className='indicators'><b>3000-4500</b></div>
              </div>
              <div className="col-md-2 indi-width">
                <div className='indicators'><b>5000-6500</b></div>
              </div>
              <div className="col-md-2 indi-width">
                <div className='oneline'><b>7000-8500</b></div>
              </div>
              <div className="col-md-2 indi-width">
                <div className='oneline'><b>9000-10500</b></div>
              </div>
              <div className="col-md-2 indi-width">
                <div className='indicator'><b>10500+</b></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <br />
                Select city
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <br />
                <select
                  className="form-control width"
                  id="country"
                  onChange={(e) => setDrop(e.target.value)}
                  defaultValue={drop}
                >
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3 mb-3" onClick={filters}>Apply</button> {/* Added mb-3 for bottom margin */}
          <button type="submit" className="btn btn-primary mt-3 mb-3" onClick={reset}>Reset</button> {/* Added mb-3 for bottom margin */}
        </div>
      </div>

      {/* Artists */}
      <div className="container">
        <div className="row">


          {data.map((curElem) => {
            const img = "venues/" + curElem.Mid + ".jpg";
            const path = `${curElem.mname}`;

            // const { vid, vname, vlocation, vrating, vcategory, veg_price, non_price, rooms, guest_capacity } = curElem;
            return (
              <div className="col-md-4" key={curElem.mid}>
                <NavLink to={path} className="link">
                <div className="card">
                  <img
                    src="images\download (2).jfif" // Replace with the artist's image URL
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{curElem.mname}</h5>
                    <p className="address">{curElem.mcity}</p>

                    <p className="price">Price: ₹{curElem.mprice} onwards</p>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="btn-container">
                          <a href="#" className="btn btn-primary">
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row pagin-pad">
        <div className="col-md-12 pagin">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                &laquo;
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                &raquo;
              </a>
            </li>
          </ul>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.div`

.link{
  text-decoration:none;
}
.top-container{
 
    padding-top: 60px;
    height:127px;
    // padding-left: 40px;
    margin-bottom: 80px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}
.pagin-pad{
  margin-top:30px;
}
  

.btn-filters {
    padding: 10px 20px;
    margin: 20px;
  }

  .btn-primary {
    background-color: #e61041;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}

  .btn-primary:hover {
    background-color: #c30733;
}

.pad{
  padding-left:
}
  /* Add your other styling here */

  @media only screen and (max-width:768px){
    .mob-width{
      width:200px;
      margin-bottom:20px;
    }
    .mob-btn{
      position:absolute;
      margin-left:210px;
      margin-top:-59px;
      
      z-index:3;
    }
  }
    /* Add your other styling here */
  


  `;

export default MehndiArtists;
