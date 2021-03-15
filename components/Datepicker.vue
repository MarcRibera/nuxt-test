<template lang="html">
  <b-container>
    <b-row>
      <b-col cols="3">
        <label for="start-datepicker">Choose Start Date</label>
        <b-form-datepicker
          dropup
          id="start-datepicker"
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit' }"
          v-model="dateStart"
          class="mb-2">
        </b-form-datepicker>
      </b-col>

      <b-col cols="3">
        <label for="end-datepicker">Choose End Date</label>
        <b-form-datepicker
          dropup
          id="end-datepicker"
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit' }"
          v-model="dateEnd"
          class="mb-2">
        </b-form-datepicker>
      </b-col>
      <b-col cols="2">
        <b-button @click="setDates()" variant="primary">Set Dates</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        dateStart: '2021-02-20',
        dateEnd: '2021-02-26'
      }
    },
    mounted() {
      this.setDates()
    },
    methods: {
      setDates(){
        this.$emit('set-dates', { 'dateStart': this.dateStart, 'dateEnd': this.dateEnd })
      }
    }
  }
</script>

<style lang="css" scoped>
.btn {
  margin-top: 31px;
  border: none;
  width: 100%;
  background-color: teal;
  font-size: 18px;
  color: white;
}
</style>
