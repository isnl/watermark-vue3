import { defineComponent, ref, watch, onMounted, onBeforeUnmount, openBlock, createElementBlock } from "vue";
var Watermark_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  __name: "Watermark",
  props: {
    options: {},
    visible: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const defaultOptions = {
      text: "\u6211\u662F\u6C34\u5370",
      fontSize: 14,
      fontFamily: "Microsoft YaHei",
      color: "rgba(0, 0, 0, 0.3)",
      rotate: -30,
      opacity: 0.5,
      width: 200,
      height: 100
    };
    const wrapperRef = ref(null);
    watch(
      () => props.visible,
      (val) => {
        wrapperRef.value.style.display = val ? "block" : "none";
      }
    );
    onMounted(() => {
      let options;
      options = {
        ...defaultOptions,
        ...props.options
      };
      const { text, fontSize, fontFamily, color, rotate, opacity, width, height } = options;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.rotate(rotate * Math.PI / 180);
      ctx.textAlign = "center";
      if (Array.isArray(text)) {
        text.forEach((item, index2) => {
          ctx.fillText(item, width / 2, height + 16 * index2);
        });
      } else {
        ctx.fillText(text, 0, height);
      }
      wrapperRef.value.style.backgroundImage = `url(${canvas.toDataURL()})`;
      wrapperRef.value.style.opacity = String(opacity);
    });
    onBeforeUnmount(() => {
      if (wrapperRef.value) {
        wrapperRef.value.remove();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "watermark-container",
        ref_key: "wrapperRef",
        ref: wrapperRef
      }, null, 512);
    };
  }
});
var Watermark = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5416d50"]]);
Watermark.install = (App) => {
  App.component(Watermark.__name, Watermark);
};
const components = [Watermark];
const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};
var index = { install };
export { Watermark, index as default };
