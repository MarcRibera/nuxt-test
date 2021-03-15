<template>
    <highcharts :options="chartOptions2"></highcharts>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart
  },
  props:{
    data: {
      type: Object,
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Barchart NASA',
        },      
      }
    }
  },
  computed: {
    chartOptions2() {
      return {
          ...this.chartOptions,
          series: this.data.series,
          xAxis: { categories:this.data.dates }
        }
    }
  }
};
</script>
