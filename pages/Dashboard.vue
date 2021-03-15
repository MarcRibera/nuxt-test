<template lang="html">
  <div class="container">
      <b-row>
        <b-col>
          <Datepicker @set-dates="getNasaData"/>
            <div v-if="this.loadingNasaData" class="loading-state">
              <b-spinner small type="grow"></b-spinner>
              Loading...
            </div>
           <b-alert v-else-if="this.errorMsg" show variant="warning">
             {{this.errorMsg}}
           </b-alert>
          <BarchartNasa v-else :data="asteroidsData"/>
        </b-col>
      </b-row>

      <b-row>
          <b-col>
          <Linechart />
        </b-col>
        <b-col>
          <Barchart />
        </b-col>
      </b-row>
  </div>
</template>

<script>
  export default {
    // example how set metadata (for seo) into current page
    head() {
      return {
        meta: [
          {
            hid: 'dashboard description',
            name: 'description',
            content: 'Dashboard metadata description'
          }
        ]
      }
    },
    data() {
      return {
        chartData: [],
        asteroidsByDay: [],
        asteroidsDates: [],
        errorMsg: '',
        loadingNasaData: false,
      }
    },
    computed: {
      asteroidsData() {
        return {
          series: [
            {
              name: 'Asteriods near to earth',
              data: this.asteroidsByDay
            }
          ],
          dates: this.asteroidsDates
        }
      },
    },
    methods: {
      async getNasaData(dates) {
        this.loadingNasaData = true
        this.errorMsg = ''
        // how pass query params using fetch
        // https://github.com/github/fetch/issues/256
        const url = new URL('https://api.nasa.gov/neo/rest/v1/feed')
        const params = {
          start_date: dates.dateStart,
          end_date: dates.dateEnd,
          api_key:'i9kr4lTxq7qRJjn032dF9yhmgmQ7nrr8giXfq9Dy'
        }
        url.search = new URLSearchParams(params).toString();

       const res = await fetch(url)

        if (res.status >= 200 && res.status <= 299) {
          const data = await res.json();
          this.buildNasaData(data)
          this.loadingNasaData = false
        } else {
          const error = await res.json();
          this.errorMsg = error.error_message
          this.loadingNasaData = false
        }
      },
      buildNasaData(data){
        this.asteroidsDates = []
        this.asteroidsByDay = []

        const nearEarthObjects = data.near_earth_objects
        for (const date in  nearEarthObjects ) {
          this.asteroidsDates.push( date )
          this.asteroidsByDay.push( nearEarthObjects[date].length )
        }

      }
    }
  }
</script>

<style lang="css" scoped>
.loading-state{
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert-warning {
  width: 100%;
  margin: 70px 12px;
}
</style>
