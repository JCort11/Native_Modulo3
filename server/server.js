const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const books = [
  { id: 1, title: 'Angular práctico', author: 'Ana Torres', category: 'Angular', description: 'Componentes y servicios.' },
  { id: 2, title: 'TypeScript desde cero', author: 'Luis Ramos', category: 'TypeScript', description: 'Tipos, interfaces y clases.' },
  { id: 3, title: 'NativeScript móvil', author: 'Carla Méndez', category: 'Mobile', description: 'Aplicaciones móviles nativas.' },
  { id: 4, title: 'Redux y estado global', author: 'Diego Pérez', category: 'Redux', description: 'Actions, reducers y selectors.' },
  { id: 5, title: 'Express para APIs', author: 'Mario León', category: 'Backend', description: 'Rutas y query strings.' }
];

// GET /api/books
// GET /api/books?q=angular
app.get('/api/books', (req, res) => {
  const q = String(req.query.q || '').trim().toLowerCase();

  const result = q
    ? books.filter(book =>
        `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(q)
      )
    : books;

  res.json(result);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`BookPulse API running on http://localhost:${PORT}`);
});