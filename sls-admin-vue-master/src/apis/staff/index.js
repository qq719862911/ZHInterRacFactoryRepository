/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
export default [
  {
    name: '获取员工列表',
    method: 'getPageAsync',
    path: 'api/staff/getPageAsync',
    type: 'get'
  },{
    name: '新增员工',
    method: 'addNewAsync',
    path: 'api/staff/addNewAsync',
    type: 'post'
  },{
    name: '编辑员工',
    method: 'editNewAsync',
    path: 'api/staff/editNewAsync',
    type: 'post'
  },{
    name: '删除员工',
    method: 'deleteAsync',
    path: 'api/staff/deleteAsync',
    type: 'get'
  },{
    name: '批量删除员工',
    method: 'batchDeleteAsync',
    path: 'api/staff/batchDeleteAsync',
    type: 'post'
  },{
    name: '查看员工详情',
    method: 'find',
    path: 'api/staff/find',
    type: 'get'
  }
]
