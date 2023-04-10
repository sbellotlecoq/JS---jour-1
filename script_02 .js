const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  // Sors-moi la liste des titres des livres du CDI

	let BookTitle = books.map(book => `${book.title}`); 
	console.log(BookTitle);

  // Est-ce que tous les livres ont été empruntés au moins une fois ?

  //SOLUTION SAM

  let RentedBook = true;
  for (let i = 0; i <books.length; i++) {
    if (books[i].rented ===0) {
      RentedBook = false;
      break;
      }
    }

    if (RentedBook) {
      console.log("les livres ont été loués au moins une fois")
    }

    //SOLUTION MOWGLI

    let rented = books.some((book) => {
      return book.rented > 0
    });
    console.log(rented)

  // Quel est le livre le plus emprunté ?

  let MostRentedBook = books[0];

  for (let i = 1; i < books.length; i++) {
     if (books[i].rented > MostRentedBook.rented)
     MostRentedBook = books[i];
  }

  console.log(MostRentedBook.title);


  // Quel est le livre le moins emprunté ?


  let LeastRentedBook = books[0];

  for (let i = 1; i < books.length; i++) {
     if (books[i].rented < LeastRentedBook.rented)
     LeastRentedBook = books[i];
  }

  console.log(LeastRentedBook.title);

  // Supprime le livre avec l'ID 133712

    for (let i = 0; i < books.length; i++) {
      if (books[i].id === 133712) {
        books.splice(i, 1);
        break; // we only need to remove the first matching book
      }
    }
    console.log(books);
