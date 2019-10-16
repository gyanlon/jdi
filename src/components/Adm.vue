<template>
    <div>
        <h3> 做错的题目 </h3>
        <v-table
                :width="700"
                :columns="columns"
                :table-data="tableData"
                :show-vertical-border="true">
        </v-table>
        <h3> 自定义 </h3>
        <v-table
                :width="700"
                :columns="columns"
                :table-data="tableData"
                :show-vertical-border="true">
        </v-table>
        <div>
        <a href="javascript:void" @click="save"> 增加 </a>
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
          tableData: Store.fetchBackup(),
          columns: [
              {field: 'id', title:'ID', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'score', title: '分数', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'pattern', title: '题干', width: 300, titleAlign: 'center',columnAlign:'left'},
              {field: 'variables', title: '参数', width: 100, titleAlign: 'center',columnAlign:'center'},
              {field: 'answers', title: '答案', titleAlign: 'center',columnAlign:'center'}
          ]
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
