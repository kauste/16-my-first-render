function renderPractise (selector, data){
    const practiseDOM = document.querySelector(selector);
    let practiseHTML = ``;
    for (const item of data){
        practiseHTML += `
                        <div class="practice-box">
                            <i class="practice-icon fa-solid fa-${item.icon}"></i>
                            <div class="left-side">
                                <h3 class="place">${item.place}</h3>
                                <p class="leader">${item.leader}</p>
                                <p class="direction">${item.direction}</p>
                            </div>
                        </div>
                        `
    }
    practiseDOM.innerHTML = practiseHTML;
}
export { renderPractise };