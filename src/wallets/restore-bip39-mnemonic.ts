// Many wallet extensions use mnemonics to represent their secret keys. You can convert the mnemonic to Keypairs for local testing.
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";

// Mnemonic
const mnemonic =
  "pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter";

// arguments: (mnemonic, password)
const seed = bip39.mnemonicToSeedSync(mnemonic, "");
const keypair = Keypair.fromSeed(seed.slice(0, 32));

// Log the public key
console.log(`${keypair.publicKey.toBase58()}`);
