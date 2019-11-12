import React from "react";

const Context = React.createContext({
  octDays2: {
    "1": true,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false,
    "10": false,
    "11": false,
    "12": false,
    "13": false,
    "14": false,
    "15": false,
    "16": false,
    "17": false,
    "18": false,
    "19": false,
    "20": false,
    "21": false,
    "22": false,
    "23": false,
    "24": false,
    "25": false,
    "26": false,
    "27": false,
    "28": false,
    "29": false,
    "30": false,
    "31": false
  },

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
  updateBigObj: () => {},
  setDay: () => {},
  deleteMovie: () => {},
});

export default Context;

export class ContextProvider extends React.Component {
  state = {
    octDays2: {
      "1": true,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
      "6": false,
      "7": false,
      "8": false,
      "9": false,
      "10": false,
      "11": false,
      "12": false,
      "13": false,
      "14": false,
      "15": false,
      "16": false,
      "17": false,
      "18": false,
      "19": false,
      "20": false,
      "21": false,
      "22": false,
      "23": false,
      "24": false,
      "25": false,
      "26": false,
      "27": false,
      "28": false,
      "29": false,
      "30": false,
      "31": false
    },

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

  deleteMovie = (patch, movieDay) => {
    const bigObj = Object.assign({}, this.state.bigObj);
    bigObj[movieDay] = patch;
    this.setState({ bigObj }, () => null);
  }
 

  updateBigObj = (patch, movieDay, day) => {
    const bigObj = Object.assign({}, this.state.bigObj);
    bigObj[movieDay] = day;
    this.setState({ bigObj }, () => null);
  };

  setBigObj = data => {
    this.setState(
      {
        bigObj: data
      },
      () => null
    );
  };

  setList = res => {
    this.setState(
      {
        list: res
      },
      () => null
    );
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
      updateBigObj: this.updateBigObj,
      octDays2: this.state.octDays2,
      setDay: this.setDay,
      deleteMovie: this.deleteMovie
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
