<script>
import ArmageddonButton from "../../tabs/celestial-pelle/ArmageddonButton";
import RealityCurrencyHeader from "../../RealityCurrencyHeader";

import HeaderTickspeedInfo from "../HeaderTickspeedInfo";

import RealityButton from "./RealityButton";
import PrimaryButton from "@/components/PrimaryButton.vue";

// This component contains antimatter and antimatter rate at the start of the game, as well as some additional
// information depending on the UI (tickspeed for Classic, game speed for Modern). Everything but antimatter is
// removed once Reality is unlocked, to make room for the reality button
export default {
  name: "HeaderCenterContainer",
  components: {
    PrimaryButton,
    HeaderTickspeedInfo,
    RealityCurrencyHeader,
    RealityButton,
    ArmageddonButton,
  },
  data() {
    return {
      shouldDisplay: true,
      isModern: false,
      hasRealityButton: false,
      isDoomed: false,
      antimatter: new Decimal(0),
      antimatterPerSec: new Decimal(0),
    };
  },
  methods: {
    update() {
      this.shouldDisplay = player.break || !Player.canCrunch;
      if (!this.shouldDisplay) return;

      this.isModern = player.options.newUI;
      this.isDoomed = Pelle.isDoomed;
      this.antimatter.copyFrom(Currency.antimatter);
      this.hasRealityButton = PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought;
      if (!this.hasRealityButton) this.antimatterPerSec.copyFrom(Currency.antimatter.productionPerSecond);
    },
  },
};
</script>

<template>
  <div
    v-if="shouldDisplay"
    class="c-prestige-button-container"
  >
    <!-- These are for TMT happening events! -->
    <!-- May the Celestials of good code forgive me for whatever the hell this is -->
    <p
      id="happeningcode_bhpause"
      onclick="BlackHoles.togglePause()"
    />
    <p
      id="happeningcode_bhpulse"
      onclick="player.celestials.enslaved.isAutoReleasing = !player.celestials.enslaved.isAutoReleasing;"
    />
    <p
      id="happeningcode_showrandommodal"
      onclick="const RANDOMMODALS = [ Modal.animationOptions, Modal.autobuyerEditModal, Modal.awayProgressOptions,
       Modal.backupWindows, Modal.bigCrunch, Modal.changelog, Modal.changeName, Modal.clearAutomatorConstants,
       Modal.confirmationOptions, Modal.cosmeticSetChoice, Modal.credits, Modal.deleteAllRejectedGlyphs, Modal.deleteAllUnprotectedGlyphs,
       Modal.deleteCompanion, Modal.eternity, Modal.enslavedHints, Modal.enterDilation, Modal.enterSpeedrun, Modal.exitDilation,
       Modal.h2p, Modal.hardReset, Modal.hiddenTabs, Modal.hotkeys, Modal.import, Modal.information, Modal.pelleEffects,
       Modal.resetReality, Modal.shop ];
       const CELESTIALNAMES = [ 'Teresa\'s', 'Effarig\'s', 'The Nameless Ones\'', 'V\'s', 'Ra\'s', 'Lai\'tela\'s', 'Pelle\'s', 'The Destroyer\'s' ];
       let specials = 3;
       let idx = Math.round(Math.random() * (RANDOMMODALS.length+specials-1));
       let name = CELESTIALNAMES[Math.round(Math.random() * (CELESTIALNAMES.length))];
       if(idx === RANDOMMODALS.length) {
          Modal.celestials.show({name: name,
          number: Math.round(Math.random() * 5)});
       } else if(idx === RANDOMMODALS.length+1) {
          Modal.catchup.show(Math.round(Math.random() * 500000000) + -150000000);
       } else if(idx === RANDOMMODALS.length+2) {
         Modal.glyphPurge.show({harsh: Math.round(Math.random())});
       } else
       RANDOMMODALS[idx].show();"
    />
    <p
      id="happeningcode_toggleUI"
      onclick="GameOptions.toggleUI();"
    />
    <p
      id="happeningcode_toggleNews"
      onclick="GameOptions.toggleNews();"
    />
    <p
      id="happeningcode_toggleID"
      onclick="toggleAllTimeDims();"
    />
    <p
      id="happeningcode_toggleTD"
      onclick="toggleAllInfDims();"
    />
    <p
      id="happeningcode_toggleallauto"
      onclick="
      for (const autobuyer of Autobuyers.unlocked) {
        autobuyer.isActive = !autobuyer.isActive;
      }"
    />
    <p
      id="happeningcode_toggleautopause"
      onclick="player.auto.autobuyersOn = !player.auto.autobuyersOn"
    />
    <p
      id="happeningcode_stopautomator"
      onclick="AutomatorBackend.stop()"
    />
    <p
      id="happeningcode_startautomator"
      onclick="AutomatorBackend.start()"
    />
    <p
      id="happeningcode_togglenexteternityrespec"
      onclick="player.respec = !player.respec"
    />
    <!-- This is no longer for the TMT happening events! -->
    <span>You have <span class="c-game-header__antimatter">{{ format(antimatter, 2, 1) }}</span> antimatter.</span>
    <div
      v-if="hasRealityButton"
      class="c-reality-container"
    >
      <RealityCurrencyHeader />
      <ArmageddonButton
        v-if="isDoomed"
        :is-header="true"
      />
      <RealityButton v-else />
    </div>
    <div v-else>
      You are getting {{ format(antimatterPerSec, 2) }} antimatter per second.
      <br>
      <HeaderTickspeedInfo />
    </div>
  </div>
</template>

<style scoped>
.c-reality-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
