# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。

<script setup>
import { ref }from 'vue'

const val = ref(true)
</script>

<yzz-switch v-model='val'/>
