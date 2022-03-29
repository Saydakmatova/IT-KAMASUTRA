import React from "react";
import s from "./Dialogos.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogos = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogs.map((item) => (
          <DialogItem name={item.name} id={item.id} />
        ))}
      </div>
      <div className={s.messages}>
        {state.messages.map((item) => (
          <Message message={item.message} id={item.id} />
        ))}
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogos;
