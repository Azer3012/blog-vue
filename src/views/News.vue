<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Firebase Api</h3>
        <div class="form-group">
            <label>Author</label>
          <input type="text" class="form-control" v-model="$store.state.author" />
          <label>Title</label>
          <input type="text" class="form-control" v-model="$store.state.title" />
          <label>Descrpition</label>

          <textarea class="form-control" v-model="$store.state.description"></textarea>
          <button @click="$store.commit('saveUser')" class="btn btn-primary mt-2">Save</button>

          <p>{{$store.state.notification}}</p>
          

          <hr />
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
 
  methods: {
    
    deleteUser(userKey) {
      axios
        .delete(
          `https://axios-vue-72a33-default-rtdb.firebaseio.com/news/${userKey}.json`
        )
        .then((res) => console.log(res));
    },
  
  },

 
  
};
</script>
