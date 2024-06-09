import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "your-encryption-key";

export const encryptMnemonic = (mnemonic: string) => {
  const ciphertext = CryptoJS.AES.encrypt(mnemonic, ENCRYPTION_KEY);
  return ciphertext.toString();
};

export const decryptMnemonic = (encryptedMnemonic: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedMnemonic, ENCRYPTION_KEY);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext.toString();
};
