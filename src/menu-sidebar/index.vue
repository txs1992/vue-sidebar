<template>
  <div class="cpt-menu-sidebar">
    <div class="menu-wrapper">
      <slot name="menu"></slot>
    </div>
    <div class="sidebar-content-wrapper" :class="fadeClass">
      <div class="toggle-button" @click="sidebarVisible = !sidebarVisible">
        <i class="icon" :class="iconClass"></i>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
const DEFAULT_ICON = 'icon-caret-'

export default {
  props: {
    visible: Boolean
  },

  computed: {
    sidebarVisible: {
      get({ visible }) {
        return visible
      },
      set(v) {
        this.$emit('update:visible', v)
      }
    },

    iconClass({ sidebarVisible: visible }) {
      return visible ? `${DEFAULT_ICON}left` : `${DEFAULT_ICON}right`
    },

    fadeClass({ sidebarVisible: visible }) {
      return visible ? 'show' : 'hide'
    }
  }
}
</script>

<style lang="scss">
@import '/src/assets/font.css';

$white: #fff;
$border-style: 1px solid #c0c4cc;

.cpt-menu-sidebar {
  position: relative;
  width: 70px;
  color: $white;
  height: 100%;
  z-index: 100;

  .sidebar-content-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 70px;
    top: 0px;
    bottom: 0px;
    width: 330px;
    z-index: -1;
    transition: right 0.5s;
    background: $white;
    border-top: $border-style;
    border-right: $border-style;

    &.hide {
      left: -260px;
    }

    &.show {
      left: 70px;
    }

    .toggle-button {
      position: absolute;
      top: 50%;
      right: -22px;
      width: 20px;
      height: 50px;
      cursor: pointer;
      margin-top: -25px;
      line-height: 50px;
      // transform: rotate(180deg);

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background: rgba(255, 255, 255, 0.8);
        transform: scaleY(1.5) perspective(5px) rotateY(5deg);
        border: $border-style;
        border-left-color: $white;
        border-right-width: 2px;
      }

      .icon.icon {
        font-size: 20px;
        vertical-align: sub;
        color: #000;
      }
    }
  }

  .menu-wrapper {
    z-index: 100;
    height: 100%;
    background: #666;
  }
}
</style>
