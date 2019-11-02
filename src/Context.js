import React from "react";

const Context = React.createContext({
  octDays: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ],
  currentDay: null,
  error: null,
  list: [],
  bigObj: {},
  setError: () => {},
  clearError: () => {},
  setCurrentDay: () => {},
  setList: () => {},
  setBigObj: () => {},
  updateBigObj: () => {}
});

export default Context;

export class ContextProvider extends React.Component {
  state = {
    octDays: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    currentDay: "",
    list: [],
    bigObj: {},
    error: null
  };

  updateBigObj = (patch, movieDay, day) => {
    const bigObj = Object.assign({}, this.state.bigObj);
    bigObj[movieDay] = day;
    this.setState({ bigObj }, () => null);
  };

  setBigObj = data => {
    this.setState({
      bigObj: data
    }, () => null);
  };

  setList = res => {
    this.setState({
      list: res
    }, () => null);
  };

  setCurrentDay = day => {
    this.setState({
      currentDay: day
    });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCurrentDay: this.setCurrentDay,
      octDays: this.state.octDays,
      list: this.state.list,
      setList: this.setList,
      bigObj: this.state.bigObj,
      setBigObj: this.setBigObj,
      updateBigObj: this.updateBigObj
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
