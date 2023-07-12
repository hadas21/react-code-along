import React, {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function AllIngredients(props) {
    const [maxCount, setMaxCount] = useState(0);

    useEffect(() => {
        if (!!props.countedIngredients) {
            const updatedMaxCount = Math.max(...Object.values(props.countedIngredients));
            setMaxCount(updatedMaxCount);
        }
    }, [props])
    
    function getIngredientStyle(item) {
        if (!!props.countedIngredients) {
            const ratio = props.countedIngredients[item]/maxCount;
            return {
                'backgroundColor': 'green',
                'filter': `brightness(${1 + ratio})`,
                'color': 'white'
            }    
        }
        return;
    }

    return (
        <Col>
            <h4>
                All Ingredients
            </h4>
            {props.allIngredients.length > 0 && props.allIngredients.map(item =>{
                return (
                    <Row key={`all-ingredients-${item}`}>
                        <Col style={getIngredientStyle(item)}>{item}</Col>
                        <Col>
                            <button
                                value={item}
                                onClick={(e) => props.handleAddIngredient(e.target.value)}
                            >+</button>
                        </Col>
                    </Row>
                );
            })}
        </Col>
    )
}

export default AllIngredients;