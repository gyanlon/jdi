<template>
  <div>
    <div class="question" :id="id" :score="score" v-html="template"></div>
    <div v-show="submit">
      <a class="correct" v-if="correct"></a>
      <a class="wrong" v-if="!correct"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: null,
    score: 0,
    content: null,
    variables: null,
    answers: null,
    submit: false
  },
  data: function() {
    return {
      HTMLcontent: null,
      result: {},
      template: null,
      correct: false
    };
  },
  methods: {
    getInputHtml(idx) {
      return (
        "(<input type='text' id='" +
        this.id +
        "_in" +
        idx +
        "' class='input " +
        this.id +
        "'/>)"
      );
    },

    genQuestions() {
      var varArr = this.variables.split(",");
      this.HTMLcontent = this.content;
      var segs = this.HTMLcontent.split("{}");

      this.HTMLcontent = segs[0];
      for (var i = 1; i < segs.length; i++) {
        this.HTMLcontent += varArr[i - 1] + segs[i];
      }

      segs = this.HTMLcontent.split("()");

      this.HTMLcontent = segs[0];
      for (i = 1; i < segs.length; i++) {
        this.HTMLcontent += this.getInputHtml(i - 1) + segs[i];
      }

      return "<div>" + this.HTMLcontent + "</div>";
    },

    sendBackResponse() {
      console.log(JSON.stringify(this.result));
      this.correct = this.check(this.answers, this.result);
      var value = {
        qid: this.id,
        score: this.correct ? this.score : 0
      };
      this.$emit("change", value);
    },

    check(answers, result) {
      var i = 0;
      var answerArr = answers.split(",");

      if (answerArr.length !== Object.keys(result).length) {
        return false;
      }

      for (const [key, value] of Object.entries(result)) {
        console.log(answerArr[i].toString(), value.toString());
        if (answerArr[i].toString() !== value.toString()) {
          return false;
        }

        i++;
      }

      return true;
    },

    change(result, sendEventFunc) {
      return function(evt) {
        // console.log(evt.target.id, evt.target.value);
        result[evt.target.id] = evt.target.value;
        sendEventFunc();
      };
    }
  },
  created() {
    this.template = this.genQuestions();
  },
  mounted() {
    var x = document.getElementsByClassName("input " + this.id);
    var i;

    for (i = 0; i < x.length; i++) {
      x[i].addEventListener(
        "change",
        this.change(this.result, this.sendBackResponse)
      );
    }
  }
};
</script>

<style>
div > input.input {
  width: 15px;
  padding: 8px 10px;
  border: 0px solid gray;
}

a.wrong{ display: inline-block; width: 20px;height:5px; background: red;line-height: 0;font-size:0;vertical-align: middle;-webkit-transform: rotate(45deg);}
a.wrong:after{content:'/';display:block;width: 20px;height:5px; background: red;-webkit-transform: rotate(-90deg);}

a.correct{ display: inline-block; width: 10px;height:5px; background: red;line-height: 0;font-size:0;vertical-align: middle;-webkit-transform: rotate(45deg);}
a.correct:after{content:'/';display:block;width: 20px;height:5px; background: red;-webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);}
     
</style>
