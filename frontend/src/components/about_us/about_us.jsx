import React from 'react';
import {FaBeer ,FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';

export default class AboutUs extends React.Component{
    render(){
        return (
            <div className='some-container'>
                <div className="background-modal"></div>
                <div className='about-us-modal'>
                    <div className='test-container'>
                        <span className="close-about-us-modal">&#x2715;</span>
                    
                    <ul>
                        <div>
                            <li className='member'>
                                <p>Derek Lee</p>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li className='member'>
                                <p>Dominic Swaby</p>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                        </div>
                        <div>
                            <li className='member'>
                                <p>Herman He</p>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li className='member'>
                                <p>Naran Ivanchukov</p>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}