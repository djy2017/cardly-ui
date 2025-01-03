<template>
  <view class="page pb-50px">
    <CustomHeader
      :hasBack="true"
      :statusBarBg="'transparent'"
      :whiteBackIcon="false"
    >
      <view class="w-full t-center"> </view>
    </CustomHeader>

    <view class="card-wrap w-full h-full">
      <image class="avatar w-full h-417px" :src="UserData.avatar" />

      <PositionCard
        customClass="mt-[-130px] relative"
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

  const UserData = ref(userData)
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
