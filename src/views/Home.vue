<template>
  <h2 class="header">News</h2>
  <div class="home">
    <div class="news" v-for="news in allNews" :key="news.key">
      <router-link :to="{ name: 'NewsDetail', params: { id: news.key } }">
        <h3 class="title">{{ news.data.title }}</h3>
      </router-link>

      <span>Author:{{ news.data.author }}</span>

      <span @click="deleteNews(news.key)" class="remove"
        ><i class="fa fa-trash"></i
      ></span>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  computed: {
    allNews() {
      return this.$store.getters.allNews;
    },
  },

  methods: {
    deleteNews(userKey) {
      axios
        .delete(
          `https://axios-vue-72a33-default-rtdb.firebaseio.com/news/${userKey}.json`
        )
        .then((res) => console.log(res));
    },
  },

  async mounted() {
    this.$store.dispatch("getNews");
  },
};
</script>
<style>
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
}
.news {
  margin-right: 5px;
  margin-bottom: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-width: 24%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.news:hover .remove {
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  color: red;
  cursor: pointer;
}
.remove {
  display: none;
}
.header {
  text-align: center;
  margin-bottom: 35px;
  margin-top: 15px;
}
</style>
 
 
