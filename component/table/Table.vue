
<script>
import axios from 'axios';

export default {
  data() {
    return {
      DataList:[]
    };
  },
  methods: {

  },
  created() {
      axios.get("http://localhost:3000/links").then( res =>{
          this.DataList = res.data
          //console.log(res.data)
      })
  },
  render() {
    return (
      <el-table 
        data={this.DataList}
        border 
        style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="status" label="状态码" width="180"></el-table-column>
            <el-table-column prop="url" label="地址"></el-table-column>
      </el-table>
    );
  },
};
</script>