import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const initialState = ({
  isOpen: false
});

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { isOpen: true };
    case CLOSE_MODAL:
      return { isOpen: false };
    default:
      return state;
  }
};
export default ModalReducer;