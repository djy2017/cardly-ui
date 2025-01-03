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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-fd.png"
      />
      <view
        class="intro rounded-15px bg-white px-32px pt-0px pb-24px mt-[-30px] relative"
      >
        <view
          style="border-bottom: 1px solid #d8d8d8"
          class="w-full text-18px text-[#B32C28] leading-26px flex-row items-center justify-between text-left"
        >
          <text class="font-700 mt-10px">桃李未来复读学校</text>
          <image
            class="w-128px h-64px"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/logo-business-intro-fd.png"
          >
          </image>
        </view>

        <view
          class="text-12px font-700 leading-23px mt-15px mb-18px text-justify"
        >
          聚焦专精业务，只做高考复读！深圳桃李未来学校坚持以“四个高端”——高端师资力量、高端教学品质、高端管理模式、高端校园环境，打造目标聚焦、专业高效、学风纯正、成效显著的高考复读学校。
        </view>

        <view class="flex items-center">
          <image
            mode="widthFix"
            class="w-310px h-178px mx-auto"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-business-intro-fd-1.png"
          />
        </view>

        <view class="text-12px font-400 leading-23px text-justify mt-18px">
          学校创新的“首席老师+名校主讲老师”综合教学模式，最大程度地发挥了高考实战名师擎旗掌舵定向、传道授业解惑、托底把关护航的核心作用，同时最大程度激发了毕业于科大、复交等C9名校的主讲老师的专业功底素养、超强教练能力和拼搏创新活力。首席老师和主讲老师亦师亦友、并肩前行、荣辱与共，共同打造了桃李未来学校全天候教学辅导体系，构建了一个专业高效、学风优良、成效显著的教学生态系统。
          <br />
          学校坐落在美丽的大鹏新区玫瑰小镇，临山近海，风景如画，占地面积共2万多平方米；校内布局科学，配套完善，是一所为学生提供一站式学习、生活服务的园林式学府。
        </view>

        <view class="text-12px font-700 mt-16px">
          <text class="text-[#B32C28]">办学六大优势</text>
        </view>
        <view
          class="events flex flex-row items-center gap-x-10px mt-4px"
          v-for="(item, index) in data"
          :key="index"
        >
          <view class="text-12px font-700">
            <text class="text-[#B32C28]">{{ '0' + (index + 1) }}</text>
          </view>
          <view class="text-12px font-400 leading-23px text-justify">
            {{ item.content }}
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
      content: '坚持只做专业的高考复读',
    },
    {
      content: '“首席+主讲”优秀名师团队教学',
    },
    {
      content: '高标准独立校园，严管厚爱',
    },
    {
      content: '精细化小班、品质化教学',
    },
    {
      content: '陪伴式教育、全天候辅导',
    },
    {
      content: '园林式校园、酒店式食宿',
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
