import { defineComponent, PropType, SetupContext, computed, defineEmits, toRefs } from "vue";
import type { IButtonType, IButtonShape, IButtonSize, IButtonIcons } from './type'

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
    loading: {
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
    icon: {
        type: String as PropType<IButtonIcons>,
        default: "",
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

        const { type, block, disabled, className, shape, size, loading, icon } = toRefs(props)
        const { slots, emit } = context

        const btnClassNames = computed(() => {
            return `${block.value ? 'w-full' : ''} focus-opacity-60 flexCenter relative z-1 shadow-yzz-btn-color box-border border hover-ease-in duration-300 ${disabled.value ? 'yzz-isDisabled' : ' hover:opacity-60'}`
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

            if (shape.value === 'circle') {
                return `p-[8px] line-height-none text-[14px]`
            }

            if (icon.value && !(slots.default && slots.default())) {
                return `p-[4px]`
            }

            return sizeObj[size.value]
        })

        // 计算btn的形状
        const btnShapeClassNames = computed(() => {
            const roundedType = {
                'round': 'rounded-full',
                'default': 'rounded-[6px]',
                'circle': 'rounded-50%',
            }

            return `${roundedType[shape.value]}`
        })

        // 计算btn的loading状态
        const btnLoading = computed(() => {
            return `${loading.value ? 'opacity-60 cursor-default' : ''}`
        })

        // 计算btn的icon形状
        const btnIcons = computed(() => {
            const iconsObj = {
                add: 'i-icon-park-outline-plus',
                delete: 'i-icon-park-outline-delete',
                search: 'i-icon-park-outline-search',
                edit: 'i-icon-park-outline-edit',
                upload: 'i-icon-park-outline-upload-one',
                check: 'i-icon-park-outline-check',
                message: 'i-icon-park-outline-message-emoji',
                star: 'i-icon-park-outline-star'
            }
            return `${icon.value ? `text-[14px] ${slots.default && slots.default() ? 'mr-[4px]' : ''} ${iconsObj[icon.value]}` : ''}`
        })

        function handlerClick(e: any) {
            if (loading.value) return
            emit('click', e)
        }

        return () => <div class={`relative box-border ease-in duration-300 ${block.value ? '' : 'inline-block'} ${className.value}`}>
            <button
                v-handlerRipple
                class={`${btnClassNames.value} ${btnSizeClassNames.value} ${btnTypeClassNames.value} ${btnShapeClassNames.value} ${btnLoading.value}`}
                disabled={disabled.value}
                onClick={handlerClick}
            >
                {/* 是否loading */}
                {loading.value && <i class={`i-icon-park-outline-loading-four yzz-rotate text-[14px] mr-[6px]`}></i>}
                {icon.value && <i class={btnIcons.value}></i>}
                <span class={`text-[12px] select-none`}>{slots.default && slots.default()}</span>
            </button >
        </div >
    },
});