var shotvideo = new Vue({
  el:"#shotvideo",
  data:{
    videoList:[
      {
        img:'../img/1.png',
        time:'101:53:26',
        name:'土的力学虚拟仿真实验'
      },{
        img:'../img/2.png',
        time:'101:53:26',
        name:'圾土室内沉降虚拟仿真实验'
      }, {
        img:'../img/3.png',
        time:'101:53:26',
        name:'土的力学虚拟仿真实验'
      }, {
        img:'../img/1.png',
        time:'101:53:26',
        name:'建筑安全虚拟仿真实验'
      }, {
        img:'../img/4.png',
        time:'101:53:26',
        name:'土的力学虚拟仿真实验'
      }, {
        img:'../img/3.png',
        time:'101:53:26',
        name:'圾土室内沉降虚拟仿真实验'
      }, {
        img:'../img/3.png',
        time:'101:53:26',
        name:'建筑安全虚拟仿真实验'
      }, {
        img:'../img/2.png',
        time:'101:53:26',
        name:'圾土室内沉降虚拟仿真实验'
      }, {
        img:'../img/4.png',
        time:'101:53:26',
        name:'土的力学虚拟仿真实验'
      }, {
        img:'../img/2.png',
        time:'101:53:26',
        name:'圾土室内沉降虚拟仿真实验'
      }, {
        img:'../img/3.png',
        time:'101:53:26',
        name:'建筑安全虚拟仿真实验'
      }
    ],
    currentPage4: 1,
    isshow:false,
    dialogImageUrl: '',
    dialogVisible: false,
    disabled: false
  },
  created(){
   
  },
  methods:{
    add(){
      this.isshow=true;
    },
    handleRemove(file) {
      // console.log(file);
    },
    openvideo(){
      // console.log('播放')
    },
    dele(){
      // console.log('删除')
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      // console.log(file);
    },
    shue(bol){
      this.isshow=false;
      if(bol){
        // console.log(456)
      }
    },
    //每页多少条
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    //当前处于那一页上
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    }
  },
})