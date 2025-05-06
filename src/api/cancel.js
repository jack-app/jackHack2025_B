/**
 * @typedef CancelData
 * @property {Date} date キャンセル日
 * @property {string} tag タグ
 * @property {string} memo メモ
 * @property {title} title タイトル
 */

import { getDB, registerDB } from "../firebase/db";

/**
 * Helloを付与する関数です。
 * @param {CancelData} data データ
 * @returns {Promise<Response>} response
 */
export const register = async (data) => {
  await registerDB(data);
};

/**
 * キャンセルリストを取得する関数。
 * @param {CancelData} data
 * @returns {Promise<Response>}
 */
export const getCancelList = async () => {
  return getDB();
};
