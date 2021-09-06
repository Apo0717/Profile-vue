<template>
  <div>
    <div class="profile-info-bg">
      <div class="profile-wrap">
        <!-- 最上方分類 -->
        <div class="works-cat-wrap">
          <div
            class="cat-row"
            v-for="(cat, k) in cateBarArr"
            :key="k"
            @click="catFilter(cat)"
            :class="{ 'cat-row-click': isClick }"
          >
            {{ cat.cateName }}
            <div></div>
            <div class="cat-underline"></div>
          </div>
        </div>

        <!-- 卡片排列 -->
        <works-cards :cateFilterArr="cateFilterArr"></works-cards>

        <!-- 頁碼 -->
        <!-- <Page /> -->
      </div>
    </div>
  </div>
</template>
<script>
//資料
import Data from "@/services/Data.js";
//元件
// import CatList from "@/components/Portfolio/CatList.vue";
import WorksCards from "@/components/Portfolio/WorksCards.vue";

export default {
  name: "Portfolio",
  data() {
    return {
      cateData: Data.data,
      cateBarArr: Data.cateBar,
      cateFilterArr: [],
    };
  },
  mounted: function () {
    this.start();
  },
  methods: {
    start() {
      this.cateFilterArr = this.cateData;
    },

    catFilter(c) {
      c.isClick = true;
      let vm = this;
      // vm.cateFilterArr = [];
      vm.cateFilterArr = vm.cateData.filter(function (item) {
        return item.cats.includes(c.cateName);
      });
    },
  },
  components: {
    // CatList,
    WorksCards,
  },
};
</script>
