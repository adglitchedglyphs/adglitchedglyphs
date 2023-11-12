const Payments = {
  interval: null,
  windowReference: null,
  // This is here to prevent notification spam; purchase canceling can be called multiple times before the first
  // call's Promise is settled
  hasCanceled: false,
  init: () => {
    // We have unfinished checkouts from when the page was last closed
    // no we don't
  },

  // Only called from clicking the "Buy More" button in the Shop tab
  buyMoreSTD: async STD => {
      GameUI.notify.error("nuh uh", 1000);
  },

  // Starts a purchase-checking loop and adds a listener which cancels any ongoing purchases if the page is closed.
  // Any unresolved purchases will be reopened when the page is opened again in init()
  pollForPurchases: () => {
      // no we don't
  },

  // Sends a request to purchase a STD upgrade, returning true if successful (and syncs data), false if not
  async buyUpgrade(upgradeKey, cosmeticName) {
      // no we don't
  },

  // Explicitly cancels purchases if the player chooses to, they take too long to resolve, or the page is closed
  async cancelPurchase(isTimeout) {
    if (this.hasCanceled) return;
    Payments.windowReference?.close();
    Payments.clearInterval();
    try {
      await fetch(`${STD_BACKEND_URL}/expire`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ sessionId: player.IAP.checkoutSession.id })
      });
    } catch (e) {
      GameUI.notify.error("Could not contact payment server!", 10000);
    }
    if (isTimeout) GameUI.notify.error("Purchase took too long to resolve!", 10000);
    player.IAP.checkoutSession = { id: false };
    GameStorage.save();
    this.hasCanceled = false;
  },

  // Removes the repeating checker and page-close listener for if payments have been resolved
  clearInterval() {
    clearInterval(Payments.interval);
    window.onbeforeunload = null;
  }
};

export default Payments;
