### VIDEO TUTOROAL
https://www.youtube.com/watch?v=tjqrtXU3V6M&list=PLvmc52CBxcvWxJUa6RqvVIln06AD26b4O&index=2

### COMMANDER
https://www.npmjs.com/package/commander

### INQUIRER
https://www.npmjs.com/package/inquirer


### DOCKER RUN MONGO DB
```sh
docker run -d  --name mongo-on-docker  -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```

### PARA CREAR UN COMANDO 
agregar la propiedad bin en el package.json con la ruta del archivo a ejecutar. seguido ejecutar npm link
```sh
npm link
```

### DESISTALAR COMANDO
```sh
npm unlink
```