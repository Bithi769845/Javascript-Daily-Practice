// Array Methods and Sorting
const books = [
   {
      title: 'Machine Learning',
      author: 'Shumi Begum',
      yearPublished: 1996
   },
   {
      title: 'Deep Learning',
      author: 'Mitu Rahman',
      yearPublished: 2001
   },
   {
      title: 'Adversarial Attacks in Machine Learning',
      author: 'Hashina Akter',
      yearPublished: 1994
   },
   {
      title: 'Cybersecurity Essentials',
      author: 'Khadija Khan',
      yearPublished:2000 
   },
   {
      title: 'DevOps Principles and Practices',
      author: 'Kulshum Jahan',
      yearPublished: 1995
   }
];

//use builtin function
//const sortedBooks = books.sort((a, b) => b.yearPublished - a.yearPublished);
// by logic building
for (let i = 0; i < books.length - 1; i++) {
   for (let j = 0; j < books.length - 1 - i; j++) {
      if (books[j].yearPublished > books[j + 1].yearPublished) {
         // Swap elements
         let temp = books[j];
         books[j] = books[j + 1];
         books[j + 1] = temp;
      }
   }
  
}

//use built_in Function
//const filter = books.filter(books => books.yearPublished < 2000);
//by logic building
const filter = [];
for(let i = 0 ; i<books.length;i++){
   if(books[i].yearPublished<2000)
   {
      filter.push(books[i]);
   }
}
console.log(filter);

