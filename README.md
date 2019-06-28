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

Available endpoints

```
curl -X POST -H "Content-Type: application/json" -H "Content-Type: application/json" -d @test/mock.json http://localhost:3001/orgs//comments
```

Should respond `{"message":"Audit entry added successfully!"}`.

