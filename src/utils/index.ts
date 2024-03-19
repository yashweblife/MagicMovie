export type ShowData = {
    type: string;
    name: string;
    language: string;
    genres: string[];
    status: string;
    episodes?: number;
    runtime?: number;
}

export const shows_data:ShowData[] = [
    {
        type: "show",
        name: "Breaking Bad",
        language: "English",
        genres: ["Drama", "Crime", "Thriller"],
        status: "Ended",
        episodes: 60,
    },{
        type: "show",
        name:"Baki",
        language: "Japanese",
        genres: ["Action", "Martial Arts", "Anime"],
        status: "Ended",
        episodes: 39,
    },
    {
        type:"show",
        name: "Baki Hanma",
        language: "Japanese",
        genres: ["Action", "Martial Arts", "Anime"],
        status: "Ended",
        episodes: 12,
    },
    {
        type: "show",
        name: "Game of Thrones",
        language: "English",
        genres: ["Drama", "Action", "Adventure"],
        status: "Ended",
        episodes: 73,
    },
    {
        type:"show",
        name: "The Office",
        language: "English",
        genres: ["Comedy"],
        status: "Ended",
        episodes: 201,
    },
    {
        type:"movie",
        name: "The Shawshank Redemption",
        language: "English",
        genres: ["Drama"],
        status: "Released",
        runtime: 142,
    }
]