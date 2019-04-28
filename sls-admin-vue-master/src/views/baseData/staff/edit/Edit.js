import {
  gbs
} from 'config/'

export default {
  name: 'adv-edit-staff',
  components: {},
  data () {
    return {
      fields: [{
        key: 'staffCode',
        desc: '请输入员工代号',
        label: '员工代号'
      }, {
        key: 'chName',
        desc: '请输入员工姓名',
        label: '员工姓名'
      }, {
        key: 'enName',
        desc: '请输入英文名称',
        label: '英文名称'
      }, {
        key: 'telephone',
        desc: '请输入电话号码',
        label: '电话号码'
      }, {
        key: 'phoneNumber',
        desc: '请输入手机号码',
        label: '手机号码'
      }, {
        key: 'cALLNumber',
        desc: '请输入CALL机号',
        label: 'CALL机号'
      }, {
        key: 'departmentNumber',
        desc: '请输入部门代码',
        label: '部门代码'
      }, {
        key: 'jobTitle',
        desc: '请输入职称',
        label: '职称'
      },{
        label: '生日',
        type: 'date',
        key: 'birthday',
        placeholder: '生日',
        events: {
          change: (value) => {
            this.$message('值：' + value)
          }
        }
      },{
        label: '到职日',
        type: 'date',
        key: 'employmentDate',
        placeholder: '到职日',
        events: {
          change: (value) => {
            this.$message('值：' + value)
          }
        }
      },{
        label: '离职日',
        type: 'date',
        key: 'resignationDate',
        placeholder: '离职日',
        events: {
          change: (value) => {
            this.$message('值：' + value)
          }
        }
      }, {
        key: 'parentCode',
        desc: '请输入上级主管',
        label: '上级主管代号'
      }],
      default_value: {
        staffCode: '',
        chName: '',
        enName: '',
        telephone: '',
        phoneNumber: '',
        cALLNumber: '',
        departmentNumber: '',
        jobTitle: '',
        birthday: '',
        employmentDate: '',
        resignationDate: '',
        parentCode: '',
      },
      rules: {
        staffCode: [{
          required: true, message: '请输入员工代号', trigger: 'blur'
        }],
      }
    }
  },
  methods: {
    onSubmit ({data, info}) {
      let that =this;
      let postData = that.$qs.stringify(data);
      this.$axios({
        method: 'post',
        url:'http://localhost:1624/api/v1/Staff/AddNewAsync',
        data:postData
      }).then(function (response) {
        if (response.status==200) {
          that.$message('新增成功！')
        }
      }).catch(function (error) {
        console.log(error)
        that.$message('新增失败！')
      })
    }
  },
  created () {

    // if (this.$route.query.id) {
    //   var data = {
    //     id: this.$route.query.id
    //   }
    //   // this.$$api_article_findArticle({
    //   //   data,
    //   //   fn: data => {
    //   //     console.dir(data)
    //   //     this.default_value.content = data.article_info.content
    //   //     this.default_value.title = data.article_info.title
    //   //     this.default_value.cate = data.article_info.cate
    //   //     this.default_value.status = data.article_info.status === 1
    //   //     this.default_value.tabs = data.article_info.tabs.split(',')
    //   //   }
    //   // })
    // }
  },
  mounted () {

  },
  watch: {
    default_value: {
      deep: true,
      handler (v) {
        this.default_value = v
      }
    }
  }
}
