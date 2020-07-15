import {tipsHTML} from "./tips.js"
import {useTips} from "./tipsObject.js"

export const tipsList = () => {
  const contentElement = document.querySelector('.content--right')

    const tips = useTips()
    let tipsHTMLRepresentation = ""
    for(const currentTipsObj of tips) {
        tipsHTMLRepresentation += tipsHTML(currentTipsObj)
    }

    contentElement.innerHTML += `
        <article class="tips__main">
            ${tipsHTMLRepresentation}
        </article>
    `
}