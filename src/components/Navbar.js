import React from 'react';

import logo from '../img/logo.png';
import home from '../img/home.png';
import payslips from '../img/payslips.png';
import corner from '../img/corner.png';
import kolo from '../img/kolo.png';
import pensions from '../img/grid.png';
import taxes from '../img/grid.png';


const Navbar = () => {
    return (
        <div className="main">
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
            <div className="nav">
                <ul>
                    <li><img alt="home" src={home} />Home</li>
                    <li className="active"><img alt="payslips" src={payslips} />Payslips</li>
                    <li><img alt="corner" src={corner} />My corner</li>
                    <li><img alt="kolo" src={kolo} />My kolo</li>
                    <li><img alt="pensions" src={pensions} />Pensions</li>
                    <li><img alt="taxes" src={taxes} />Taxes</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;