<script>
    export default {
        data(){
            return{
                aaa:''
            }
        },
        render(){
            return(
                <div>
                        <div>姓名：<input v-model={this.aaa} name="name" type="text"></input></div>
                        <div>密码：<input name="password" type="password"></input></div>
                        <div>确认密码：<input name="repassword" type="password"></input></div>
                        <input onclick={()=>{console.log(this.aaa)}} type="submit"/>
                </div>
            )
        }
    }
</script>
