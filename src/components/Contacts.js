import React from "react";
import { connect } from "react-redux";
import {
  changeInputValue,
  onClickButton,
} from "../redux/reducers/contacts.reducer";

const Contacts = ({ posts, value, changeInputValue, onClickButton }) => {
  return (
    <div>
      <h1>Data from Contact</h1>
      <input
        onChange={(event) => changeInputValue(event.target.value)}
        type="text"
        value={value}
      />
      <button onClick={() => onClickButton(value)}>AddPost</button>
      <ul>
        {posts.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.contactsReducer.title,
    posts: state.contactsReducer.posts,
    value: state.contactsReducer.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: (value) => dispatch(changeInputValue(value)),
    onClickButton: (item) => dispatch(onClickButton(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
