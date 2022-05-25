import React from 'react';
import {FaBeer ,FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';

export default class AboutUs extends React.Component{
    render(){
        return (
            <>
            <div className='modal-container'>
                <div className="background-modal"></div>
                <div className="about-us-modal">
                    <ul>
                        <div className="two-people">
                            <li className='member'>
                                <li>Derek Lee</li>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li className='member'>
                                <li>Dominic Swaby</li>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                        </div>
                        <div className="two-people">
                            <li className='member'>
                                <li>Herman He</li>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li className='member'>
                                <li>Naran Ivanchukov</li>
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
            </>
        )
    }
}