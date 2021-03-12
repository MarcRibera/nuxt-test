<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Linechart test'
        },
        yAxis: {
          title: {
            text: 'Daily friki things'
          },
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5]
        },
        {
          data: [10, 10, 18, 29, 6, 14, 9, 8]
        }
      ]
      },
      title: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
