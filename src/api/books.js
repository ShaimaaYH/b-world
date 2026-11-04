const API_URL = "https://example-data.draftbit.com";


function normalize(item) {
  return {
    id: item.id,
    title: item.title,
    author: item.authors,
    cover: item.image_url,
    pages: item.num_pages,
    rating: item.rating,
    ratingCount: item.rating_count,
    reviews: item.review_count,
    description: item.description,
  };
}

export async function getBooks() {
  
  const res = await fetch(`${API_URL}/books?_limit=8`);
  if (!res.ok) throw new Error("Failed to load books");
  const data = await res.json();
  return data.map(normalize);
}

