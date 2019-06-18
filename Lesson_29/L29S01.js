//
// L29S01 - Array of Objects
//
var bookList = [
  {
    "title" : "Harry Potter and the Chamber of Secrets",
    "author" : "J.K. Rowling"
  },
  {
    "title" : "Moby Dick",
    "author" : "Herman Melville"
  },
  {
    "title" : "A Tale of Two Cities",
    "author" : "Charles Dickens"
  }
];
var len = bookList.length;
gs.info('Last author=' + bookList[len].author);

for (var i = 0; i < len; i++) {
  var book = bookList[i];
  gs.info(i + ' - Title: ' + book.title + ' - Author: ' + book.author);
}