# API problemsolutios 

This App not finished until now.

## About

- "problem solutions" is a REST APIs that helps the people to post their problems or ideas and developers solve them by technical solutions. you can use it as a forum.


- This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Install your dependencies

    ```
    cd path/to/problemsolutios; npm install
    ```

3. Make sure you have mysql database installed and "problemsolutions" created

4. Go to   "./problemsolutios/config/default.json" and update "mysql" key with your connection string.

5. Start your app

    ```
    npm start
    ```

## REST Services APIs 

### login

### users

|    API Name    |                Allowed Users                | HTTP Method |
| :------------: | :-----------------------------------------: | :---------: |
|  create user   |                     all                     |    Post     |
| list all users |                     all                     |     get     |
|    get user    |                     all                     |     get     |
|  delete user   |               admin or owner                |   delete    |
|  update user   | owner "only admin can update him ass admin" |    patch    |

### user-types

|      API Name       | Allowed Users | HTTP Method |
| :-----------------: | :-----------: | :---------: |
|  create user-type   |     admin     |    post     |
| list all user-types |      all      |     get     |
|    get user-type    |      all      |     get     |
|  delete user-type   |     admin     |   delete    |
|  update user-type   |     admin     |    patch    |

### problem-types

|        Ali Name        | Allowed Users | HTTP Method |
| :--------------------: | :-----------: | :---------: |
|  create problem-type   |     admin     |    post     |
| list all problem-types |      all      |     get     |
|    get problem-type    |      all      |     get     |
|  delete problem-type   |     admin     |   delete    |
|  update problem-type   |     admin     |    patch    |

### Problems

|     API Name      |   Allowed Users    | HTTP Method |
| :---------------: | :----------------: | :---------: |
|  create problem   | Authenticated user |    post     |
| list all problems |        all         |     get     |
|    get problem    |        all         |     get     |
|  delete problem   |    admin, owner    |   delete    |
|  update problem   |       owner        |    patch    |

### problem-likes(not finished)

|  API Name   |   Allowed Users    | HTTP Methods |
| :---------: | :----------------: | :----------: |
|  add like   | authenticated user |     post     |
| delete like |       owner        |    delete    |



### problem-solutions

|          API Name          |   Allowed Users    | HTTP Method |
| :------------------------: | :----------------: | :---------: |
|  create problem-solution   | authenticated user |    post     |
| list all problem-solutions |        all         |     get     |
|    get problem-solution    |        all         |     get     |
|  delete problem-solution   |    admin, owner    |   delete    |
|  update problem-solution   |       owner        |    patch    |

### solution-likes(not finished)

|  API Name   |   Allowed Users    | HTTP Method |
| :---------: | :----------------: | :---------: |
|  add like   | authenticated user |    post     |
| delete like |       owner        |   delete    |



### solution-replies

|         API Name          |   Allowed Users    | HTTP Method |
| :-----------------------: | :----------------: | :---------: |
|   create solution-reply   | authenticated user |    post     |
| list all solution-replies |        all         |     get     |
|    get solution-reply     |        all         |     get     |
|   delete solution-reply   |    admin, owner    |   delete    |
|   update solution-reply   |       owner        |    patch    |

