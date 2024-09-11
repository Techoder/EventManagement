import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Packages() {
    const navigate = useNavigate(); 
    var get_login = localStorage.getItem("login");
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
        );
        const handleLogin = async event => {
          
            if(get_login!="successful"){
                await delay(2000);
                navigate("/Login");
            }
          
          };
          handleLogin();
    const [data, setData] = useState([]);
    const { category, name } = useParams();

    const collectData = async () => {
        try {
            const response = await fetch('http://localhost:4000/packages', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [pname, setPackage] = useState("");
    const [venue_name, setVenue] = useState("");

    const sendData = async () => {
        try {
            const response = await fetch('http://localhost:4000/createpackage', {
                method: 'post',
                body: JSON.stringify({ pname, venue_name }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('API response not okay:', response.status);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addtopack = async () => {
        var id = event.target.id;
        if (name !== "General") {
            try {
                const response = await fetch('http://localhost:4000/addtopack', {
                    method: 'post',
                    body: JSON.stringify({ name, id, category }),
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                } else {
                    console.error('API response not okay:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };
    const checkPack = async () => {
            try {
                const response = await fetch('http://localhost:4000/checkpack', {
                    method: 'post',
                    body: JSON.stringify({ pname}),
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    var len = data["length"];
                    if(len==0){
                        sendData();
                    }
                    console.log(len);
                } else {
                    console.error('API response not okay:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    useEffect(() => {
        collectData();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalSaveChanges = () => {
        checkPack();
       
        closeModal();
    };

    return (
        <Wrapper>
            <div className='super-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <center><h1>Packages</h1></center>
                        </div>
                    </div>
                    <div className='row'>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" data-bs-toggle="tab" href="#packages" aria-selected="true" role="tab">Your Packages</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#create" aria-selected="false" role="tab">Create Package</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade active show" id="packages" role="tabpanel">
                                {data.map((curElem) => {
                                    const img = "venues/" + curElem.pid + ".jpg";
                                    return (
                                        <div className="container cust-cont" key={curElem.pid}>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'><h4>Package Name</h4></div>
                                                        <div className='col-md-6'><h4>Venue Name</h4></div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>{curElem.pname}</div>
                                                        <div className='col-md-6'>{curElem.venue_name}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 view-btn-cont">
                                                    <NavLink to={`/Package/${curElem.pname}`}><div className='col-md-4'><button className='btn btn-primary view-btn'>View More</button></div></NavLink>
                                                </div>
                                                <div className="col-md-3 add-to-pkg-cont">
                                                    <NavLink to={`/Package/${curElem.pname}`}><div className='col-md-4'><button className='btn btn-primary add-to-pkg-btn' id={curElem.pid} onClick={addtopack}>Add to Package</button></div></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="tab-pane fade" id="create" role="tabpanel">
                                <br />
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="add-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Create+
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="row">
                                                    <h3>Package Details</h3>
                                                    <div className="col-md-6">
                                                        <div className='row'>
                                                            <div className='col-md-4'>Package Name:</div>
                                                            <div className='col-md-8'>
                                                                <input type="text" className="form-control" placeholder="Enter Package Name" id="inputDefault" value={pname} onChange={(e) => setPackage(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='row'>
                                                            <div className='col-md-4'>Venue Name:</div>
                                                            <div className='col-md-8'>
                                                                <input type="text" className="form-control" placeholder="Enter Venue Name" id="inputDefault" value={venue_name} onChange={(e) => setVenue(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <button className='btn btn-primary create-btn' onClick={openModal}>Create</button>
                                                        <div className={`modal mod fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title">Confirm Package</h5>
                                                                        <button
                                                                            type="button"
                                                                            className="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"
                                                                            onClick={closeModal}
                                                                        >
                                                                            <span aria-hidden="true"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <p>Are You Sure you want to create a Package Named {pname}</p>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button className="btn btn-primary" onClick={handleModalSaveChanges}>
                                                                            Save changes
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-secondary"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={closeModal}
                                                                        >
                                                                            Close
                                                                        </button>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
.mod{
    position:absolute;
    float:center;   
    margin-top:200px;
    z-index:3;
}
.super-cont{
    padding-top:90px;   
    padding-bottom:90px;
}
.add-btn{
    padding-left:600px;
    font-size:30px;
}
.cust-cont{
    margin-top:20px;
    margin-left:50px;
    background-color:#f5f5f5;
    width:90%;
    height:fit-content;
    padding:30px;
    border-radius:10px;
}
.view-btn-cont{
    padding-left:200px;
}
.view-btn{
    width:100px;
    white-space: nowrap;
    background-color:#e61041;
    border-width:0;
}
.view-btn:hover{
    background-color:#c30733;
}
.create-btn{
    width:100px;
    margin-top:10px;
    float:right;
}
.add-to-pkg-btn{
    white-space: nowrap;
    background-color:#e61041;
    border-width:0;
}
.add-to-pkg-cont{
    padding-left:30px;
}
.add-to-pkg-btn:hover{
    background-color:#c30733;
}
`;

export default Packages;
