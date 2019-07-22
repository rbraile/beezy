# Beezy test

## How to use

### `requerimientos necesarios`

version de node 10.15.3 o superior:

Install it and run
```bash
npm install
npm run dev
```
## En caso de tener solo Docker
docker build -t challenge . 

docker run -d -it -p 13000:3000 challenge
luego abrir el navegardor y colocar la url http://localhost:13000

## En caso de tener Docker y docker-compose

Install it and run
```bash
docker-compose up --build
```
y el servidor le levanta en http://0.0.0.0:13000

## Aclaraciones

```js
Es una aplicacion echa con NextJs react y redux,

la url donde esta hosteada la aplicacion es

https://react-rb.herokuapp.com/

- La aplicación no posee diseño, porque no soy bueno en eso lo que implicaria 
que perdiera tiempo en hacer un diseño feo
- Posee algunos test que se pueden probar corrinendo npm run test
- Esta probado en la ultima version de chrome y firefox para macOs Mojave

```


