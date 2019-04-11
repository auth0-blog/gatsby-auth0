import React from "react"
import { Router } from "@reach/router"

const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => (
  <Router>
    <Home path="/account/" />
    <Settings path="/account/settings" />
    <Billing path="/account/billing" />
  </Router>
)

export default Account
