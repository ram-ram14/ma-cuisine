import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link, useParams } from "react-router-dom";

// Import necessary modules and components

function Cuisine() {
    // Declare a functional component called Cuisine

    const [cuisine, setCuisine] = useState([]);
    // Declare a state variable called 'cuisine' and initialize it as an empty array using useState()

    let params = useParams();
    // Declare a variable called 'params' and assign it the value of the URL parameters using useParams()

    const getCuisine = async (name) => {
        // Declare an asynchronous function called getCuisine, which takes a parameter called 'name'
        
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        // Make an asynchronous request to an API using the fetch() function to retrieve recipes based on the cuisine name
        
        const recipes = await data.json();
        // Parse the response data as JSON
        
        setCuisine(recipes.results);
        // Update the 'cuisine' state variable with the retrieved recipes
    };
    
    useEffect(() => {
        // Declare an effect using useEffect()

        getCuisine(params.type);
        // Call the getCuisine() function when the component mounts or when 'params.type' changes
        
    }, [params.type]);

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
                // Render each item in the 'cuisine' array as a Card component
                
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe' + item.id}>
                            <img src={item.image} alt=""></img>
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minimax(20rem, 1fr));
    grid-gap: 3rem;
`;
// Define a styled component called Grid using the styled-components library, which represents a CSS grid layout

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;
// Define a styled component called Card using the styled-components library, which represents a card layout

export default Cuisine;
// Export the Cuisine component as the default export of the module
