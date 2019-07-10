import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { aboutUs } from '../data';
// import logo from '../logo.svg';
import styled from 'styled-components';
// import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5">
                <Link to='./' className="nav-link nav-company">
                    {aboutUs.company}
                </Link>
                <div className="">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                库存
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/business" className="nav-link">
                                经营范围
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/contact" className="nav-link">
                                联系我们
                            </Link>
                        </li>
                    </div>
                </div>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
    }
    .nav-company{
        color: var(--mainWhite) !important;
        font-size: 1.5rem;
    }
`


