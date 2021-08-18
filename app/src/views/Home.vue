<template>
  <div id="home">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 col-12" v-for="data in mainData" :key="data.id">
          <div class="card shadow my-4" @click="onNavigate(`${data.navigation_path}`)">
            <div class="card-body">
              <div class="card-image pb-3">
                <img :src="data.iconUrl" class="img-fluid" width="100" alt />
              </div>
              <h5>{{data.title}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      mainData: [],
    };
  },
  created() {
    axios
      .get("main_data.json")
      .then((res) => {
        this.mainData = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    onNavigate(location) {
      this.$router.push(`/${location}`);
    },
  },
};
</script>

<style lang="css" scoped>
#home {
  position: relative;
  padding-top: 12rem;
  padding-bottom: 8rem;
  background: linear-gradient(-45deg, #a24bcf, #3498db, #4bc5cf);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#home .card {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

#home .card:hover {
  transform: scale(1.02);
}
</style>