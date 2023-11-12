import { RebuyableMechanicState } from "./game-mechanics";
import { SteamRuntime } from "@/steam";

import Payments from "./payments";

export const shop = {};

export const ShopPurchaseData = {
  totalSTD: 0,
  spentSTD: 0,
  respecAvailable: false,
  lastRespec: "",
  unlockedCosmetics: [],

  get availableSTD() {
    return 0; // no shopping allowed
  },

  get isIAPEnabled() {
    return Cloud.loggedIn && this.availableSTD >= 0 && player.IAP.enabled;
  },

  // We also allow for respecs if it's been at least 3 days since the last one
  get timeUntilRespec() {
    return 1; // no shopping allowed
  },

  get canRespec() {
    return this.respecAvailable || this.timeUntilRespec.totalDays <= 0;
  },

  updateLocalSTD(newData) {
  },

  clearLocalSTD() {
    this.totalSTD = 0;
    this.spentSTD = 0;
    this.respecAvailable = false;
    this.unlockedCosmetics = [];
    for (const key of Object.keys(GameDatabase.shopPurchases)) this[key] = 0;
  },

  // Reads STD props from the cloud and sets local cached values with the result
  async syncSTD(showNotification = true, fetchedData = undefined) {
  },

  respecRequest() {
  },

  async respecAll() {
    if (!this.canRespec) {
      // This case only happens if the player is cheating and using the console to make the game think it has a respec
      // when on the backend they don't. Nevertheless, responsive UI rarely hurts
      GameUI.notify.error("You do not have a respec available", 10000);
      return;
    }
    let res;
    try {
      res = await fetch(`${STD_BACKEND_URL}/respec`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: Cloud.user.id })
      });
    } catch (e) {
      GameUI.notify.error("Unable to respec STD purchases!", 10000);
      return;
    }
    const stdData = await res.json();
    if (stdData.success) GameUI.notify.info("STD respec successful!", 10000);
    else GameUI.notify.error("No purchases to respec!", 10000);
    this.updateLocalSTD(stdData.data);
  },
};

// We track the local state of shop purchases here, so dynamically add all the keys which exist in the gameDB
for (const key of Object.keys(GameDatabase.shopPurchases)) ShopPurchaseData[key] = 0;

class ShopPurchaseState extends RebuyableMechanicState {
  get currency() {
    return ShopPurchaseData.availableSTD;
  }

  get isAffordable() {
    return this.currency >= this.cost;
  }

  get description() {
    const desc = this.config.description;
    return typeof desc === "function" ? desc() : desc;
  }

  get cost() {
    const cost = this.config.cost;
    return typeof cost === "function" ? cost() : cost;
  }

  // ShopPurchaseData for any particular key is undefined in between page load and STD load,
  // so we need to guard against that causing NaNs to propagate through the save
  get purchases() {
    return ShopPurchaseData[this.config.key] ?? 0;
  }

  set purchases(value) {
    if (!Number.isFinite(value)) return;
    ShopPurchaseData[this.config.key] = value;
  }

  isUnlocked() {
    return player.records.fullGameCompletions > 0 || (this.config.isUnlocked?.() ?? true);
  }

  get lockText() {
    return this.config.lockText;
  }

  get shouldDisplayMult() {
    return Boolean(this.config.multiplier);
  }

  get currentMult() {
    if (!this.shouldDisplayMult) return "";
    return this.config.multiplier(ShopPurchaseData.isIAPEnabled ? this.purchases : 0);
  }

  get nextMult() {
    if (!this.shouldDisplayMult) return "";
    return this.config.multiplier(ShopPurchaseData.isIAPEnabled ? this.purchases + 1 : 0);
  }

  // We want to still display the correct value in the button, so we need separate getters for it
  get currentMultForDisplay() {
    if (!this.shouldDisplayMult) return "";
    return this.config.multiplier(this.purchases);
  }

  get nextMultForDisplay() {
    if (!this.shouldDisplayMult) return "";
    return this.config.multiplier(this.purchases + 1);
  }

  formatEffect(effect) {
    return this.config.formatEffect?.(effect) || formatX(effect, 2, 0);
  }

  async purchase() {
  }
}

export const ShopPurchase = mapGameDataToObject(
  GameDatabase.shopPurchases,
  config => new ShopPurchaseState(config)
);

shop.purchaseTimeSkip = function() {
};

shop.purchaseLongerTimeSkip = function() {
};
