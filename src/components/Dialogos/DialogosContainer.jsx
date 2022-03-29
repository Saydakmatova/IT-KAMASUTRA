import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogos from "./Dialogos";

// const DialogosContainer = (props) => {
//   let state = props.store.getState().dialogsPage;
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageActionCreator());
//   };
//   let onNewMessageChange = (body) => {
//     props.store.dispatch(updateMessageBodyCreator(body));
//   };
//   return (
//     <Dialogos
//       updateMessageBody={onNewMessageChange}
//       sendMessage={onSendMessageClick}
//       dialogsPage={state}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogos);
export default DialogsContainer;
