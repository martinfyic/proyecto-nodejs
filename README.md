# Websocket y DB

## Iniciar el proyecto

Debes tener una base de dato MongoDB Atlas para guardar los mensajes, toma como referencia el archivo `.env.example`

1. Debes clonar el repositorio

   ```bash
   git clone https://github.com/martinfyic/websocket-socket-io.git
   ```

2. Una vez clonado el repositorio debes instalar todas las dependencias

   ```bash
   npm i
   ```

3. Luego debes tener encuenta el archivo `.env.example` ya que tendras que tener una base de datos en MySQL y debes configurar la conexión con tu usuario.

4. Debes correr el siguiente script para generar las tablas _**products**_ se generara en MySQL.

   ```bash
   npm run tables
   ```

5. Por ultimo solo debes correr el siguiente script para iniciar la app

   ```bash
   npm start
   ```

Tambien puedes correr en modo de desarrollo para realizar pruebas

```bash
npm run dev
```
