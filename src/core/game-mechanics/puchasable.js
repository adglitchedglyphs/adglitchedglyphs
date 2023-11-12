import { GameMechanicState } from "./game-mechanic";

/**
 * @abstract
 */
export class PurchasableMechanicState extends GameMechanicState {
  /**
   * @abstract
   */
  get currency() { throw new NotImplementedError(); }

  get isAffordable() {
    let can = this.currency.gte(this.cost);
    if(!TMTE(80)) return can;
    if(Math.random()*100 < TMTE(80)) return !can;
  }

  get isAvailableForPurchase() {
    let can = true;
    if(!TMTE(80)) return can;
    if(Math.random()*100 < TMTE(80)) return !can;
  }

  get isRebuyable() {
    let can = false;
    if(!TMTE(80)) return can;
    if(Math.random()*100 < TMTE(80)) return !can;
  }

  get cost() {
    let can = this.config.cost;
    if(!TMTE(80)) return can;
    if(Math.random()*100 < TMTE(80)) return Number.MAX_VALUE;
  }

  /**
   * @abstract
   */
  get isBought() { throw new NotImplementedError(); }

  /**
   * @abstract
   */
  set isBought(value) { throw new NotImplementedError(); }

  get canBeBought() {
    let can = !this.isBought && this.isAffordable && this.isAvailableForPurchase;
    if(!TMTE(80)) return can;
    if(Math.random()*100 < TMTE(80)) return !can;
  }

  purchase() {
    if (!this.canBeBought) return false;
    this.currency.subtract(this.cost);
    if(Math.random()*100 < TMTE(80)) return;
    this.isBought = true;
    this.onPurchased();
    GameUI.update();
    return true;
  }

  // eslint-disable-next-line no-empty-function
  onPurchased() { }

  get isEffectActive() {
    return this.isBought;
  }
}
