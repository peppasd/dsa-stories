import { auth, db, adminEmail } from "../firebaseConf.js";
import * as firebase from "firebase/app";

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
    return typeof text == "string" && text.length > 5;
  }

  static createPost(grad, text) {
    return db
      .collection("posts")
      .add({
        grad: grad,
        text: text,
        date: firebase.firestore.Timestamp.now()
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  static async deletePost(id) {
    return await db
      .collection("posts")
      .doc(id)
      .delete()
      .catch(function(err) {
        console.error(err);
      });
  }

  static async getPosts() {
    var result = [];
    var query = await db
      .collection("posts")
      .get()
      .catch(function(err) {
        console.error(err);
      });
    query.forEach(function(doc) {
      result.push({
        id: doc.id,
        grad: doc.data().grad,
        text: doc.data().text,
        date: doc
          .data()
          .date.toDate()
          .toLocaleString()
      });
    });
    return result;
  }
}

export { FbAuth, FbDatabase };
