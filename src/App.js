import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lato-font/css/lato-font.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import SideBar from "./component/sidebar/SideBar";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Education from "./component/education/Education";
import Skills from "./component/skills/Skills";
import Interests from "./component/interests/Interests";

function App() {
    return (
        <div className="App">
            <SideBar/>
            <div className="container-fluid p-0">
                <About/>
                <hr className="m-0"/>
                <Experience/>
                <hr className="m-0"/>
                <Education/>
                <hr className="m-0"/>
                <Skills/>
                <hr className="m-0"/>
                <Interests/>
            </div>
        </div>
    );
}


export default App;
