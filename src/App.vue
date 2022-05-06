<template>
  <div id="app">
    <!-- 头部模块 -->
    <Head>
      <h2>{{ title }}</h2>
    </Head>

    <!-- 用户登录 -->
    <div>
      <div style="display: flex">
        <div v-show="isShow">
          <button @click="LoginHandle">管理员登录</button>
          <button @click="LoginHandle1">游客登录</button>
        </div>
        <button v-show="identityId == 1||identityId == 2" @click="ExitHandle">退出</button>
      </div>

      <!-- Select和Input渲染 -->
      <div v-if="identityId == 1"></div>
      <div v-if="identityId == 2">
        <input type="text" />
        <select name="" id="">
          <option label="区域一" value="shanghai"></option>
          <option label="区域二" value="beijing"></option>
        </select>
      </div>
    </div>

    <!-- 列表 -->
    <TableList/>

    <!-- 表单 -->
    <Form/>
    <Foot />
    <Form-1/>
    <Table-1/>
  </div>
</template>

<script>
import Head from "../component/head/Head.vue";
import Foot from "../component/foot/Foot.vue";
import TableList from '../component/table/Table.vue';
import Form from '../component/form/Form.vue'
import Table1 from '../component/table/Table1.vue';
import Form1 from '../component/form/Form1.vue';

export default {
  name: "App",
  components: {
    Head,
    Foot,
    TableList,
    Form,
    Table1,
    Form1
  },
  data() {
    return {
      title: "您好！尊敬的游客，请先登录~",
      identityId: 0,
      isShow: true,
    };
  },
  methods: {
    LoginHandle() {
      this.title = "管理员";
      this.identityId = 2;
      this.isShow = !this.isShow;
    },
    LoginHandle1() {
      this.title = "游客";
      this.identityId = 1;
      this.isShow = !this.isShow;
    },
    ExitHandle() {
      this.title = "您好！尊敬的游客，请先登录~";
      this.identityId = 0;
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
