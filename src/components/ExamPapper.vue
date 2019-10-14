
<template>
  <div class="questionBody">
    <div v-for="q in questions" :key="q">
      <InputQ
        :id="q.id"
        :score="q.score"
        :content="q.pattern"
        :variables="q.variables"
        :answers="q.answers"
        @change="change"
        :submit="submit"
      />
    </div>
  </div>
</template>

<script>
import InputQ from "./InputQ.vue";
import Store from "./store.js";

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
      result: {},
      questions: Store.fetch()
    };
  },

  methods: {
    calculateTotal() {
      var qs = document.getElementsByClassName("question");
      var i;
      this.total = 0;
      for (i = 0; i < qs.length; i++) {
        var score = qs[i].getAttribute("score");
        if (score) {
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
      };
      this.$emit("change", response);
    }
  }
};
</script>

<style>
</style>
