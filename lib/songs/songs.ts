export interface ISong{
    id : number, 
    title : string,
    author : string,
    time : number, // seconds
    genre : string,
    source : string
}

export const mockedSongs : ISong[] = [
    {
        id : 0,
        title: "Breeze Groove",
        author: "Top-Flow",
        time : 96,
        genre: "Pop",
        source : "https://cdn.pixabay.com/audio/2024/03/26/audio_6846775846.mp3"
    },
    {
        id : 1,
        title: "Perfect Beauty",
        author: "Good_B_Music", 
        time : 440,
        genre : "Chill",
        source : "https://cdn.pixabay.com/audio/2024/02/14/audio_b9bc3934cc.mp3"
    },
    {
        id: 2,
        title: "Drive Breakbeat",
        author: "Rockot",
        time: 109,
        genre: "Boom Boom",
        source : "https://cdn.pixabay.com/audio/2023/10/24/audio_9408f7326a.mp3"
    },
    {
        id: 3,
        title: "Titanium",
        author: "AlisiaBeats",
        time: 106,
        genre: "Wave",
        source : "https://cdn.pixabay.com/audio/2023/10/06/audio_14f9198f0b.mp3"
    },
    {
        id: 4,
        title: "Good Night",
        author: "FASSounds",
        time: 147,
        genre: "Chill",
        source : "https://cdn.pixabay.com/audio/2023/07/30/audio_e0908e8569.mp3"
    }
]