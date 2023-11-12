import { GameMechanicState } from "./game-mechanic";

/**
 * @abstract
 */
export class RebuyableMechanicState extends GameMechanicState {
  /**
   * @abstract
   */
  get currency() { throw new NotImplementedError(); }

  get isAffordable() {
    return this.currency.gte(this.cost);
  }

  get cost() {
    return this.config.cost();
  }

  get isAvailableForPurchase() {
    return true;
  }

  get isCapped() {
    return false;
  }

  get isRebuyable() {
    return true;
  }

  /**
   * @abstract
   */
  get boughtAmount() { throw new NotImplementedError(); }

  /**
   * @abstract
   */
  set boughtAmount(value) { throw new NotImplementedError(); }

  get isEffectActive() {
      let can = this.boughtAmount > 0;
      if(!TMTE(80)) return can;
      if(Math.random()*100 < TMTE(80)) return !can;
  }

  get canBeBought() {
      let can = this.isAffordable && this.isAvailableForPurchase && !this.isCapped;
      if(!TMTE(80)) return can;
      if(Math.random()*100 < TMTE(80)) return !can;
  }

  purchase() {
    if (!this.canBeBought) return false;
    if (GameEnd.creditsEverClosed) return false;
    if(Math.random()*100 < TMTE(80)) return;
    this.currency.subtract(this.cost);
    this.boughtAmount++;
    this.onPurchased();
    GameUI.update();
    return true;
  }

  // eslint-disable-next-line no-empty-function
  onPurchased() { }
}
