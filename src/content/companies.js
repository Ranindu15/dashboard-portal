import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Companies(){
    return (
        <div className="admin-content">
            <div className="companies">
                <div class="card-deck" style={{color:'#bdc3c7', padding:'10px 10px'}}>
                    <div class="card " style={{height:'10rem', boxShadow:'5px 5px 2px #ffd32a'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'50px'}}>12</h3>
                            <div style={{marginTop:'1em', color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>New Companies</p></div>
                        </div>
                    </div>
                    <div class="card " style={{height:'10rem', boxShadow:'5px 5px 2px #05c46b'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'50px'}}>12</h3>
                            <div style={{marginTop:'1em', color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>Approved Companies</p></div>
                        </div>
                    </div>
                    <div class="card " style={{height:'10rem', boxShadow:'5px 5px 2px #2d3436'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'50px'}}>12</h3>
                            <div style={{marginTop:'1em', color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>Decline Companies</p></div>
                        </div>
                    </div>
                    <div class="card " style={{ height:'10rem', boxShadow:'5px 5px 2px #d63031'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{fontSize:'50px'}}>12</h3>
                            <div style={{marginTop:'1em', color:'#1e272e'}}>
                            <span class="material-icons">corporate_fare</span>
                            <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>BlackListed Companies</p></div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-start flex-row">
                <div class="container-start" style={{padding:'30px 10px', width:'80em' }}>
                    <table class="table table-hover" style={{width:'60em', backgroundColor:'#ffffff'}}>
                    <caption style={{captionSide:'top', fontSize:'1.5em'}}><span class="material-icons" style={{verticalAlign:'middle'}}>launch</span>&nbsp; Recent Companies</caption>
                        <thead>
                        <tr>
                            <th > # </th>
                            <th><span class="material-icons" style={{verticalAlign:'middle'}}>business</span>&nbsp;Company Name</th>
                            <th><span class="material-icons" style={{verticalAlign:'middle'}}>email</span> Email</th>
                            <th><span class="material-icons" style={{verticalAlign:'middle'}}>build</span>&nbsp;Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{height:'1em'}}>
                            <td><input type="checkbox" name="name1" /></td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        <tr>
                        <td><input type="checkbox" name="name1" /></td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td><button className="companyview-btn">View</button>&nbsp;<button className="companydel-btn">Delete</button>
                            &nbsp;<button className="companymsg-btn">Message</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                        <div class="card " style={{ height:'20rem',width:'24em', margin:'5.5em 1.5em'}}>
                            <div class="card-body">
                                <h3 class="card-title" style={{fontSize:'50px'}}>
                                <span class="material-icons">corporate_fare</span>Total Companies</h3>
                                <p class="card-text" style={{fontFamily:'sans-serif', fontSize:'23px'}}>25</p><hr/>
                                    <button type="button" class="btn btn-secondary">Send Message</button>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default Companies;