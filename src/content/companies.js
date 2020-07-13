import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ucsc_logo from '../assets/images/ucsc_logo.jpeg'



function Companies(){
    return (
        <div className="admin-content">
            <div className="companies">

                <div class="card-deck" style={{color:'#bdc3c7', padding:'50px 10px'}}>
                    <div class="card " style={{height:'5em', boxShadow:'5px 5px 2px #ffd32a'}}>
                        <div class="card-body" style={{textAlign:'justify', color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{ fontSize:'20px'}}>Approved Companies&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'12'}</p>
                        </div>
                    </div>
                    <div class="card " style={{height:'5em', boxShadow:'5px 5px 2px #05c46b'}}>
                        <div class="card-body" style={{ color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{ fontSize:'20px'}}>Pending to Be Approved&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'5'}</p>
                        </div>
                    </div>
                    <div class="card " style={{ height:'5em', boxShadow:'5px 5px 2px #d63031'}}>
                        <div class="card-body" style={{color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{ fontSize:'20px'}}>Blacklisted Companies&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'2'}</p>
                        </div>
                    </div>
                </div>
{/* ---------------------------------------------- search bar start---------------------------------------------------- */}
                    <form class=" search-bar" action="action_page.php">
                        <i class="material-icons inline" style={{position:'absolute', margin:'0.6em 32em'}}>search</i>
                        <input type="text" placeholder="Search.." name="search"></input>
                    </form>
{/* -------------------------------------------------search bar end----------------------------------------------------- */}
{/* -------------------------------------------cards row colum start---------------------------------------- */}
                <div class="container justify-content-around">
                <div class="d-flex align-items-start flex-row">
                    <div class="card " style={{ height:'20rem',width:'24em', margin:'2.5em 1.5em'}}>
                        <div class="card-body">
                        {/* <img className="compnay-logo" src={ucsc_logo} alt="ucsc_logo"/> */}
                            <h3 class="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" class="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                    <div class="card " style={{ height:'20rem',width:'24em', margin:'2.5em 9em'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'30px'}}>
                            <span class="material-icons">corporate_fare</span>Company Name</h3>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" class="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-start flex-row">
                    <div class="card " style={{ height:'20rem',width:'24em', margin:'2.5em 1.5em'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'30px'}}>
                            <span class="material-icons">corporate_fare</span>Company Name</h3>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" class="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                    <div class="card " style={{ height:'20rem',width:'24em', margin:'2.5em 9em'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'30px'}}>
                            <span class="material-icons">corporate_fare</span>Company Name</h3>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" class="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                </div><div class="d-flex align-items-start flex-row">
                    <div class="card " style={{ height:'20rem',width:'24em', margin:'2.5em 1.5em'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'30px'}}>
                            <span class="material-icons">corporate_fare</span> Company Name</h3>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" class="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                    <div class="card " style={{ height:'20rem',width:'24em', margin:'2.5em 9em'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'30px'}}>
                            <span class="material-icons">corporate_fare</span>Company Name</h3>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" class="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                </div>
                </div>
{/* -------------------------------------------cards end-------------------------------- */}
            </div>
        </div>
    )
}

export default Companies;