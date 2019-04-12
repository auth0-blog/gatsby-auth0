import React from "react"
import { checkSession } from "./src/utils/auth"

class SessionCheck extends React.Component {
  state = {
    loading: true,
  }

  construct() {
    this.handleCheckSession = this.handleCheckSession.bind(this)
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentWillMount() {
    console.log(localStorage.getItem("isLoggedIn"))
    checkSession(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
