<template>

  <div class='question' id='parent' v-html="template"> </div>

</template>

<script>
export default {
  props: {
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
    getInputHtml( id ) {

      return "(<input ref='box' type='text' id='q_" + id + "' class='input' @changed='change()'/>)";

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
      this.$emit('click', {answers: this.answers, result: this.result});
    }
  },
  created() {
    this.template = this.genQuestions();
  },
  mounted() {
    var x = document.getElementsByClassName("input");
    var i;

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
