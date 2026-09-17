# BookPulse Redux - NativeScript + Angular + Express

Proyecto de estudio que cubre los 10 requisitos.

## 1. API Express
`server/server.js` expone:
- `GET /api/books`
- `GET /api/books?q=angular`

## 2-4. Búsqueda + HTTP + Service
La pantalla `SearchComponent` tiene caja de texto y botón.
`BooksApiService` es el único responsable de realizar el GET.
La URL se configura en `src/app/core/app-config.ts`.

## 5-6. Settings persistentes
`UserSettingsService` usa `ApplicationSettings` de NativeScript.
La pantalla Settings lee y guarda el nombre de usuario.

## 7-8. Favoritos
La estrella de cada resultado despacha `[Search] Add Favorite`.
Favorites selecciona el estado con `selectFavorites`.

## 9. Leer ahora
El botón despacha `[Favorites] Read Now`.

## 10. Lectura reactiva
Settings usa `store.select(selectReadingNow)` y el pipe `async`.
Cada `Read Now` actualiza el reducer y la lista se actualiza automáticamente.

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
