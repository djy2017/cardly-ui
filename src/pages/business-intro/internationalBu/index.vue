<template>
  <view class="page pb-50px">
    <CustomHeader
      :hasBack="true"
      :statusBarBg="'transparent'"
      :whiteBackIcon="true"
    >
      <view class="w-full t-center text-white"> </view>
    </CustomHeader>

    <view class="card-wrap w-full h-full">
      <image
        class="avatar w-full h-178px"
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-gj.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          style="border-bottom: 1px solid #d8d8d8"
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left"
        >
          <text class="font-700 mt-10px">桃李国际</text>
          <image
            class="w-128px h-64px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-gj.png"
          >
          </image>
        </view>

        <view class="text-12px font-700 leading-23px mt-15px mb-16px">
          桃李国际集语培课程、国际课程、演讲辩论国际学科赛事、留学申请规划于一体，提供一站式服务。致力于提升学生的综合素质和国际竞争力，培养通晓中西方思维文化的国际化精英。
        </view>

        <view
          class="events flex flex-row items-start gap-x-10px mt-4px"
          v-for="(item, index) in data"
          :key="index"
        >
          <view class="w-82px">
            <image class="w-full mt-4px" mode="widthFix" :src="item.img">
            </image>
          </view>
          <view class="flex-1">
            <view class="text-12px font-700">
              <text class="text-[#B32C28]">{{ item.title }}</text>
            </view>
            <view class="text-12px font-400 leading-23px mt-10px text-justify">
              {{ item.content }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/CustomHeader/index.vue'
  const data = [
    {
      title: '语言培训',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-gj-1.png',
      content:
        '提供自幼儿园大班到高三年级的各类英语能力及考冲体系课程。课程覆盖剑桥少儿、剑桥KPF、雅思、托福、香港DSE、多邻国等多项国际语言培训业务。',
    },
    {
      title: '留学规划及申请',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-gj-2.png',

      content:
        '针对目标一梯队名校、四大公立校国际部、顶尖国际学校、美国藤校、英国G5、港八大、澳八大、新加坡等学生提供从语言到竞赛、AP、A-Level、IB等同步课程规划及培训。',
    },
    {
      title: '国际赛事',
      img: 'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-gj-3.png',

      content:
        '我们举办或承办各大全球或全国类赛事或考试，以赛促学，提升学生的合作精神和全球视野。',
    },
  ]
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #bc2b27;
    min-height: 100vh;
  }
</style>
