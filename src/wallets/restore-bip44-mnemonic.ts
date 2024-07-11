// Many wallet extensions use mnemonics to represent their secret keys. You can convert the mnemonic to Keypairs for local testing.
import { Keypair } from "@solana/web3.js";
import { HDKey } from "micro-ed25519-hdkey";
import * as bip39 from "bip39";

// Mnemonic
const mnemonic =
  "neither lonely flavor argue grass remind eye tag avocado spot unusual intact";

// arguments: (mnemonic, password)
const seed = bip39.mnemonicToSeedSync(mnemonic, "");
const hd = HDKey.fromMasterSeed(seed.toString("hex"));

// Derive the keypair for each index
for (let i = 0; i < 10; i++) {
  const path = `m/44'/501'/${i}'/0'`;
  const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
  console.log(`${path} => ${keypair.publicKey.toBase58()}`);
}
