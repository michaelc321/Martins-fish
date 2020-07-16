export const quoteHTML = (quoteObj) => {
    return `
        <section class="fish card">
            <div class="quote__text">${quoteObj.quote}</div>
            <div class="quote__author">${quoteObj.author}</div>
        </section>
    `
}