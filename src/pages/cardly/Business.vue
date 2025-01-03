<template>
  <view
    :class="customClass"
    class="intro rounded-15px bg-white px-16px pt-18px pb-24px mx-16px"
  >
    <view
      class="w-full text-18px text-[#B32C28] leading-26px mb-16px flex-column text-left"
    >
      <text class="font-700">业务体系</text>
    </view>

    <view class="flex flex-row gap-x-8px gap-y-20px flex-wrap">
      <view
        @click="go(i.path)"
        v-for="(i, index) in businessList"
        :key="'into-' + (index + 1)"
        class="business-item text-justify leading-22px text-12px text-[#1a1a1a] flex flex-column items-center justify-center"
      >
        <view
          class="img-wrap w-full flex flex-row items-center justify-center bg-gray"
        >
          <image :src="i.img" class="w-full" mode="widthFix"></image>
        </view>
        <view class="font-400 leading-22px mt-5px">
          {{ i.title }}
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
  const businessList = [
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-zw.png',
      title: '桃李中文',
      path: '/pages/business-intro/chineseBu/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-tx.png',
      title: '桃李童学',
      path: '/pages/business-intro/kidsBu/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-jy.png',
      title: '桃李家育',
      path: '/pages/business-intro/familyEduBu/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-gj.png',
      title: '桃李国际',
      path: '/pages/business-intro/internationalBu/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-bic.png',
      title: '湾区国际书院',
      path: '/pages/business-intro/bicBu/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-fd.png',
      title: '桃李未来复读学校',
      path: '/pages/business-intro/fdSchoolBu/index',
    },
    {
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-taoli-sz.png',
      title: '桃李未来学科素质教育',
      path: '/pages/business-intro/middleSchoolBu/index',
    },
  ]
  defineProps({
    customClass: {
      type: String,
      default: '',
    },
  })

  const go = (path: string) => {
    if (!path) return

    uni.navigateTo({
      url: path,
    })
  }
</script>
<style scoped lang="scss">
  .intro {
    .business-item {
      width: calc(50% - 4px);
      .img-wrap {
        background: rgba(239, 239, 239, 0.3);
        border-bottom: 1px solid #d8d8d8;
      }
    }
  }
</style>
