import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    author: null,
    title: null,
    description: null,
    notification: "",
    newsList: [],
  },
  mutations: {
    saveUser(state) {
      axios
        .post("https://axios-vue-72a33-default-rtdb.firebaseio.com/news.json", {
          author: state.author,
          title: state.title,
          description: state.description,
        })
        .then((res) =>
          res.status === 200
            ? (state.notification = "Ugurla gonderildi")
            : "xeta bas verdi"
        );
    },
    
    getNews(state, data) {
      state.newsList = []; //this is fix dublicate data
      for (let key in data) {
        state.newsList = [...state.newsList, { key: key, data: data[key] }];
      }
    },
  },
  actions: {
    async getNews({ commit }) {
      await axios
        .get("https://axios-vue-72a33-default-rtdb.firebaseio.com/news.json")
        .then((res) => {
          commit("getNews", res.data);
        });
    },
    
  },
  getters: {
    allNews(state) {
      return state.newsList;
    },
  },
  modules: {},
});
