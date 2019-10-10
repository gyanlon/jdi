<template>
  <div>
    <h3>考试中...</h3>
    <QuestionList @click="onChange"/>

    <div class="container button">
      <input type="button" class="primary-button" @click="check" value="做完了">
    </div>

    <div class="container result" v-if="resultMessage">{{resultMessage}}</div>
  </div>
</template>

<script>
import QuestionList from "./QuestionList.vue";

export default {
  components: {
    QuestionList
  },

  data: function() {
    return {
      resultMessage: null
    };
  },

  methods: {
	onChange: function(event) {
		console.log(JSON.stringify(event.target.value));
	},
    check: function(event) {
      console.log(JSON.stringify(event.target.value));

    //   var correctCount = 0;
    //   var totalCount = 0;
    //   for (const [key, value] of Object.entries(vm.successes)) {
    //     totalCount++;
    //     if (vm.answers[key] && vm.answers[key] === vm.successes[key]) {
    //       correctCount++;
    //     }
    //   }

    //   // 检查回答和正确答案是否匹配
    //   // 打分
	//   vm.resultMessage = (correctCount / totalCount) * 100 + "分";
		this.resultMessage = "100分";
    }
  }
};
</script>
