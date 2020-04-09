const INPUT_CHANGE = "INPUT_CHANGE";
const BUTTON_CLICK = "BUTTON_CLICK";

const initialState = {
  title: "Hello from Contacts",
  dataContacts: [1, 5, 4, 6, 7, 5, 6, 7, true],
  posts: [],
  value: "",
};
//reducers
//actions
//map state/dispatch to Props

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state,
        value: action.text,
      };
    }
    case BUTTON_CLICK: {
      return {
        ...state,
        posts: [...state.posts, action.item],
        value: "",
      };
    }
    default: {
      return state;
    }
  }
};

export const changeInputValue = (inputData) => {
  return {
    type: INPUT_CHANGE,
    text: inputData,
  };
};

export const onClickButton = (item) => {
  return {
    type: BUTTON_CLICK,
    item,
  };
};

export default contactsReducer;
