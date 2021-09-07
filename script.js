let movies = {
    movie1: {
        title: 'Titanic',
        yearOfRelease: 1997,
        actors: ['Kate Winslet', 'Leonardo DiCaprio', 'Billy Zane'],
    },
    movie2: {
        title: 'Black Widow',
        yearOfRelease: 2021,
        actors: ['Scarlett Johansson', 'Florence Pugh', 'Rachel Weisz']
    }
};

let thirdMovie = {
    title: 'Crudelia',
    yearOfRelease: 2021,
    actors:['Emma Stone', 'Emma Thompson', 'Joel Fry']
};
 movies['movie3'] = thirdMovie;

 for (let key in movies){
    console.log(movies[key].title);
 }



const title = prompt("enter the title or number of your movie");

console.log('title:', title);

for (let key in movies){
   if (movies[key].title.toUpperCase() === title.toUpperCase()){
    console.log(movies[key].yearOfRelease);
    console.log(movies[key].actors);
   }
}



//extra task

let myCrazyObject = {
    'name' : 'A ridiculus obkect',
    'some array' : [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
    'random animal' : 'banana shark'
};

console.log(myCrazyObject['some array'][2]['number']);

console.log(myCrazyObject['some array'][3]);

console.log(myCrazyObject['some array'][2]['purpose']);