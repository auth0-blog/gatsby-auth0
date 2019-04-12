import auth0 from "auth0-js"
import { navigate } from "gatsby"

export const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens = {
  idToken: false,
  accessToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  return !!localStorage.getItem("isLoggedIn")
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    if (err.error === "login_required") {
      login()
    }
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.idToken = authResult.idToken
    tokens.accessToken = authResult.accessToken
    tokens.expiresAt = expiresAt

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile

      localStorage.setItem("isLoggedIn", true)
      navigate("/account")
      cb()
    })
  }
}

export const handleAuthentication = () => {
  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}
