<template>
  <div id="vueeasytable"  style="background: #ccc;padding:40px;min-height: 1500px;" >
    <h3 style="text-align: left;margin-top: 30px">
      家庭农场
      <div style="float:right">
        <button type="primary" @click="seeData">查看</button>
        <button type="primary" @click="addModalframe=true">添加</button>
        <button type="success" @click="modifyData">修改</button>
        <button type="warning" @click="deleData">删除</button>
      </div>
    </h3>
    <hr>
    <div style="margin-bottom: 20px">
      <span> 身份证号：</span><input type="text" v-model="sfzhcx" placeholder="输入提示"  status="info" style="width:280px;display:inline-block"></input>
      <button type="primary" @click="selectData">查询</button>
    </div>
    <div class="col-md-24 col-sm-24 col-xs-24" style="padding:30px;">
      <v-table
        is-horizontal-resize
        style="width:100%"
        :columns="columns"
        :table-data="tableData"
        :show-vertical-border="false"
        :select-change = "GetSelectObj"
      ></v-table>
      <div style="padding:20px;float:right;">
        <v-pagination :total="dataNum" :page-size="10" @page-change="pageChange" @page-size-change="pageSizeChange"></v-pagination>
      </div>
    </div>
 
    <!--单条信息查看模态框-->
    <!-- <at-modal v-model="seeModalframe" title="查看" >
      企业编码：{{seeobjs.QYBM}}
      <br>
      ...
      <br>
      备注：{{seeobjs.BZ}}
    </at-modal><br>    
    <at-modal v-model="addModalframe" title="添加" @on-confirm="addConfirm">
      <span style="width:70px;margin-bottom: 10px;">企业编码：</span><at-input v-model="addModel.QYBM" placeholder="输入提示"  status="info"  style="margin-bottom: 10px;width:420px;display: inline-block"></at-input>
      <br>
      ...
      <br>
      <span style="width:70px;margin-bottom: 10px;">备注：</span><at-input v-model="addModel.BZ" placeholder="输入提示"  status="info"  style="margin-bottom: 10px;width:420px;display: inline-block"></at-input>
    </at-modal><br>   
    <at-modal v-model="modifyModalframe" title="修改" @on-confirm="modifyConfirm">
      <span style="width:70px;margin-bottom: 10px;">企业编码：</span><at-input v-model="modifyModel.QYBM=seeobjs.QYBM"   status="info"  style="margin-bottom: 10px;width:420px;display: inline-block"></at-input>
      <br>
      ...
      <br>
      <span style="width:70px;margin-bottom: 10px;">备注：</span><at-input v-model="modifyModel.BZ=seeobjs.BZ"   status="info"  style="margin-bottom: 10px;width:420px;display: inline-block"></at-input>
    </at-modal> -->
 
  </div>
</template>
 
