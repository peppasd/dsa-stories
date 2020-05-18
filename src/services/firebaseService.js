import { db, Timestamp } from "../firebaseConf.js";

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
        date: Timestamp.now()
      })
      .catch(function(err) {
        console.log(err);
      });
  }

}

export { FbDatabase };
