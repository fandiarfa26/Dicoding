const showAddModal = (isVisible) => {
  const addModal = document.getElementById('add');
  if (isVisible) {
    addModal.classList.add('show');
  } else {
    addModal.classList.remove('show');
  }
}


const showDropText = (elementId, isVisible) => {
  if (isVisible) {
    document.getElementById(elementId).style.display = 'flex';
  } else {
    document.getElementById(elementId).style.display = 'none';
  }
};