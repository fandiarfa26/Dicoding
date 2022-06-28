document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', (e) => {
    showAddModal(true);
  });

  const cancelButton = document.getElementById('cancel-button');
  cancelButton.addEventListener('click', (e) => {
    showAddModal(false);
  });

  const addForm = document.getElementById('add-form');
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    insertBook();
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keyup', (e) => {
    searchBook(searchInput.value);
  });

  const completedShelf = document.getElementById('completed-shelf');
  completedShelf.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  completedShelf.addEventListener('drop', (e) => {
    const data = e.dataTransfer.getData('text');
    const book = JSON.parse(data);
    if (!book.isCompleted) {
      moveBook({id: book.id, isCompleted: true});
      showDropText('completed-drop-text', false);
      
    }
    e.dataTransfer.clearData();
  });

  const uncompletedShelf = document.getElementById('uncompleted-shelf');
  uncompletedShelf.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  uncompletedShelf.addEventListener('drop', (e) => {
    const data = e.dataTransfer.getData('text');
    const book = JSON.parse(data);
    if (book.isCompleted) {
      moveBook({id: book.id, isCompleted: false});
      showDropText('uncompleted-drop-text', false);
    }
    e.dataTransfer.clearData();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});


document.addEventListener(RENDER_EVENT, () => {
  const uncompletedBooks = document.getElementById('uncompleted-books');
  uncompletedBooks.innerHTML = '';

  const completedBooks = document.getElementById('completed-books');
  completedBooks.innerHTML = '';

  let data = [];
  if (isSearching) {
    data = searchedBooks;
  } else {
    data = books;
  }

  if (data.filter(book => !book.isCompleted).length === 0) {
    uncompletedBooks.append(createEmptyText());
  }
  if (data.filter(book => book.isCompleted).length === 0) {
    completedBooks.append(createEmptyText());
  }

  if (data.length > 0) {
    for (const book of data) {
      const element = createBookCard(book);
      if (!book.isCompleted) {
        uncompletedBooks.append(element);
      } else {
        completedBooks.append(element);
      }
    }
  }
});

document.addEventListener(SAVED_EVENT, () => {
  console.log('Books has been saved in storage');
});