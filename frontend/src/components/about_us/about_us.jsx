import React from 'react';
import {FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';
import Derek from './../../images/derek.jpg';
import Dominic from './../../images/dom.jpeg';
import Herman from './../../images/herman.png';
import Naran from './../../images/naran.jpg';

export default class AboutUs extends React.Component{

    toggleModal(){
        const modal = document.getElementById("modalEl");
        const background = document.getElementById('background')

        background.classList.toggle('hidden');
        modal.classList.toggle('hidden');
        }
    
    render(){
        return (
            <div className='modal-container'>
                
                <div id="modalEl" className="modal hidden">
            <div id='background' className='hidden' onClick={this.toggleModal}></div>

                <div className="modal-content">
                    <span className="close" onClick={this.toggleModal}>&times;</span>
                    <div>
                        <h1>About Us</h1>
                    
                    <ul className='member'>
                        <div>
                            <li className='profile'>
                                <p>Derek Lee</p>
                                <img src={Derek} alt="derek-lee" />
                                <ul className='icons'>
                                    <li><a href="https://github.com/derek-2" target="_blank"><FaGithub/></a></li>
                                    <li><a href="https://www.linkedin.com/in/derek-lee-a43632152/" target="_blank"><FaLinkedin/></a></li>
                                    <li><a href="https://angel.co/u/derek-lee-35" target="_blank"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li className='profile'>
                                <p>Dominic Swaby</p>
                                <img src={Dominic} alt="dominic-swaby" />
                                <ul className='icons'>
                                    <li><a href="https://github.com/domswaby/" target="_blank"><FaGithub/></a></li>
                                    <li><a href="https://www.linkedin.com/in/dominic-swaby-5b43681a5/" target="_blank"><FaLinkedin/></a></li>
                                    <li><a href="https://angel.co/u/dominic-5" target="_blank"><FaAngellist/></a></li>
                                </ul>
                            </li>
                        </div>
                        <div>
                            <li className='profile'>
                                <p>Herman He</p>
                                <img src={Herman} alt="herman-he" />
                                <ul className='icons'>
                                    <li><a href="https://github.com/hermanh36" target="_blank"><FaGithub/></a></li>
                                    <li><a href="https://www.linkedin.com/in/herman-he-0a75051b0/" target="_blank"><FaLinkedin/></a></li>
                                    <li><a href="https://angel.co/u/herman-he" target="_blank"><FaAngellist/></a></li>
                                </ul>
                            </li>
                            <li className='profile'>
                                <p>Naran Ivanchukov</p>
                                <img src={Naran} alt="naran-ivanchukov" />
                                <ul className='icons'>
                                    <li><a href="https://github.com/nivan16" target="_blank"><FaGithub/></a></li>
                                    <li><a href="#" target="_blank"><FaLinkedin/></a></li>
                                    <li><a href="#" target="_blank"><FaAngellist/></a></li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                    </div>
                </div>
                </div>
                
            </div> 
        )
    }
}