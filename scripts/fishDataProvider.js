

const fishCollection = [
    {
        name: "Bluegill",
        food: "Insects",
        species: "Largemouth",
        length: 4,
        location: "River",
        image: "./img/bass.jpg"
    },
    {
        name: "Bluegill",
        food: "Insects",
        species: "Largemouth",
        length: 4,
        location: "River",
        image: "./img/Bluegill.jpg"
    },
    {
        name: "Bass",
        food: "Insects",
        species: "Largemouth",
        length: 4,
        location: "River",
        image: "./img/bass.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}
  