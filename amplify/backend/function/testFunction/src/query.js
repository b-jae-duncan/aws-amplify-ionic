module.exports = {
    mutation: `mutation updateTodo($input: UpdateTodoInput!) {
      updateTodo(input: $input) {
        __typename
          id
          name
          description
          owner
          createdAt
          updatedAt
        
      }
    }
    `,
    query: `query listTodos {
        listTodos {
          items {
            id
            name
            description
          }
        }
      }
    `
}
