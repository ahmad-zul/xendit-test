# Xendit Programming Test - Zul

Welcome to the Xendit Programming Test created by Zul.

## Getting Started

Clone the repository or unzip the source file into your desired folder.

Navigate into the the source folder

Issue the command below in order to start docker containers and also the application

```
make up
```

To stop the container and the application, issue the command below

```
make down
```

## Available endpoints

### Post a new comment
```
curl -X POST -H "Content-Type: application/json" -d '{"comment":"Looking to hire SE Asia’s top dev talent"}' http://localhost:3001/orgs/<org_name>/comments
```

### View comments
```
curl -X GET -H "Content-Type: application/json" http://localhost:3001/orgs/<org_name>/comments
```

### Delete comments
```
curl -X DELETE -H "Content-Type: application/json" http://localhost:3001/orgs/<org_name>/comments
```

### Get members
```
curl -X GET -H "Content-Type: application/json" http://localhost:3001/orgs/<org_name>/members
```

Please substitute <org_name> with the actual organisation name from git hub, for example 'octokit'.

For full documentation, please refer to the [documentation](https://github.com/prozul/xendit-test/blob/master/Xendit%20Programming%20Test%20Documentation.docx)

Enjoy

