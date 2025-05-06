import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./app";
import { getUID } from "./auth";

/**
 * @typedef Data
 * @property {Date} date キャンセル日
 * @property {string} tag タグ
 * @property {string} memo メモ
 * @property {title} title タイトル
 */

export const db = getFirestore(app);

/**
 *  dbにデータを追加する
 * @param {Data} data
 */
export const registerDB = async (data) => {
  const uid = getUID();
  if (!uid) {
    throw new Error("ユーザーが認証されていません");
  }
  console.log("uid", uid);
  // ownerId フィールドを追加して書き込む
  return addDoc(collection(db, "cancels"), { ...data, ownerId: uid })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

/**
 *  dbからデータを取得する
 * @return {Promise<Data[]>}
 */
export const getDB = async () => {
  const querySnapshot = await getDocs(collection(db, "cancels"));
  const data = [];
  const uid = getUID();
  querySnapshot.forEach((doc) => {
    const docData = doc.data();
    if (docData.ownerId !== uid) {
      return;
    }
    data.push({
      date: docData.date.toDate(),
      tag: docData.tag,
      memo: docData.memo,
      title: docData.title,
    });
  });
  return data;
};
