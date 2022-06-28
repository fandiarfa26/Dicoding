
const insertBook = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const isCompleted = document.getElementById('is-completed').checked;

  const id = +new Date();
  const yearNumber = parseInt(year);
  const book = {id, title, author, year, isCompleted};
  books.push(book);
  clearInput();
  showAddModal(false);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveToStorage();
}

const clearInput = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('year').value = '';
  document.getElementById('is-completed').checked = false;
}

const moveBook = ({id, isCompleted}) => {
  const book = findBook(id);

  if (book == null) return;

  book.isCompleted = isCompleted;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveToStorage();
};


const deleteBook = (id) => {
  const index = findBookIndex(id);

  if (index === -1) return;

  books.splice(index, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveToStorage();
};


const findBook = (id) => {
  for (const book of books) {
    if (book.id === id) {
      return book;
    }
  }
  return null;
};


const findBookIndex = (id) => {
  for (const index in books) {
    if (books[index].id === id) {
      return index;
    }
  }
  return -1;
};


const searchBook = (keyword) => {
  if (keyword !== "") {
    isSearching = true;
    searchedBooks = books.filter(book => book.title.toLowerCase().includes(keyword));
  } else {
    isSearching = false;
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
};





