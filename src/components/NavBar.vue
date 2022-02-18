<template>
  <view class="self_tabs">
    <view class="tab_header">
      <view
        v-for="item in tabList"
        :key="item.key"
        :class="item.key === activeKey ? 'item_active' : 'item'"
        @tap="tabChang(item.key)"
      >
        {{ item.label }}
        <image
          class="icon"
          v-if="item.icon || item.activeIcon"
          :src="item.key === activeKey ? item.activeIcon : item.icon"
          style="height: 30rpx; width: 30rpx"
        />
      </view>
    </view>
  </view>
</template>

<script>
import { computed, defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      tabList: [
        { label: "重大灾害", key: 1 },
        { label: "紧急求助", key: 2 },
        { label: "日常求助", key: 4 },
      ],
      activeKey: 1,
    };
  },
  methods: {
    tabChang(activeKey) {
      this.activeKey = activeKey;
      this.$emit("change", activeKey);
    },
  },
});
</script>

<style lang="less">
.self_tabs {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .tab_header {
    display: flex;
    align-items: center;
    align-items: center;
    color: #999;
    box-sizing: border-box;
    background: #fff;
    justify-content: space-around;
    width: 100%;
    padding: 16rpx 0px;
    .item {
      font-size: 32rpx;
      text-align: center;
      width: 120rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      position: relative;
      height: 100%;
      box-sizing: border-box;

      .icon {
        margin-left: 8rpx;
      }
    }
    .item_active {
      .item;
      color: #59bf74;
      border-bottom: 4rpx solid #59bf74;
    }
  }
}
</style>