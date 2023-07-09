import React, {useState, useEffect} from 'react'
import getMealCategories from './api';

function MealCategories() {
    const [jokes, setJoke] = useState('');

    useEffect(() => {
        // getMealCategories().then(res => setJoke(res.value));
        fetch('https://themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(res => console.log(res))
    }, []);

    return (
        <div>
            Hi
        </div>
    )
}

export default MealCategories;