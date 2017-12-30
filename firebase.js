
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCRh8F1BSKOAG-LX53Hz5TPwmG4D40qxpo",
  databaseURL: "https://ticketnyc-c915b.firebaseio.com/",
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;