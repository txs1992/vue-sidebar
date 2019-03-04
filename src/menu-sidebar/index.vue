<template>
  <div class="cpt-menu-sidebar" :class="placement">
    <div class="menu-wrapper">
      <slot name="menu"></slot>
    </div>
    <div class="sidebar-content-wrapper">
      <div class="toggle-button" @click="sidebarVisible = !sidebarVisible">
        <i class="icon" :class="iconClass"></i>
      </div>
      <div class="content" :class="fadeClass">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
const DEFAULT_ICON = 'icon-caret-'

export default {
  props: {
    visible: Boolean,

    placement: {
      type: String,
      default: 'left'
    }
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
  },

  watch: {
    sidebarVisible(v) {
      const el = this.$el.querySelector('.content')
      if (el) {
        if (v) {
          el.style.width = '330px'
        } else {
          el.style.width = '0'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '/src/assets/font.css';

$white: #fff;
$border-style: 1px solid #c0c4cc;

.cpt-menu-sidebar {
  position: absolute;
  display: flex;
  height: 100%;

  .sidebar-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: $white;

    .content {
      width: 330px;
      overflow: hidden;
      transition: width 0.5s;
      box-sizing: border-box;
      border: $border-style;
    }

    .toggle-button {
      position: absolute;
      top: 50%;
      width: 20px;
      height: 50px;
      cursor: pointer;
      margin-top: -25px;
      line-height: 50px;

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

  &.left {
    left: 0;
    .sidebar-content-wrapper {
      .content {
        border-left: none;

        &.hide {
          border-right: none;
        }
      }

      .toggle-button {
        right: -22px;
      }
    }
  }

  &.right {
    right: 0;

    .sidebar-content-wrapper {
      .content {
        border-right: none;

        &.hide {
          border-left: none;
        }
      }

      .toggle-button {
        left: -22px;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
