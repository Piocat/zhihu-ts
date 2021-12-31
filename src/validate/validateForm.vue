<template>
  <form>
    <slot></slot>
    <slot name="submitButton">
      <button class="btn btn-primary">提交</button>
    </slot>
  </form>
</template>

<script lang="ts" setup></script>

<style></style>
