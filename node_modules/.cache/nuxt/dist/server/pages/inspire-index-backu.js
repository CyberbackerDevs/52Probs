exports.ids = [5];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo_white.0addeb5.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg_black.b0c5726.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/streak.f5672c1.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("e003f1f8", content, true)

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("2bbbee5a", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspire_index_backu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspire_index_backu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspire_index_backu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspire_index_backu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspire_index_backu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(38);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50%;background-size:cover;min-height:100vh}.main-container{max-width:400px;margin:0 auto}.page-container{margin:20px;border-radius:20px}.page-container-inner{font-family:\"Roboto\",sans-serif}.d-main-first-title{text-transform:uppercase;font-size:47px;margin-top:-34px}.d-main-first-title,.d-main-number-base{font-weight:700;color:#fff;text-shadow:0 0 20px #0095eb}.d-main-number-base{font-size:240px;letter-spacing:-10px;line-height:1em;margin-top:40px}.d-main-second-title{color:#fff;font-size:66px;text-shadow:0 0 20px #0095eb;font-family:\"Square Peg\",cursive;transform:rotate(353deg);margin-top:-10px}.d-form-item{margin-bottom:18px}.d-thank-you-page{color:#fff;text-align:center}.d-thank-you-page h2{margin-bottom:15px}.d-form-item label{display:block;font-size:18px;line-height:1em;margin-bottom:5px;color:#fff}.d-form-item input,.d-form-item select{width:100%;border:1px solid #404b78;font-size:16px;line-height:1em;padding:15px;border-radius:10px;box-shadow:0 0 12px #0096eb;background:#fff}.d-text-item p{color:#fff;font-size:19px;font-weight:700;text-align:center}.d-text-item{margin-bottom:35px}.d-form-item.submitform{text-align:center}.d-form-item.submitform button{background:#0096eb;color:#fff;font-weight:700;line-height:1em;padding:15px 40px;border-radius:10px;margin-bottom:15px}.disclaimer-section{font-size:14px;color:#fff}.head-part{text-align:center;margin-top:40px}.head-part>*{vertical-align:middle}.d-colab-x{color:#0095eb;font-weight:lighter;font-size:30px;line-height:1em;margin:10px 0;text-shadow:0 0 20px #0095eb}.d-colab-one-mega{font-size:115px}.d-colab-one-agent,.d-colab-one-mega{font-weight:700;color:#fff;line-height:1em;text-shadow:0 0 20px #0095eb;margin-bottom:-20px}.d-colab-one-agent{font-size:100px}.d-colab-one-camp{font-size:115px;margin-bottom:-20px}.d-colab-one-camp,.d-colab-two{font-weight:700;color:#fff;line-height:1em;text-shadow:0 0 20px #0095eb}.d-colab-two{font-size:97px;letter-spacing:24px;margin-top:-10px}.d-form-instructions{color:#fff;text-align:center;margin-bottom:20px;margin-top:35px}.head-part .d-iamge img{width:300px}.head-part .d-rise{font-size:130px;font-weight:100;line-height:1em}.head-part .d-with{text-transform:uppercase;line-height:1em;margin-bottom:11px;font-size:26px;font-weight:300}.head-part .d-sep{transform:rotate(35deg);font-size:72px;line-height:1em;font-weight:100;margin-top:0}.d-search-part{margin-top:20px;text-align:center;padding:20px 0}.d-search-part h2{font-size:23px;font-weight:300;text-transform:uppercase}.d-search-part select{margin-top:10px;width:100%;text-align:-webkit-center;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50%;background-size:contain;color:#fff;font-size:17px;padding:21px 0;border-radius:5px;font-weight:700}.d-video-part{margin-top:30px;margin-bottom:60px}.d-video-part iframe{border:0}.disclaimer{font-size:12px;color:#0492e2}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressCircular/VProgressCircular.sass
var VProgressCircular = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
function inserted(el, binding, vnode) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === 'object' ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver((entries = [], observer) => {
    var _el$_observe;

    const _observe = (_el$_observe = el._observe) == null ? void 0 : _el$_observe[vnode.context._uid];

    if (!_observe) return; // Just in case, should never fire

    const isIntersecting = entries.some(entry => entry.isIntersecting); // If is not quiet or has already been
    // initted, invoke the user callback

    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(entries, observer, isIntersecting);
    }

    if (isIntersecting && modifiers.once) unbind(el, binding, vnode);else _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[vnode.context._uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}

function unbind(el, binding, vnode) {
  var _el$_observe2;

  const observe = (_el$_observe2 = el._observe) == null ? void 0 : _el$_observe2[vnode.context._uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[vnode.context._uid];
}

const Intersect = {
  inserted,
  unbind
};
/* harmony default export */ var intersect = (Intersect);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colorUtils.js
var colorUtils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js



/* harmony default export */ var colorable = (external_vue_default.a.extend({
  name: 'colorable',
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(console["a" /* consoleError */])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(console["a" /* consoleError */])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(colorUtils["d" /* isCssColor */])(color)) {
        data.style = { ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        };
      } else if (color) {
        data.class = { ...data.class,
          [color]: true
        };
      }

      return data;
    },

    setTextColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(console["a" /* consoleError */])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(console["a" /* consoleError */])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(colorUtils["d" /* isCssColor */])(color)) {
        data.style = { ...data.style,
          color: `${color}`,
          'caret-color': `${color}`
        };
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2);
        data.class = { ...data.class,
          [colorName + '--text']: true
        };

        if (colorModifier) {
          data.class['text--' + colorModifier] = true;
        }
      }

      return data;
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
// Styles
 // Directives

 // Mixins

 // Utils


/* @vue/component */

/* harmony default export */ var VProgressCircular_VProgressCircular = __webpack_exports__["a"] = (colorable.extend({
  name: 'v-progress-circular',
  directives: {
    intersect: intersect
  },
  props: {
    button: Boolean,
    indeterminate: Boolean,
    rotate: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 32
    },
    width: {
      type: [Number, String],
      default: 4
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    radius: 20,
    isVisible: true
  }),
  computed: {
    calculatedSize() {
      return Number(this.size) + (this.button ? 8 : 0);
    },

    circumference() {
      return 2 * Math.PI * this.radius;
    },

    classes() {
      return {
        'v-progress-circular--visible': this.isVisible,
        'v-progress-circular--indeterminate': this.indeterminate,
        'v-progress-circular--button': this.button
      };
    },

    normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return parseFloat(this.value);
    },

    strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },

    strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },

    strokeWidth() {
      return Number(this.width) / +this.size * this.viewBoxSize * 2;
    },

    styles() {
      return {
        height: Object(helpers["c" /* convertToUnit */])(this.calculatedSize),
        width: Object(helpers["c" /* convertToUnit */])(this.calculatedSize)
      };
    },

    svgStyles() {
      return {
        transform: `rotate(${Number(this.rotate)}deg)`
      };
    },

    viewBoxSize() {
      return this.radius / (1 - Number(this.width) / +this.size);
    }

  },
  methods: {
    genCircle(name, offset) {
      return this.$createElement('circle', {
        class: `v-progress-circular__${name}`,
        attrs: {
          fill: 'transparent',
          cx: 2 * this.viewBoxSize,
          cy: 2 * this.viewBoxSize,
          r: this.radius,
          'stroke-width': this.strokeWidth,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },

    genSvg() {
      const children = [this.indeterminate || this.genCircle('underlay', 0), this.genCircle('overlay', this.strokeDashOffset)];
      return this.$createElement('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`
        }
      }, children);
    },

    genInfo() {
      return this.$createElement('div', {
        staticClass: 'v-progress-circular__info'
      }, this.$slots.default);
    },

    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-progress-circular',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: this.styles,
      on: this.$listeners
    }), [this.genSvg(), this.genInfo()]);
  }

}));

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/inspire-index-backu.vue?vue&type=template&id=7ce7a268&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-container"},[_vm._ssrNode("<div class=\"page-container-inner\">","</div>",[_vm._ssrNode("<div class=\"head-part\"><div class=\"d-iamge\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+"></div> <div class=\"d-colab-x\">X</div> <div class=\"d-colab-one-mega\">MEGA</div> <div class=\"d-colab-one-agent\">AGENT</div> <div class=\"d-colab-one-camp\">CAMP</div> <div class=\"d-colab-two\">2022</div> <div class=\"d-main-number-base\">52</div> <div class=\"d-main-first-title\">Challenges</div> <div class=\"d-main-second-title\">What do you do?</div></div> <div class=\"d-search-part\"><select name id>"+(_vm._ssrList((_vm.issues),function(item,index){return ("<option"+(_vm._ssrAttr("value",item.vid))+">"+_vm._ssrEscape(_vm._s(item.name))+"</option>")}))+"</select></div> "),_vm._ssrNode("<div class=\"d-video-part\">","</div>",[(_vm.showform)?_vm._ssrNode("<div class=\"d-form-now\">","</div>",[(!_vm.show_thank_you)?_vm._ssrNode("<div class=\"d-form-now-inner\">","</div>",[_vm._ssrNode(((_vm.selectedVid != '' && _vm.selectedVid != 'none')?("<div class=\"d-video-item\"><iframe"+(_vm._ssrAttr("src",_vm.selectedVid))+" width=\"100%\" height=\"270\" allow=\"autoplay\"></iframe> <div class=\"disclaimer\">*this video should not be reproduced</div></div>"):"<!---->")+" "+((_vm.selectedVid == '')?("<div class=\"d-text-item\"><iframe src=\"https://www.youtube.com/embed/Kp9qGrfF3Tg\" width=\"100%\" height=\"270\" allow=\"autoplay\"></iframe> <div class=\"disclaimer\">*this video should not be reproduced</div></div>"):"<!---->")+" <div class=\"d-form-instructions\">Signup below and one of our amazing Growth Backer will call you right away to schedule your FREE business evaluation call.</div> <div class=\"d-form-item\"><label for>Full Name "+((_vm.error_name)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.name)))+"></div> <div class=\"d-form-item\"><label for>Mobile Number "+((_vm.error_mobile)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.mobile)))+"></div> <div class=\"d-form-item\"><label for>Email Address "+((_vm.error_email)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.email)))+"></div> <div class=\"d-form-item\"><label for>Job Title</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.job_title)))+"></div> "),_vm._ssrNode("<div class=\"d-form-item\">","</div>",[_vm._ssrNode("<label for>Industry "+((_vm.error_email)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.industry),expression:"form.industry"}],attrs:{"name":"","id":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "industry", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.onIndustryChange($event)}]}},[_c('option',{attrs:{"value":"Real estate agent"}},[_vm._v("Real estate agent")]),_vm._v(" "),_c('option',{attrs:{"value":"Mortgage"}},[_vm._v("Mortgage")]),_vm._v(" "),_c('option',{attrs:{"value":"Title"}},[_vm._v("Title")]),_vm._v(" "),_c('option',{attrs:{"value":"CRM"}},[_vm._v("CRM")]),_vm._v(" "),_c('option',{attrs:{"value":"Technology"}},[_vm._v("Technology")]),_vm._v(" "),_c('option',{attrs:{"value":"Marketing/Social Media"}},[_vm._v("Marketing/Social Media")]),_vm._v(" "),_c('option',{attrs:{"value":"Lead Generation"}},[_vm._v("Lead Generation")]),_vm._v(" "),_c('option',{attrs:{"value":"Home Warranty"}},[_vm._v("Home Warranty")]),_vm._v(" "),_c('option',{attrs:{"value":"Insurance"}},[_vm._v("Insurance")]),_vm._v(" "),_c('option',{attrs:{"value":"E-commerce"}},[_vm._v("E-commerce")]),_vm._v(" "),_c('option',{attrs:{"value":"Travel/Tourism"}},[_vm._v("Travel/Tourism")]),_vm._v(" "),_c('option',{attrs:{"value":"Education"}},[_vm._v("Education")]),_vm._v(" "),_c('option',{attrs:{"value":"Financial"}},[_vm._v("Financial")]),_vm._v(" "),_c('option',{attrs:{"value":"Office/Administration"}},[_vm._v("Office/Administration")]),_vm._v(" "),_c('option',{attrs:{"value":"Human Resources"}},[_vm._v("Human Resources")]),_vm._v(" "),_c('option',{attrs:{"value":"Tax Consulting"}},[_vm._v("Tax Consulting")]),_vm._v(" "),_c('option',{attrs:{"value":"Healthcare"}},[_vm._v("Healthcare")]),_vm._v(" "),_c('option',{attrs:{"value":"Arts/Entertainment"}},[_vm._v("Arts/Entertainment")]),_vm._v(" "),_c('option',{attrs:{"value":"Retail"}},[_vm._v("Retail")]),_vm._v(" "),_c('option',{attrs:{"value":"Other"}},[_vm._v("Other")])])],2),_vm._ssrNode(" "+((_vm.show_other_industry)?("<div class=\"d-form-item\"><label for>Other Industry</label> <input type=\"text\" placeholder=\"Enter other industry\""+(_vm._ssrAttr("value",(_vm.other_industry)))+"></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"d-form-item\">","</div>",[_vm._ssrNode("<label for>State "+((_vm.error_state)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.state),expression:"form.state"}],attrs:{"name":"","id":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "state", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.states),function(state){return _c('option',{key:state,domProps:{"value":state}},[_vm._v(_vm._s(state))])}),0)],2),_vm._ssrNode(" <div class=\"d-form-item\"><label for>County "+((_vm.error_county)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.county)))+"></div> <div class=\"d-form-item\"><label for>Country "+((_vm.error_country)?("<span class=\"form-is-required\">*required</span>"):"<!---->")+"</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.country)))+"></div> "),_vm._ssrNode("<div class=\"d-form-item submitform\">","</div>",[_vm._ssrNode("<button>","</button>",[_vm._ssrNode("Submit "),(_vm.show_loading)?_vm._ssrNode("<span>","</span>",[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1):_vm._e()],2),_vm._ssrNode(" <div class=\"disclaimer-section\">Disclaimer: Once you fill out this form, you are giving us permission to contact you and will send you emails about cyberbacker.</div>")],2)],2):_vm._e(),_vm._ssrNode(" "+((_vm.show_thank_you)?("<div class=\"d-main-form-inner thank-you-wrapper\"><div class=\"d-thank-you-page\"><h2>Congratulations for completing the first step!</h2> <div class=\"d-thank-you-content\"><p>Please visit us on our both at both 709</p></div></div></div>"):"<!---->"))],2):_vm._e()])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/inspire-index-backu.vue?vue&type=template&id=7ce7a268&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(31);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/inspire-index-backu.vue?vue&type=script&lang=js&
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

