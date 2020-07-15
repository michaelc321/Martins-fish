export const tipsHTML = (tipsObj) => {
    return `
        <section class="fish card">
            <div class="quote__text">${tipsObj.quote}</div>
            <div class="quote__author">${tipsObj.author}</div>
        </section>
    `
}