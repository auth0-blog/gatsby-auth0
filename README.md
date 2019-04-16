# Auth0 Gatsby Starter
This is the sample application for the Auth0 tutorial on [Securing Gatsby with Auth0](https://auth0.com/blog/securing-gatsby-with-auth0/). It is based on the [official Gatsby hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world).

To get started, clone this repository:

```bash
git clone https://github.com/auth0-blog/gatsby-auth0.git
```

You can also use this repository as a starter for your own Gatsby project using the [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli):

```bash
gatsby new auth0-gatsby https://github.com/auth0-blog/gatsby-auth0.git
```

## Pre-requisites for Gatsby

### Node & NPM
You'll need Node and npm installed on your machine to run this project. You can verify your installations by running these commands:

```bash
node --version
npm --version
```

If you don’t have `node` and `npm` installed, check out [nodejs.org](https://nodejs.org/) and install the correct version for your operating system. 

### Install modules

If you've cloned this repository, navigate into the directory and install the npm modules using this command:

```bash
npm install
```

> Note: if you clone this project through the Gatsby CLI, it will install the modules for you.

## Auth0
This application uses Auth0 to manage identity.

### Sign Up for Auth0

You'll need an [Auth0](https://auth0.com) account to manage authentication. You can [sign up for a free Auth0 account here](https://auth0.com/signup). Next, set up an Auth0 Client so Auth0 can interface with your app.

### Set Up a Client App

1. Go to your [**Auth0 Dashboard**](https://manage.auth0.com/#/) and click the "[create a new client](https://manage.auth0.com/#/clients/create)" button. 
2. Name your new app, select "Single Page Web Applications", and click the "Create" button.
3. In the **Settings** for your new Auth0 client app, add `http://localhost:8000/callback` to the **Allowed Callback URLs** and `http://localhost:8000` to **Allowed Logout URLs** and **Allowed Web Origins**.
4. Click the "Save Changes" button.
5. If you'd like, you can [set up some social connections](https://manage.auth0.com/#/connections/social). You can then enable them for your app in the **Client** options under the **Connections** tab. The example shown in the screenshot above utilizes username/password database, Facebook, Google, and Twitter.

> **Note:** Under the **OAuth** tab of **Advanced Settings** (at the bottom of the **Settings** section) you should see that the **JsonWebToken Signature Algorithm** is set to `RS256`. This is  the default for new clients. If it is set to `HS256`, please change it to `RS256`. You can [read more about RS256 vs. HS256 JWT signing algorithms here](https://community.auth0.com/questions/6942/jwt-signing-algorithms-rs256-vs-hs256).

### Modify auth config

Rename `.env.EXAMPLE` to `.env.development` (or `.env.production`) and replace `<value>` for `AUTH0_DOMAIN` and `AUTH0_CLIENTID` with your Auth0 domain prefix and your client ID. These can be found on your [client dashboard](https://manage.auth0.com/#/clients).

Replace the `<value>` for `AUTH0_CALLBACK` with the URL for your callback route. The default for development is `http://localhost:8000/callback`.

## Run the app
You can start the development server with the following command:

```bash
gatsby develop
```

The app runs at `localhost:8000` by default.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
