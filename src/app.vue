<template>
  <div class="cpt-app">
    <menu-sidebar :visible.sync="visible">
      <div>内容</div>
    </menu-sidebar>
  </div>
</template>

<script>
import MenuSidebar from './menu-sidebar/index.vue'

export default {
  data() {
    return {
      visible: true,
      message: 'Hello Vue Menu Sidebar'
    }
  },

  components: {
    MenuSidebar
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.cpt-app {
  height: 100%;
}
</style>
