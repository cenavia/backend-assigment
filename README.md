# Docred-api-backend - Challenge

## Dependencias

    "bcrypt": "^5.0.0",
    "body-parse": "^0.1.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql": "^2.18.1",
    "nanoid": "^3.1.10"

## Instalación

Después de descargar el .git ejecutar el instalador de dependencias.

`$ npm install`

## Configuración

En el archivo config.js están todas las variables a tener en cuenta para correr el proyecto.

- Base de Datos
- Servidor

## Iniciar

Después de instalar las dependencias y ajustar las configuraciones necesarios ejecutar:

`$ nodemon api/index.js`

El servidor correra en la url y puerto definido en la configuración por defecto `http://localhost:3000`

servicio de base de datos usado: https://www.db4free.net/