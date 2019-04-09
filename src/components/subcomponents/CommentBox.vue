<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容" v-model.trim="txt"></textarea>
    <mt-button size="large" type="primary" @click="addComment">发表评w论</mt-button>
    <hr>
    <div class="cmt-list">
          <div class="cmt-item">
            <div class="cmt-item" v-for="(item,i) in list" :key="i">
              <div class="cmt-title">
                第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dateFormat}}
              </div>
              <div class="cmt-body">
                {{item.content}}
              </div>
          </div>
          </div>
        </div>
    <mt-button size="large" type="danger" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  props:['id'],
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`).then(res=>{
        if(res.body.status == 0){
          // this.list = res.body.message
          this.list = [...this.list,...res.body.message]
        }
      })
    },
    getMore(){
      this.pageindex++,
      this.getList()
    },
    addComment(){
      if(this.txt == ''){
        Toast('数据不能为空')
        return 
      }
      this.$http.post(`api/postcomment/${this.id}`,{content:this.txt}).then(res=>{
        // console.log(res)
        if(res.body.status == 0){
          //第一种思路 清空所有的数据，再次请求数据
          // this.list = []
          //this.pageindex = 1
          // this.getList()
          // this.txt = ''
          //第二种思路
          //构建一个新的数据对象
          const obj = {
            add_time:Date.now(),
            content:this.txt,
            user_name:'匿名用户'
          }
          this.list.unshift(obj)
          this.txt = ''
        }
      })
    }
  },
  data () {
    return {
      pageindex:1,
      list:[],
      txt:''
    };
  },
}
</script>
<style lang="scss" scoped>
 .cmt-container{
    h3{
      font-size: 18px;
    }
    textarea{
      font-size: 14px;
      height: 85px;
      margin:0;
    }
    .cmt-list{
      margin:5px 0;
      .cmt-item{
        font-size:13px;
        .cmt-title{
          line-height: 30px;
          background-color:#ccc;
        }
        .cmt-body{
          line-height:35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>