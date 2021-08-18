<template>
  <div id="generate_teams" class="py-2">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Total number of teams"
            v-model="teamCount"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="generateTeams()">Generate Teams</button>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenerateTeams",
  data() {
    return {
      teamCount: null
    };
  },
  methods: {
    generateTeams() {
      if (this.teamCount > 0) {
        // Emit the team count to the parent component
        this.$emit("teamCount", this.teamCount);
      } else {
        alert("Please enter the number of teams");
        return;
      }
    }
  }
};
</script>

<style scoped>
#generate_teams .btn {
  padding: 0.375rem 0.85rem !important;
  font-size: 0.9rem;
  font-weight: normal;
  text-transform: capitalize;
}
</style>