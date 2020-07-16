import {tipsHTML} from "./tips.js"
import {useTips} from "./tipsObject.js"

export const tipsList = () => {
    const contentElement = document.querySelector(".content--right")
    
    const tips = useTips()
    let tipsHTMLRepresentation = ""
    for(const currentTipsObject of tips) {
        tipsHTMLRepresentation += tipsHTML(currentTipsObject)
    }

    contentElement.innerHTML += `
    <article class="tips__main">
        ${tipsHTMLRepresentation}
    </article>
    `
}