document.addEventListener('DOMContentLoaded', () => {
    includeHTMLAndAddListeners();
});

function includeHTMLAndAddListeners() {
    w3.includeHTML(() => {
        const extremecraftElement = document.getElementById('extremecraft');
        if (extremecraftElement) {
            extremecraftElement.addEventListener('click', () => {
                
                const homeContet = document.getElementById('contentHome');

                if (homeContet) {
                    const linkToModify = 'html/extremecraft.html';
                    homeContet.setAttribute('w3-include-html', linkToModify);

                    if (typeof w3 !== 'undefined' && typeof w3.includeHTML === 'function') {
                        w3.includeHTML();
                    }
                }

            });
        }

        const homePage = document.getElementById('home');
        if (homePage) {
            homePage.addEventListener('click', () => {

                const homeContent = document.getElementById('contentHome');
                
                if (homeContent) {
                   const linkToModify = 'html/home.html';
                    homeContent.setAttribute('w3-include-html', linkToModify);

                    if (typeof w3 !== 'undefined' && typeof w3.includeHTML === 'function') {
                        w3.includeHTML();
                    } 
                }

            });
        }

        const projects = document.getElementById('projects');
        if (projects) {
            projects.addEventListener('click', () => {

                const homeContent = document.getElementById('contentHome');
                
                if (homeContent) {
                   const linkToModify = 'html/projects.html';
                    homeContent.setAttribute('w3-include-html', linkToModify);

                    if (typeof w3 !== 'undefined' && typeof w3.includeHTML === 'function') {
                        w3.includeHTML();
                    } 
                }

            });
        }
    });
}
