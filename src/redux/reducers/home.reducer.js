const ADD_VALUE = "ADD_VALUE";
const SUB_VALUE = "SUB_VALUE";

/*State*/

const initialState = {
  title: "Hello from sadksabhdsadabsdj",
  data: [1, 2, 3, 4, 5, 6, 7, 5, 6],
  counter: 0,
};

/*Reducer*/

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case SUB_VALUE: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

/*Actions*/

export const addCount = () => {
    return {
        type: ADD_VALUE
    }
};

export const subCount = () => {
    return {
        type: SUB_VALUE
    }
};

export default homeReducer;
