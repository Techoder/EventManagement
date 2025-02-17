import React, { useState , useEffect} from 'react';
import styled from 'styled-components';

function Dancers() {
  const [data,setData]=useState([]);
  const [drop,setDrop]=useState("");
  const [range,setRange] = useState(-1);
  // const [radio,setRadio] = useState(-1);
  const [check,setCheck] = useState([]);
  // const [budget,setBudget] = useState(-1);
  const [search,setSearch] = useState("");
  const range_arr = ["10000-25000","25000-50000","50000-75000","75000-90000","90000-115000","115000+"];
  const rating_arr = ["<3","3-4","4-4.5","4.5-4.8","4.8-5"];
  // const budget_arr = ["<=25K","25K-50K","50K-1L","1L-2L","2L-5L","5L+"];
  const [selectedVenues, setSelectedVenues] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:4000/Dance', {
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
 const options=['Nadiad', 'Anand' ,'Ahmedabad', 'Varsad'];

  const filters = () => {
    // Add your filter logic here
    console.log('Applying filters...');
    console.log('Range:', range);
    console.log('check:', check);
    console.log('drop:', drop);
    console.log('Selected Venues:', selectedVenues);
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
  useEffect(()=>{ 
      console.log("collecting data");
      collectData();
      
    toggleVenue();
  },[]);

  useEffect(() => {
    console.log('Selected Venues:', selectedVenues);
    setCheck(selectedVenues);
  }, [selectedVenues]);

  
  const toggleVenue = (venue) => {
    setSelectedVenues(prevSelectedVenues => {
      if (prevSelectedVenues.includes(venue)) {
        return prevSelectedVenues.filter(v => v !== venue);
      } else {
        return [...prevSelectedVenues, venue];
      }
      
    });
    //  console.log(selectedVenues);
  }

  const venueTypes = [
    'Hip hop Dancers', 'Bharatanatyam', 'Tap dance', 
    'Latin dance', 'Breakdancing', 'Belly dance', 
    'Salsa dance', 'Street dance'
  ];
  
  
  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:4000/filter_dance', {
        method: 'post',
        body: JSON.stringify({ range, check, drop}),
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
      const response = await fetch('http://localhost:4000/dancesearch', {
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
      <a className="btn btn-primary btn-filters" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filters
      </a>
      <div className="row">
          <div className="col-md-8 pad">
            <h1>Dancers</h1>
          </div>
          <div className="col-md-2">
            <input
              className="form-control me-sm-2 mob-width "
              type="search"
              placeholder="Search"
              value={search} onChange={e=>setSearch(e.target.value)}
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
          <fieldset className="form-group">
            <div className='row'>
                <div className='col-md-12'>
                  Select Price Range
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <br />
                  <input type="range" className="form-range" min="0" max="5" step="1" id="customRange3" value={range} onChange={(e)=>setRange(e.target.value)} />
                </div>
              </div>
              <div className='row'>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>10000-25000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>25000-50000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>50000-75000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='oneline'><b>75000-90000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='oneline'><b>90000-11500</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicator'><b>11500+</b></div>
                </div>
              </div>
          </fieldset>

          <fieldset className="form-group">
          <div className='row'>
                <div className='col-md-12'>
                  Select Dance Type
                </div>
              </div>
              <div className="row">
                {venueTypes.map((venue, index) => (
                <div className='col-md-4' key={index + 1}>
                  <br />
                <input
                 type='checkbox'
                className='btn-check'
                 id={`btncheck${index}`}
                   autoComplete='off'
                onClick={() => {
                toggleVenue(venue);
                 }}
              />

          <label className='btn btn-primary' htmlFor={`btncheck${index}`}>
          {venue}
        </label>
      </div>
     
    ))}
    </div>
    
   
          <div className='row'>
              <div className='col-md-12'>
                  Select City
                </div>
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
    </fieldset>
    <br/>
                      <button className="btn btn-lg btn-primary" type="button" onClick={filters}>Apply</button>&nbsp;
                      <button type="button" className="btn btn-outline-primary" onClick={reset}>Reset</button>
</div>     
</div>
      <br />
      <div className="container">
        <div className="row">
        {data.map((curElem) => {
               const img = "venues/"+curElem.vid + ".jpg";
                // const { vid, vname, vlocation, vrating, vcategory, veg_price, non_price, rooms, guest_capacity } = curElem;
                return (
                <div className="col-md-4" key={curElem.did}>
              <div className="card">
                <img
                  src="images\download (3).jfif" // Replace with dancer image
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{curElem.dname}</h5>
                  <p className="address">{curElem.dcity}</p>
                  <p className="price">Price: ₹{curElem.dprice} onwards</p>
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
.pagin-pad{
  margin-top:30px;
}
.btn-filters {
  padding: 10px 20px;
  margin: 20px; /* Adjust margin value as needed */
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
  padding-left:220px;
}

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
}cd
  `;
export default Dancers;

