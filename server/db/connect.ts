/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-29 01:22:46
 * @Description: 数据库连接
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import mongoose, { Document, SchemaDefinition } from 'mongoose'
import { DATABASE_PATH } from '../config'
mongoose.connect(DATABASE_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () =>
  console.log(`数据库连接成功, 地址: ${DATABASE_PATH}`)
)
mongoose.connection.once('close', () => console.log('数据库连接失败!'))

export const createModel = <T extends Document>(
  definition: SchemaDefinition,
  options?: mongoose.SchemaOptions
) => {
  const schema = new mongoose.Schema(definition, options)
  return (name: string) => mongoose.model<T>(name, schema)
}

export { mongoose }
