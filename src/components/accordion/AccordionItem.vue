<template>
  <li class="accordion__item mb-3">
    <div
      class="flex justify-between p-3"
      :class="{
        accordion__trigger_active: visible,
        'bg-primary-green text-white': visible,
        'bg-gray-200 text-primary-green': !visible,
      }"
      @click="open">
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
      <font-awesome-icon
        class="accordion__icon"
        :class="{ rotated: visible }"
        :icon="['fas', 'chevron-down']" />
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">
      <div class="accordion__content" v-if="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      this.Accordion.active = this.visible ? null : this.index;
    },

    // Called before enter
    start(el) {
      if (this.visible) {
        // entering: set initial height
        el.style.height = "0px";
        void el.offsetHeight; // force reflow
        el.style.transition = "height 0.3s ease, opacity 0.3s ease";
        el.style.height = el.scrollHeight + "px";
        el.style.opacity = "1";
      } else {
        // leaving: set current height to scrollHeight before collapsing
        el.style.height = el.scrollHeight + "px";
        void el.offsetHeight;
        el.style.transition = "height 0.3s ease, opacity 0.3s ease";
        el.style.height = "0px";
        el.style.opacity = "0";
      }
    },

    end(el) {
      el.style.transition = "";
      el.style.height = "";
      el.style.opacity = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
}

//   .accordion__trigger {
//     display: flex;
//   }

.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0;
  opacity: 0;
}
.accordion__icon {
  display: inline-block;
  margin-left: auto;
  transition: transform 0.3s ease;
}

.accordion__icon.rotated {
  transform: rotate(180deg);
}
</style>
