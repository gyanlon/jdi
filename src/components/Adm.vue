<template>
    <div class="adm">
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
        <div class="buttons" style="float:center">
            <a href="javascript:;"  @click="add">添加</a> &nbsp;&nbsp;
            <a href="javascript:;" @click="modify">修改</a>&nbsp;&nbsp;
            <a href="javascript:;" @click="del">删除</a>
        </div>

        <div class="form" v-if="create">
            题干：<input type="text" id="pattern" v-model="form.pattern"></input>
            分数：<input type="text" id="score" v-model="form.score"></input>
            参数：<input type="text" id="variables" v-model="form.variables"></input>
            答案：<input type="text" id="answers" v-model="form.answers"></input>
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
              {field: 'variables', title: '参数', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'answers', title: '答案', titleAlign: 'center',columnAlign:'center'}
          ],
          create: false,
          form: {
              pattern: "",
              score: 0,
              variables: "",
              answers: ""
          },
          selectObj: []
      }
  },

  methods: {
      add() {
          this.create = true;
      },
      save() {
          var newQ = {
              pattern: this.form.pattern,
              score: this.form.score,
              variables: this.form.variables,
              answers: this.form.answers
          }

          Store.appendUDQ(newQ);
          this.create = false;

          this.form = {
              pattern: "",
              score: 0,
              variables: "",
              answers: ""
          };

          this.udqData = Store.fetchUDQ();
      },
      select(obj){
        this.selectObj=[];
        this.selectObj = this.selectObj.concat(obj);
        console.log(JSON.stringify(this.selectObj))
      },
      modify() {

      },
      del() {

      }
  }
}
</script>

<style>
.v-table-views {
  width: 300px;
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
</style>
