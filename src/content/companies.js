import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import ucsc_logo from '../assets/images/red.jpg'



export default function Companies(){
    return (
      <BrowserRouter>
        <div className="admin-content">
          <div className="companies">
{/* ------------------------------------ tab start------------------------------------- */}               
                    <div>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/Registered">Registered Companies</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/pending">Pending to be Approved</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/blacklisted">BlackListed Companies</Link></button>
                    </div>
                    <hr />
                    <Switch>
                        <Route path="/Registered"><Registered/></Route>
                        <Route path="/pending"> <Pending/></Route>
                        <Route path="/blacklisted"><BlackListed/></Route>
                    </Switch>
{/* ------------------------------------ tab end------------------------------------- */}



        </div>
      </div>
    </BrowserRouter>
    )
}

function Registered() {
  return (
    <div>
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
        <div className="container w-100" >
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
      </div>           
{/* -------------------------------------------cards end-------------------------------- */}
</div>


  );
}
 function Pending() {
  return (
    <div>
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
        <div className="container w-100" >
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
      </div>           
{/* -------------------------------------------cards end-------------------------------- */}
</div>
  );
}
 function BlackListed() {
  return (
    <div>
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
        <div className="container w-100" >
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
          <div className="d-flex align-items-start flex-row">
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
      </div>           
{/* -------------------------------------------cards end-------------------------------- */}
</div>
  );
}