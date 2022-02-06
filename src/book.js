function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(newReviews, reviews) {
  for (var i = 0; i <= newReviews + 1; i++); {
    if (reviews[i] !== newReviews) {
      return reviews.push(newReviews);
  } else {
    return reviews
  }
  }
}

function calculatePageCount(bookPageCount, bookTitle) {
  return bookPageCount.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
}

function editBook(book) {
 book.pageCount = book.pageCount * .75
 return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}
