import { defineComponent, PropType, SetupContext } from "vue";
import type { IButtonType, PropsType } from './type'

export const props = {
    type: {
        type: String as PropType<IButtonType>,
        default: 'default'
    }
}

export default defineComponent({
    name: "YzzButton",
    props,
    setup(props: PropsType, context: SetupContext) {
        const { type } = props
        const { slots } = context

        return () => <button
            class={`py-[2px] px-[8px] cursor-pointer rounded-[6px] text-${type === 'default' ? 'font-yzz-black' : 'font-yzz-white'} shadow-md bg-${type} hover:bg-${type}-500 active:bg-primary-700`}
        >
            <i class={'line-md:loading-twotone-loop'}></i> <span>{slots.default && slots.default()}</span>
        </button >;
    },

});