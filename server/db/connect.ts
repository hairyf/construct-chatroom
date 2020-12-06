import mongoose, { SchemaDefinition } from 'mongoose'
import { dbPath } from '../config'
mongoose.connect(dbPath, { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('数据库连接成功!'))
mongoose.connection.once('open', () => console.log('数据库连接失败!'))

export const createModel = <T extends SchemaDefinition>(definition: T) => {
  const schema = new mongoose.Schema(definition)
  return (name: string) => mongoose.model(name, schema)
}

export { mongoose }
