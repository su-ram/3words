<template>
  <div>
    <h2>✨ Ranking ✨</h2>
    <div>
      <li v-for="(value, index) in this.ranking" :key="index">
        {{ index + 1 }}. {{ value.username ? value.username : "annoymous" }} ->
        {{ value.points }}p
      </li>
    </div>
  </div>
</template>

<script>
import PointsApi from "../api/points.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      ranking: [],
    };
  },
  created() {},
  watch: {},
  mounted() {
    this.getRankingList();
  },
  methods: {
    getRankingList() {
      PointsApi.getRankingInfo().then((res) => (this.ranking = res.data));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: whitesmoke;
}
</style>
