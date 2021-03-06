import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import ucsc_logo from '../assets/images/red.jpg'
import { Modal, Button, Dropdown } from 'react-bootstrap';

import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'

export default class RegisteredCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            com_names:[],
            error: null,
            search_field:'',
            show: false,
            hideDefult: false,
            hideFilter: true,
            alphabet:'',
        }
    }

    async componentDidMount(){
        this.setState({isLoding: true})
        const resonse = await fetch('Http://localhost:5000/company/getAll')
        const com_name = await resonse.json()
        for (let index = 0; index < com_name.length; index++) {
            if(com_name[index].is_approved === true){
                this.setState({com_names: com_name})
            }
            console.log('index is :' ,index);  
        } 
    }

    searchFunc = (e) => {
        this.setState({search_field: e.target.value});
    }
    handlePageClick = (e) => {
        this.setState({alphabet: e.target.value, hideDefult: true, hideFilter:false})
    }
    render() {
        const {com_names ,alphabet, search_field} = this.state
        const filter_companie = com_names.filter(company => (
            company.comp_name.toLowerCase().includes(search_field.toLowerCase()) //name should replace comp_name
        ))
        const filter_compani = com_names.filter(company => (company.name.charAt(0).toLowerCase()=== alphabet.toLowerCase() )) 
        return (
            <div>
            <Navbar/>
            <SideBar/>
            {/* <Content/> */}
            <div className="admin-content">
            <div className="companies">
                <div>
                    <button className="compnaytab"><Link style={{color:'black'}} to="/registeredcom" >Registered Companies</Link></button>
                    <button className="compnaytab"><Link style={{color:'black'}} to="/pendingcom">Pending to be Approved</Link></button>
                    <button className="compnaytab"><Link style={{color:'black'}} to="/blacklistedcom">BlackListed Companies</Link></button>
                </div>
                <form className=" search-bar"   >
                    <i className="material-icons inline" style={{position:'absolute', margin:'0.6em 32em'}}>search</i>
                    <input type="text" onChange={this.searchFunc}  placeholder="Search.." name="search"></input>
                </form>
                <div className="containerAlph">
                    <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="# " aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(65)} onClick={this.handlePageClick} >A</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(66)} onClick={this.handlePageClick} >B</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(67)} onClick={this.handlePageClick} >C</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(68)} onClick={this.handlePageClick} >D</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(69)} onClick={this.handlePageClick} >E</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(70)} onClick={this.handlePageClick} >F</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(71)} onClick={this.handlePageClick} >G</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(72)} onClick={this.handlePageClick} >H</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(73)} onClick={this.handlePageClick} >I</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(74)} onClick={this.handlePageClick} >J</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(75)} onClick={this.handlePageClick} >K</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(76)} onClick={this.handlePageClick} >L</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(77)} onClick={this.handlePageClick} >M</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(78)} onClick={this.handlePageClick} >N</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(79)} onClick={this.handlePageClick} >O</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(80)} onClick={this.handlePageClick} >P</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(81)} onClick={this.handlePageClick} >Q</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(82)} onClick={this.handlePageClick} >R</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(83)} onClick={this.handlePageClick} >S</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(84)} onClick={this.handlePageClick} >T</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(85)} onClick={this.handlePageClick} >U</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(86)} onClick={this.handlePageClick} >V</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(87)} onClick={this.handlePageClick} >W</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(88)} onClick={this.handlePageClick} >X</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(89)} onClick={this.handlePageClick} >Y</button></li>
                        <li className="page-item"><button className="page-link" value={String.fromCharCode(90)} onClick={this.handlePageClick} >Z</button></li>
                        <li className="page-item">
                        <a className="page-link" href="# " aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
            
            {filter_companie && filter_companie.map((company_data, index) => {
                return(
                    <div hidden={this.state.hideDefult} key={index} className="container">
                        <div className="cards">
                            <div className="card" style={{margin: '5px 5px'}}>
                                <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                                <div className="card-body " style={{marginLeft:' 10em'}}>
                                    <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>{company_data.comp_name}</h3>
                                    <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{company_data.contact_number}</p>
                                    <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact register Name:&ensp;{ 'James anderson example'}</p>
                                    <p className="card-title" style={{position:'relative', fontSize:'15px'}}>E-Mail :&ensp;{company_data.email}</p>
                                    <div style={{position:'relative'}}><hr/>
                                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                                        <button type="button" className="btn btn-secondary" onClick={()=> this.setState({show: true})} >View More...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal show={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
                                    <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                                    <Modal.Header >
                                        <Modal.Title style={{marginLeft:'10em'}} id="contained-modal-title-vcenter">{company_data.comp_name}</Modal.Title>
                                        <Dropdown >
                                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Block Company</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Modal.Header>
                                    <Modal.Body style={{paddingLeft:'12em'}}>
                                        <p>
                                        {company_data.description}
                                        </p>
                                        <a href="# " >{company_data.comp_website}</a>
                                        <p>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                            consectetur ac, vestibulum at eros.
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button >Send Message</Button>
                                        <Button onClick={()=> this.setState({show: false})}>Cancel</Button>
                                    </Modal.Footer>
                                    </Modal>
                    </div>
                );
            })}
             {filter_compani && filter_compani.map((company_data, index) => {
                return(
                    <div hidden={this.state.hideFilter} key={index} className="container">
                        <div className="cards">
                            <div className="card" style={{margin: '5px 5px'}}>
                                <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                                <div className="card-body " style={{marginLeft:' 10em'}}>
                                    <h3 className="card-title" style={{position:'relative', fontSize:'30px'}}>{company_data.comp_name}</h3>
                                    <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact Number :&ensp;{company_data.contact_number}</p>
                                    <p className="card-title" style={{position:'relative', fontSize:'15px'}}>Contact register Name:&ensp;{ 'James anderson example'}</p>
                                    <p className="card-title" style={{position:'relative', fontSize:'15px'}}>E-Mail :&ensp;{company_data.email}</p>
                                    <div style={{position:'relative'}}><hr/>
                                        <button type="button" className="btn btn-secondary">Send Message</button>&emsp;&emsp;
                                        <button type="button" className="btn btn-secondary" onClick={()=> this.setState({show: true})}>View More...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal show={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
                                    <img className="company-logo" src={ucsc_logo} alt="ucsc_logo"/>
                                    <Modal.Header >
                                        <Modal.Title style={{marginLeft:'10em'}} id="contained-modal-title-vcenter">{company_data.comp_name}</Modal.Title>
                                        <Dropdown >
                                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Block Company</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Modal.Header>
                                    <Modal.Body style={{paddingLeft:'12em'}}>
                                        <p>
                                        {company_data.description}
                                        </p>
                                        <a href="# " >{company_data.comp_website}</a>
                                        <p>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                            consectetur ac, vestibulum at eros.
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button >Send Message</Button>
                                        <Button onClick={()=> this.setState({show: false})}>Cancel</Button>
                                    </Modal.Footer>
                                    </Modal>
                    </div>
                );
            })}
            </div>
            </div>
            </div>
        )
    }
}
