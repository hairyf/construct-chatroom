/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-07 15:22:44
 * @Description: 数据库连接
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import mongoose, { SchemaDefinition } from 'mongoose'
import { databasePath } from '../config'
mongoose.connect(databasePath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () =>
  console.log(`数据库连接成功, 地址: ${databasePath}`)
)
mongoose.connection.once('close', () => console.log('数据库连接失败!'))

export const createModel = <T extends SchemaDefinition>(definition: T) => {
  const schema = new mongoose.Schema(definition)
  return (name: string) => mongoose.model(name, schema)
}

export { mongoose }