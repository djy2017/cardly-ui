<template>
  <view class="page pb-50px">
    <CustomHeader
      :hasBack="false"
      :statusBarBg="'transparent'"
      :whiteBackIcon="true"
    >
      <view class="w-full t-center"> </view>
    </CustomHeader>

    <view class="card-wrap w-full h-full">
      <image
        class="avatar w-full h-[46.4vw]"
        mode="widthFix"
        :src="UserData.avatar"
      />

      <PositionCard
        customClass="mt-[-34vw] relative"
        :name="UserData.name"
        :enName="UserData.enName"
        :positionList="UserData.positionsList"
        :phone="UserData.phone"
        :email="UserData.email"
        :wechat="UserData.wechat"
      />

      <Intro customClass="mt-15px" :introList="UserData.introList" />
      <CompanyIntro customClass="mt-15px" />
      <Business customClass="mt-15px" />
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import CustomHeader from '@/components/CustomHeader/index.vue'
  import PositionCard from './PositionCard.vue'
  import Intro from './Intro.vue'
  import CompanyIntro from './CompanyIntro.vue'
  import Business from './Business.vue'
  import userData from './userData'
  import { onShareAppMessage } from '@dcloudio/uni-app'

  const UserData = ref(userData)

  onShareAppMessage(async () => {
    return {
      title: 'www 我的名片',
      imageUrl:
        'https://tlwl-oss-public.songshuedu.net/taoli-cardly-mini-ui/avatar/avatar-fjf.png',
      path: '/pages/cardly/index',
      params: {},
    }
  })
</script>

<style>
  page {
    background: #bc2b27;
  }
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #bc2b27;
    min-height: 100vh;
  }
</style>
