export interface Song{
    id : number, 
    title : string,
    author : string,
    time : number, // seconds
    genre : string
}

export const mockedSongs : Song[] = [
    {
        id : 0,
        title: "Baby",
        author: "Justin Bieber",
        time : 194,
        genre: "Pop"
    },
    {
        id : 1,
        title: "Mamma mia",
        author: "ABBA", 
        time : 210,
        genre : "unknown"
    },
    {
        id: 2,
        title: "Bohemian Rhapsody",
        author: "Queen",
        time: 354,
        genre: "Rock"
    },
    {
        id: 3,
        title: "Shape of You",
        author: "Ed Sheeran",
        time: 233,
        genre: "Pop"
    },
    {
        id: 4,
        title: "Billie Jean",
        author: "Michael Jackson",
        time: 294,
        genre: "Pop"
    },
    {
        id: 5,
        title: "Hotel California",
        author: "Eagles",
        time: 391,
        genre: "Rock"
    },
    {
        id: 6,
        title: "Hey Jude",
        author: "The Beatles",
        time: 431,
        genre: "Rock"
    },
    {
        id: 7,
        title: "Smells Like Teen Spirit",
        author: "Nirvana",
        time: 302,
        genre: "Grunge"
    },
    {
        id: 8,
        title: "Sweet Child o' Mine",
        author: "Guns N' Roses",
        time: 356,
        genre: "Rock"
    },
    {
        id: 9,
        title: "Wonderwall",
        author: "Oasis",
        time: 258,
        genre: "Britpop"
    }
]