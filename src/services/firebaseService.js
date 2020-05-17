import { auth, adminEmail } from "../firebaseConf.js";

class FbAuth {
  static login(password) {
    return auth
      .signInWithEmailAndPassword(adminEmail, password)
      .catch(function(error) {
        console.error(error.message);
      });
  }

  static isLoggedIn() {
    if (auth.currentUser != null) return true;
    else return false;
  }

  static signOut() {
    return auth.signOut();
  }
}

export { FbAuth };
