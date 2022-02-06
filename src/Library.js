// function createLibrary(libraryName) {
//   var library = {};
//   console.log(library)
//  library.name = libraryName
//  console.log(library)
//  library.shelves = {};
//  console.log(library)
//  library.shelves.fantasy = [];
//  console.log(library)
//  library.shelves.fiction = [];
//  console.log(library)
//  library.shelves.nonFiction = [];
//  console.log(library)
//  return library
// }

function createLibrary(libraryName) {
  return  {
 name: libraryName,
 shelves: {
   fantasy: [],
   fiction: [],
   nonFiction: []
 }
}
};
// // library.name = createLibrary
// // console.log(library.name)
// }

// function addBook(library, book) {
//   library.shelves.fantasy.unshift(book)
// };

// I want dracula OBJECT to go inside fantasy array [0]
// *library.shelves.fantasy.unshift(book)*
// I think it sit in fantasy.unshift(book)

// function addBook(library, book) {
//   if (book.genre === "fantasy") {
//     // add (Dracula to fantasy)
//     library.shelves.fantasy.unshift(book)
//   } else if (book.genre === "nonFiction") {
//     library.shelves.nonFiction.unshift(book)
//   } else {
//   library.shelves.fiction.unshift(book)
//  }
// };

function addBook(library, book) {
  library.shelves[book.genre].unshift(book)
};
// ^^super hot piece of dynamic ass code^^

// I think I can sort and add books by .fantasy or .nonFiction
// book.genre (genre is inside book object)

function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++)
  if (library.shelves[genre][i].title === title) {
 library.shelves[genre].splice(i, 1)
 return `You have now checked out ${title} from the ${library.name}`
}
return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
