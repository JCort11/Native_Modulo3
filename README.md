## Flujo completo

Buscar:
`SearchComponent -> BooksApiService -> Express -> querystring -> resultados`

Favorito:
`Search -> addFavorite action -> booksReducer -> selectFavorites -> Favorites`

Leer ahora:
`Favorites -> readNow action -> booksReducer -> selectReadingNow -> Settings`

## Instalación NativeScript
```bash
npm install
ns run android
```

## API
En otra terminal:
```bash
cd server
npm install
npm start
```

Después inicia ngrok para el puerto 3000 y cambia `apiUrl` en:
`src/app/core/app-config.ts`.

La URL debe ser HTTPS, por ejemplo:
`https://tu-tunel.ngrok-free.app/api/books`
