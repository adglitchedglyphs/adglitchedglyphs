<script>
import ExpandingControlBox from "@/components/ExpandingControlBox";
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import JumpToSaveDropdown from "@/components/modals/options/JumpToSaveDropdown.vue";
import {GameStorage} from "@/core/storage";

export default {
  name: "JumpToSave",
  components: {
    ModalWrapperChoice,
    ExpandingControlBox,
    JumpToSaveDropdown
  },
  data() {
    return {
      currentSave: "",
    };
  },
  computed: {
    saveName() {
      return this.currentSave?.name ?? "None Selected";
    },
    saveContent() {
      return this.currentSave?.content?? "skill issue";
    }
  },
  created() {
    this.currentSave = window.saveInJumpModal;
    window.saveInJumpModal = this.currentSave;
  },
  methods: {
    update() {
      this.currentSave = window.saveInJumpModal;
    },
    selectSave() {
      window.saveInJumpModal = this.currentSave;
      if(this.saveContent === "skill issue") this.cancel();
      GameStorage.import(this.saveContent)
    },
    cancel() {
      this.emitClose();
    },
  }
};
</script>

<template>
  <ModalWrapperChoice
    :cancel-fn="cancel"
    @confirm="selectSave"
  >
    <template #header>
      Choose a save to jump to
      <br>
      Saves taken from <a href="https://buck4437.github.io/save-bank/" target="_blank">the AD Save Bank</a>
    </template>
    <div class="c-center">
      <ExpandingControlBox
        class="o-primary-btn c-dropdown-btn"
      >
        <template #header>
          <div class="c-dropdown-header">
            ▼ Available Saves ▼
            <br>
            {{ saveName }}
          </div>
        </template>
        <template #dropdown>
          <JumpToSaveDropdown />
        </template>
      </ExpandingControlBox>
    </div>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-center {
  display: flex;
  flex-direction: column;
  width: 38rem;
  align-items: center;
}

.t-s12 .c-center {
  width: 50rem;
  text-align: center;
}

.c-dropdown-btn {
  width: 24rem;
  margin: 0.3rem;
  padding: 0;
}

.c-dropdown-header {
  height: 5rem;
  padding: 0.5rem;
  user-select: none;
}

.o-single-symbol {
  font-size: 3rem;
}

.o-single-glyph {
  padding: 0.5rem;
}
</style>
