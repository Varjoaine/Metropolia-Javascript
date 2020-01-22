const coursesEn = ["Hamburger, cream sauce and poiled potates",
"Goan style fish curry and whole grain rice",
"Vegan Chili sin carne and whole grain rice",
"Broccoli puree soup, side salad with two napas",
"Lunch baguette with BBQ-turkey filling",
"Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
"Goalaista kalacurrya ja täysjyväriisiä",
"vegaani Chili sin carne ja täysjyväriisi",
"Parsakeittoa,lisäkesalaatti kahdella napaksella",
"Lunch baguette with BBQ-turkey filling",
"Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];


let lang = 'fi';
let menu = coursesFi;

/** lajittele 
*
*   @param {Array} courses - Menu Array
*   
*/

const sortCourses = (courses, order ='asc') => {
    let sortedMenu = courses.sort();
    if (order === 'desc') {    
    }
    return sortedMenu;

};


const switchLanguage = () =>  {
    const list = document 

}

const renderSortedMenu = () => {
sortCourses(menu);
renderMenu();

}

const pickRandomCourse = courses => {
    const randomIndex = Math.floor(Math.random) * courses.length);
    return courses[randomIndex];

};

const renderMenu = () => {
    const list = document.querySelector('#sodexo');
    list.innerHTML = '';
    for (const item of menu) {
        const listItem = document.createElement('li');
        listItem.textContent = item;


}

}