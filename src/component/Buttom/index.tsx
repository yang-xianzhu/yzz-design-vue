import { defineComponent, PropType, SetupContext, computed, defineEmits, toRefs } from "vue";
import type { IButtonType, IButtonShape, IButtonSize } from './type'

// TODO: 添加点击效果 v-handlerRipple={`bg-${type}`}

export const props = {
    type: {
        type: String as PropType<IButtonType>,
        default: "primary",
    },
    className: {
        type: String,
        default: "",
    },
    // 宽度是否跟随父容器宽度
    block: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    shape: {
        type: String as PropType<IButtonShape>,
        default: "default",
    },
    size: {
        type: String as PropType<IButtonSize>,
        default: "middle",
    },

};

export default defineComponent({
    name: "YzzButton",
    props,
    inheritAttrs: false,
    setup(props, context: SetupContext) {

        defineEmits<{
            (e: 'click'): void
        }>()

        const { type, block, disabled, className, shape, size } = toRefs(props)
        const { slots, emit } = context


        const btnClassNames = computed(() => {
            return `${block.value ? 'w-full' : ''} relative z-1 text-[12px] shadow-yzz-btn-color box-border border hover-ease-in duration-300 ${disabled.value ? 'yzz-isDisabled' : 'cursor-pointer hover:opacity-80'}`
        })

        // 计算btn的类型
        const btnTypeClassNames = computed(() => {
            return `bg-${type.value} border-${type.value} text-${type.value === 'default' ? 'font-yzz-black' : 'font-yzz-white'}`
        })

        // 计算btn的大小
        const btnSizeClassNames = computed(() => {

            const sizeObj = {
                small: 'px-[7px]',
                middle: 'py-[4px] px-[15px]',
                large: 'py-[7px] px-[15px]',
            }
            // 如果是跟随父容器就默认选择中尺寸的btn
            if (size.value !== 'middle' && block.value) {
                return sizeObj.middle
            }

            return sizeObj[size.value]
        })

        // 计算btn的形状
        const btnShapeClassNames = computed(() => {
            return `${shape.value === 'round' ? "rounded-full" : 'rounded-[6px]'}`
        })

        function handlerClick(e: Event) {
            emit('click', e)
        }

        return () => <div class={`relative box-border ${block.value ? '' : 'inline-block'} ${className.value}`}>
            <button
                v-handlerRipple
                class={`${btnClassNames.value} ${btnSizeClassNames.value} ${btnTypeClassNames.value} ${btnShapeClassNames.value}`}
                disabled={disabled.value}
                onClick={handlerClick}
            >
                <span>{slots.default && slots.default()}</span>
            </button >
        </div >
    },

});