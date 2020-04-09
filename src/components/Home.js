import React from "react";
import { connect } from "react-redux";
import {addCount, subCount} from "../redux/reducers/home.reducer";

const Home = ({title, counter, addCount, subCount}) => {

  return (
    <div>
      <h1>{title}</h1>
        <div className='tablo'>
            <h1>{counter}</h1>
        </div>
        <button onClick={addCount}>Increase</button>
        <button onClick={subCount}>Decrease</button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        title: state.homeReducer.title,
        data: state.homeReducer.data,
        counter: state.homeReducer.counter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: () => dispatch(addCount()),
        subCount: () => dispatch(subCount()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
