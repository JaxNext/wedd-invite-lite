<template>
  <div id="app">
    <el-form :model="form" ref="form" label-width="50px">
      <el-row>
        <!-- <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="地点">
            <el-select @change="inputChange" v-model="form.local">
              <el-option v-for="item in localOpts" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col> -->

        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="定语">
            <el-select @change="inputChange" v-model="form.attWord">
              <el-option v-for="item in attOpts" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="称呼">
            <el-input @input="inputChange" v-model="form.name" placeholder="称呼"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <el-form-item label="称谓">
            <el-select @change="inputChange" v-model="form.title" placeholder="称谓（非必选）">
              <el-option v-for="item in titleOpts" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="预览">
        <el-input v-model="preview" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="长链">
        <el-input v-model="url" placeholder="长链">
          <el-button v-clipboard:copy="url" v-clipboard:success="copySucess" v-clipboard:error="copyError" slot="append">复制</el-button>
        </el-input>
      </el-form-item>

      <el-form-item label="短链">
        <el-input v-model="shortUrl" placeholder="短链">
          <el-button v-clipboard:copy="shortUrl" v-clipboard:success="copySucess" v-clipboard:error="copyError" slot="append">复制</el-button>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="render">生成网址</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import ax from 'axios'
  export default {
    name: 'app',
    data() {
      return {
        token:'your_own_short_url_token',
        // base:'https://your-domain-name.cn/inv/index.html',
        base:'http://127.0.0.1',
        attOpts: [{
            label: '尊敬的',
            value: 1
          },
          {
            label: '亲爱的',
            value: 2
          },
        ],
        localOpts:[
          {
            label:'城市 A',
            value:'a',
          },
          {
            label:'城市 B',
            value:'b',
          }
        ],
        titleOpts: [{
            label: '先生',
            value: 1
          },
          {
            label: '小姐',
            value: 2
          },
          {
            label: '女士',
            value: 3
          },
        ],
        form: {
          local:'a',
          attWord: 1,
          name: '',
          title: null,
        },
        url:'',
        shortUrl:'',
        preview:'',
      }
    },
    methods: {
      inputChange(){
        const that=this;
        const att=(that.attOpts.filter(x=>x.value===that.form.attWord))[0].label;
        const name=that.form.name;
        let title='';
        if(that.form.title){
          title=(that.titleOpts.filter(x=>x.value===that.form.title))[0].label;
        }
        
        that.preview=att+name+title;
      },
      render() {
        const that=this;

        const a=(that.attOpts.filter(x=>x.value===that.form.attWord))[0].label;//定语
        const n=that.form.name;//名称
        let t='';//称谓
        if(that.form.title){
          t=(that.titleOpts.filter(x=>x.value===that.form.title))[0].label;
        }
        that.url=that.base+'?a='+encodeURI(a)+'&n='+encodeURI(n)+'&t='+encodeURI(t);
        that.shortUrl=that.url;
        const data=JSON.stringify({
          url:that.url
        })

        ax({
          method:'post',
          url:'https://dwz.cn/admin/v2/create',
          headers:{
            token:that.token,
            'content-type':'application/json; charset=UTF-8',
          },
          data
        })
        .then(res=>{
          // console.log('res',res);
          if(res&&res.data&&res.data){
            switch (res.data.Code) {
              case 0:
                that.$message('生成网址成功！');
                that.shortUrl=res.data.ShortUrl;
                break;
              case -1:
                that.$message('短网址生成失败');
                break;
              case -2:
                that.$message('长网址不合法');
                break;
              case -3:
                that.$message('长网址存在安全隐患');
                break;
              case -4:
                that.$message('长网址插入数据库失败');
                break;
              case -5:
                that.$message('长网址在黑名单中，不允许注册');
                break;
            
              default:
                break;
            }
          }
        })
        .catch(err=>{
          console.log('err',err);
        });
      },
      reset(){
        this.form={
          attWord: 1,
          name: '',
          title: null,
        };
        this.url='';
        this.shortUrl='';
        this.preview='';
      },
      copySucess(e){
        this.$message('复制成功！')
      },
      copyError(){this.$message('复制失败，请联系开发者！')},
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .el-form{
    max-width: 1200px;
    margin: 30px auto;
  }
  .el-col{
    min-width: 200px;
  }
  .el-col .el-input,
  .el-col .el-select{
    width: 100%;
  }
</style>