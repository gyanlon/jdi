<template>
  <div class="questionBody">
    <InputQ id="q1" score=5 content="{} X {} = ()" variables="3,5" answers="15" @change="change" :submit='submit'/>
    <InputQ id="q2" score=20 content="{} X {} 表示 () 的 () 倍， 又表示()个() 。" variables="8,9" answers="8,9,9,8" @change="change" :submit='submit'/>
  </div>
</template>

<script>
	import InputQ from "./InputQ.vue";

	export default {
		props: {
      submit: false
  	},
		components: {
			InputQ
		},
		
		data: function() {
			return {
				total: 0,
				result: {}
			};
		},

		methods: {
			calculateTotal() {
				var qs = document.getElementsByClassName("question");
				var i;
				this.total = 0;
				for (i = 0; i < qs.length; i++) {
						var score = qs[i].getAttribute("score");
						if( score ) {
							this.total += parseInt(score);
						}
				}

				// console.log(this.total);
				return this.total;
			},
			 
			caculateScore(result) {
				var score = 0;
				for (const [key, value] of Object.entries(result)) {
					score += parseInt(value);
				}

				return score;
			},

			change(res) {
				console.log("GET event:", JSON.stringify(res));
				this.result[res.qid] = res.score;

				var response = {
					total: this.calculateTotal(),
					score: this.caculateScore(this.result)
				}
				this.$emit('change', response);
			}
		}
	};
</script>

<style>
	.questionBody {
		position: relative;
		width: 500px;
		text-align: left;
		display: inline-block;
		background-color: #fff;
	}
</style>
