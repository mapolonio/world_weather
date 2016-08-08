# Requisitos #
* [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org/en/download/package-manager/) versión > 6.x.x
* [Redis](http://redis.io/topics/quickstart)

# Deploy #
Clonar el proyecto
```bash
git clone https://github.com/mapolonio/world_weather.git [destination]
```
Instalar dependencias
```bash
cd [destination]
npm install
```
Inicializar Redis
```bash
sudo /path/to/redis start
```
Setear configuración local:
* Crear archivo `[destination]/config/local.json`. Siguiendo el ejemplo de `[destination]/config/local.example.json`, completar:
```json
{
  "dbconnection": {
    "host": "redis host",
    "port": 1234
  },
  "forecast": {
    "apikey": "forecast.io api key"
  }
}
```
Ejecutar aplicación. En `[destination]`, ejecutar
```bash
[NODE OPTIONS] npm start
```
