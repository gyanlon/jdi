<template>
  <div class="exam">
    <h3 v-if='submit'>考试已完成</h3>
    <h3 v-if='!submit'>考试中...</h3>

    <div class="container papper">
      <ExamPapper @change='change' :submit='submit'/>
    </div>

    <div class="container button"  v-if="!submit">
      <input type="button" class="primary-button" @click="check" value="做完了">
    </div>

    <div class="container result" v-if="submit">
      <p>考试得分：{{resultMessage}}<p>
      <h4 v-if="score===100">不错哦</h4>
      <h4 v-if="score>=80&&score<100">加油，再细心一点，你可以得到100分的！</h4></p>
      <h4 v-if="score>60&&score<80">有点难度吧，不服气就<router-link to="/menu"> 点我 </router-link>再来一遍。</h4>
      <h4 v-if="score<60">失败是成功之母，错题是最好的老师，来看看我们错在哪儿了吧。<p/>不服气就<router-link to="/menu"> 点我 </router-link>再来一遍!</h4>  
    </div>
  </div>
</template>

<script>
import ExamPapper from "./ExamPapper.vue";

export default {
  components: {
    ExamPapper
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

    check: function() {
      this.submit = false;
      this.resultMessage = "";

      if(! this.inputAllFilled()) {
          alert("你还没有做完呢 ！！！");
          return;
      }

      this.resultMessage = this.score + "分";
      this.submit = true;
      this.disableAllInputBox();
    },

    inputAllFilled() {
      var boxes = document.getElementsByClassName("input");
      for (var i = 0; i < boxes.length; i++) {
          var value = boxes[i].value;
          if( ! value ) {
            return false;
          }
      }

      return true;
    },

    disableAllInputBox() {
      var boxes = document.getElementsByClassName("input");
      for (var i = 0; i < boxes.length; i++) {
          boxes[i].readOnly = true;
      }
    }
  }
};
</script>

<style>
.exam {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.container {
    width: 100%;
    margin-top: 50px;
}

.papper {
  padding: 10px;
  text-align: left;
  display: inline-block;
  background-color: #fff;
  border: 1px solid rgb(208, 228, 228);
}

.primary-button {
  font-size: 15px;
}

</style>

