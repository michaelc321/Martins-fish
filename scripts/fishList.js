import {useFish} from "./fishDataProvider.js"
import {fishHTML} from "./fish.js"

export const fishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content--left")

    const fishes = useFish()
    
    let fishHTMLRepresentations = ""
    for(const currentFishObj of fishes) {
        fishHTMLRepresentations += fishHTML(currentFishObj)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fish__main">
            ${fishHTMLRepresentations}
        </article>
    `
}