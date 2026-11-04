# B-World — Books Store

React + Vite + Tailwind CSS + React Router. Built from a Figma design.

## Run
```bash
npm install
npm run dev
```

## Connect the API
The app uses the Draftbit example books API (`src/api/books.js`):
- `GET /books?_limit=8` for the home page
- `GET /books/:id` for the details page

`normalize()` maps the API fields (authors, image_url, num_pages, ...) to the fields used in the components.
If `API_URL` is empty the app uses fake data from `src/data/mockBooks.js`.

## Pages
- `/` Home: hero, "Selected For You" grid, newsletter + map
- `/book/:id` Book details: quantity, add to cart, favorite

## Features
- Dark mode (saved in localStorage)
- Responsive with mobile burger menu
