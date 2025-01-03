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
        src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-company-intro-banner.png"
      />
      <view
        class="intro rounded-15px bg-white px-16px pt-24px pb-24px mx-16px mt-[-30px] relative"
      >
        <view
          class="w-full text-18px text-[#B32C28] leading-26px mb-16px flex-column text-left"
        >
          <text class="font-700">公司简介</text>
        </view>

        <view class="text-14px font-700 mt-16px">
          <text class="text-[#B32C28]">01</text>
          <text class=""> 公司简介 </text>
        </view>
        <view class="text-12px font-700 mt-8px leading-23px">
          桃李未来是深圳知名的教育集团，成立于2018年8月，深耕深圳教育市场。目前拥有18个校区，经营面积超过10万平米，全职教职团队超1200人，累计服务超过10万个家庭，具有极好的口碑和品牌影响力。
        </view>

        <view class="video-wrap mt-20px">
          <video
            class="video w-full"
            id="prodVideo"
            :controls="true"
            :autoplay="false"
            poster="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-company-intro-poster.png"
            :loop="true"
            :muted="true"
            src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/videos/video-zhuiguang.mov"
            object-fit="cover"
            @loadedmetadata="onVideoLoaded"
          ></video>
        </view>
        <view class="text-12px font-400 mt-20px leading-23px">
          桃李未来教育集团业务覆盖中小学素质教育培训、家庭教育、儿童专注力、国际中文、高中学科培训和高考复读学校等领域。与深圳各大知名学校保持良好的互动与合作，并与清华大学、北京大学、中国国际中文教育基金会、广东省朗诵协会等单位建立了战略合作关系，是深圳市教育培训行业协会副会长单位、福田区工商联合会理事单位、教培行业数字人民币预付式场景全国首家试点单位、深圳市教培行业“双减”转型标杆企业。
          <br />
          桃李未来致力于搭建多元化教育服务平台，探索科技助力教育的新模式，为家庭和孩子提供综合素质教育解决方案，从更多视角和更深层次培养全面发展并具备核心竞争力的创新拔尖型人才。
        </view>

        <view class="text-14px font-700 mt-16px">
          <text class="text-[#B32C28]">02</text>
          <text class=""> 企业使命 </text>
        </view>
        <view class="text-[#B32C28] text-12px font-700 mt-14px leading-18px">
          让每一个孩子在美好的学习体验中获得价值和成就
        </view>

        <view class="flex flex-row mt-20px">
          <view class="flex-1 relative">
            <image
              class="w-full"
              src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-company-intro-1.png"
            ></image>
            <view
              class="absolute text-white text-12px font-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              综合能力教育
            </view>
          </view>
          <view class="flex-1 relative">
            <image
              class="w-full"
              src="https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/imgs/img-company-intro-2.png"
            ></image>
            <view
              class="absolute text-white text-12px font-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              学科素质教育
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/CustomHeader/index.vue'
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
