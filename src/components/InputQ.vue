<template>

  <div class='question' id='parent' v-html="template"> </div>

</template>

<script>
export default {
  props: {
      id: null,
      score: 0,
      content: null,
      variables: null,
      answers: null
  },
  data: function(){
    return {
      HTMLcontent: null,
      result: {},
      template: null
    }
  },
  methods : {
    getInputHtml( idx ) {

      return "(<input type='text' id='" + this.id + "_in" + idx + "' class='input + " + this.id + "'/>)";

    },

    genQuestions () {
      var varArr = this.variables.split(",");
      // var answerArr = this.answers.split(",");
      this.HTMLcontent = this.content;
      var segs = this.HTMLcontent.split("{}");

      this.HTMLcontent = segs[0];
      for(var i=1; i<segs.length; i++) {
        this.HTMLcontent += varArr[i-1] + segs[i];
      }

      segs = this.HTMLcontent.split("()");

      this.HTMLcontent = segs[0];
      for( i=1; i<segs.length; i++) {
        this.HTMLcontent += this.getInputHtml(i-1) + segs[i];
      }

      return "<div>" + this.HTMLcontent + "</div>";
    },

    sendEvent() {
      this.result = res;
      this.$emit('change', {result: this.check(this.answers, this.result)});
    },

    check(answers, result) {
      var i = 0;
      var answerArr = answers.split(",");

      if(answerArr.length !== Object.keys(result).length) {
        return false;
      }

      for (const [key, value] of Object.entries(result)) {
        if( answerArr[i].toString() !== value.toString() ) {
          return false;
        } 

        i++;
      }

      return true;
    }
  },
  created() {
    this.template = this.genQuestions();
  },
  mounted() {
    var x = document.getElementsByClassName("input " + this.id);
    var i;
    res = {}; 

    var sendEvent = this.sendEvent;
    for (i = 0; i < x.length; i++) {
        // x[i].style.backgroundColor = "red";
        x[i].addEventListener('change', function (evt) {
          console.log(evt.target.id, evt.target.value);
          res[evt.target.id] = evt.target.value;
          sendEvent();
        });
    }
  }
}

var res = {}; 
</script>

<style>
div > input.input {
  width: 15px;
  padding: 8px 10px;
  border: 0px solid gray;
}
</style>
