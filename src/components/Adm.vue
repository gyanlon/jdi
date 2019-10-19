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
            <a href="javascript:;" @click="activate">启用</a>&nbsp;&nbsp;
            <a href="javascript:;" @click="inactivate">停用</a>&nbsp;&nbsp;
            <a href="javascript:;" @click="modify">修改</a>&nbsp;&nbsp;
            <a href="javascript:;" @click="del">删除</a>
        </div>

        <div class="form" v-if="create">
            <span class="close" @click="closeForm">X</span>
            题干：<textarea type="text" id="pattern" v-model="form.pattern" ></textarea><span class="helpicon" @click="openHelp"> ? </span>
            <p>
            分数：<input type="text" id="score" v-model="form.score" style="text-align: left;" ></input>
            参数范围：<input type="text" id="variable_range" v-model="form.variable_range"></input>
            答案算法：<input type="text" id="answer_alg" v-model="form.answer_alg"></input>
            <div class="buttons">
                <a href="javascript:;" @click="save"> 保存 </a>
            </div>
        </div>

        <div class="help" v-if="help">
            <span class="close" @click="closeHelp">X</span>
            <ul>
            <li><b>题干</b> ：支持生成随机参数
                <ul>
                <li>{} ：题干中英文的{}表示随机参数, 可以在后面配置的参数范围内随机取数。</li>
                <li>() ：题干中英文的()表示需要填写的内容。</li>
                </ul>
               
            <li><b>参数范围</b>：题干中的参数的取值范围，比如1-9，生成题目时，会在参数范围内随机取一个数。如果有多个参数，需要用,(英文的,)分开。也支持$[n]表示前面的参数。</li>
            <li><b>答案算法</b>：如果有参数，答案与参数的算法关系！请中$[1]表示第一个参数</li>
            <li>
                <b>示例：</b> 一位数求和：<br>
                题干：{} + {} = ()<br>
                参数范围：1-9，1-9<br>
                答案算法：$[1]+$[2]
            </li>    
            </ul>
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
              {width: 40, titleAlign: 'center',columnAlign:'center',type: 'selection'},
              {field: 'pattern', title: '题干', width: 280, titleAlign: 'center',columnAlign:'left'},
              {field: 'score', title: '分数', width: 50, titleAlign: 'center',columnAlign:'center'},
              {field: 'variable_range', title: '参数范围', width: 140, titleAlign: 'center',columnAlign:'center'},
              {field: 'answer_alg', title: '答案算法', width: 140, titleAlign: 'center',columnAlign:'center'},
              {field: 'active', title: '是否启用', titleAlign: 'center',columnAlign:'center'}
          ],
          create: false,
          form: {
              pattern: "",
              score: 5,
              variable_range: "",
              answer_alg: ""
          },
          selectObj: [],
          help: false
      }
  },
  inject: ['reload'], // https://juejin.im/entry/5b5ac53c5188251abb46c250
  methods: {
      add() {
          this.create = true;
      },
      save() {
          console.log(Store.indexOfUDQ(this.form))
          var udqs = Store.fetchUDQ();
          if(Store.indexOfUDQ(udqs, this.form) >=0 ) {
              if(confirm( "是否覆盖已存在的记录" )) {
                  Store.removeUDQ(this.selectObj[0]);
              } else {
                  return;
              }
          }

          if(this.form.pattern && this.form.score && this.form.answer_alg) {
            var newQ = {
              pattern: this.form.pattern,
              score: this.form.score,
              variable_range: Array.isArray(this.form.variable_range) ? this.form.variable_range : this.form.variable_range.replace(/ /g,"").split(","),
              answer_alg: Array.isArray(this.form.answer_alg) ? this.form.answer_alg : this.form.answer_alg.replace(/ /g,"").this.form.answer_alg.split(","),
              variables: "",
              answers: "",
              active: false
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
          if(this.selectObj.length === 1) {
              this.create = true;
              var q = this.selectObj[0];
              this.form.pattern = q.pattern;
              this.form.score = q.score;
              this.form.variable_range = q.variable_range;
              this.form.answer_alg = q.answer_alg;             
          } else {
              alert("请选择且仅选择一条记录！")
          }
      },
      del() {
          for(var i=0; i<this.selectObj.length; i++) {
              Store.removeUDQ(this.selectObj[i])
          }
          this.reload();
      },
      activate() {
          for(var i=0; i<this.selectObj.length; i++) {
              Store.activateUDQ(this.selectObj[i])
          }
          this.reload();
      },
      inactivate() {
          for(var i=0; i<this.selectObj.length; i++) {
              Store.inactivateUDQ(this.selectObj[i])
          }
          this.reload();
      },
      openHelp() {
          this.help = true;
      },
      closeHelp() {
          this.help = false;
      },
      closeForm() {
          this.create = false;
          this.help = false;
      }
  }
}
</script>

<style>
.form,
.help,
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
div.form, div.help{
    text-align: left;
}
div.form  > textarea {
    width: 610px; 
    height: 50px; 
}
.list.buttons,
div.form  > .buttons {
    text-align: right;
}

.v-table-header-row .v-checkbox {
    display: none;
}

.form, .help {
    padding: 10px;
    margin: 5px auto;
    border: 1px solid gray;
}

.form .helpicon {
    color:green; 
    font-weight: bold;
    margin-left: 10px;
    display: inline-block;
}

span.close {
    text-align: right;
    display: inline-block;
    width: 100%;
    color: red;
}
</style>
