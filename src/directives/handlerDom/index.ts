import { DirectiveBinding, VNode, nextTick } from "vue";
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
  //   beforeUnmount(el, binding, vnode, prevVnode) {},
};
