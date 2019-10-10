<template>
  <div>
    <h3>考试中...</h3>
    <QuestionList/>

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
    check: function(event) {
      
    //TODO:
		this.resultMessage = "100分";
    }
  }
};
</script>
