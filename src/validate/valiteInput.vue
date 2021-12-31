<template>
  <div class="mb-3 validate-input">
    <label v-if="label" for="exampleFormControlInput1" class="form-label">{{ label }}</label>
    <input v-bind="$attrs" :value="modelValue" @input="handleInput" :placeholder="placeholder" class="form-control" />
    <div class="form-text">{{ errMessage[0] }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, reactive, Ref, watch } from 'vue';
import { validateDataType, validator } from './validate';

// 定义父组件传入的数据
const props = defineProps<{
  label?: string; // 输入框的提示语
  placeholder?: string; // 输入框的占位语
  modelValue: string; // 绑定输入框的输入
  rules?: string; // 输入框的验证规则
}>();

// 定义更新的方式
const emits = defineEmits(['update:modelValue']);

// 定义验证的提示信息
const errMessage: Ref<string[]> = ref([]);

const inputValue = ref<string>(props.modelValue);

watch(
  () => props.modelValue,
  (newVal: string) => {
    inputValue.value = newVal;
  },
);

// 定义校验的数据
const validateData: validateDataType = reactive({
  name: props.label || 'felid',
  placeholder: props.placeholder,
  value: inputValue,
  rules: props.rules || '',
});

// 处理输入事件
function handleInput(e: Event) {
  errMessage.value = validator(validateData);
  emits('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>

<!-- <script lang="ts">
export default {
  inheritAttr: false,
};
</script> -->

<style scoped>
.form-text {
  color: red;
}
</style>
