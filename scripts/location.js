export const locationHTML = (locationObj) => {
    return `
        <section class="location card">
        <div><img  class="location__image image--card" src="${locationObj.image}" /></div>
            <div class="content__place">${locationObj.place}</div>
            <div class="content__about">${locationObj.about}</div>
        </section>
    `
}