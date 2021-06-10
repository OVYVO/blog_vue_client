import CryptoJS from 'crypto-js'

const iv = CryptoJS.enc.Utf8.parse('f710b45f04e37709') // 十六位十六进制数作为密钥偏移量
let key = CryptoJS.enc.Utf8.parse('qq3220860374wx1357662425') // 24 位秘钥密钥

export function decrypt(val) {
  let dataHexStr = CryptoJS.enc.Hex.parse(val);
  let dataBase64 = CryptoJS.enc.Base64.stringify(dataHexStr);
  let decrypt = CryptoJS.AES.decrypt(dataBase64, key, { iv: iv, mode: CryptoJS.mode.CBC });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

//加密方法
export function encrypt(val) {
  let handleval = CryptoJS.enc.Utf8.parse(val);
  let encrypted = CryptoJS.AES.encrypt(handleval, key, { iv: iv, mode: CryptoJS.mode.CBC });
  return encrypted.ciphertext.toString().toUpperCase();;
}