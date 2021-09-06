<template>
  <div>
    <div class="profile-info-bg">
      <div class="profile-wrap">
        <!-- 上一頁 -->
        <router-link to="/Portfolio">
          <div class="row btn-goback">
            <FaChevronLeft class="FaChevronLeft" size="20px" />
            上一頁
          </div>
        </router-link>
        <!-- 內容展示 -->
        <div class="works-detail-wrap" v-for="(de, i) in detailShow" :key="i">
          <div>
            <img class="detail-view-img" :src="de.picture" alt="圖片預覽" />
            <div class="top-titlebar">
              <div class="top-titlebar-text">
                <div class="works-detail-title">{{ de.title }}</div>
                <div class="works-detail-info" v-html="de.infoDetail"></div>
              </div>
              <a class="btn-goweb" :href="de.link" target="_blank">
                點我到連結
                <br />
                Click Me!
              </a>
            </div>

            <div v-show="de.color" class="works-detail-box">
              <div class="sub-title-box sub-title-box-detail">色彩配置</div>
              <div class="detail-info-text">
                <div class="color-box">
                  <div
                    v-for="(c, i) in de.color"
                    :key="i"
                    class="color"
                    v-bind:style="{ backgroundColor: c }"
                  ></div>
                </div>
              </div>
              {{ de.colorInfo }}
            </div>

            <div class="works-detail-box">
              <div class="sub-title-box sub-title-box-detail">使用技術</div>
              <div class="detail-info-text">
                <div class="row">視覺 / 介面設計：{{ de.design }}</div>
                <div class="row">前端程式開發：{{ de.font }}</div>
                <div class="row">後端程式開發：{{ de.end }}</div>
                <div class="row">套件：{{ de.package }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Data from "@/services/Data.js";
export default {
  name: "detail",
  components: {},
  data() {
    return {
      detailDataAll: Data.data,
      detailShow: [],
      
      // detailId: this.$route.params.id,
    };
  },
  mounted() {
    let nowId= this.$route.params.id
    this.detailShow = this.detailDataAll.filter(function (item) {
      return item.id == nowId;
    });
    // console.log(this.$route.params.id)
  },
  // methods: {
  //   see() {
  //     console.log("detailId", this.detailData);
  //   },
  // },
};
</script>
