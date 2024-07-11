// One way to generate a Keypair is through the use of a Mnemonic. Mnemonics are generally used to make the user experience within wallets better than a Keypair file by using a list of readable words (instead of a shorter string of random numbers and letters).
import * as bip39 from "bip39";

// Generate a mnemonic
const mnemonic = bip39.generateMnemonic();

// Log the mnemonic
console.log(mnemonic);
