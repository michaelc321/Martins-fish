import {locationHTML} from "./location.js"
import {useLocation} from "./locationObject.js"

export const locationList = () => {
    const contentElement = document.querySelector(".content--location")
    
    const location = useLocation()
    let locationHTMLRepresentation = ""
    for(const currentLocationObject of location) {
        locationHTMLRepresentation += locationHTML(currentLocationObject)
    }

    contentElement.innerHTML += `
    <article class="location__main">
        ${locationHTMLRepresentation}
    </article>
    `
}