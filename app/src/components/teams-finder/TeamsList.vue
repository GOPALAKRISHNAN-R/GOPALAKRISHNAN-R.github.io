<template>
  <div id="teams_list" class="px-4 my-4">
    <div class="row" v-if="teamsList.length">
      <div class="col-12">
        <div class="row">
          <div class="col-md-12 col-12">
            <h3 class="text-center">Teams List</h3>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-sm"
                :class="!isScoreboard?'btn-primary':'btn-danger'"
                @click="isScoreboard=!isScoreboard"
              >
                <i class="fas fa-money-check mr-2"></i>
                {{isScoreboard?"Hide":"View"}} Scoreboard
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="col-12">
        <div class="row" v-if="isScoreboard">
          <div class="col-md-12 col-12">
            <!-- Scoreboard -->
            <table class="table table-bordered shadow-sm">
              <thead class="thead-primary">
                <tr class="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Teams</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="(score,index) in teamScores" :key="index">
                  <th>{{index+1}}</th>
                  <td>Team {{generateTeamName(index)}}</td>
                  <td>{{score}}</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12" v-for="(teams,index) in teamsList" :key="index">
            <ul class="list-group shadow">
              <li class="list-group-item list-group-item-danger">
                <b>Team {{generateTeamName(index)}}</b>
                <span class="badge badge-success float-right">{{teamScores[index]}}</span>
                <span class="float-right badge text-white">=</span>
                <span
                  class="badge badge-danger float-right mr-1 clickable"
                  @click="addScore(index, -10)"
                >- 10</span>
                <span
                  class="badge badge-light float-right mr-1 clickable"
                  @click="addScore(index, 10)"
                >+ 10</span>
                <span
                  class="badge badge-danger float-right mr-1 clickable"
                  @click="addScore(index, -5)"
                >- 5</span>
                <span
                  class="badge badge-light float-right mr-1 clickable"
                  @click="addScore(index, 5)"
                >+ 5</span>
              </li>
              <li class="list-group-item" v-for="(team,index) in teams" :key="index">
                {{team}}
                <span class="badge badge-danger float-right" v-if="index==0">Leader</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col">
        <h5 class="text-center text-danger">*Teams not generated yet</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamsList",
  data() {
    return {
      isScoreboard: false,
      teamScores: [],
    };
  },
  props: ["teamsList"],
  created() {
    this.fillTeamScores();
  },
  methods: {
    fillTeamScores() {
      this.teamsList.forEach((teams) => {
        this.teamScores.push(0);
      });
    },
    generateTeamName(id) {
      return (id + 10).toString(36).toUpperCase();
    },
    addScore(index, point) {
      this.teamScores = this.teamScores.map((score, scoreIdx) => {
        if (scoreIdx === index) {
          score += point;
        }
        return score;
      });
    },
  },
};
</script>

<style scoped>
#teams_list .list-group {
  border-radius: 5px;
  margin: 1.1rem 0;
}

#teams_list .list-group-item-danger {
  background-color: #007bff !important;
  color: #ffffff !important;
}

#teams_list .form-control {
  padding: 0.375rem 0.75rem;
}

#teams_list .btn {
  padding: 0.375rem 0.85rem !important;
  font-size: 0.9rem;
  font-weight: normal;
  text-transform: capitalize;
}

#teams_list .clickable {
  cursor: pointer;
}

#teams_list .thead-primary {
  background-color: #007bff !important;
  color: #ffffff;
}

#teams_list .table-bordered td,
#teams_list .table-bordered th {
  border-color: rgba(0, 0, 0, 0.25) !important;
}

#teams_list table tbody tr {
  background: #ffffff;
}
</style>