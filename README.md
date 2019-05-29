# Resuelve FC: Development Challenge

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Project Information
Resuelve Code Challenge.

### Requirements
- Latest [Node.js](https://nodejs.org/) (preferable).

### How to run the application?
- You can use the Heroku button.
- Or just copy-paste the next comand-lines. (NodeJS is required)

### Run localy

```
git clone https://github.com/jLeonelDev/Resuelve-SoccerSalary-Back-End-Challenge.git
cd Resuelve-SoccerSalary-Back-End-Challenge
npm install
npm run start
```
Endpoint [http://localhost:3000/](http://localhost:3000/)
##### Request Example:
```
curl -X POST \
  https://resuelve-soccer.herokuapp.com/team/salary \
  -H 'Accept: */*' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Host: resuelve-soccer.herokuapp.com' \
  -H 'Postman-Token: 2fbccd29-0d66-495a-9ce2-fd61610a6c4f,8991355a-0071-4df7-94dd-e472aff38861' \
  -H 'User-Agent: PostmanRuntime/7.13.0' \
  -H 'accept-encoding: gzip, deflate' \
  -H 'cache-control: no-cache' \
  -H 'content-length: 700' \
  -d '[  
   {  
      "nombre":"Juan Perez",
      "nivel":"C",
      "goles":10,
      "sueldo":50000,
      "bono":25000,
      "sueldo_completo":null,
      "equipo":"rojo"
   },
   {  
      "nombre":"EL Cuauh",
      "nivel":"Cuauh",
      "goles":30,
      "sueldo":100000,
      "bono":30000,
      "sueldo_completo":null,
      "equipo":"azul"
   },
   {  
      "nombre":"Cosme Fulanito",
      "nivel":"A",
      "goles":7,
      "sueldo":20000,
      "bono":10000,
      "sueldo_completo":null,
      "equipo":"azul"

   },
   {  
      "nombre":"El Rulo",
      "nivel":"B",
      "goles":9,
      "sueldo":30000,
      "bono":15000,
      "sueldo_completo":null,
      "equipo":"rojo"

   }
]'
```

### Run Unit Test
```
npm run unit-test
```

### Run Integration Test
Open two terminals:

In one terminal first execute:
An application instance will be running at: [http://localhost:3000/](http://localhost:3000/)
```
npm run e2e-start
```

In the other terminal execute:
```
npm run e2e-test
```

### PROD deployment simulation
Endpoint [http://localhost/)](http://localhost/)
```
npm run local-prod
```



