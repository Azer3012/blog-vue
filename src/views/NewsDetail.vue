<template>
  <div>
    <h2>{{ news.title }}</h2>
    <p>{{ news.description }}</p>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      news: {},
    };
  },

  async mounted() {
    let data = this.$store.getters.allNews;
    for (let key in data) {
      if (this.id === data[key].key) {
        this.news = data[key].data;
      }
    }

    console.log(this.news);
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  padding-top: 20px;
}
p {
  text-align: justify;
  padding: 5px 15px;
}
</style>