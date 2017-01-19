# GraphQL 'hello world' Demo

## Goals

__1.__ The following query:
```
curl -XPOST localhost:8000/graphql \
 -H "Content-Type:application/graphql" \
 -d "query { hello }"
```

should return:

```js
{
  "data": {
    "hello": "hello world !"
  }
}
```

__2.__ The query `hello` should accept a `name` parameter of type `GraphQLString` and respond with `hello world ${name}!`

```
curl -XPOST localhost:8000/graphql \
 -H "Content-Type:application/graphql" \
 -d "query { hello(name: \"Brian\") }"
```
Should return

```js
{
  "data": {
    "hello": "hello world Brian!"
  }
}
```

## Install Dependencies

1. Generate a package.json file: `npm init --yes`
2. Install the required dependencies: `npm i --save express express-graphql graphql`

## Starter files

1. Copy the following into a file called `server.js`

```js
const express = require('express');
const expressGraphql = require('express-graphql');
const app = express();

// TODO
// -----
// 1. include the expressGraphql middleware, passing it an object with the schema as a key/value
// 2. create the schema.js

const schema = require('./schema');

app.use('/graphql', /* #1 */);

app.get('/', (req, res) => res.end('homepage'));

app.listen(8000, (err) => {
  if(err) {
    throw new Error(err);
  }

  console.log('*** server started ***');
});
```

2. Copy the following into a file called `schema.js`

```js
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

// TODO
// ----
// Assign RootQuery to be an instance of GraphQLObjectType with the following keys:
// name: String - the name of the type
// description: [String] - describe the type
// fields: Object - all possible query entry points
// > fields.hello: Object - hello query
//   > hello.type: GraphQLString - return type of the hello query
//   > hello.args: [Object] - Arguments the hello query can accept
//     > args.name: Object - object describing the `name` argument
//       > name.type: GraphQLString - the Type the argument must be
//       > name.defaultValue: [String] - when no argument is passed
//   > hello.resolve: Function - resolves the hello query
const RootQuery;

module.exports = new GraphQLSchema({
  query: RootQuery
});
```


### Notes

To test locally:

1. Start the server via `node server.js`
2. In a new terminal window paste the test curl command
3. Alternatively include `['/graphql', '/graphiql']` routes to the expressGraphql middleware then add `graphiql: true` in the expressGraphql config `localhost:8000/graphiql` to explore the schema and run queries in your browser.
