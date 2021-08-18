<template>
  <div id="teams_finder">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card main-card shadow">
            <div class="card-body">
              <div class="card-title">
                <h4 class="text-center">Welcome to Teams Finder</h4>
              </div>
              <!-- Multiple Select -->
              <MultipleSelect v-on:teamsList="assignTeamsList" />
              <!-- Teams List -->
              <TeamsList v-bind:teamsList="teamsList" v-if="!isLoading" />
              <!-- Spinner -->
              <div class="spinner" v-if="isLoading">
                <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pattern1"></div>
            <div class="pattern2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultipleSelect from "@/components/teams-finder/MultipleSelect";
import TeamsList from "@/components/teams-finder/TeamsList";

export default {
  name: "TeamsFinder",
  data() {
    return {
      teamsList: [],
      isLoading: false
    };
  },
  components: {
    MultipleSelect,
    TeamsList
  },
  methods: {
    assignTeamsList(teams) {
      this.isLoading = true;
      setTimeout(() => {
        this.teamsList = [];
        this.teamsList.push(...teams);
        this.isLoading = false;
      }, 1500);
    }
  }
};
</script>

<style>
/* @import url("./assets/css/main.css"); */
#teams_finder {
  position: relative;
  padding-top: 10rem;
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
#teams_finder .card {
  border-radius: 5px;
  border: 1px solid transparent !important;
  background-color: rgba(255, 255, 255, 0.8);
}
#teams_finder .spinner-border {
  width: 4rem;
  height: 4rem;
  border-width: 0.38em;
  color: #3498db;
}
#teams_finder .main-card {
  position: relative;
  z-index: 1;
}
#teams_finder .main-card .pattern1 {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url(../assets/img/pattern-1.png) left top no-repeat;
  z-index: -1;
}
#teams_finder .main-card .pattern2 {
  position: absolute;
  content: "";
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: url(../assets/img/pattern-2.png) right bottom no-repeat;
  z-index: -1;
}
</style>
