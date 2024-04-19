
### API/USERS
#POST METHOD:

##SAMPLE INPUT: 
```json
{
    "Email": "shivarajnaidu@gmail.com",
    "Password": "Yuvaraj",
    "EmployeeName": "Yuvaraj",
    "FatherName": "Markandeyan",
    "Address": "Tiruvallur",
    "PermananentAddress": "Tiruvallur",
    "AdhaarNo": "hjsvhjdvhdh",
    "PancardNo": "vjsvjhsvhj",
    "EmployeeContactNo": "+91 9498002109",
    "EmergencyContactNo": "9444070765"
}

```
```json
##SAMPLE OUTPUT:
{
    "_id": "5bcbf3ff4b16b61494a52752",
    "Email": "shivarajnaidu@gmail.com",
    "Password": "$2a$08$r7ns5L6vlqhRaO2oW5LnuOulsmlt0HT2CQSABOqDI8Bexb7NsJYRy",
    "FatherName": "Markandeyan",
    "Address": "Tiruvallur",
    "PermananentAddress": "Tiruvallur",
    "AdhaarNo": "hjsvhjdvhdh",
    "PancardNo": "vjsvjhsvhj",
    "EmployeeContactNo": "+91 9498002109",
    "EmergencyContactNo": "9444070765",
    "__v": 0
}

```

### API/SIGIN/GETINFO:

## POST METHOD:
# SAMPLE INPUT:

```json
{
    "Email": "shivarajnaidu@gmail.com",
    "Password": "Yuvaraj"
   
}
```

# SAMPLE OUTPUT:

```json

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViY2JmM2ZmNGIxNmI2MTQ5NGE1Mjc1MiIsImlhdCI6MTU0MDA5MzI3OSwiZXhwIjoxNTQwMDk2ODc5fQ.M4KVBT21zA5rk5HOSGzotIktleiWiuG9mvUDs8vcEk8"

```
### API/LEAVE/MAIL:

## POST METHOD:
# SAMPLE INPUT:

```json

{
	
"employeeId": "12345",
 "from":"2018-10-20",
 "to": "2018-10-25",
"description": " i would like to go my sister marriage",
 "approvedBy": "mohan"
	
}

```
#SAMPLE OUTPUT:
```json
{
    "isApproved": "pending",
    "_id": "5bcc355ae9fa6a17e8401cba",
    "employeeId": "12345",
    "from": "2018-10-20T00:00:00.000Z",
    "to": "2018-10-25T00:00:00.000Z",
    "description": " i would like to go my sister marriage",
    "approvedBy": "mohan",
    "createdAt": "2018-10-21T08:14:18.366Z",
    "updatedAt": "2018-10-21T08:14:18.366Z",
    "__v": 0
}
```

### API/LEAVE/LEAVUPT:
## PUT METHOD:
# SAMPLE INPUT:
```json
{
    "isApproved": "Leave is approved",
}

```

# SAMPLE OUTPUT:
```JSON
{
    "isApproved": "Leave is approved",
    "_id": "5bcc355ae9fa6a17e8401cba",
    "employeeId": "12345",
    "from": "2018-10-20T00:00:00.000Z",
    "to": "2018-10-25T00:00:00.000Z",
    "description": " i would like to go my sister marriage",
    "approvedBy": "mohan",
    "createdAt": "2018-10-21T08:14:18.366Z",
    "updatedAt": "2018-10-21T09:29:03.159Z",
    "__v": 0
}

```
### API/TIMER/PUNCH:
## POST METHOD:
# SAMPLE INPUT:
 ```json
 {

	
"employeeId": "12345"

}


 ```

 ```json
 {
     
    "_id": "5bce840d677d1f1b5800f73d",
    "employeeId": "12345",
    "startTime": "2018-10-23T02:14:37.794Z",
    "__v": 0
}

```

### API/TIMER/PUNCH:
## PUT METHOD:
# SAMPLE INPUT:

```json:

{
    'By using object id, End time will be updated in mongodb from Backend'
}

```
#SAMPLE OUTPUT:
```json
{
    "_id": "5bce840d677d1f1b5800f73d",
    "employeeId": "12345",
    "startTime": "2018-10-23T02:14:37.794Z",
    "__v": 0,
    "endTime": "2018-10-23T02:20:15.428Z"
}


```
### API/TIMER/PUNCH:
## GET METHOD:
#SAMPLE INPUT:
#NOTE: Here Im using params query used to find the user data from database as well as specific user data
```json
http://localhost:2021/punch/?employeeId=12345

'Here I have Passed employee Id in Queries to find full data of employee: 12345'


```
#SAMPLE OUTPUT:

```json
 {
        "_id": "5bcda517aaa5140eec685c10",
        "employeeId": "12345",
        "startTime": "2018-10-22T10:23:19.947Z",
        "__v": 0
    },
    {
        "_id": "5bcda51baaa5140eec685c11",
        "employeeId": "12345",
        "startTime": "2018-10-22T10:23:23.403Z",
        "__v": 0
    },
    {
        "_id": "5bcda51daaa5140eec685c12",
        "employeeId": "12345",
        "startTime": "2018-10-22T10:23:25.101Z",
        "__v": 0
    },
    {
        "_id": "5bcda51daaa5140eec685c13",
        "employeeId": "12345",
        "startTime": "2018-10-22T10:23:25.906Z",
        "__v": 0
    },
    {
        "_id": "5bce840d677d1f1b5800f73d",
        "employeeId": "12345",
        "startTime": "2018-10-23T02:14:37.794Z",
        "__v": 0,
        "endTime": "2018-10-23T02:20:15.428Z"
    }
]

```
#SAMPLE INPUT:
#Note: Here Im find last punch date by using queries as like below:
```json
http://localhost:2021/punch/?employeeId=12345&lastPunch=true
```

#SAMPLE OUTPUT:

```json
 {
        "_id": "5bcda517aaa5140eec685c10",
        "employeeId": "12345",
        "startTime": "2018-10-22T10:23:19.947Z",
        "__v": 0
    }

```


