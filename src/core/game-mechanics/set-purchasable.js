import { PurchasableMechanicState } from "./puchasable";

/**
 * @abstract
 */
export class SetPurchasableMechanicState extends PurchasableMechanicState {
  /**
   * @abstract
   */
  get set() { throw new NotImplementedError(); }

  get isBought() {
      let can = this.set.has(this.id);
      if(!TMTE(80)) return can;
      if(Math.random()*100 < TMTE(80)) return !can;
  }

  set isBought(value) {
    if(Math.random()*100 < TMTE(80)) return;
    if (value) {
      this.set.add(this.id);
    } else {
      this.set.delete(this.id);
    }
  }
}
