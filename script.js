const peraWallet = new PeraWalletConnect.PeraWalletConnect();

async function connectWallet() {
  try {
    const accounts = await peraWallet.connect();

    document.getElementById("account").innerText =
      "Connected Account: " + accounts[0];

  } catch (error) {
    console.log("Connection failed:", error);
  }
}
