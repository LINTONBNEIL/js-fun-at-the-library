function shelfBook(book, sciFiShelf) {
  if(sciFiShelf.length < 3) {
sciFiShelf.unshift(book);
  }
};

function unshelfBook(book, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title == book) {
      sciFiShelf.splice(i, 1)
    }
  }
}

function listTitles(sciFiShelf) {
    var bookTitles = [];
    var books = ['this was difficult'];
  for (var i = 0; i < sciFiShelf.length; i++) {
    bookTitles.push(sciFiShelf[i].title);
    book = bookTitles.join(', ');
  }
  return book
}
// I want to check if one is in it's shelf
// and and return

function searchShelf(sciFiShelf, title) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === title) {
  return true
    }
  }
  return false
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
