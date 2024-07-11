// If you already have your secret key or bytes, you can get your Keypair from the secret to test out your dApp.
import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

// Restore a keypair from base58
const keypair = Keypair.fromSecretKey(
  base58.decode(
    "588d9bA570D6cb60C7e3e0F31342feFeA5ab842BC5b29b5601C5eaf269929B8c9"
  )
);

// Log the public key
console.log(keypair.publicKey.toBase58());
