
function getMealCategories() {
    return fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(res => res)
      .catch(err => err);
}

function getMealByCategory(category) {
  return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
}
module.exports = {
  getMealCategories,
  getMealByCategory
} ;