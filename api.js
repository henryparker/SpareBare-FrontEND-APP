// export const api = "http://node28.codenvy.io:40724";
// import * as Expo from 'expo';
// const { manifest } = Expo.Constants;
// export const url = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;
export const url = "spare-bare-server.herokuapp.com";
console.log(url);
const Frisbee = require("frisbee");
export const api = new Frisbee({
  baseURI: `http://${url}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
// export const api = "localhost:3000";
