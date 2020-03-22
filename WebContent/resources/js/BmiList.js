/**
 * BMIリスト(固定値)
 */

new Vue({
	el: '#app',
	data: {
		list: [
			{id: 1, name: '田中　一郎', height: 1.75, weight: 68.5},
			{id: 2, name: '吉田　次郎', height: 1.68, weight: 57.8}
		]
	},
	filters: {
		cmHeight: function(val){
			if (!isNaN(val)){
				return val * 100;
			} else {
				return 0;
			}
		},
		BmiRound: function(val, digit){
			return Math.round(val * digit) / digit;
		}
	},
	methods: {
		BmiCalc: function(h,w){
			if ( h > 0 && w > 0) {
				return w / Math.pow(h, 2);
			} else {
				return 0;
			}
		}
	}
})