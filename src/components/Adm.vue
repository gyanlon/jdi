<template>
    <div class="col-md-24 col-sm-24 col-xs-24 adm" >
        <h3> 做错的题目 </h3>
        <v-table
                :width="700"
                :columns="backupColumns"
                :table-data="backupData"
                :show-vertical-border="true">
        </v-table>
        <h3> 自定义 </h3>
        <v-table
                :width="700"
                :columns="udqColumns"
                :table-data="udqData"
                :show-vertical-border="true"
                :select-change = "select">
        </v-table>
        <div class="list buttons">
            <a href="javascript:;"  @click="add">添加</a> &nbsp;&nbsp;
            <!-- <a href="javascript:;" @click="modify">修改</a>&nbsp;&nbsp; -->
            <a href="javascript:;" @click="del">删除</a>
        </div>

        <div class="form" v-if="create">
            题干：<textarea type="text" id="pattern" v-model="form.pattern" ></textarea>
            <p>
            分数：<input type="text" id="score" v-model="form.score" style="text-align: left;" ></input>
            参数范围：<input type="text" id="variable_range" v-model="form.variable_range"></input>
            答案算法：<input type="text" id="answer_alg" v-model="form.answer_alg"></input>
            <div class="buttons">
                <a href="javascript:;" @click="save"> 保存 </a>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
/**
 * vue easy table.
 */
// import css
import 'vue-easytable/libs/themes-base/index.css'

// import table and pagination comp
import {VTable,VPagination} from 'vue-easytable'
// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

import Store from "./store.js";

export default {
  data: function() {
      return {
          backupData: Store.fetchBackup(),
          udqData: Store.fetchUDQ(),
          backupColumns: [
              {field: 'pattern', title: '题干', width: 300, titleAlign: 'center',columnAlign:'left'},
              {field: 'score', title: '分数', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'variables', title: '参数', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'answers', title: '答案', titleAlign: 'center',columnAlign:'center'}
          ],
          udqColumns: [
              {width: 60, titleAlign: 'center',columnAlign:'center',type: 'selection'},
              {field: 'pattern', title: '题干', width: 300, titleAlign: 'center',columnAlign:'left'},
              {field: 'score', title: '分数', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'variable_range', title: '参数范围', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'answer_alg', title: '答案算法', titleAlign: 'center',columnAlign:'center'}
          ],
          create: false,
          form: {
              pattern: "",
              score: 5,
              variable_range: "",
              answer_alg: ""
          },
          selectObj: []
      }
  },
  inject: ['reload'], // https://juejin.im/entry/5b5ac53c5188251abb46c250
  methods: {
      add() {
          this.create = true;
      },
      save() {

          if(this.form.pattern && this.form.score && this.form.answer_alg) {
            var newQ = {
              pattern: this.form.pattern,
              score: this.form.score,
              variable_range: this.form.variable_range.split(","),
              answer_alg: this.form.answer_alg.split(","),
              variables: "",
              answers: ""
            }
            Store.appendUDQ(newQ);
          }

          this.create = false;

          this.form = {
              pattern: "",
              score: 0,
              variable_range: "",
              answanswer_alg: ""
          };

          this.reload();
      },
      select(obj){
        this.selectObj=[];
        this.selectObj = this.selectObj.concat(obj);
        console.log(JSON.stringify(this.selectObj))
      },
      modify() {

      },
      del() {
          for(var i=0; i<this.selectObj.length; i++) {
              Store.removeUDQ(this.selectObj[i])
          }
          this.reload();
      }
  }
}
</script>

<style>
.form,
.list.buttons,
.v-table-views {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.v-table-header-row {
  background-color: rgb(243, 243, 243)
}
div.v-table-body-cell {
  word-wrap: break-word;
  /* height: auto !important; */
  line-height: 20px !important;
  overflow: visible;
  white-space: normal;
}
div.form {
    height: 30px; 
    text-align: left;
}
div.form  > textarea {
    width: 650px; 
    height: 50px; 
}
.list.buttons,
div.form  > .buttons {
    text-align: right;
}
</style>
