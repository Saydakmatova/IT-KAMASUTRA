import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "hello i am Den", likesCount: 12 },
        { id: 2, message: "hello i am John", likesCount: 1 },
      ],
      newPostText: "IT - safa",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("asdfg");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    // type: string
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
