<template>
  <view
    :class="customClass"
    class="intro rounded-15px bg-white px-16px pt-18px pb-24px mx-16px"
  >
    <view
      class="w-full text-18px text-[#B32C28] leading-26px mb-16px flex-column text-left"
    >
      <text class="font-700">个人简介</text>
    </view>

    <view
      v-for="(i, index) in introList"
      :key="'into-' + index"
      class="position-item w-full mb-10px text-justify leading-22px text-12px text-[#1a1a1a]"
    >
      <view class="text-left font-700 leading-24px">{{ i.date }}</view>
      <view
        class="font-400"
        v-for="(c, index) in i.content"
        :key="'c-' + index"
        >{{ c }}</view
      >
    </view>
  </view>
</template>
<script lang="ts" setup>
  defineProps({
    introList: {
      type: Array,
      default: () => [],
    },
    customClass: {
      type: String,
      default: '',
    },
  })
</script>
<style scoped lang="scss">
  .intro {
    .position-item {
      &.gray {
        color: rgba(#1a1a1a, 0.5);
      }
    }
  }
</style>
