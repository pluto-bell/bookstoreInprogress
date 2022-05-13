import axios from "axios";

export default async function getByIsFeature(setState) {
  try {
    const response = await axios.get(`http://localhost:8082/api/books`);
    let AllBooks = await response.data;
    let featuredBooks = [];

    await AllBooks.forEach((book) => {
      if (book.feature) {
        featuredBooks = [...featuredBooks, book];
      }
    });
    return setState(featuredBooks);
  } catch (err) {
    console.log(err);
  }
}
