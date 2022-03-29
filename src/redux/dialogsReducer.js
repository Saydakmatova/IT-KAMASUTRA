const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Nurik" },
    { id: 2, name: "Askat" },
    { id: 3, name: "Iskah" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Aya" },
    { id: 6, name: "Gena" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello World!" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Hello World!" },
    { id: 6, message: "How are you" },
  ],
  newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  //  = {
  // ...state,
  // messages: [...state.messages],
  // };
  switch (action.type) {
    case NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }],
      };
    }
    default: {
      return state;
    }
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateMessageBodyCreator = (body) => ({
  type: NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
