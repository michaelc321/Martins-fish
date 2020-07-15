const locationCollection = [
    {
        image: ./img/##.jpg,
        quote: "No fish is too cool for it's school",
        author: "-Unknown"
    },
    {
        image: ./img/##.jpg,
        quote: "What is a fun quote?",
        author: "-Unknown"
    },
    {
        image: ./img/##.jpg,
        quote: "1.. 2.. 3.. that's fine with me.",
        author: "-Someone"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}