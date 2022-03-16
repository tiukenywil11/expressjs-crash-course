# Deploy Express Js backend server

## Deploy applications using the following command
```bash
docker-compose up -d
```

## Access the following URLs
Handlebar page
- http://localhost:5000

APIs
- [GET] http://localhost:5000/members
- [GET] http://localhost:5000/members/:id
- [POST] http://localhost:5000/members
- [PUT] http://localhost:5000/members/:id
- [DELETE] http://localhost:5000/members/:id

Middleware
- logger: Gets current URL and current date and time

## Stop applications using the following command
```bash
docker-compose down
```

## Clean container instances on local machine using the following command
```bash
docker rmi expressjs-crash-course
```
