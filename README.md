# Beezy test

## How to use

### `requerimientos necesarios`

version de node 8 o superior:

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

para cambiar la fuente de datos del grid se debe cambiar la variable 
PATHTOAPI que esta en pages/index.js

para agregar o sacar columnas se debe cambiar la variable grid que tiene el siguiente formato
en el archibo pages/index.js por ejemplo
const grid = { 
      columns:[
        {
          title: "Nombre",
          content: "name",
          orderlyFunction: this.props.setOrder, 
          => si se envia orderlyFunction con una funcion esta designara a la columna como 
          ordenable
        },
      ],
      mobileColumns: [
        "name",
        "address",
        "phone"
      ]
      => este array se utiliza para setear la visibilidad de las columnas en formato mobile
    }

posee algunos test que se pueden probar corrinendo npm run test

```


