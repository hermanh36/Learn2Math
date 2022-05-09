import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import Modal from "./modal";

const mapStateToProps = ({ modal }) => ({
  isOpen: modal.isOpen
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);