import { db, auth } from "../main.js";

class Auth {
  constructor() {
    this.auth = auth;
  }
}

class DataBase {
  constructor() {
    this.db = db;
  }
}
