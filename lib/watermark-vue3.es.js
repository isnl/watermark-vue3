import { defineComponent, ref, watch, onMounted, onBeforeUnmount, openBlock, createElementBlock } from "vue";
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
    const containerStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      "pointer-events": "none"
    };
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
        style: containerStyle,
        ref_key: "wrapperRef",
        ref: wrapperRef
      }, null, 512);
    };
  }
});
_sfc_main.install = (App) => {
  App.component(_sfc_main.__name, _sfc_main);
};
const components = [_sfc_main];
const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};
var index = { install };
export { _sfc_main as Watermark, index as default };
