import { useFish } from "./fishDataProvider"

import {useFish} from "./fishDataProvider.js"
import {fishHTML} from "./fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content--left")

    const fishes = useFish()

    // for(const currentFishObj of fishes) {
    //     fishHTMLRepresentations += fishHTML(currentFishObj)
    // }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fish__main">
            All the fish go here!
        </article>
    `
}