<template>
  <div class="works-wrap">
    <div class="works-box" v-for="(work, i) in cateFilterArr" :key="i">
      <div>
        <router-link :to="'/Portfolio/' + work.id">
          <img
            class="view-img"
            :src="work.picture"
            alt="預覽圖"
            link
            to="work.link"
          />
        </router-link>
      </div>
      <div class="works-title">{{ work.title }}</div>
      <div class="works-info">{{ work.info }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "worksCards",
  components: {},
  data() {
    return {};
  },
  props: {
    cateFilterArr:Array,
  },
  mounted: function () {
    // this.start();
  },
  methods: {
    // start() {
    //   console.log("你在哪ＱＱ", Data.data);
    // this.testData;
  },
};
</script>
