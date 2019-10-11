<template>
  <div>
    <h3>考试中...</h3>
    <QuestionList @change='change' :submit='submit'/>

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
      resultMessage: null,
      score: 0,
      submit: false
    };
  },

  methods: {
    change(res) {
      console.log(JSON.stringify(res));
      this.score = Math.round(parseInt(res.score)*100/parseInt(res.total));
    },

    check: function(event) {
      
      //TODO:
      this.resultMessage = this.score + "分";
      this.submit = true;
    }
  }
};
</script>
