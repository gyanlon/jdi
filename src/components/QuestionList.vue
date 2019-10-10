<template>
  <div class="question">
    <InputQ id="q1" content="{} X {} = ()" variables="3,5" answers="15" @change="change"/>
    <InputQ id="q2" content="{} X {} 表示 () 的 () 倍， 又表示()个() 。" variables="8,9" answers="8,9,9,8" @change="change"/>
  </div>
</template>

<script>
	import InputQ from "./InputQ.vue";

	export default {
		components: {
			InputQ
		},
		data: function() {
			return {};
		},
		methods: {
			change(event) {
				console.log(JSON.stringify(event));
			}
		}
	};
</script>

<style>
	.question {
		position: relative;
		width: 500px;
		text-align: left;
		display: inline-block;
		background-color: #fff;
	}
</style>
