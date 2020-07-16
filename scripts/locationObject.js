const locationCollection = [
    {
        image: "./img/lake1.jpg",
        place: "Lake Manor",
        about: "This Lake is most known for it's..."
    },
    {
        image: "./img/lake2.jpg",
        place: "Lake Manor",
        about: "This Lake is most known for it's..."
    },
    {
        image: "./img/lake3.jpg",
        place: "Lake Manor",
        about: "This Lake is most known for it's..."
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}