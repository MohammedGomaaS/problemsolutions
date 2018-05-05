# API problemsolutios 

## About

- "problem solutions" is a REST APIs that helps the people to post their problems or ideas and developers solve them by technical solutions. you can use it as a forum.


- This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4, 5.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Install your dependencies

    ```
    cd path/to/problemsolutios; npm install
    ```

3. Make sure you have [mysql](https://www.mysql.com/)  installed and "problemsolutions" database created

4. Go to   "./problemsolutios/config/default.json" and update "mysql" key with your connection string.

5. Start your app

    ```
    npm start
    ```

The system will generate default admin and default user-type to configure your application you can update it later. 

```
email:admin@domain.com
password:secret
```



## REST Services APIs 

To know how to request the services and know the response, download [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)  from your chrome browser and use this [collection](https://www.getpostman.com/collections/c5ae8705b7942ae8d279) 

### login 

- After login to the system the system response with "accessToken". 


- The system tracks the user via this token.
- The token will be expired after 24 hours.

### users

Available parameters  for query parameters **(name, email, mobile, createdAt, updatedAt, level)**

|    API Name    |                Allowed Users                | HTTP Method |
| :------------: | :-----------------------------------------: | :---------: |
|  create user   |                     all                     |    Post     |
| list all users |                     all                     |     get     |
|    get user    |                     all                     |     get     |
|  delete user   |               admin or owner                |   delete    |
|  update user   | owner "only admin can update him ass admin" |    patch    |

### user-types

Available parameters  for query parameters **(description, level, createdAt, updatedAt)**

|      API Name       | Allowed Users | HTTP Method |
| :-----------------: | :-----------: | :---------: |
|  create user-type   |     admin     |    post     |
| list all user-types |      all      |     get     |
|    get user-type    |      all      |     get     |
|  delete user-type   |     admin     |   delete    |
|  update user-type   |     admin     |    patch    |

### problem-types

Available parameters  for query parameters **(description, createdAt, updatedAt)**

|        Ali Name        | Allowed Users | HTTP Method |
| :--------------------: | :-----------: | :---------: |
|  create problem-type   |     admin     |    post     |
| list all problem-types |      all      |     get     |
|    get problem-type    |      all      |     get     |
|  delete problem-type   |     admin     |   delete    |
|  update problem-type   |     admin     |    patch    |

### Problems

Available parameters  for query parameters **(title, userId, body, createdAt, updatedAt, problemTypeId)**

|     API Name      |   Allowed Users    | HTTP Method |
| :---------------: | :----------------: | :---------: |
|  create problem   | Authenticated user |    post     |
| list all problems |        all         |     get     |
|    get problem    |        all         |     get     |
|  delete problem   |    admin, owner    |   delete    |
|  update problem   |       owner        |    patch    |

### problem-likes

Available parameters  for query parameters **(createdAt, updatedAt, userId, problemId)**

|  API Name   |   Allowed Users    | HTTP Methods |
| :---------: | :----------------: | :----------: |
|  add like   | authenticated user |     post     |
| delete like |       owner        |    delete    |

### problem-solutions

Available parameters  for query parameters **(body, createdAt, updatedAt, problemId, userId)**

|          API Name          |   Allowed Users    | HTTP Method |
| :------------------------: | :----------------: | :---------: |
|  create problem-solution   | authenticated user |    post     |
| list all problem-solutions |        all         |     get     |
|    get problem-solution    |        all         |     get     |
|  delete problem-solution   |    admin, owner    |   delete    |
|  update problem-solution   |       owner        |    patch    |

### solution-likes

Available parameters  for query parameters **(createdAt, updatedAt, userId, problemSolutionId)**

|  API Name   |   Allowed Users    | HTTP Method |
| :---------: | :----------------: | :---------: |
|  add like   | authenticated user |    post     |
| delete like |       owner        |   delete    |

### solution-replies

Available parameters  for query parameters **(body, createdAt, updatedAt, userId, problemSolutionId)**

|         API Name          |   Allowed Users    | HTTP Method |
| :-----------------------: | :----------------: | :---------: |
|   create solution-reply   | authenticated user |    post     |
| list all solution-replies |        all         |     get     |
|    get solution-reply     |        all         |     get     |
|   delete solution-reply   |    admin, owner    |   delete    |
|   update solution-reply   |       owner        |    patch    |

## General Query Paramters

### Equality

All fields that do not contain special query parameters are compared directly for equality.

```
GET /problems?problemTypeId=1&userId=2...
```

### `$limit`

`$limit` will return only the number of results you specify:

```
GET /problems?$limit=2&problemTypeId=1
```

> **Pro tip:** With [pagination enabled](common.md#pagination), to just get the number of available records set `$limit` to `0`. This will only run a (fast) counting query against the database and return a page object with the `total` and an empty `data` array.

### `$skip`

`$skip` will skip the specified number of results:

```
GET /problems?$limit=2&$skip=2
```

### `$sort`

`$sort` will sort based on the object you provide. It can contain a list of properties by which to sort mapped to the order (`1` ascending, `-1` descending).

```
/problems?$limit=10&$sort[createdAt]=-1
```

### `$select`

`$select` allows to pick which fields to include in the result. This will work for any service method.

```
GET /problems?$select[]=title&$select[]=userId
GET /problems/1?$select[]=title
```

### `$in`, `$nin`

Find all records where the property does (`$in`) or does not (`$nin`) match any of the given values. 

```
GET /problems?userId[$in]=2&problemTypeId[$in]=5
```

### `$lt`, `$lte`

Find all records where the value is less (`$lt`) or less and equal (`$lte`) to a given value. 

```
GET /problems?createdAt[$lt]=1479664146607
```

### `$gt`, `$gte`

Find all records where the value is more (`$gt`) or more and equal (`$gte`) to a given value. 

```
GET /problems?createdAt[$gt]=1479664146607
```

### `$ne`

Find all records that do not equal the given property value.

```
GET /problems?userId[$ne]=1
```

### `$or`

Find all records that match any of the given criteria.

```
GET /problems?$or[0][userId][$ne]=1&$or[1][problemTypeId]=1
```

### Search

Search about entity using **like** 

```
$like: '%hat',         // LIKE '%hat'
$notLike: '%hat'       // NOT LIKE '%hat'
$iLike: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
$notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
```

```
GET /users?name[$like]=%moha%
```


