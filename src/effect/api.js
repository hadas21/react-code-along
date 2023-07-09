function getMealCategories() {
    const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: {query: 'beef stew'},
        headers: {
          'X-RapidAPI-Key': '541b57eaf5msh00fc105bf0a285bp1b0dacjsnd747045603fd',
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
      };
      
    return fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
}

function getMealAreas() {
    const areasURL = 'www.themealdb.com/api/json/v1/1/list.php?a=list';
}

export default getMealCategories;