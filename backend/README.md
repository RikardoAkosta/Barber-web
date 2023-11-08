# Proyecto web Barberia con gestor de turnos

Para empezar el proyecto de divide en dos carpetas: backend y frontend
para la parte backen usaremos los modulos con node,js esta es una nueva incorporacion las resientes versiones de node.js v18.12.1
##Instalaciones
hacemos la instalacion de dependencias:
npm i bcryptjs cookie-parser cors dotenv express express-validator jsonwebtoken mongoose
🎉express: nos ayuda a levantar el servidor
🎈express-validator : validar todas las solicitudes del cliente
✨mongoose: odm para hacer consultas a la db.
💕jsonwebtoken: token de seguridad para saber si esta autorizado
🎆dotenv: ocultar las variables de entorno al momento de subir el repositorio
🎇cors:nos permite no tener conflico entre los servidores de back y el front.
🐱‍👤cookie-parser: sirve para que el JWT no sea almacenado en las cookies del navegador o local storage, si no en memoria y con un refres que será una cookie segura y hara la comunicación con el cliente documentacion en https://www.npmjs.com/package/jsonwebtoken
✔ bcryotjs: esto permite que las contraseñas no se guarden en texto plano y se cree una incriptacion de la contraseña
🎆Uso de JWT https://jwt.io/httpUso de JWT 
## Estructura del Proyecto
se generan las carpetas del proyecto para tener una mejor escalabilidad.

### controlle: toda la logica de las rutas se ejecutara aqui

### routes: se harán las rutas para hacer la peticion a la api

### models: se lamcenaran los esquemas y modelos de vista y controlador

### middlewares: sirve para interceptar rutas, ejemplo de ello es verificar si el usuario primero esta autenticado

### utils: se almacena ayudas como para mo estar repitiendo tanto código

### dabase: se hace la conexión a la base de datos

### se revisa documentacion express validator para el control de errores

## Creditos

\*\* Bibliografia
https://www.youtube.com/watch?v=VrLvbzHVT9A&t=6823s
https://bluuweb.github.io/desarrollo-web-bluuweb/21-03-api-rest/

quede en minuto 1.30 solucion a conexion base de datos y verificar las rutas de usuario
