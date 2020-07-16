import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import ucsc_logo from '../assets/images/red.jpg'
import { Modal, Button, Dropdown } from 'react-bootstrap';




export default function Companies(){
    return (
      <BrowserRouter>
        <div className="admin-content">
          <div className="companies">
                    <div>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/registered">Registered Companies</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/pending">Pending to be Approved</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/blacklisted">BlackListed Companies</Link></button>
                    </div>
                    <hr />
                    <Switch>
                        <Route path="/registered"><Registered/></Route>
                        <Route path="/pending"> <Pending/></Route>
                        <Route path="/blacklisted"><BlackListed/></Route>
                    </Switch>
          {/* <Registered/> */}
           </div>
        </div>
      </BrowserRouter>
    )
}

function Registered() {
  const [modalShow, setModalShow] = React.useState(false);
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
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="# " aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="# ">A</a></li>
            <li className="page-item"><a className="page-link" href="# ">B</a></li>
            <li className="page-item"><a className="page-link" href="# ">C</a></li>
            <li className="page-item"><a className="page-link" href="# ">D</a></li>
            <li className="page-item"><a className="page-link" href="# ">E</a></li>
            <li className="page-item"><a className="page-link" href="# ">F</a></li>
            <li className="page-item"><a className="page-link" href="# ">G</a></li>
            <li className="page-item"><a className="page-link" href="# ">H</a></li>
            <li className="page-item"><a className="page-link" href="# ">I</a></li>
            <li className="page-item"><a className="page-link" href="# ">J</a></li>
            <li className="page-item"><a className="page-link" href="# ">K</a></li>
            <li className="page-item"><a className="page-link" href="# ">L</a></li>
            <li className="page-item"><a className="page-link" href="# ">M</a></li>
            <li className="page-item"><a className="page-link" href="# ">N</a></li>
            <li className="page-item"><a className="page-link" href="# ">O</a></li>
            <li className="page-item"><a className="page-link" href="# ">P</a></li>
            <li className="page-item"><a className="page-link" href="# ">Q</a></li>
            <li className="page-item"><a className="page-link" href="# ">R</a></li>
            <li className="page-item"><a className="page-link" href="# ">S</a></li>
            <li className="page-item"><a className="page-link" href="# ">T</a></li>
            <li className="page-item"><a className="page-link" href="# ">u</a></li>
            <li className="page-item"><a className="page-link" href="# ">V</a></li>
            <li className="page-item"><a className="page-link" href="# ">W</a></li>
            <li className="page-item"><a className="page-link" href="# ">X</a></li>
            <li className="page-item"><a className="page-link" href="# ">Y</a></li>
            <li className="page-item"><a className="page-link" href="# ">Z</a></li>
            <li className="page-item">
              <a className="page-link" href="# " aria-label="Next">
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
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>E-Mail :&ensp;{'abc@gmail.com'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary" onClick={()=> setModalShow(true)}>View More...</button>
                        
                      </div>
                    </div>
              </div>
              <div className="card" style={{ height:'17rem',width:'45em', margin:'2.5em 1.5em'}}>
                      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                    <div className="card-body " style={{marginLeft:' 10em'}}>
                      <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>Company Name</h3>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{'0768023432'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Person Name:&ensp;{ 'James anderson example'}</p>
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>E-Mail :&ensp;{'abc@gmail.com'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary" onClick={()=> setModalShow(true)}>View More...</button>
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
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>E-Mail :&ensp;{'abc@gmail.com'}</p>
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
                      <p className="card-title" style={{position:'relative', fontSize:'15px'}}>E-Mail :&ensp;{'abc@gmail.com'}</p>
                      <div style={{position:'absolute'}}><hr/>
                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                        <button type="button" className="btn btn-secondary">View More...</button>
                      </div>
                    </div>
              </div>
          </div>
      </div>
{/* -------------------------------------------cards end-------------------------------- */}

{/* --------------------------------- Popup Profile call ---------------------------- */}
        <Profile show={modalShow} onHide={() => setModalShow(false)} />
{/* --------------------------------- Popup Profile call end ---------------------------- */}

    </div>
  );
}


function Profile(props){

  return(
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
      <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
      <Modal.Header >
        <Modal.Title style={{marginLeft:'10em'}} id="contained-modal-title-vcenter">Company Name</Modal.Title>
          <Dropdown >
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Modal.Header>
      <Modal.Body style={{paddingLeft:'12em'}}>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
          <a href="# " >{'www.company.com'}</a>
          <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Send Message</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
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
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="# " aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="# ">A</a></li>
            <li className="page-item"><a className="page-link" href="# ">B</a></li>
            <li className="page-item"><a className="page-link" href="# ">C</a></li>
            <li className="page-item"><a className="page-link" href="# ">D</a></li>
            <li className="page-item"><a className="page-link" href="# ">E</a></li>
            <li className="page-item"><a className="page-link" href="# ">F</a></li>
            <li className="page-item"><a className="page-link" href="# ">G</a></li>
            <li className="page-item"><a className="page-link" href="# ">H</a></li>
            <li className="page-item"><a className="page-link" href="# ">I</a></li>
            <li className="page-item"><a className="page-link" href="# ">J</a></li>
            <li className="page-item"><a className="page-link" href="# ">K</a></li>
            <li className="page-item"><a className="page-link" href="# ">L</a></li>
            <li className="page-item"><a className="page-link" href="# ">M</a></li>
            <li className="page-item"><a className="page-link" href="# ">N</a></li>
            <li className="page-item"><a className="page-link" href="# ">O</a></li>
            <li className="page-item"><a className="page-link" href="# ">P</a></li>
            <li className="page-item"><a className="page-link" href="# ">Q</a></li>
            <li className="page-item"><a className="page-link" href="# ">R</a></li>
            <li className="page-item"><a className="page-link" href="# ">S</a></li>
            <li className="page-item"><a className="page-link" href="# ">T</a></li>
            <li className="page-item"><a className="page-link" href="# ">u</a></li>
            <li className="page-item"><a className="page-link" href="# ">V</a></li>
            <li className="page-item"><a className="page-link" href="# ">W</a></li>
            <li className="page-item"><a className="page-link" href="# ">X</a></li>
            <li className="page-item"><a className="page-link" href="# ">Y</a></li>
            <li className="page-item"><a className="page-link" href="# ">Z</a></li>
            <li className="page-item">
              <a className="page-link" href="# " aria-label="Next">
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
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="# " aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="# ">A</a></li>
            <li className="page-item"><a className="page-link" href="# ">B</a></li>
            <li className="page-item"><a className="page-link" href="# ">C</a></li>
            <li className="page-item"><a className="page-link" href="# ">D</a></li>
            <li className="page-item"><a className="page-link" href="# ">E</a></li>
            <li className="page-item"><a className="page-link" href="# ">F</a></li>
            <li className="page-item"><a className="page-link" href="# ">G</a></li>
            <li className="page-item"><a className="page-link" href="# ">H</a></li>
            <li className="page-item"><a className="page-link" href="# ">I</a></li>
            <li className="page-item"><a className="page-link" href="# ">J</a></li>
            <li className="page-item"><a className="page-link" href="# ">K</a></li>
            <li className="page-item"><a className="page-link" href="# ">L</a></li>
            <li className="page-item"><a className="page-link" href="# ">M</a></li>
            <li className="page-item"><a className="page-link" href="# ">N</a></li>
            <li className="page-item"><a className="page-link" href="# ">O</a></li>
            <li className="page-item"><a className="page-link" href="# ">P</a></li>
            <li className="page-item"><a className="page-link" href="# ">Q</a></li>
            <li className="page-item"><a className="page-link" href="# ">R</a></li>
            <li className="page-item"><a className="page-link" href="# ">S</a></li>
            <li className="page-item"><a className="page-link" href="# ">T</a></li>
            <li className="page-item"><a className="page-link" href="# ">u</a></li>
            <li className="page-item"><a className="page-link" href="# ">V</a></li>
            <li className="page-item"><a className="page-link" href="# ">W</a></li>
            <li className="page-item"><a className="page-link" href="# ">X</a></li>
            <li className="page-item"><a className="page-link" href="# ">Y</a></li>
            <li className="page-item"><a className="page-link" href="# ">Z</a></li>
            <li className="page-item">
              <a className="page-link" href="# " aria-label="Next">
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

