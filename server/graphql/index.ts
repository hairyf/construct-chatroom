/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 14:54:24
 * @LastEditTime: 2020-12-08 11:14:31
 * @Description: graphql 出口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { graphql, buildSchema } from 'graphql'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
const schema = buildSchema(`\
  type Query {
    hello: String
  }
`)
const root = {
  hello: () => {
    return 'Hello GraphQL World'
  }
}
export default () =>
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: false
    })
  )
