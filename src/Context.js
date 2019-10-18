import React from 'react'

const Context = React.createContext({
  currentDay: null,
  setCurrentDay: () => {}
})

export default Context

export  class ContextProvider extends React.Component {
  state = {
    currentDay: '',
  }

  setCurrentDay = day => {
    console.log('hi')
    this.setState({ 
      currentDay: day
     })
  }

  render() {
    const value = {
      setCurrentDay: this.setCurrentDay,
    }

  return (
    <Context.Provider value={value}>
      {this.props.children}
    </Context.Provider>
  )
  }
}