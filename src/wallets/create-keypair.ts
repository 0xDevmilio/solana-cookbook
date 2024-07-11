// Any transaction on the Solana blockchain requires a keypair or wallet. If you are connecting to a wallet, you do not need to worry about the keypair. Otherwise a keypair must be generated for signing transactions.
import { Keypair } from "@solana/web3.js";

// Generate a keypair
const keypair = Keypair.generate();

// Log the public key and secret key
console.log(keypair.publicKey.toBase58());
console.log(keypair.secretKey.toString());
