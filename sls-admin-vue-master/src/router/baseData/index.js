/**
 * Created by haiyi on 2018/10/31.
 */

import { Home } from 'layout/'

import staff from './staff.js'

export default {
  path: '/baseData',
  name: '基础数据',
  icon: 'inbox',
  component: Home,
  redirect: '/baseData/staff',
  children: [staff]
}
