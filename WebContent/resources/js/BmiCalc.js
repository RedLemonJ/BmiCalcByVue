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
	filters: {
		decimalFilter: function(val){
			if (isNaN(val)) {
				return val.toFixed(2);
			} else {
				return '';
			}
		}
	},
	methods: {
		calcBmi: function(){
			if ( this.height > 0 && this.weight > 0) {
				this.bmi = Math.round((this.weight / Math.pow(this.height, 2)) * 10) / 10;
			} else {
				this.bmi = 0;
			}
		}
	},
	computed: {
		cmHeight: function(){
			return this.height * 100;
		}
	}
})