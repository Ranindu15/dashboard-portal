import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import ucsc_logo from '../assets/images/ucsc_logo.jpeg'



export default function Companies(){
    return (
        <div className="admin-content">
            <div className="companies">
{/* ------------------------------------ tab start------------------------------------- */}
                <BrowserRouter>
                <div>
                    <div>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/companies">Registered Companies</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/pending">Pending to be Approved</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/blacklisted">BlackListed Companies</Link></button>
                    </div>
                    <hr />
                    <Switch>
                        {/* <Route exact path="/approved"> <Registered /> </Route> */}
                        <Route path="/pending"> <Pending /> </Route>
                        <Route path="/blacklisted"><BlackListed/></Route>
                    </Switch>
                </div>
                </BrowserRouter>
{/* ------------------------------------ tab end------------------------------------- */}
{/* ---------------------------------------------- search bar start---------------------------------------------------- */}
                    <form className=" search-bar" action="action_page.php">
                        <i className="material-icons inline" style={{position:'absolute', margin:'0.6em 32em'}}>search</i>
                        <input type="text" placeholder="Search.." name="search"></input>
                    </form>
{/* -------------------------------------------------search bar end----------------------------------------------------- */}
{/* ----------------------------------------- Alphebetical tabs start ---------------------------------------- */}
<div className="container001">
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="# " aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="# ">A</a></li>
    <li class="page-item"><a class="page-link" href="# ">B</a></li>
    <li class="page-item"><a class="page-link" href="# ">C</a></li>
    <li class="page-item"><a class="page-link" href="# ">D</a></li>
    <li class="page-item"><a class="page-link" href="# ">E</a></li>
    <li class="page-item"><a class="page-link" href="# ">F</a></li>
    <li class="page-item"><a class="page-link" href="# ">G</a></li>
    <li class="page-item"><a class="page-link" href="# ">H</a></li>
    <li class="page-item"><a class="page-link" href="# ">I</a></li>
    <li class="page-item"><a class="page-link" href="# ">J</a></li>
    <li class="page-item"><a class="page-link" href="# ">K</a></li>
    <li class="page-item"><a class="page-link" href="# ">L</a></li>
    <li class="page-item"><a class="page-link" href="# ">M</a></li>
    <li class="page-item"><a class="page-link" href="# ">N</a></li>
    <li class="page-item"><a class="page-link" href="# ">O</a></li>
    <li class="page-item"><a class="page-link" href="# ">P</a></li>
    <li class="page-item"><a class="page-link" href="# ">Q</a></li>
    <li class="page-item"><a class="page-link" href="# ">R</a></li>
    <li class="page-item"><a class="page-link" href="# ">S</a></li>
    <li class="page-item"><a class="page-link" href="# ">T</a></li>
    <li class="page-item"><a class="page-link" href="# ">u</a></li>
    <li class="page-item"><a class="page-link" href="# ">V</a></li>
    <li class="page-item"><a class="page-link" href="# ">W</a></li>
    <li class="page-item"><a class="page-link" href="# ">X</a></li>
    <li class="page-item"><a class="page-link" href="# ">Y</a></li>
    <li class="page-item"><a class="page-link" href="# ">Z</a></li>
    <li class="page-item">
      <a class="page-link" href="# " aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
{/* ----------------------------------------- Alphebetical tabs end ----------------------------------------------- */}
{/* -------------------------------------------cards row colum start---------------------------------------- */}
                <div className="container justify-content-around">
                <div className="d-flex align-items-start flex-row">
                    <div className="card " style={{ height:'20rem',width:'24em', margin:'2.5em 1.5em'}}>
                        <div className="card-body">
                            <img className="sidebar-logo" src={ucsc_logo} alt="ucsc_logo"/>
                            <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                            <p className="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" className="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                    <div className="card " style={{ height:'20rem',width:'24em', margin:'2.5em 9em'}}>
                        <div className="card-body">
                            <h3 className="card-title" style={{fontSize:'30px'}}>
                            <span className="material-icons">corporate_fare</span>Company Name</h3>
                            <p className="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" className="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-start flex-row">
                    <div className="card " style={{ height:'20rem',width:'24em', margin:'2.5em 1.5em'}}>
                        <div className="card-body">
                            <img className="sidebar-logo" src={ucsc_logo} alt="ucsc_logo"/>
                            <h3 className="card-title" style={{fontSize:'30px'}}>
                            <span className="material-icons">corporate_fare</span> Company Name</h3>
                            <p className="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" className="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                    <div className="card " style={{ height:'20rem',width:'24em', margin:'2.5em 9em'}}>
                        <div className="card-body">
                            <h3 className="card-title" style={{fontSize:'30px'}}>
                            <span className="material-icons">corporate_fare</span>Company Name</h3>
                            <p className="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                            <button type="button" className="btn btn-secondary">Send Message</button>
                        </div>
                    </div>
                </div>
                </div>
{/* -------------------------------------------cards end-------------------------------- */}
            </div>
        </div>
    )
}

// export default Companies;

// function Registered() {
//     return (
//       <div>
//         <h2>Registered companies</h2>
//       </div>
//     );
//   }
  function Pending() {
    return (
      <div>
        <h2>Pending to be</h2>
      </div>
    );
  }
  function BlackListed() {
    return (
      <div>
        <h2>Black Listed compnaies</h2>
      </div>
    );
  }