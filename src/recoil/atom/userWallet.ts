import { atom } from "recoil";

export const userWallet = atom({
  key: "userWalletState",
  default: {
    address: null,
    tonBalance: 9,
    btlBalance: 0,
    kloBalance: 0,
    secretKey: "",
  },
});

export const walletKey = atom({
  key: "walletKeyState",
  default: ''
})