<script>
	import { Doughnut } from './BaseCharts'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: [
            '#48BB78',
            '#F56565',
            '#22543D',
            '#1A202C'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>