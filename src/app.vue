<template>
  <div class="cpt-app">
    <menu-sidebar :visible.sync="visible">
      <div slot="menu" style="background: red">menu</div>
      <div>内容</div>
    </menu-sidebar>
    <menu-sidebar placement="right" :visible.sync="rightVisible">
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
      rightVisible: true,
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
  position: relative;
  background: #f1f1f1;
}
</style>
