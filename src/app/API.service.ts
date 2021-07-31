/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  owner?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: ModelTaskConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection";
  items?: Array<Task | null> | null;
  nextToken?: string | null;
};

export type Task = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: Todo | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreateTaskInput = {
  id?: string | null;
  name: string;
  description: string;
  owner?: string | null;
  taskTodoId?: string | null;
};

export type ModelTaskConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type UpdateTaskInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  taskTodoId?: string | null;
};

export type DeleteTaskInput = {
  id: string;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items?: Array<Todo | null> | null;
  nextToken?: string | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items?: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items?: Array<{
    __typename: "Task";
    id: string;
    name: string;
    description: string;
    todo?: {
      __typename: "Todo";
      id: string;
      name: string;
      description?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  owner?: string | null;
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      name: string;
      description: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  name: string;
  description: string;
  todo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    owner?: string | null;
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            todo {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  OnCreateTodoListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateTodoSubscription>> {
    const statement = `subscription OnCreateTodo($owner: String!) {
        onCreateTodo(owner: $owner) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateTodoSubscription>>;
  }

  OnUpdateTodoListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateTodoSubscription>> {
    const statement = `subscription OnUpdateTodo($owner: String!) {
        onUpdateTodo(owner: $owner) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateTodoSubscription>>;
  }

  OnDeleteTodoListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteTodoSubscription>> {
    const statement = `subscription OnDeleteTodo($owner: String!) {
        onDeleteTodo(owner: $owner) {
          __typename
          id
          name
          description
          owner
          tasks {
            __typename
            items {
              __typename
              id
              name
              description
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteTodoSubscription>>;
  }

  OnCreateTaskListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateTaskSubscription>> {
    const statement = `subscription OnCreateTask($owner: String!) {
        onCreateTask(owner: $owner) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;
  }

  OnUpdateTaskListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateTaskSubscription>> {
    const statement = `subscription OnUpdateTask($owner: String!) {
        onUpdateTask(owner: $owner) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;
  }

  OnDeleteTaskListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteTaskSubscription>> {
    const statement = `subscription OnDeleteTask($owner: String!) {
        onDeleteTask(owner: $owner) {
          __typename
          id
          name
          description
          todo {
            __typename
            id
            name
            description
            owner
            tasks {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;
  }
}
