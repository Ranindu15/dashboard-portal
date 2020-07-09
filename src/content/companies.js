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

                <div class="container-start" style={{padding:'30px 10px' }}>
                <table class="table table-hover" style={{width:'60em', backgroundColor:'#ffff'}}>
                    <thead>
                    <tr>
                        <th style={{width:'5em'}}> Logo</th>
                        <th style={{width:'20em'}}>Company Name</th>
                        <th style={{width:'20em'}}>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <button className="companyview-btn">View</button> <button className="companydel-btn">Delete</button>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                        <button className="companyview-btn">View</button> <button className="companydel-btn">Delete</button>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <button className="companyview-btn">View</button> <button className="companydel-btn">Delete</button>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <button className="companyview-btn">View</button> <button className="companydel-btn">Delete</button>
                    </tr>
                    </tbody>
                </table>
                </div>

            </div>
        </div>
    )
}

export default Companies;