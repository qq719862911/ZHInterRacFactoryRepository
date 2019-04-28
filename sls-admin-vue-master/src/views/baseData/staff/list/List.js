
export default {
  name:'staff-list',
  data () {
    return {
      /*
      staff_list: [],
      batch_id: '', // 批量删除时这是多个用逗号隔开的id字符串
      batch_flag: true, // 符合批量删除为true,否则为false
      //查询条件
      search_data: {
        staffCode: '',
        chName:'',
        employmentDate:[],
        parentCode:'',//上级主管
      },
      // 详情弹框信息
      dialog: {
        show: false,
        staff_info: {}
      },
      fields:{
        staffCode:{
          info:{
            prop: 'staffCode',
            label: '员工代号',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        chName:{
          info:{
            prop: 'chName',
            label: '员工姓名',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        enName:{
          info:{
            prop: 'enName',
            label: '英文名称',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        telephone:{
          info:{
            prop: 'telephone',
            label: '电话号码',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        phoneNumber:{
          info:{
            prop: 'phoneNumber',
            label: '手机号码',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        cALLNumber:{
          info:{
            prop: 'cALLNumber',
            label: 'CALL机号',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        departmentNumber:{
          info:{
            prop: 'departmentNumber',
            label: '部门代码',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        jobTitle:{
          info:{
            prop: 'jobTitle',
            label: '职称',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
        birthday: {
          info: {
            prop: 'birthday',
            label: '生日',
            sortable: true
          },
          filter: {},
          style: {
            width: '260',
            align: 'center'
          }
        },
        employmentDate:{
          info:{
            prop: 'employmentDate',
            label: '到职日',
            sortable: true
          },
          filter: {},
          style: {
            width: '260',
            align: 'center'
          }
        },
        resignationDate:{
          info:{
            prop: 'resignationDate',
            label: '离职日',
            sortable: true
          },
          filter: {},
          style: {
            width: '260',
            align: 'center'
          }
        },

        parentCode:{
          info:{
            prop: 'parentCode',
            label: '上级主管',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        },
      },
      // 需要给分页组件传的信息
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 12,
        page_sizes: [3, 9, 12, 24],
        layout: 'total, sizes, prev, pager, next, jumper'
      },
      */
      list: [],
      fields:[{
        key: 'staffCode',
        label: '员工代号',
        sortable: true,
        width: '100',
        align: 'center'
      },{
        key: 'chName',
        label: '员工姓名',
        sortable: true,
        width: '150',
        align: 'center'
      },{
        key: 'enName',
        label: '英文名称',
        sortable: true,
        width: '150',
        align: 'center'
      },{
        key: 'telephone',
        label: '电话号码',
        sortable: true,
        width: '150',
        align: 'center'
      },{
        key: 'phoneNumber',
        label: '手机号码',
        sortable: true,
        width: '150',
        align: 'center'
      },{
        key: 'cALLNumber',
        label: 'CALL机号',
        sortable: true,
        width: '150',
        align: 'center'
      },{
        key: 'departmentNumber',
        label: '部门代码',
        sortable: true,
        width: '100',
        align: 'center'
      },{
        key: 'jobTitle',
        label: '职称',
        sortable: true,
        width: '100',
        align: 'center'
      },{
        key: 'birthday',
        label: '生日',
        sortable: true,
        width: '180',
        align: 'center'
      },{
        key: 'employmentDate',
        label: '到职日',
        sortable: true,
        width: '180',
        align: 'center'
      },{
        key: 'resignationDate',
        label: '离职日',
        sortable: true,
        width: '180',
        align: 'center'
      },{
        key: 'parentCode',
        label: '上级主管',
        sortable: true,
        width: '100',
        align: 'center'
      },],
      // 需要给分页组件传的信息
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 9,
        page_sizes: [3, 9, 12, 24],
        layout: 'total, sizes, prev, pager, next, jumper'
      },
      // 搜索配置
      search_data: {
        fields: [{
          key: 'staffCode',
          label: '员工代号'
        },{
          key: 'chName',
          label: '员工姓名'
        },{
          key: 'employmentDate',
          label: '到职日',
          type: 'daterange',
          placeholder: '到职日期范围',
          date_range_attrs: {
            'range-separator': ' 至 '
          },
          events: {
            change: ({value, info}) => {
              //this.$message('字符串值：' + value + '；数组值：' + info)
            }
          }
        },{
          key: 'parentCode',
          label: '上级主管'
        },],
        default_value: {
          staffCode: '',
          chName:'',
          employmentDate:[],
          parentCode:'',//上级主管
        }
      },
      // 按钮配置
      btn_info: {
        // batch:false,
        // batch_delete:false,
        width: 300,
        add_text: '添加文章',
        select_text: '查看',
        update_text: '修改',
        delete_text: '删除文章',
        batch_delete_text: '批量删除文章'
      },

    }
  },

  methods:{
 /*
    onSearch () {
      let that =this;
      let beginEmploymentDate = '';
      let endEmploymentDate = '';
      if (that.search_data.employmentDate && that.search_data.employmentDate[0]) {
        beginEmploymentDate =that.search_data.employmentDate[0];
      }
      if (that.search_data.employmentDate && that.search_data.employmentDate[1]) {
        endEmploymentDate =that.search_data.employmentDate[1];
      }
      console.log(beginEmploymentDate)
      console.log(endEmploymentDate)
      this.$axios.get('http://localhost:1624/api/v1/Staff/GetPageAsync',{
        params: {
        page: that.paginations.current_page,
          page_size: that.paginations.page_size,
          staffCode: that.search_data.staffCode.trim(),
          chName: that.search_data.chName.trim(),
          parentCode: that.search_data.parentCode.trim(),
          beginEmploymentDate: beginEmploymentDate,
          endEmploymentDate: endEmploymentDate,
        }
      }).then(function (response) {
          let staffData = response.data.data;
          that.staff_list = staffData.list.data;
          that.paginations.total = staffData.list.total
        })
        .catch(function (error) {
          console.log(error);
        })
    },

    onSelectionChange (val) {
      console.log(val);
      },


    onSelectObj (obj) {
      this.dialog.show = true
      this.dialog.staff_info = obj
    },

    onEditObj (obj) {
      console.log(obj);
    },

    onDeleteObj(staff, index, list){
      console.log(staff);
    },

    onChangeCurrentPage (page) {
    },

    onChangePageSize (pageSize) {

    },
    onCloseView () {

    },

    getList ({
               page,
               pageSize,
               where,
               fn
             } = {}) {
      let query = this.$route.query
      let that = this;
      this.paginations.current_page = page || parseInt(query.page) || 1
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size

      var data = {
        page: this.paginations.current_page,
        page_size: this.paginations.page_size
      }

      if (where) {
        data = Object.assign(data, where || {})//方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。Object.assign(target, ...sources)
      } else {
        for (var s in query) {
          if (this.search_data[s] !== undefined) {
            this.search_data[s] = query[s]
            data[s] = query[s]
          }
        }
      }

      this.$axios.get('http://localhost:1624/api/v1/Staff/GetPageAsync?page='+this.paginations.current_page+'&page_size='+this.paginations.page_size)
        .then(function (response) {
          let staffData = response.data.data;
          that.staff_list = staffData.list.data;
          console.log(that.staff_list)
          that.paginations.total = staffData.list.total
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    */

    onGetList () {
      let that =this;
      let beginEmploymentDate = '';
      let endEmploymentDate = '';
      let search_data =that.search_data.default_value;
      if (search_data.employmentDate && search_data.employmentDate[0]) {
        beginEmploymentDate =search_data.employmentDate[0];
      }
      if (search_data.employmentDate && search_data.employmentDate[1]) {
        endEmploymentDate =search_data.employmentDate[1];
      }
      this.$axios.get('http://localhost:1624/api/v1/Staff/GetPageAsync',{
        params: {
          page: that.paginations.current_page,
          page_size: that.paginations.page_size,
          staffCode: search_data.staffCode,
          chName: search_data.chName,
          parentCode: search_data.parentCode,
          beginEmploymentDate: beginEmploymentDate,
          endEmploymentDate: endEmploymentDate,
        }
      }).then(function (response) {
        let staffData = response.data.data;
        that.list = staffData.list.data;
        that.paginations.total = staffData.list.total
      }).catch(function (error) {
          console.log(error);
        })
    },
    onClickBtnDelete (opts) {
      let that = this;
      this.$confirm('删除后不可恢复', '确认删除？').then(() => {
        console.log(opts)
        //ajax  成功后调用 that.onGetList()
        this.$axios.get('http://localhost:1624/api/v1/Staff/DeleteAsync',{
            params: {
            id: opts.data.id,
          }
        }).then(function (response) {
          if (response.status==200) {
            that.onGetList();
            that.$message('删除成功！')
          }
        }).catch(function (error) {
          console.log(error)
          that.$message('删除失败！')
        })
      })
    },
    onClickBtnAdd () {
      this.$router.push('/baseData/staff/edit')
      this.$message('跳转到add')
    },
    onClickBtnUpdate (opts) {
      console.log(opts)
      let id =opts.data.id;

      this.$message('跳转到edit')
     // this.$router.push({
       // path: '/adv/article/edit',
        //query: {
         // id: opts.data.id
        //}
     // })
    },
    onChangePageSize (pageSize) {
      this.paginations.page_size=pageSize;
      this.onGetList();
    },
    //改变页码事件 current_page    当前页码
    onChangeCurPage (currentPage) {
      this.paginations.current_page=currentPage;
      this.onGetList();
    },
    onUpdateParams () {
      if (this.$route.query.current_page) {
        this.paginations.current_page = parseInt(this.$route.query.current_page)
      }
      if (this.$route.query.page_size) {
        this.paginations.page_size = parseInt(this.$route.query.page_size)
      }
      this.search_data.default_value.staffCode = this.$route.query.staffCode;
      this.search_data.default_value.chName = this.$route.query.chName;
      this.search_data.default_value.employmentDate = this.$route.query.employmentDate;
      this.search_data.default_value.parentCode = this.$route.query.parentCode;
    },
    //搜索
    onSearch ({data, info}) {
      let that =this;
      let beginEmploymentDate = '';
      let endEmploymentDate = '';
      if (data.employmentDate && data.employmentDate[0]) {
        beginEmploymentDate =data.employmentDate[0];
      }
      if (data.employmentDate && data.employmentDate[1]) {
        endEmploymentDate =data.employmentDate[1];
      }
      this.$axios.get('http://localhost:1624/api/v1/Staff/GetPageAsync',{
        params: {
          page: that.paginations.current_page,
          page_size: that.paginations.page_size,
          staffCode: data.staffCode,
          chName: data.chName,
          parentCode: data.parentCode,
          beginEmploymentDate: beginEmploymentDate,
          endEmploymentDate: endEmploymentDate,
        }
      }).then(function (response) {
        let staffData = response.data.data;
        that.list = staffData.list.data;
        that.paginations.total = staffData.list.total
      }).catch(function (error) {
          console.log(error);
        })
    },
    // 批量选择改变CheckBox事件
    onSelectionChange ({ids, datas}) {
      console.log(ids);
      console.log(datas);
    },
    //批量删除
    onClickBtnBatchDelete ({ids, datas}) {
      let that = this;
      let idsStr = ids.join(',');
      //显示删除的人
      let dataArr = [];
      for(let data of datas) {
        dataArr.push(data.staffCode);
      };
      this.$confirm('删除的数据：' + dataArr.join(','), '确认删除？').then(() => {
        let postData = that.$qs.stringify({
          ids:idsStr,
        });
        this.$axios({
          method: 'post',
          url:'http://localhost:1624/api/v1/Staff/BatchDeleteAsync',
          data:postData
        }).then(function (response) {
          if (response.status==200) {
            that.onGetList();
            that.$message('删除成功！')
          }
        }).catch(function (error) {
          console.log(error)
          that.$message('删除失败！')
        })
      })
    },
    init () {
      this.onUpdateParams()
      this.onGetList()
    }
  },
  mounted () {
    this.init()
  },
  '$route' (to, from) {

  }
}
