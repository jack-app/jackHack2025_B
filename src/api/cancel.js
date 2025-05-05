/**
 * @typedef CancelData
 * @property {Date} date キャンセル日
 * @property {string} tag タグ
 * @property {string} memo メモ
 */

/*
キャンセルを登録する
@param {CancelData} data
@returns {Promise<Response>}
 */
export const register = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("register", data);
      resolve({
        status: 200,
        ok: true,
        json: async () => ({ message: "キャンセルが登録されました", data }),
        text: async () =>
          JSON.stringify({ message: "キャンセルが登録されました", data }),
      });
    }, 300);
  });
};

/*
キャンセルを削除する
@param {CancelData} data
@returns {Promise<Response>}
*/
export const getCancelList = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        ok: true,
        json: async () => ({
          message: "キャンセルリストが取得されました",
          data: [
            { date: new Date(2025, 4, 1), tag: "対面活動", memo: "会議" },
            { date: new Date(2025, 5, 10), tag: "jackhack2025", memo: "風邪" },
          ],
        }),
        text: async () =>
          JSON.stringify({
            message: "キャンセルリストが取得されました",
            data: [
              { date: new Date(2025, 4, 1), tag: "対面活動", memo: "会議" },
              {
                date: new Date(2025, 5, 10),
                tag: "jackhack2025",
                memo: "風邪",
              },
            ],
          }),
      });
    }, 300);
  });
};
