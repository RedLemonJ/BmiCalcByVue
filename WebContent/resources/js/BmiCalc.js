/**
 * BMI計算機
 */

new Vue({
	el: '#app',
	data:{
		name: '',
		height: '',
		weight: '',
		bmi: 0
	},
	methods: {
		calcuration: function(){
			if ( this.height > 0 && this.weight > 0) {
				this.bmi = Math.round((this.weight / Math.pow(this.height, 2)) * 10) / 10;
			} else {
				this.bmi = 0;
			}
		}
	}
})