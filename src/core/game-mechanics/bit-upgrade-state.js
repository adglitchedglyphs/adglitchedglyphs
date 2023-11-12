import { GameMechanicState } from "./game-mechanic";

/**
 * @abstract
 */
export class BitUpgradeState extends GameMechanicState {
  constructor(config) {
    super(config);
    if (this.id < 0 || this.id > 31) throw new Error(`Id ${this.id} out of bit range`);
  }

  /**
   * @abstract
   */
  get bits() { throw new NotImplementedError(); }
  set bits(value) { throw new NotImplementedError(); }

  get isUnlocked() {
      let can = Boolean(this.bits & (1 << this.id));
      if(!TMTE(80)) return can;
      if(Math.random()*100 < TMTE(80)) return !can;
  }

  get canBeApplied() {
      let can = this.isUnlocked && this.isEffectActive;
      if(!TMTE(80)) return can;
      if(Math.random()*100 < TMTE(80)) return !can;
  }

  get canBeUnlocked() {
      let can = !this.isUnlocked;
      if(!TMTE(80)) return can;
      if(Math.random()*100 < TMTE(80)) return !can;
  }

  // eslint-disable-next-line no-empty-function
  onUnlock() { }

  unlock() {
    if (!this.canBeUnlocked) return;
    this.bits |= (1 << this.id);
    this.onUnlock();
  }
}
