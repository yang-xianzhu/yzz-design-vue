import { DirectiveBinding, VNode } from "vue";

// 自定义指令：v-ripple
// 附加dom一些涟漪效果
export const handlerRipple = {
  name: "handlerRipple",
  mounted(
    el: HTMLButtonElement,
    binding: DirectiveBinding,
    vnode: VNode,
    prevVnode: VNode
  ) {
    // console.log(el, binding, vnode, prevVnode);
    const { value } = binding;

    // const div = document.createElement("div") as HTMLDivElement;
    // const { clientWidth, clientHeight } = el;

    // const width = Math.ceil(clientWidth);
    // const height = Math.ceil(clientHeight);

    // //   console.log(clientHeight);
    // //   console.log(clientWidth);
    // //   console.log(el.parentNode);
    // div.style.cssText = `position:absolute;left:0;top:0;z-index:0;width:${width}px;height:${height}px;background:#c1dafd;border-radius: 6px;pointer-events: none;  transform: scale(1.1);
    // transition: transform 0.8s;`;
    // el.parentNode.appendChild(div);
    // setTimeout(() => {
    //   div.remove();
    // }, 600);

    // el.addEventListener("animationend", () => {
    //   el.classList.remove("btn-active");
    // });
  },
};

// 禁止页面滚动
export const handleScroll = {
  name: "handleScroll",
  mounted(_: HTMLButtonElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (!value) return;
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
  beforeUpdate(_: HTMLButtonElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (value) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  },
};

export const handleDraggable = {
  name: "handleDraggable",

  mounted(el: HTMLButtonElement, binding: DirectiveBinding) {
    const { value } = binding;
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el: HTMLButtonElement, binding: DirectiveBinding) {
    const { value } = binding;
    const { draggable, modelValue } = value || {};
    // console.log("value", value);
    if (!draggable || !modelValue) {
      return;
    }

    let isDrag = false;
    let left: number;
    let top: number;

    function dragMouseMove(event) {
      if (!isDrag) return;
      const box = el.parentNode as HTMLElement;

      const _h = window.innerHeight - box.offsetHeight;
      const _w = window.innerWidth - box.offsetWidth;

      // console.log((el.parentNode as HTMLElement));
      let x = event.clientX - left;
      let y = event.clientY - top;

      x = x > _w ? _w : x;
      y = y > _h ? _h : y;
      // x = Math.min(Math.max(0, x), _w);
      // y = Math.min(Math.max(0, y), _h);
      // console.log("x", x);
      // console.log("y", y);

      (el.parentNode as HTMLElement).style.left = `${x}px`;
      (el.parentNode as HTMLElement).style.top = `${y}px`;
    }

    el.addEventListener("mousedown", (event) => {
      isDrag = true;
      (el.parentNode as HTMLElement).style.transition = "none";
      // clientX：当前元素距离HTML元素的left偏移量
      // offsetX：当前元素距离父盒子的left偏移量
      left = event.offsetX;
      top = event.offsetY;
      document.addEventListener("mousemove", dragMouseMove);
    });

    el.addEventListener("mouseup", () => {
      console.log("松开了");
      isDrag = false;
      document.removeEventListener("mousemove", dragMouseMove);
      (el.parentNode as HTMLElement).style.transition = "";
    });
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el: HTMLButtonElement, binding: DirectiveBinding) {
    const { value } = binding;

    console.log("beforeUnmount", value);
  },
};
