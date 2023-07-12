import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IngredientScale(props) {
    const [scaleStyles, setScaleStyles] = useState([]);

    useEffect(() => {
        if (props.countedIngredients !== undefined && Object.keys(props.countedIngredients).length > 0) {
            const maxCount = Math.max(...Object.values(props.countedIngredients));
            const colorWdith = 500 / maxCount;
            const updatedScaleArr = Object.values(props.countedIngredients).reduce((prev, curr) => {
                if (!prev.includes(curr)) {
                    prev.push(curr);
                }
                return prev;
            }, [])
                .sort((a, b) => a - b)
                .map(item => {
                    const ratio = item / maxCount;
                    return {
                        'width': colorWdith,
                        'filter': `brightness(${1 + ratio})`,
                        'backgroundColor': 'green',

                    }
                });
            setScaleStyles(updatedScaleArr)
        }
    }, [props]);

    return (
        <Container>    
            <h4>Ingredient Frequency</h4>
            <Row>
                <Col style={{'textAlign':'right'}}>Fewer Meals</Col>
                {scaleStyles.map((item, i) => {
                    return (
                        <Col key={i} style={item}></Col>  
                    ) 
                })}
                <Col style={{'textAlign':'left'}}>More Meals</Col>
            </Row>
        </Container>
    )
}

export default IngredientScale;