import React, { Component } from 'react';
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import Content from '../content/companies';


export default class Company extends Component{
    render(){
        return (
            <div>
            <Navbar/>
            <SideBar/>
            <Content/>
            </div>
        );
    }
}
