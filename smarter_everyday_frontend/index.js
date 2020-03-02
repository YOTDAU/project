const ALL_CATEGORIES_URL = 'https://opentdb.com/api_category.php'

const TEST_API = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple'

const BLANK_API = `https://opentdb.com/api.php?amount=${number_of_questions}&category=${category_id}&difficulty=${difficulty_id}&type=multiple`

// const API_CATEGORIES = {
//  getCategories: () => fetch(CATEGORIES_URL)
//  .then(response => response.json())
//  .then(categories => renderCategories(categories))
// };

// const renderCategories = categories => {
//     categories.forEach(category => {
//         categoryDropdownBtn(category)
//     });
// }

const renderQuestions = questions => {
    questions.forEach(question => {
        renderQuestions(question)
    });
};

const renderQuestion = question => {
    
}


const API_Questions = {
    getQuestions: () => fetch(TEST_API)
    .then(response => response.json())
    .then(questions => renderQuestions(questions)) 
}








