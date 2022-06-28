const createBookCard = (book) => {
  const title = document.createElement('h2');
  title.innerText = book.title;

  const description = document.createElement('p');
  let descriptionText = book.author;
  descriptionText += " | ";
  descriptionText += book.year.toString();
  description.innerText = descriptionText;

  const buttonGroup = document.createElement('div');

  const deleteButton = createButton({
    className: 'btn-delete', 
    icon: 'trash', 
    label: 'Hapus', 
    clickEvent: () => { deleteBook(book.id); }
  });

  if (book.isCompleted) {
    const returnButton = createButton({
      className: 'btn-default', 
      icon: 'reply', 
      label: 'Kembalikan', 
      clickEvent: () => { moveBook({id: book.id, isCompleted: false}); }
    });
    
    buttonGroup.append(returnButton, deleteButton);
  } else {
    const doneButton = createButton({
      className: 'btn-default', 
      icon: 'check', 
      label: 'Selesai', 
      clickEvent: () => { moveBook({id: book.id, isCompleted: true}); }
    });

    buttonGroup.append(doneButton, deleteButton);
  }

  const bookCard = document.createElement('article');
  bookCard.classList.add('book-card');
  bookCard.setAttribute('id', `book-${book.id}`);
  bookCard.setAttribute('draggable', true);
  bookCard.append(title, description, buttonGroup);

  bookCard.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(book));
    bookCard.classList.add('dragging');
    if (book.isCompleted) {
      showDropText('uncompleted-drop-text', true);
    } else {
      showDropText('completed-drop-text', true);
    }
  });

  bookCard.addEventListener('dragend', (e) => {
    bookCard.classList.remove('dragging');
    if (book.isCompleted) {
      showDropText('uncompleted-drop-text', false);
    } else {
      showDropText('completed-drop-text', false);
    }
  });

  return bookCard;
};


const createButton = ({ className, icon, label, clickEvent }) => {
  const button = document.createElement('button');
  button.classList.add(className);
  button.setAttribute('type', 'button');

  const buttonIcon = createIcon(icon);
  const buttonLabel = document.createElement('span');
  buttonLabel.innerText = label;
  button.append(buttonIcon, buttonLabel);

  button.addEventListener('click', clickEvent);

  return button;
};


const createEmptyText = () => {
  const text = document.createElement('p');
  text.classList.add('empty');
  text.innerText = 'Tidak ada buku.';
  return text;
};

const createIcon = (icon) => {
  const data = {
    'check': 'M5 13l4 4L19 7',
    'reply': 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
    'trash': 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
  };

  if (data[icon] === undefined) return '';

  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  iconSvg.setAttribute('fill', 'none');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', 'currentColor');
  iconSvg.setAttribute('stroke-width', '2');
  iconSvg.classList.add('icon');

  iconPath.setAttribute('d', data[icon]);
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};