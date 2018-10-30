export default {
  name: 'form',
  data () {
    return {
      form: {
        name: '',
        region: '',
        region2: [
          {text:'区域一',value:'one'},
          {text:'区域二',value:'two'},
          {text:'区域三',value:'three'}],
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resources:[{text:'线上品牌商赞助',value:'1'},
          {text:'线下场地免费',value:'2'}
        ],
        resource: '',
        desc: '',
        disk_size: 6,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

      }
    }
  },
  methods: {
    onSubmit (e) {
      let thisForm = this.form;
      console.log('submit!')
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

  }
}
