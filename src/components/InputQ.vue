<template>
<div>
  <div v-html="HTMLcontent" ></div>
</div>
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
      HTMLcontent: null
    }
  },
  created() {
    var varArr = this.variables.split(",");
    var answerArr = this.answers.split(",");
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
  },

  methods : {
    getInputHtml( id ) {

      return "(<input type='text' id='q_" + id + "' v-model='q_"+ id +"' class='input'/>)";

    }
  }
  
}
</script>

<style>
div > input.input {
  width: 15px;
  padding: 8px 10px;
  border: 0px solid gray;
}
</style>
