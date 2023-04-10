const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  // Sors une array qui ne contient que le prénom et le nom des entrepreneurs
  let EntrepreneurName = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
  console.log(EntrepreneurName);

  // Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui. Le résultat final devrait ressembler à ceci :

    let EntrepreneurAge = entrepreneurs.map(entrepreneur => ({
        name:`${entrepreneur.first} ${entrepreneur.last}`,
        age: 2023 - entrepreneur.year
        }));
    console.log(EntrepreneurAge);

    // les clés first et last manquent de lisibilité, remplace-les par firstName et lastName

    const updatedEntrepreneurs = entrepreneurs.map(({ first: first_name, last: last_name, ...rest }) => ({ first_name, last_name, ...rest }));
    console.log(updatedEntrepreneurs);

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
  
    const Born70 = entrepreneurs.filter(entrepreneur => {
        return entrepreneur.year >= 1970 && entrepreneur.year < 1979;
    });
    console.log(Born70);