<script>
export default {
  name: 'vueeasytable',
  data() {
    return {
      /*获取数据*/
      GetData:[],
      /*表格信息*/
      pageIndex:1,/*页码*/
      pageSize:10,/*每页条数*/
      dataNum:0,/*数据总条数*/
      columns: [
        {width: 60, titleAlign: 'center',columnAlign:'center',type: 'selection'},
        {field: 'QYBM', title:'企业编码', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true},
        {field: 'ZTMC', title: '主体名称', width: 260, titleAlign: 'center',columnAlign:'center',isResize:true},
        {field: 'SFZH', title: '身份证号', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true},
        {field: 'NCMC', title: '农场名称', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true},
        {field: 'ZTDJ', title: '主体等级', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true},
        {field: 'XYDJ', title: '信用等级', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true}
      ],/*列表项*/
      tableData: [],/*表格数据*/
      /*查询条件*/
      sfzhcx:"",/*身份证号*/
      /*选中的对象*/
      SelectObj:[],
      seeobjs:{},
      /*查看单条信息开关*/
      seeModalframe:false,
      /*添加单条信息开关*/
      addModalframe:false,
      /*修改单条信息开关*/
      modifyModalframe:false,
      /*添加的数据model*/
      addModel:{},
      /*修改数据*/
      modifyModel:{},
    }
  },
  created(){
    /*数据初始化*/
    this.getTableData();
  },
  mounted: function () {
  },
  methods: {
    /*数据获取*/
    Getwebsites(){
      var websites;
      // $.ajax({
      //   type: 'post',
      //   async: false,
      //   url: 'http://localhost:47953/Home/GetJtncSelectJsonResult',
      //   data:{selectobj:this.sfzhcx},
      //   success:function (response) {
      //     websites = response;
      //   },
      //   error:function (error) {
      //     console.log(error)
      //   }});
      return websites;
    },
    /*数据处理*/
    websitesHandle () {
      /*获取条件查询结果*/
      var websites = this.Getwebsites();
      /*数据处理*/
      var websit;
      var websitArrtys=[];
      for(var i in websites){
        websit = {
          ID:websites[i].ID,
          QYBM:websites[i].QYBM,
          ZTMC:websites[i].ZTMC,
          SFZH:websites[i].SFZH,
          NCMC:websites[i].NCMC,
          ZTDJ:websites[i].ZTDJ,
          XYDJ:websites[i].XYDJ,
        };
        websitArrtys.push(websit)
      }
      const data = websitArrtys;
      let pageData = [{
          ID:"1",
          QYBM:"1",
          ZTMC:"1",
          SFZH:"1",
          NCMC:"1",
          ZTDJ:"1",
          XYDJ:"1",
      }];
      pageData = pageData.concat(data);
      this.GetData = pageData;
      this.dataNum = this.GetData.length;
    },
    /*分页处理*/
    getTableData(){
      this.websitesHandle();
      this.tableData =this.GetData.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize);
    },
    /*页码触发更新*/
    pageChange(pageIndex){
      this.pageIndex = pageIndex;
      this.getTableData();
    },
    /*每页条数触发更新*/
    pageSizeChange(pageSize){
      this.pageIndex = 1;
      this.pageSize = pageSize;
      this.getTableData();
    },
    /*条件查询*/
    selectData(){
      this.websitesHandle();
      this.tableData =this.GetData.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize);
    },
    /*获取选中对象*/
    GetSelectObj(obj){
      this.SelectObj=[];
      this.SelectObj = this.SelectObj.concat(obj);
    },
    /*查看单条记录详细信息*/
    seeData(){
      /*判断已经选择数据的条数*/
      if(this.SelectObj.length ==0){
        alert({
          title: '错误信息',
          content: '请先选择一条记录'
        })
      }
      else if(this.SelectObj.length >1){
        alert({
          title: '错误信息',
          content: '每次只可以查看一条记录'
        })
      }
      else if(this.SelectObj.length ==1){
        this.seeModalframe=true;
        var Data;
      //   $.ajax({
      //     type: 'post',
      //     async: false,
      //     url: 'http://localhost:47953/Home/UploadJtnc',
      //     data:{id:this.SelectObj[0].ID},
      //     success:function (response) {
      //       Data =  response;
      //     },
      //     error:function (error) {
      //       console.log(error)
      //     }
      //   });
      //   this.seeobjs = Data;
      }
    },
    /*将数据渲染在修改模态框上*/
    modifyData(){
      if(this.SelectObj.length ==0){
        alert({
          title: '错误信息',
          content: '请先选择一条记录'
        })
      }
      else if(this.SelectObj.length >1){
        alert({
          title: '错误信息',
          content: '每次只可以查看一条记录'
        })
      }
      else if(this.SelectObj.length ==1){
        this.modifyModalframe=true;
        var Data;
        // $.ajax({
        //   type: 'post',
        //   async: false,
        //   url: 'http://localhost:47953/Home/UploadJtnc',
        //   data:{id:this.SelectObj[0].ID},
        //   success:function (response) {
        //     Data =  response;
        //   },
        //   error:function (error) {
        //     console.log(error)
        //   }
        // });
        this.seeobjs = Data;
      }
    },
    /*修改确认，将数据修改到数据库*/
    modifyConfirm(){
      console.log(this.modifyModel)
      // $.ajax({
      //   type: 'post',
      //   async: false,
      //   url: 'http://localhost:47953/Home/SaveJtnc',
      //   data:this.modifyModel,
      //   success:function (response) {
      //     console.log(response)
      //   },
      //   error:function (error) {
      //     console.log(error)
      //   }
      // });
      // $.ajax({
      //   type: 'post',
      //   async: false,
      //   url: 'http://localhost:47953/Home/DeleteJtnc',
      //   data:{id:this.SelectObj[0].ID},
      //   success:function (response) {
      //     console.log(response)
      //   },
      //   error:function (error) {
      //     console.log(error)
      //   }
      // });
      this.selectData();
      this.SelectObj=[];
    },
    /*添加数据*/
    addConfirm(){
      // $.ajax({
      //   type: 'post',
      //   async: false,
      //   url: 'http://localhost:47953/Home/SaveJtnc',
      //   data:this.addModel,
      //   success:function (response) {
      //     console.log(response)
      //   },
      //   error:function (error) {
      //     console.log(error)
      //   }
      // });
      this.selectData();
    },
    /*删除数据*/
    deleData(){
      // $.ajax({
      //   type: 'post',
      //   async: false,
      //   url: 'http://localhost:47953/Home/DeleteJtnc',
      //   data:{id:this.SelectObj[0].ID},
      //   success:function (response) {
      //     console.log(response)
      //   },
      //   error:function (error) {
      //     console.log(error)
      //   }
      // });
      this.selectData();
      this.SelectObj=[];
 
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>