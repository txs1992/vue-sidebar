(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MenuSidebar = factory());
}(this, function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const DEFAULT_ICON = 'icon-caret-';

  var script = {
    name: 'MenuSidebar',

    props: {
      visible: Boolean,

      width: {
        type: String,
        default: '300px'
      },

      placement: {
        type: String,
        default: 'left'
      }
    },

    data() {
      return {
        contentEL: null
      }
    },

    mounted() {
      const el = this.$el.querySelector('.content-wrapper');
      const content = el.querySelector('.content');
      if (el && content) {
        this.contentEL = el;
        el.style.width = this.width;
        content.style.width = this.width;
      }
    },

    computed: {
      sidebarVisible: {
        get({ visible }) {
          return visible
        },
        set(v) {
          this.$emit('update:visible', v);
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
        if (this.contentEL) {
          if (v) {
            this.contentEL.style.width = this.width;
          } else {
            this.contentEL.style.width = 0;
          }
        }
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "cpt-menu-sidebar", class: _vm.placement }, [
      _c("div", { staticClass: "menu-wrapper" }, [_vm._t("menu")], 2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sidebar-content-wrapper", class: _vm.fadeClass },
        [
          _c(
            "div",
            {
              staticClass: "toggle-button",
              on: {
                click: function($event) {
                  _vm.sidebarVisible = !_vm.sidebarVisible;
                }
              }
            },
            [_c("i", { staticClass: "icon", class: _vm.iconClass })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "content-wrapper" }, [
            _c("div", { staticClass: "content" }, [_vm._t("default")], 2)
          ])
        ]
      )
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-f6767c76_0", { source: "@import url(/src/assets/font.css);\n.cpt-menu-sidebar {\n  position: absolute;\n  display: flex;\n  height: 100%;\n}\n.cpt-menu-sidebar .sidebar-content-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n}\n.cpt-menu-sidebar .sidebar-content-wrapper .content-wrapper {\n      overflow: hidden;\n      transition: width 0.5s;\n}\n.cpt-menu-sidebar .sidebar-content-wrapper .toggle-button {\n      position: absolute;\n      top: 50%;\n      width: 20px;\n      height: 50px;\n      cursor: pointer;\n      margin-top: -25px;\n      line-height: 50px;\n}\n.cpt-menu-sidebar .sidebar-content-wrapper .toggle-button::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background: rgba(255, 255, 255, 0.8);\n        transform: scaleY(1.5) perspective(5px) rotateY(5deg);\n}\n.cpt-menu-sidebar .sidebar-content-wrapper .toggle-button .icon.icon {\n        font-size: 20px;\n        vertical-align: sub;\n        color: #000;\n}\n.cpt-menu-sidebar.left {\n    left: 0;\n}\n.cpt-menu-sidebar.left .sidebar-content-wrapper .toggle-button {\n      right: -22px;\n}\n.cpt-menu-sidebar.right {\n    right: 0;\n}\n.cpt-menu-sidebar.right .sidebar-content-wrapper .toggle-button {\n      left: -22px;\n      transform: rotate(180deg);\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["/Users/txs1992/my-github/vue-menu-sidebar/src/menu-sidebar/index.vue","index.vue"],"names":[],"mappings":"AAwFA,iCAAA;AAIA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;AAAA;AAHA;IAMA,OAAA;IACA,aAAA;IACA,sBAAA;IACA,gBAXA;AAAA;AAEA;MAYA,gBAAA;MACA,sBAAA;AAAA;AAbA;MAiBA,kBAAA;MACA,QAAA;MACA,WAAA;MACA,YAAA;MACA,eAAA;MACA,iBAAA;MACA,iBAAA;AAAA;AAvBA;QA0BA,kBAAA;QACA,MAAA;QACA,OAAA;QACA,QAAA;QACA,SAAA;QACA,WAAA;QACA,oCAAA;QACA,qDAAA;AAAA;AAjCA;QAqCA,eAAA;QACA,mBAAA;QACA,WAAA;AAAA;AAvCA;IA6CA,OAAA;AAAA;AA7CA;MAgDA,YAAA;AAAA;AAhDA;IAsDA,QAAA;AAAA;AAtDA;MA0DA,WAAA;MACA,yBAAA;AAAA;;AC3GA,oCAAoC","file":"index.vue","sourcesContent":["<template>\n  <div class=\"cpt-menu-sidebar\" :class=\"placement\">\n    <div class=\"menu-wrapper\">\n      <slot name=\"menu\"></slot>\n    </div>\n    <div class=\"sidebar-content-wrapper\" :class=\"fadeClass\">\n      <div class=\"toggle-button\" @click=\"sidebarVisible = !sidebarVisible\">\n        <i class=\"icon\" :class=\"iconClass\"></i>\n      </div>\n      <div class=\"content-wrapper\">\n        <div class=\"content\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nconst DEFAULT_ICON = 'icon-caret-'\n\nexport default {\n  name: 'MenuSidebar',\n\n  props: {\n    visible: Boolean,\n\n    width: {\n      type: String,\n      default: '300px'\n    },\n\n    placement: {\n      type: String,\n      default: 'left'\n    }\n  },\n\n  data() {\n    return {\n      contentEL: null\n    }\n  },\n\n  mounted() {\n    const el = this.$el.querySelector('.content-wrapper')\n    const content = el.querySelector('.content')\n    if (el && content) {\n      this.contentEL = el\n      el.style.width = this.width\n      content.style.width = this.width\n    }\n  },\n\n  computed: {\n    sidebarVisible: {\n      get({ visible }) {\n        return visible\n      },\n      set(v) {\n        this.$emit('update:visible', v)\n      }\n    },\n\n    iconClass({ sidebarVisible: visible }) {\n      return visible ? `${DEFAULT_ICON}left` : `${DEFAULT_ICON}right`\n    },\n\n    fadeClass({ sidebarVisible: visible }) {\n      return visible ? 'show' : 'hide'\n    }\n  },\n\n  watch: {\n    sidebarVisible(v) {\n      if (this.contentEL) {\n        if (v) {\n          this.contentEL.style.width = this.width\n        } else {\n          this.contentEL.style.width = 0\n        }\n      }\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\">\n@import '/src/assets/font.css';\n\n$white: #fff;\n\n.cpt-menu-sidebar {\n  position: absolute;\n  display: flex;\n  height: 100%;\n\n  .sidebar-content-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: $white;\n\n    .content-wrapper {\n      overflow: hidden;\n      transition: width 0.5s;\n    }\n\n    .toggle-button {\n      position: absolute;\n      top: 50%;\n      width: 20px;\n      height: 50px;\n      cursor: pointer;\n      margin-top: -25px;\n      line-height: 50px;\n\n      &::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background: rgba(255, 255, 255, 0.8);\n        transform: scaleY(1.5) perspective(5px) rotateY(5deg);\n      }\n\n      .icon.icon {\n        font-size: 20px;\n        vertical-align: sub;\n        color: #000;\n      }\n    }\n  }\n\n  &.left {\n    left: 0;\n    .sidebar-content-wrapper {\n      .toggle-button {\n        right: -22px;\n      }\n    }\n  }\n\n  &.right {\n    right: 0;\n\n    .sidebar-content-wrapper {\n      .toggle-button {\n        left: -22px;\n        transform: rotate(180deg);\n      }\n    }\n  }\n}\n</style>\n","@import url(/src/assets/font.css);\n.cpt-menu-sidebar {\n  position: absolute;\n  display: flex;\n  height: 100%; }\n  .cpt-menu-sidebar .sidebar-content-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: #fff; }\n    .cpt-menu-sidebar .sidebar-content-wrapper .content-wrapper {\n      overflow: hidden;\n      transition: width 0.5s; }\n    .cpt-menu-sidebar .sidebar-content-wrapper .toggle-button {\n      position: absolute;\n      top: 50%;\n      width: 20px;\n      height: 50px;\n      cursor: pointer;\n      margin-top: -25px;\n      line-height: 50px; }\n      .cpt-menu-sidebar .sidebar-content-wrapper .toggle-button::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background: rgba(255, 255, 255, 0.8);\n        transform: scaleY(1.5) perspective(5px) rotateY(5deg); }\n      .cpt-menu-sidebar .sidebar-content-wrapper .toggle-button .icon.icon {\n        font-size: 20px;\n        vertical-align: sub;\n        color: #000; }\n  .cpt-menu-sidebar.left {\n    left: 0; }\n    .cpt-menu-sidebar.left .sidebar-content-wrapper .toggle-button {\n      right: -22px; }\n  .cpt-menu-sidebar.right {\n    right: 0; }\n    .cpt-menu-sidebar.right .sidebar-content-wrapper .toggle-button {\n      left: -22px;\n      transform: rotate(180deg); }\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var MenuSidebar = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  MenuSidebar.install = function(Vue) {
    Vue.component(MenuSidebar.name, MenuSidebar);
  };

  return MenuSidebar;

}));
