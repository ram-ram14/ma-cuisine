import React from 'react'; // Importing React library for building components
import { useEffect, useState } from 'react'; // Importing useEffect and useState hooks from React
import { useParams } from 'react-router-dom'; // Importing useParams hook from React Router
import styled from 'styled-components'; // Importing styled-components library for styling
import { Link } from 'react-router-dom'; // Importing Link component from React Router

function Searched() {
  // Creating a functional component called Searched
  const [searchedRecipes, setSearchedRecipes] = useState([]); // Using the useState hook to initialize a state variable called searchedRecipes with an empty array
  let params = useParams(); // Using the useParams hook to get the URL parameters

  const getSearched = async (name) => {
    // Defining an asynchronous function called getSearched that takes a parameter called name
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    // Fetching data from an API using the fetch function with the provided URL and query parameters
    const recipes = await data.json(); // Parsing the response data as JSON
    setSearchedRecipes(recipes.results); // Updating the searchedRecipes state variable with the fetched recipes
  };

  useEffect(() => {
    // Using the useEffect hook to perform side effects in the component
    getSearched(params.search); // Calling the getSearched function when the component mounts or when the params.search value changes
  }, [params.search]);

  return (
    <Grid>
      {/* Rendering a Grid component */}
      {searchedRecipes.map((item) => {
        // Mapping over the searchedRecipes array and returning a Card component for each item
        return (
          <Card key={item.id}>
            {/* Rendering a Card component with a unique key prop */}
            <Link to={'/recipe/' + item.id}>
              {/* Rendering a Link component with a dynamic URL */}
              <img src={item.image} alt='' />
              {/* Rendering an image with the item's image URL */}
              <h4>{item.title}</h4>
              {/* Rendering the item's title */}
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minimax(20rem, 1fr));
  grid-gap: 3rem;
`;

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

export default Searched;