/* harmony default export */ var inspire_index_backuvue_type_script_lang_js_ = ({
  name: 'IndexPage',

  data() {
    return {
      show_other_industry: false,
      show_thank_you: false,
      show_loading: false,
      error_name: false,
      error_email: false,
      error_mobile: false,
      error_state: false,
      error_county: false,
      error_country: false,
      showform: false,
      other_industry: '',
      form: {
        'name': '',
        'email': '',
        'mobile': '',
        'industry': '',
        'state': '',
        'county': '',
        'job_title': '',
        'country': '',
        'problem': ''
      },
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      selectedVid: 'none',
      issues: [{
        name: 'Please select a problem',
        vid: 'none'
      }, {
        name: 'Updating ANY notes in the CRM. What to do?',
        vid: 'https://www.youtube.com/embed/cT089IAYIcY'
      }, {
        name: 'I don’t want to hire a VA because they might STEAL all my data. What to do?',
        vid: 'https://www.youtube.com/embed/Mm-y6gJCcV4'
      }, {
        name: 'I am not sure how I will know if I have the right person',
        vid: 'https://www.youtube.com/embed/bexpuKeY7_s'
      }, {
        name: 'Retaining people',
        vid: 'https://www.youtube.com/embed/wB4MENoIQfY'
      }, {
        name: 'I don’t know how to start working with someone virtually ',
        vid: 'https://www.youtube.com/embed/EZEl_3X8dCo'
      }, {
        name: 'My first virtual assistant did not work',
        vid: 'https://www.youtube.com/embed/y8wbKQSLtyo'
      }, {
        name: 'I don’t know how to train someone new',
        vid: 'https://www.youtube.com/embed/ReKP7zQAleg'
      }, {
        name: 'Knowing the opportunities of your virtual assistant',
        vid: 'https://www.youtube.com/embed/h1KarNqossk'
      }, {
        name: 'I am too busy to provide continuous training to my virtual assistant.',
        vid: 'https://www.youtube.com/embed/CQKcp5kDDc4'
      }, {
        name: 'I don’t know what to leverage',
        vid: 'https://www.youtube.com/embed/4K7iq7dBlXY'
      }, {
        name: 'I’m afraid I might hire a criminal',
        vid: 'https://www.youtube.com/embed/GbsobBiUtzs'
      }, {
        name: 'I’m having a hard time saying no when a virtual assistant solicits',
        vid: 'https://www.youtube.com/embed/f45dU7y82Wg'
      }, {
        name: 'I’m afraid I might hire someone and find out they\'re not perfectly fit with my business',
        vid: 'https://www.youtube.com/embed/p5JyUUcIG8s'
      }, {
        name: 'Hiring virtually costs too much',
        vid: 'https://www.youtube.com/embed/RgtN-MQTJiM'
      }, {
        name: 'I’ve had a lot of bad experience directly hiring virtual assistants',
        vid: 'https://www.youtube.com/embed/qRw56X7ODiI'
      }, {
        name: 'The last time I hired a virtual assistant, we were not compatible.',
        vid: 'https://www.youtube.com/embed/emYrDmxzhCo'
      }, {
        name: 'I’m afraid I might just get scammed if I hire a virtual assistant',
        vid: 'https://www.youtube.com/embed/5JWbDIRiugI'
      }, {
        name: 'No database. What to do?',
        vid: 'https://www.youtube.com/embed/ELYjIDl9Xvk'
      }, {
        name: 'Missing a lot of important calls. What to do?',
        vid: 'https://www.youtube.com/embed/BEGv6wN_H4A'
      }, {
        name: 'My admin/VA just quit. What do I do?',
        vid: 'https://www.youtube.com/embed/9KiM1Dpen8Y'
      }, {
        name: 'I don’t track my leads. What do I do?',
        vid: 'https://www.youtube.com/embed/'
      }, {
        name: 'Not setting enough appointments',
        vid: 'https://www.youtube.com/embed/gGl0Ejuwmik'
      }, {
        name: 'Confirming and attending appointments',
        vid: 'https://www.youtube.com/embed/6TbfjZYKq2A'
      }, {
        name: 'Tracking where leads come from to establish ROI',
        vid: 'https://www.youtube.com/embed/'
      }, {
        name: 'Converting leads to an appointment',
        vid: 'https://www.youtube.com/embed/61jO-MsUzkw'
      }, {
        name: 'Protecting your lead generation focus time',
        vid: 'https://www.youtube.com/embed/o6DmOTYiM3k'
      }, {
        name: 'Implementing a systematic follow-up plan',
        vid: 'https://www.youtube.com/embed/sooiVGKe2eA'
      }, {
        name: 'Taking the time to input a listing and upload photos',
        vid: 'https://www.youtube.com/embed/_sgNiDfhNLI'
      }, {
        name: 'Marketing to your database',
        vid: 'https://www.youtube.com/embed/PWa-7AasmZw'
      }, {
        name: 'Missing important emails and text messages',
        vid: 'https://www.youtube.com/embed/Tf-S-5c0_Qk'
      }, {
        name: 'No social media presence',
        vid: 'https://www.youtube.com/embed/-nK-4n5WEzY'
      }, {
        name: 'Consistently marketing to database',
        vid: 'https://www.youtube.com/embed/VgpWhOYw3mg'
      }, {
        name: 'Missing deadlines for transactions',
        vid: 'https://www.youtube.com/embed/Y6rWTkkSwZQ'
      }, {
        name: 'Low Inventory of listings and leads',
        vid: 'https://www.youtube.com/embed/MfpFFVWoB5E'
      }, {
        name: 'Growing Online Competition From Listing Portals',
        vid: 'https://www.youtube.com/embed/r8uEjnHbVVQ'
      }, {
        name: 'Adapting To Technology Trends',
        vid: 'https://www.youtube.com/embed/UMe9DFcFUnM'
      }, {
        name: 'Costly Lead Generation',
        vid: 'https://www.youtube.com/embed/v6llykHp3AU'
      }, {
        name: 'Cultivating A Database (nurturing leads)',
        vid: 'https://www.youtube.com/embed/WbyWDYwyGw'
      }, {
        name: 'Tracking leads from different lead sources and check conversions',
        vid: 'https://www.youtube.com/embed/5UzmktFuuf8'
      }, {
        name: 'Not knowing where the deal is in the sales process',
        vid: 'https://www.youtube.com/embed/F7NF-5VhTlY'
      }, {
        name: 'Failing to leverage on referrals',
        vid: 'https://www.youtube.com/embed/HMZaZibOkuE'
      }, {
        name: 'Managing paperwork',
        vid: 'https://www.youtube.com/embed/4Joy2f3Z7Jk'
      }, {
        name: 'Dealing with tons of rejections because they cannot handle objections',
        vid: 'https://www.youtube.com/embed/W-0eoXTXapg'
      }, {
        name: 'Most people get into real estate with the expectation of having a lot of time',
        vid: 'https://www.youtube.com/embed/'
      }, {
        name: 'Not marketing online',
        vid: 'https://www.youtube.com/embed/2vauT4DyjaQ'
      }, {
        name: 'Having a hard time Managing Your Clients Expectations (more on customer service)',
        vid: 'https://www.youtube.com/embed/j27qDJ7mZSc'
      }, {
        name: 'Dont Know How To Lead Generate',
        vid: 'https://www.youtube.com/embed/3Adgm-XrPcM'
      }, {
        name: 'Dont Understand How Or Where To Market Themselves And Their Business',
        vid: 'https://www.youtube.com/embed/L5jHBENmYkk'
      }, {
        name: 'Todays buyers and sellers both want to self-service (hiring the right ISA)',
        vid: 'https://www.youtube.com/embed/7BtTcGrVJN8'
      }, {
        name: 'No money management',
        vid: 'https://www.youtube.com/embed/'
      }, {
        name: 'No referral network with other agents (getting updates and status)',
        vid: 'https://www.youtube.com/embed/4-Ovx0ENK_0'
      }, {
        name: 'Managing KW Command',
        vid: 'https://www.youtube.com/embed/Ywu5qkmgcoQ'
      }]
    };
  },

  methods: {
    changeProblem(event) {
      console.log(event.target.value);
      this.selectedVid = event.target.value; // this.form.problem = event.target.name;

      this.showform = event.target.value == 'none' ? false : true;
    },

    onIndustryChange(event) {
      console.log(event.target.value);

      if (event.target.value == 'Other') {
        this.show_other_industry = true;
      } else {
        this.show_other_industry = false;
      }
    },

    submitForm() {
      console.log('process info -> ', this.form);
      this.show_loading = true; // validation

      let isHasError = false;
      this.error_name = false;
      this.error_email = false;
      this.error_mobile = false;
      this.error_state = false;
      this.error_county = false;
      this.error_country = false;

      if (this.form.name == '') {
        this.error_name = true;
        isHasError = true;
      }

      if (this.form.email == '') {
        this.error_email = true;
        isHasError = true;
      }

      if (this.form.mobile == '') {
        this.error_mobile = true;
        isHasError = true;
      }

      if (this.form.state == '') {
        this.error_state = true;
        isHasError = true;
      }

      if (this.form.county == '') {
        this.error_county = true;
        isHasError = true;
      }

      if (this.form.country == '') {
        this.error_country = true;
        isHasError = true;
      }

      if (isHasError) {
        this.show_loading = false;
        return;
      }

      if (this.show_other_industry) {
        this.form.industry = this.other_industry;
      } // console.log('all fields has been filled -> ', this.form);
      // get tab number


      let dselectedtab = this.$route.query.tablet; // console.log(dselectedtab);

      this.form.gsheet_id = "Tablet " + dselectedtab; // this.form.problem = this.selectedVid;

      external_axios_default.a.post("https://be2.applytocyberbacker.com/api/fifty-two/savetogsheet", this.form).then(response => {
        // console.log('saving response -> ', response);
        this.show_loading = false;
        this.show_thank_you = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/inspire-index-backu.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_inspire_index_backuvue_type_script_lang_js_ = (inspire_index_backuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(13);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js + 2 modules
var VProgressCircular = __webpack_require__(54);

// CONCATENATED MODULE: ./pages/inspire-index-backu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_inspire_index_backuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "091abb56"
  
)

/* harmony default export */ var inspire_index_backu = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VProgressCircular: VProgressCircular["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=inspire-index-backu.js.map