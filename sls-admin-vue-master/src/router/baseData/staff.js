/**
 * Created by haiyi on 2017/5/11.
 */

import { Content } from 'layout/'

import { BaseData } from 'views/'

export default {
  path: 'staff',
  name: '员工资料',
  icon: 'inbox',
  component: Content,
  redirect: '/baseData/staff/list',
  children: [{
    path: 'list',
    name: '员工列表',
    icon: 'reorder',
    component: BaseData.Staff.List
  },{
    path: 'edit',
    name: '员工编辑',
    icon: 'reorder',
    component: BaseData.Staff.Edit
  } ]
}
