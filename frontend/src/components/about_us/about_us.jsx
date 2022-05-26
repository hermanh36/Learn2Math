import React from 'react';
import {FaBeer ,FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';

export default class AboutUs extends React.Component{

    toggleModal(){
        const modal = document.getElementById("modalEl");
        const background = document.getElementById('background')

        background.classList.toggle('hidden');
        modal.classList.toggle('hidden');
        }
    

    render(){
        return (
            <>
                <button id="modalBtn" onClick={this.toggleModal}>open modal</button>
                <div id="modalEl" class="modal hidden">
            <div id='background' className='hidden' onClick={this.toggleModal}></div>

                <div class="modal-content">
                    <span class="close" onClick={this.toggleModal}>&times;</span>
                    <div>
                        <h1>About Us</h1>
                    
                    <ul className='member'>
                        <div>
                            <li>
                                <p>Derek Lee</p>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li>
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
                            <li>
                                <p>Herman He</p>
                                <img src="" alt="profile-picture" />
                                <ul className='icons'>
                                    <li><a href="#"><FaGithub/></a></li>
                                    <li><a href="#"><FaLinkedin/></a></li>
                                    <li><a href="#"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li>
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
                
            </> 
        )
    }
}