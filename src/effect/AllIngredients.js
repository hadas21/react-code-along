import React, {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';


function AllIngredients(props) {
    // const [maxCount, setMaxCount] = useState(0);

    // useEffect(() => {
    //     const updatedMaxCount = Math.max(...Object.values(props.countedIngredients));
    //     setMaxCount(updatedMaxCount);
    // }, [props])
    
    // function getIngredientStyle(item) {
    //     const ratio = Math.round(props.countedIngredients[item]/maxCount * 10) / 10;
    //     console.log(ratio);
    //     return {
    //         'backgroundColor': 'darkpurple'
    //         // 'opacity': 1
    //         // 'color': ratio >= 0.5 ? 'black' : 'white'
    //     }
    // }

    const thing = {
        'backgroundColor': 'darkpurple'
    }

    return (
        <Col>
            <h4>
                All Ingredients
            </h4>
            {props.allIngredients.length > 0 && props.allIngredients.map(item =>{
                return (
                    <div style={thing} key={`all-ingredients-${item}`}>
                        {item}
                        <button
                            value={item}
                            onClick={(e) => props.handleAddIngredient(e.target.value)}
                        >+</button>
                    </div>
                );
            })}
        </Col>
    )
}

export default AllIngredients;