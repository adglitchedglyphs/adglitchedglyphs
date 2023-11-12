<script>
import GlyphComponent from "@/components/GlyphComponent";
import PrimaryButton from "@/components/PrimaryButton";
import TMTRAINERGlitcher from "./TMTRAINERGlitcher";

export default {
  name: "TMTRAINERMachine",
  components: {
    GlyphComponent,
    PrimaryButton,
    TMTRAINERGlitcher
  },
  computed: {
    chance() {
      return window.player.reality.glyphs.tmtrainerSuccessRate * 100;
    },
  },
  methods: {
    debugGlyph() {
      if(window.player.reality.perkPoints < 1 || window.player.celestials.pelle.doomed) {
          let message = "You need at least 1 Perk Point to reveal a Glyph's effects!";
          if(window.player.celestials.pelle.doomed)
          message = "+9999999999% Pelle Pelle Pelle Pelle Pelle Pelle Pelle Pelle Pelle Pelle Pelle Pelle Pelle\\0";
          Modal.message.show(message);
          return;
      }
      let revealed = window.revealTMT();
      if(revealed === "") {
          Modal.message.show("You have no Glitched Glyph equipped!");
          return;
      }
      Modal.message.show(
          "<h1>Glyph effects revealed:</h1><br>" +
          revealed +
          "<br><h3>Your Perk Points have been set to 0!</h3>"
      );
      window.player.reality.perkPoints = 0;
    },
  }
};
</script>

<template>
  <div class="c-current-glyph-effects l-current-glyph-effects">
    <div class="c-current-glyph-effects__header" id="tmtrainer-chance-text-uwu">
        The TMTRAINER has a {{ chance }}% chance to turn a Glyph into a Glitched Glyph, but a
        {{ 100 - chance }}% chance to destroy it.
    </div>
    <TMTRAINERGlitcher />
    <br>
    <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="debugGlyph"
    >
      Reveal Effects
    </PrimaryButton>
    <div class="l-sacrificed-glyphs__help">
        If you have a Glitched Glyph equipped, open a modal<br>
        explaining its effects in exchange for all of your Perk Points.<br>
        Effects will still appear glitched in the Glyph's tooltip.
        Keep in mind that a Glitched Glyph's name never changes.<br>
        Some Glitched Effects may not immediately trigger their changes!
    </div>
  </div>
</template>

<style scoped>
.c-single-glyph-cosmetic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 1rem);
  height: 8rem;
  font-size: 1.2rem;
  border: 0.1rem solid #b8b8b8;
  border-radius: var(--var-border-radius, 0.5rem);
  padding: 0.5rem;
  margin-top: 1rem;
  user-select: none;
}

.c-glyph-info {
  display: flex;
  flex-direction: row;
}

.c-glyph-info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 1rem;
}

.c-cosmetic-text {
  width: 18rem;
}
</style>
