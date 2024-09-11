import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

var path = "";
function Venue() {
  const category = "venues";
  const { vname } = useParams();
  
  const [data,setData] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:4000/id_venue', {
        method: 'post',
        body: JSON.stringify({ vname }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log('hi'+responseData);
        setData(responseData);
  
        if (responseData.length > 0) {
          const vname = responseData[0].vname;
          path = "/Review/Venues/" + vname;
          console.log(responseData);
          console.log(path);
        } else {
          console.log('No data available for the given vid');
        }
      } else {
        console.error('API response not okay:', response.status);
      }
       // Debugging line
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{ 
    collectData();  
  
  },[]);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
  const d = new Date();
  const cur_month = d.getMonth();
  const cur_year = d.getFullYear();
  const [num_month,setNum] = useState(cur_month);
  const [month,setMonth] = useState(monthNames[cur_month]);
  const [num_year,setYear] = useState(cur_year);
  const [counter,setCount] = useState(1);
  const next = () => {
    setCount(counter+1);  
    
    console.log(counter);
    if (counter >= 12) {
      setYear(cur_year);
      console.log("in");
      
    }
    if (num_month >= 11) {
     
      setNum(0);
      setYear(num_year + 1);
    } 
    
    else {
      setNum(num_month + 1);
   
    }
    console.log(num_month);
    setMonth(monthNames[num_month]); // Update month last
  };

  const back = () => {
    console.log("hi");
    setNum(num_month-1);
    setMonth(monthNames[num_month]); // Update month last
  };
  const [review,setReview] = useState([]);
  const reviewData = async () => {
    try {
      const name = vname; 
      const response = await fetch('http://localhost:4000/review', {
        method: 'post',
        body: JSON.stringify({category,name}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const responseData = await response.json(); // Parse the response JSON
      setReview(responseData);
       // Debugging line
      console.log("res"+responseData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{ 
    reviewData();  
  },[]);
    const [name,setName] = useState("");
    const [country,setCountry] = useState("USA");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [date,setDate] = useState("");
    const [guests,setGuest] = useState("");
    const [rooms,setRoom] = useState("");
    const [type,setType] = useState("");
    const [time,setTime] = useState("");
  const rid = "";
  const options = ["USA", "UK", "Canada"];
  const sendData = async () =>{
      
      let result = await fetch('http://localhost:4000/request', {
          method: 'post',
          body: JSON.stringify({rid,name,country,phone,email,date,guests,rooms,type,time}),
          headers: { 'Content-Type': 'application/json' },
      });
      console.log(result);
      // result = await result.json();
      // localStorage.setItem("items", JSON.stringify(result));
    
  }
  return (
    <Wrapper>
      {data.map((curElem) => {
        const img = '/venues/'+curElem.vid+'.jpg';
         return (
    <div className="super-cont"  key={curElem.vid}>
      <div className='container'>
      <div className='container cont'>
          <div className='row'>
            <div className='col-md-6'>
              <div className="title">{curElem.vname}</div>
            </div>
            <div className='col-md-6 right'>
              <button className="rating ">{curElem.vrating}</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
             { curElem.vlocation}
            </div>
            <div className='col-md-6 right'>
              Number of Ratings
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pad-top">
              {curElem.vlocation}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pad">
              <a href="#" className="cust-link"></a>
            </div>
          </div>
          <div className='row g-0 cont2'>
            <div className="col-md-3">
              <button className="btn btn-primary">Photos</button>
            </div>
            <div className="col-md-3">
            <NavLink to="/Packages">  <button className="btn btn-primary ">Add to Packages</button></NavLink>
            </div>
            <div className="col-md-3">
              
            <NavLink to={path}><button className="btn btn-primary" >Write a review</button></NavLink>
            </div>
            <div className="col-md-3">
              <button className=" btn-no-border">Share</button>
            </div>
          </div>
          <div className="row">
          <div className="cont5">
              <div className="row">
                <div className="col-md-12">
                    <div className="photos-title">Photos</div>
                    <div className='row images'>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                    </div>
                    <div className='row images'>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                    </div>
                    <div className='row images'>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                      <div className='col-md-3'>
                        <img src="images/v1.jpg" className='image-thumbnail'></img>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12 center'>
                        <button type="button" className="btn btn-primary">View More</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img src={img} className='venue-img'></img>
            </div>
            <div className='col-md-6 venue'>
                <div className="price ">
                    <div className="row ">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Pricing Info
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                              <div className='row'>
                                <div className="col-md-6">
                                <strong>Starting Price of a Room</strong> <br/>
                                </div>
                                <div className="col-md-6">
                                  <strong>Starting Price Of Decor</strong>
                                </div>
                              </div>
                              <div className='row'>
                                <div className="col-md-6">
                                  {curElem.price} INR per Room
                                </div>
                                <div className="col-md-6">
                                  10,00,000 INR
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Check Availability
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                              <div className='row pad-cust'>
                                <div className='col-md-8'>
                                  <strong>Day</strong>
                                </div>
                                <div className='col-md-4'>
                                  <strong>Time Booked</strong>
                                </div>
                              </div>
                              <div className='row'>
                                <div className='col-md-8'>
                                  <br/>
                                  <div className='row'>
                                    <div className="col-md-12">
                                      {month},{num_year}
                                    </div>
                                  </div>
                                  <button onClick={back } className='btn-bdr'><img src="/images/back.png" className='back'/></button>

                                  <button onClick={next} className='btn-bdr'><img src="/images/next.png" className='next' /></button>
                                <div className="calendar">
                                  <div className="weekdays">
                                    <div className="day">Sun</div>
                                    <div className="day">Mon</div>
                                    <div className="day">Tue</div>
                                    <div className="day">Wed</div>
                                    <div className="day">Thu</div>
                                    <div className="day">Fri</div>
                                    <div className="day">Sat</div>
                                  </div>
                                  <div className="dates">
                                    <div className="date free">1</div>
                                    <div className="date booked">2</div>
                                    <div className="date half">3</div>
                                    <div className="date free">4</div>
                                    <div className="date free">5</div>
                                    <div className="date booked">6</div>
                                    <div className="date booked">7</div>
                                    <div className="date free">8</div>
                                    <div className="date free">9</div>
                                    <div className="date booked">10</div>
                                    <div className="date free">11</div>
                                    <div className="date free">12</div>
                                    <div className="date free">13</div>
                                    <div className="date booked">14</div>
                                    <div className="date free">15</div>
                                    <div className="date free">16</div>
                                    <div className="date free">17</div>
                                    <div className="date free">18</div>
                                    <div className="date free">19</div>
                                    <div className="date booked">20</div>
                                    <div className="date free">21</div>
                                    <div className="date free">22</div>
                                    <div className="date free">23</div>
                                    <div className="date free">24</div>
                                    <div className="date free">25</div>
                                    <div className="date booked">26</div>
                                    <div className="date booked">27</div>
                                    <div className="date free">28</div>
                                    <div className="date booked">29</div>
                                    <div className="date booked">30</div>
                                  </div>
                                </div>
                              </div>
                                <div className='col-md-4'>
                                    <br/>
                                    <div className='row'>
                                      <div className='col-md-2 '>
                                        <div className="book"></div>
                                      </div>
                                      <div className='col-md-10'>
                                          <div className='left'>: Full Day</div>
                                      </div>
                                    </div>
                                    <div className='row'>
                                      <div className='col-md-2'>
                                        <div className="half-day"></div>
                                      </div>
                                      <div className='col-md-10'>
                                          <div className='left'>: Specific</div>
                                      </div>
                                    </div>
                                    <div className='row'>
                                      <div className='col-md-2'>
                                        <div className="free-day"></div>
                                      </div>
                                      <div className='col-md-10'>
                                          <div className='left'>: Free</div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Request Booking
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <div className="row">
                                <div className='col-md-12'>
                                  <strong>Request your Booking Now!</strong>
                                </div>
                              </div>
                               <div className='row'>
                                <div className='col-md-6'>
                                  <br/> 
                                  <input type="text" className="form-control" placeholder="Full Name" id="inputDefault" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className='col-md-6 '>
                                  <br/> 
                                  <div className="row">
                                    <div className='col-md-4'>
                                      <div className="form-group">
                                        
                                        <select
                                          className="form-control width" 
                                          id="country"
                                          onChange={(e) => setCountry(e.target.value)}
                                          defaultValue={country}
                                        >
                                          {options.map((option, idx) => (
                                            <option key={idx}>{option}</option>
                                          ))}
                                        </select>
                                      </div>
                                      </div>
                                      <div className="col-md-8 ">
                                        <div className="form-group">
                                          <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='row'>
                                    <div className='col-md-6'>
                                    <br/>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className='col-md-6'>
                                    <br/>
                                      <input type='date' className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}/>
                                    </div>
                                  </div>
                                  <div className='row'>
                                    <div className='col-md-6'>
                                    <br/>
                                      <input type="text" className="form-control" placeholder="No of Guests" id="inputDefault" value={guests} onChange={(e)=>setGuest(e.target.value)}/> 
                                    </div>
                                    <div className='col-md-6'>
                                    <br/>
                                      <input type="text" className="form-control" placeholder="No of Rooms" id="inputDefault" value={rooms} onChange={(e)=>setRoom(e.target.value)}/>  
                                    </div>
                                  </div>
                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <br/>
                                      <div className="btn-group wide" role="group" aria-label="Basic radio toggle button group">
                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={()=>setType("wedding")}/>
                                          <label className="btn btn-outline-primary" htmlFor="btnradio1">Wedding</label>
                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={()=>setType("pre-wedding")}/>
                                          <label className="btn btn-outline-primary" htmlFor="btnradio2">Pre-Wedding</label>
                                      </div>
                                    </div>
                                    <div className='col-md-6'>
                                      <br/>
                                      <div className='row'>
                                        <div className="col-md-12">
                                          <input type="text" className="form-control" placeholder="Timing" id="inputDefault" value={time} onChange={(e)=>setTime(e.target.value)}/>  
                                        </div>  
                                      </div>
                                    </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                          <div className="d-grid">
                                            <br/>
                                            <button className="btn  btn-primary" type="button" onClick={sendData}>Request Booking</button>
                                          </div>
                                        </div>
                                      </div>
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                </div>
                <div className='cont4'>
                  <div className='row '>
                        <div className='col-md-12'>
                          <div className='about-title'>About Venue Name</div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-12'>
                          <div className='about-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime voluptatem commodi quos laudantium error, exercitationem vero placeat repudiandae ipsum!<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsam nam voluptatibus eaque voluptate nostrum voluptates commodi vero et? Id assumenda minus, atque necessitatibus cum adipisci ut aspernatur temporibus. Ad pariatur molestiae suscipit ut! Officiis animi asperiores cupiditate dolore repellat.<br/><br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi omnis in nam odio quidem ab repellat dolor earum delectus, ad odit temporibus, explicabo impedit? Ipsam eligendi omnis consectetur possimus?</div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>

        <div className='row'>
          <div className="col-md-6">
            
          </div>
          <div className='col-md-6'>
            <div className="cont6">
            <div className='row'>
              <div className='col-md-12'>
                  <div className='photos-title'>Ratings & Reviews</div>
              </div>
            </div>
            {review.slice(0,5).map((curElem) => {
               const img = "venues/"+curElem.rid + ".jpg";
                // const { vid, vname, vlocation, vrating, vcategory, veg_price, non_price, rooms, guest_capacity } = curElem;
                return (
            <div className='container' key={curElem.rid}>
            <div className='row'>
              <div className='col-md-2'>
                <img src="/images/profile.png" className='profile'/>
              </div>
              <div className='col-md-6 g-0'>
                <div className="row">
                  <div className="col-md-6">
                    {curElem.rname}
                  </div>
                  <div className="col-md-6">{curElem.rdate}</div>
                </div >
                <div className="row">
                  <div className="col-md-12">
                 {curElem.rcontent}
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
              <section>
                    {Array.apply(null, { length: curElem.rstar }).map((e, i) => (
                      <span className="busterCards" key={i}>
                        <i aria-hidden="true" className="fa fa-star"></i>
                        {e}
                      </span>
                    ))}
                  </section>
              </div>

              
            </div>
            
              
             
            <br/>   
            
          </div>
          
           );
          })} 
          <div className='row'>
              <div className='col-md-12'>
              <NavLink to={path}> <button className='btn btn-primary review-btn'>View More </button></NavLink>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div> 
    </div>
         );
    })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
.review-btn{
  
}
.fa-star,.fa-star-o,.fa-star-half-o{
  color:#FDC91B;
  font-size:20px !important;
  width:27px;
  }
.next{
  position:absolute;
  max-width:40px;
  max-height:40px;
  margin-top:125px;
  margin-left:350px;
}
.back{
  position:absolute;
  max-width:40px;
  max-height:40px;
  margin-top:130px;
  margin-left:-30px;
  border-width:0px;
}
.btn-bdr{
  position:absolute;

  border:none;
}
.super-cont{
  padding-top:50px;

}
.profile{
    width:60px;
    height:60px;

}
.cont6{
  background-color:#f0f0f0;
  width:600px;
  height:600px;
  padding:10px;
  margin-left:100px;
  margin-top:30px;
  margin-bottom:30px;
}
.center{
  display:flex;
  justify-content:center;
  padding-top:20px;

}
.images{
  padding-right:10px;
  padding-top:10px;
}
.photos-title{
  font-size:26px;
  padding-bottom:10px;
}
.image-thumbnail{
  width:150px;
  height:150px;
}
.cont5{
  background-color:#f0f0f0;
  width:660px;
  height:620px;
  padding:10px;
  margin-left:0px;
  margin-top:85px;
  margin-bottom:30px;
}
.wide{
  width:100%;
}
.about-title{
  font-size:20px;
  padding-left:10px;
}
.about-description{
  padding-top :10px;
  padding-left:10px;
  padding-right:20px;
  text-align:justify;
}
.cont4{
  background-color:#f0f0f0;
  padding:10px;
  margin-top:20px;
  margin-left:0px;
  width:600px;
  height:410px;
}
.left{
  text-align:left;
  padding:0px;
}

.book{
  height:20px;
  width:20px;
  background-color:#f44336;
}
.half-day{
  height:20px;
  width:20px;
  background-color:#f2eb24;
}
.free-day{
  height:20px;
  width:20px;
  background-color:#4caf50;
}
.pad{
  padding:10px;
}
.half{
  background-color:#f2eb24;
}

.calendar {
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}

.day {
  padding: 10px;
}

.dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: #fff;
}

.date {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 16px;
}

.booked {
  background-color: #f44336; /* Red color for booked dates */
  color: #fff;
}

.free {
  background-color: #4caf50; /* Green color for available dates */
  color: #fff;
}

      .border-btm{
        border: solid black;
        border-width:0px;
        border-bottom-width:1pt;
        border-color:black;
        padding-bottom:10px;
        padding-top:5px;
        font-size:18px;
      }
      .cont3{
        width:100%;
      }
      .pad{
        padding-top:10px;
      }

      .pad-top{
          margin-top:-17px;
          font-size:12px;
          color:grey;
      }
      .cust-link{
        color:green;
        text-decoration:none;
      }
      .right{
        padding-top:20px;
        display:flex;
        justify-content:right;
      }
      .title{
        padding-top:10px;
        font-size:28px;
      }
      .rating{
          background-color:green;
          width:70px;
          height:40px;
          border-width:0px;
          border-radius:5px;
          color:white;
          font-style: bold;
      }
    .venue-img{
        width:700px;
        height:500px;
        padding-top:40px;
    }
    .venue{
        padding-top:40px;
        padding-left:110px;
    }
    .price{
        padding:10px;
        background-color:#f0f0f0;
        width:600px;
    }
    .cont{
      position:absolute;
      background-color:#f9f9f9;
      margin-top:450px;
      margin-left:20px;
      width:660px;
      height:200px;
      border-radius:2px;
    }
    .cont .btn{
      border-radius:0px;
      width:100%;
      text-align:center;
      background-color:#f0f0f0;
      border-width:0px;
      color:black;
      border-right-width:1pt;
      border-color:gray;
    }
    .btn-no-border{
      border-radius:0px;
      width:100%;
      text-align:center;
      background-color:#f0f0f0;
      border-width:0px;
      color:black;
      border-right-width:0pt;
      border-color:gray;
      height:36px;
    }
    .cont2{
      width:100%;
      padding:0px;
      position:absolute;
      bottom:0px;
      left:0;
    }
    
`
export default Venue
