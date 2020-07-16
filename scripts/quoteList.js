import {quoteHTML} from "./quote.js"
import {useQuote} from "./quoteObject.js"

export const quoteList = () => {
  const contentElement = document.querySelector('.content--quotes')

    const quote = useQuote()
    let quoteHTMLRepresentation = ""
    for(const currentQuoteObj of quote) {
        quoteHTMLRepresentation += quoteHTML(currentQuoteObj)
    }

    contentElement.innerHTML += `
        <article class="quote__main">
            ${quoteHTMLRepresentation}
        </article>
    `
}