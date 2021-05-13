import mongoose, { Document, SchemaDefinition } from 'mongoose'
import autoIncrement  from 'mongoose-auto-increment'

// 基本地址
const DATABASE_PATH = "mongodb://localhost/construct-chatroom"

// 连接服务
mongoose.connect(DATABASE_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 监听连接
mongoose.connection.once('open', () =>
  console.log(`数据库连接成功, 地址: ${DATABASE_PATH}`)
)
mongoose.connection.once('close', () => console.log('数据库连接失败!'))

// 初始化自增 ID 扩展
autoIncrement.initialize(mongoose.connection)


/**
 * 创建模型 schema -> model
 * @param definition schema 映射
 * @param options schema 配置
 * @returns Model 模型
 */
export const createModel = <T extends Document>(
  definition: SchemaDefinition,
  options?: mongoose.SchemaOptions
) => {
  const schema = new mongoose.Schema(definition, {...options, versionKey: false})
  return (name: string) => {
    schema.plugin(autoIncrement.plugin, {
      model: name,
      field: '_id'
    })
    return mongoose.model<T>(name, schema)
  }
}
export { mongoose }