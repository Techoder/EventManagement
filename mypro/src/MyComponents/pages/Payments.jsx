import React from 'react'
import styled from 'styled-components'
const Tab = () => {
  return (
    <Wrapper>
      <div className='top-container'>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link " data-bs-toggle="tab" href="#credit" aria-selected="true" role="tab">Credit card</a>
          </li>

          <li className="nav-item" role="presentation">
            <a className="nav-link " data-bs-toggle="tab" href="#home" aria-selected="true" role="tab">Debit Card</a>
          </li>

          <li className="nav-item" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" href="#profile" aria-selected="false" role="tab" tabIndex="-1">UPI</a>
          </li>
          {/* <li className="nav-item" role="presentation">
    <a className="nav-link" data-bs-toggle="tab" href="#profile" aria-selected="false" role="tab" tabIndex="-1">Profile</a>
  </li> */}

        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show" id="credit" role="tabpanel">

            <h2>Credit Card Checkout</h2>

            <div className="row">
              <div className="col-75">
                <div className="container">

                  <div className="row">
                    <div className="col-50">
                      <h3>Billing Address</h3>
                      <label forhtml="fname"><i className="fa fa-user"></i> Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Enter Full Name" />
                      <label forhtml="email"><i className="fa fa-envelope"></i> Email</label>
                      <input type="text" id="email" name="email" placeholder="Enter Email Address" />
                      <div className="row">
                        <div className="col-50">
                          <label forhtml="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" placeholder="2025" />
                        </div>
                        <div className="col-50">
                          <label forhtml="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" placeholder="352" />
                        </div>
                      </div>


                    </div>

                    <div className="col-50">
                      <h3>Payment</h3>

                      <label forhtml="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                      <label forhtml="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                      <label forhtml="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                    </div>



                    <input type="submit" value="Continue to checkout" className="btn" />
                  </div>
                </div>
              </div>
              <div className="col-25">
                <div className="container">
                  <h4>Cart <span className="price" ><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                  <p><a href="#">Product 1</a> <span className="price">$15</span></p>
                  <p><a href="#">Product 2</a> <span className="price">$5</span></p>
                  <p><a href="#">Product 3</a> <span className="price">$8</span></p>
                  <p><a href="#">Product 4</a> <span className="price">$2</span></p>
                  <p>Total <span className="price"><b>$30</b></span></p>
                </div>
              </div>
            </div>

          </div>





          <div className="tab-pane fade show" id="home" role="tabpanel">
            <h2>Debit Card Checkout</h2>

            <div className="row">
              <div className="col-75">
                <div className="container">

                  <div className="row">
                    <div className="col-50">
                      <h3>Billing Address</h3>
                      <label forhtml="fname"><i className="fa fa-user"></i> Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Enter Full Name" />
                      <label forhtml="email"><i className="fa fa-envelope"></i> Email</label>
                      <input type="text" id="email" name="email" placeholder="Enter Email Address" />
                      <div className="row">
                        <div className="col-50">
                          <label forhtml="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" placeholder="2025" />
                        </div>
                        <div className="col-50">
                          <label forhtml="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" placeholder="352" />
                        </div>
                      </div>


                    </div>

                    <div className="col-50">
                      <h3>Payment</h3>

                      <label forhtml="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                      <label forhtml="ccnum">Debit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                      <label forhtml="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                    </div>



                    <input type="submit" value="Continue to checkout" className="btn" />
                  </div>
                </div>
              </div>
              <div className="col-25">
                <div className="container">
                  <h4>Cart <span className="price" ><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                  <p><a href="#">Product 1</a> <span className="price">$15</span></p>
                  <p><a href="#">Product 2</a> <span className="price">$5</span></p>
                  <p><a href="#">Product 3</a> <span className="price">$8</span></p>
                  <p><a href="#">Product 4</a> <span className="price">$2</span></p>
                  <p>Total <span className="price"><b>$30</b></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel">
            <h2>UPI Checkout</h2>
            <div className="row">
              <div className="col-75">
                <div className="container">
                  <form action="/action_page.php">
                    <div className="row">
                      <div className="col-50">
                        <h3>Billing Address</h3>
                        <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                        
                      </div>
                      <div className="col-50">
                        <h3>Payment</h3>
                        <label htmlFor="upiId">UPI ID</label>
                        <input type="text" id="upiId" name="upiId" placeholder="john@example" />
                      </div>
                    </div>
                    
                    <input type="submit" value="Continue to checkout" className="btn" />
                  </form>
                </div>
              </div>
              <div className="col-25">
                <div className="container">
                  <h4>Cart <span className="price"><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                  <p><a href="#">Product 1</a> <span className="price">$15</span></p>
                  <p><a href="#">Product 2</a> <span className="price">$5</span></p>
                  <p><a href="#">Product 3</a> <span className="price">$8</span></p>
                  <p><a href="#">Product 4</a> <span className="price">$2</span></p>
                  <p>Total <span className="price"><b>$30</b></span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.top-container{
  padding:120px 40px 80px;
 
}

body {
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
  }
  
  .col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
  }
  
  .col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }
  
  .col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }
  
  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }
  
  .container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }
  
  input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  label {
    margin-bottom: 10px;
    display: block;
  }
  
  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }
  
  .btn {
    background-color: #e61041;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }
  
  .btn:hover {
    background-color: #c30733;
  }
  
  a {
    color: #2196F3;
  }
  
  hr {
    border: 1px solid lightgrey;
  }
  
  span.price {
    float: right;
    color: grey;
  }
  
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-25 {
      margin-bottom: 20px;
    }
  }
`
export default Tab
