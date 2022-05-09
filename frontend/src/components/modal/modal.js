import React from "react";
import LoginFormContainer from "../session/login_form_container";

class Modal extends React.Component{ 
  constructor(props){
    super(props);
    this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  closeLoginModal(e){
    e.preventDefault();
    this.props.closeModal();
  }
  
  render(){
    if(!this.props.isOpen){
      return null;
    }
    return (
      <div className='session-modal-overlay' onClick={this.closeLoginModal}>
        <LoginFormContainer />
      </div>
    );
  }
};
export default Modal;