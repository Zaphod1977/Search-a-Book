const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String 
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input bookInput {
    bookId: String 
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    authenticationError: String  
    apolloError: String 
    userInputError: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    removeBook(bookId: String!): User
    authenticationError: String  
    apolloError: String 
    userInputError: String
  }
`;

module.exports = typeDefs;
