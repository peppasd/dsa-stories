import { auth, db, adminEmail, timestamp } from "../firebaseConf.js";

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

class FbDatabase {
  static validateGrad(grad) {
    return /^[1][9][5-9][0-9][a-e]$|^[2][0][0-1][0-9][a-e]$/.test(grad);
  }

  static validateText(text) {
    return typeof(text) == "string" && text.length > 5;
  }

  static createPost(grad, text) {
      return db.collection("posts")
        .add({
          grad: grad,
          text: text,
          date: timestamp()
        })
        .catch(function(err) {
          console.log(err);
        });
  }
}

export { FbAuth, FbDatabase };
