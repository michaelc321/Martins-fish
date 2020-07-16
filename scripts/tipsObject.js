const tipsCollection = [
    {
       tips: "Some fish are more unique than others and require a specific PH level."
    }
]

export const useTips = () => {
    return tipsCollection.slice()
}