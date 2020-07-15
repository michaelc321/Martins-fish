
const tipCollection = [
    {
        quote: "No fish is too cool for it's school",
        author: "-Unknown"
    },
    {
        quote: "What is a fun quote?",
        author: "-Unknown"
    },
    {
        quote: "1.. 2.. 3.. that's fine with me.",
        author: "-Someone"
    }
]

export const useTips = () => {
    return tipCollection.slice()
}