<template>
  <div id="multiple_select" class="mt-2">
    <!-- Add a new participants -->
    <AddParticipant v-on:participant="addParticipant" ref="childRef" />
    <div class="select pt-3">
      <div class="row">
        <div class="col-md-5 col-12">
          <!-- Default Participant list -->
          <div class="form-group">
            <label for="participants">
              <b>Select the participants ({{participantsName.length}})</b>
            </label>
            <select multiple class="form-control" v-model="selectedParticipants">
              <option
                v-for="(participant,index) in participantsName"
                :key="index"
                :value="participant"
              >{{participant}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-2 col-12">
          <!-- Add and Remove participant button -->
          <div class="text-center my-5">
            <div class="btn-group-vertical">
              <button class="btn btn-primary" @click="addParticipants()">
                <i class="far fa-caret-square-right d-none d-sm-block"></i>
                <i class="far fa-caret-square-down d-block d-sm-none"></i>
              </button>
              <button class="btn btn-danger" @click="removeParticipants()">
                <i class="far fa-caret-square-left d-none d-sm-block"></i>
                <i class="far fa-caret-square-up d-block d-sm-none"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-12">
          <!-- Selected participants -->
          <div class="form-group">
            <label for="selected_participants">
              <b>Selected participants ({{selectedParticipantsName.length}})</b>
            </label>
            <select multiple class="form-control" v-model="unSelectedParticipants">
              <option
                v-for="(participant,index) in selectedParticipantsName"
                :key="index"
                :value="participant"
              >{{participant}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- Generate Teams -->
    <GenerateTeams v-on:teamCount="onChildClick" />
  </div>
</template>

<script>
import GenerateTeams from "@/components/teams-finder/GenerateTeams";
import AddParticipant from "@/components/teams-finder/AddParticipant";
import axios from "axios";

export default {
  name: "MultipleSelect",
  data() {
    return {
      selectedParticipants: [],
      unSelectedParticipants: [],
      participantsName: [],
      selectedParticipantsName: [],
      teamCount: 0,
    };
  },
  components: {
    GenerateTeams,
    AddParticipant,
  },
  created() {
    axios
      .get("teams_list.json")
      .then(({ data }) => {
        const filteredData = data.filter((d) => d.active);
        this.participantsName = filteredData.map((data) => data.name);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    // To add the new Participants
    addParticipant(names) {
      // Check for single participant or multiple participant
      let newParticipants = names.split(",");
      newParticipants = newParticipants.map((participant) =>
        participant
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
          .trim()
      );

      // To check the participant is already added or not
      newParticipants = newParticipants.filter(
        (participant) => !this.participantsName.includes(participant)
      );

      if (newParticipants.length) {
        this.participantsName.unshift(...newParticipants);
      }
      this.$refs.childRef.childMessage(true);
    },
    // To add the selected participants
    addParticipants() {
      if (this.selectedParticipants.length) {
        this.selectedParticipantsName.unshift(...this.selectedParticipants);
        // Move the participants to selected participants
        this.selectedParticipants.find((selectedName) => {
          this.participantsName = this.participantsName.filter(
            (participant) => participant != selectedName
          );
        });

        this.selectedParticipants = [];
      }
    },
    // To remove the selected participants
    removeParticipants() {
      if (this.unSelectedParticipants.length) {
        this.participantsName.unshift(...this.unSelectedParticipants);
        // Move the participants to unselected participants
        this.unSelectedParticipants.find((unselectedName) => {
          this.selectedParticipantsName = this.selectedParticipantsName.filter(
            (participant) => participant != unselectedName
          );
        });

        this.unSelectedParticipants = [];
      }
    },
    // Getting the child component data
    onChildClick(value) {
      this.teamCount = value;
      if (this.teamCount > this.selectedParticipantsName.length) {
        alert("Please enter the valid team number");
        return;
      } else {
        this.generatingTeams();
      }
    },
    // Generating Team Logic
    generatingTeams() {
      const selectedNames = [];
      selectedNames.push(...this.selectedParticipantsName);
      const teamsList = [];
      if (this.teamCount == 1) {
        teamsList.push([...selectedNames]);
      } else {
        const teamLimit = Math.floor(selectedNames.length / this.teamCount);
        let count = this.teamCount;
        selectedNames.forEach(() => {
          while (count) {
            const singleTeam = [];
            let limit = teamLimit;
            while (limit) {
              const randomIndex = Math.floor(
                Math.random() * selectedNames.length
              );
              singleTeam.push(selectedNames[randomIndex]);
              selectedNames.splice(randomIndex, 1);
              limit--;
            }
            teamsList.push(singleTeam);
            count--;
          }
        });
        if (selectedNames.length) {
          selectedNames.forEach((name) => {
            const randomIndex = Math.floor(Math.random() * teamsList.length);
            teamsList[randomIndex].push(name);
          });
        }
      }
      this.$emit("teamsList", teamsList);
    },
  },
};
</script>

<style scoped>
#multiple_select .form-control {
  padding: 0.375rem 0.75rem;
}
#multiple_select .btn {
  padding: 0.495rem 0.75rem !important;
  font-size: 0.9rem;
  font-weight: normal;
  text-transform: capitalize;
}
@media (max-width: 700px) {
  #multiple_select .btn-group-vertical {
    flex-direction: row;
  }
  #multiple_select .btn-group-vertical .btn {
    border-radius: 0;
    margin-top: 0 !important;
  }
}
</style>