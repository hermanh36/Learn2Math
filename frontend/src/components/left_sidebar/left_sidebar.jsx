import { Link } from 'react-router-dom';
import React from 'react';

class LeftSidebar extends React.Component {
    constructor(props) { 
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUserId !== prevProps.currentUserId) {
            this.props.fetchUser(this.props.currentUserId);
        }
     }

     trimEmail(email) {
        let username = '';
        for( let i = 0; i< email.length; i++){
            if (email[i] === '@'){
                return username;
            } else {
                username = username + email[i];
            }
        }
    }

    toggleModal(){
        const modal = document.getElementById("modalEl");
        const background = document.getElementById('background')

        background.classList.toggle('hidden');
        modal.classList.toggle('hidden');
        }

    render() { 
        if (this.props.users && this.props.users[(this.props.currentUserId)]){
            return (
                <>
                    <label>
                        <input className="sidebar-checkbox" type="checkbox" />
                        <div className="toggle">
                            <span className="top_line common"></span>
                            <span className="middle_line common"></span>
                            <span className="bottom_line common"></span>
                        </div>
                        <div className="slide">
                            <h1>L2M</h1>
                            <ul>
                            <li className='welcome-left-bar'>Welcome {this.trimEmail(this.props.users[(this.props.currentUserId)].email)}!</li>
                            <li><Link to="/">Lessons</Link></li>
                            <li><Link to="/lesson/new">Create a lesson</Link></li>
                            <li><Link to='/createflashcard'>Create Flashcard</Link></li>
                            {/* <li><Link to="/create_test">Create a test</Link></li> */}
                            <li><Link to={`/profile/${this.props.currentUserId}`}>Profile</Link></li>
                            <li><Link to={`/profile/${this.props.currentUserId}/flashcards`}> My Flashcards</Link></li>
                            <li id="modalBtn" className='not-a-link' onClick={this.toggleModal}>About Us</li>
                            </ul>
                        </div>
                    </label>
                </>
            )
        } else {
            return null;
        }
    }
}

export default LeftSidebar;