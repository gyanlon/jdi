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
      <h3 v-if="score===100">🐂🐂🐂<p><a href="javascript: ;" @click="refresh"> 再来 </a></p></h3>
      <img v-if="score===100" src="@/assets/images/100_1.jpg" />
      <h3 v-if="score>=80&&score<100">加油，再细心一点，你可以得到100分的！<p/>不服气<a href="javascript: ;" @click="refresh"> 再来 </a>!</h3>
      <h3 v-if="score>=60&&score<80">有点难度吧，不服气就<a href="javascript: ;" @click="refresh">  点我 </a>再来一遍。</h3>
      <h3 v-if="score<60">失败是成功之母，错题是最好的老师，不要着急，先仔细看看我们错在哪儿了。<p/>不服气就<a href="javascript: ;" @click="refresh">  点我 </a>再来一遍!</h3>  
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
      submit: false,
      images : [
        {
            name : "image1",
            url : "/assets/images/100_1.jpg"
        },
        {
            name : "image2",
            url : "/static/images/2.png"
        },
        {
            url : "/static/images/3.gif"
        }
      ],
      imgUrl: "@/assets/images/100_1.jpg"
    };
  },
  inject: ['reload'], // https://juejin.im/entry/5b5ac53c5188251abb46c250
  methods: {
    refresh() {
      this.reload();
    },
    change(res) {
      // console.log(JSON.stringify(res));
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
  },

  mounted() {
    // this.imgUrl = require('./assets/logo.png');
  }
};
</script>

<style>
.exam {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.container {
    width: 100%;
    margin-top: 50px;
}

.papper {
  /* padding: 10px; */
  text-align: left;
  display: inline-block;
  background-color: #fff;
  border: 1px solid rgb(208, 228, 228);
}

.primary-button {
  font-size: 15px;
}

</style>

