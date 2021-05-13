import { createModel } from './connect'

/** 用户表 */
export const UserModel = createModel({
  avatar: { type: String, required: true, maxlength: 250 },
  username: { type: String, required: true, minlength: 3, maxlength: 15 },
  password: { type: String },
  phone: { type: String },
  gender: { type: String, required: true, match: /^women|men$/ },
})('user')

/** 联系人表 */
export const ContactModel = createModel({
  uid: { type: String, required: true },
  fid: { type: String, required: true },
  createtime: { type: Date, default: Date.now }
})('contact')


