<template>
  <div id="new_participant" class="py-2 mt-4">
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Participants name"
              v-model="participant"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                type="button"
                @click="emitParticipant()"
              >Add Participant</button>
            </div>
          </div>
          <small class="form-text text-muted">Note: Use , between the participants name</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddParticipants",
  data() {
    return {
      participant: ""
    };
  },
  methods: {
    emitParticipant() {
      if (this.participant) {
        this.$emit("participant", this.participant);
      } else {
        alert("Please enter the participant name");
        return;
      }
    },
    childMessage(isSuccess) {
      if (isSuccess) {
        this.participant = "";
      }
    }
  }
};
</script>

<style scoped>
#new_participant .btn{
  padding: .375rem .85rem!important;
  font-size: 0.9rem;
  font-weight: normal;
  text-transform: capitalize;
}
</style>