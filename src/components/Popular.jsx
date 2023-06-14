import { useEffect, useState } from "react"; // Importing necessary hooks from the react library
import styled from 'styled-components'; // Importing the styled-components library for styling
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Importing components from the Splide library
import '@splidejs/splide/dist/css/splide.min.css'; // Importing the CSS file for Splide
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom

function Popular() {
  // Declaring a functional component named "Popular"

  const [popular, setPopular] = useState([]); // Declaring a state variable named "popular" and its setter function using the useState hook

  useEffect(() => {
    // Using the useEffect hook to perform side effects
    getPopular(); // Calling the getPopular function when the component mounts
  }, []);

  const getPopular = async () => {
    // Declaring an asynchronous function named "getPopular"
    const check = localStorage.getItem('popular'); // Getting the value of 'popular' from the local storage

    if (check) {
      // Checking if 'popular' value exists in local storage
      setPopular(JSON.parse(check)); // Parsing the JSON string and updating the "popular" state with the value from local storage
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      // Making an API request to fetch popular recipes using the Spoonacular API
      const data = await api.json(); // Parsing the response as JSON

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      // Storing the retrieved recipes in the local storage as a JSON string with the key 'popular'

      setPopular(data.recipes); // Updating the "popular" state with the retrieved recipes
    }
  };

  return (
    <div>
      <Wrapper>
        {/* Wrapper component */}
        <h3>Popular Picks</h3>

        <Splide
          options={{
            // Splide component with options
            perPage: 4, // Number of slides per page
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination
            drag: 'free', // Allow free dragging of slides
            gap: '5rem', // Gap between slides
          }}
        >
          {popular.map((recipe) => {
            // Mapping over the "popular" state to render each recipe
            return (
              <SplideSlide key={recipe.id}>
                {/* Slide component */}
                <Card>
                  {/* Card component */}
                  <Link to={'/recipe/' + recipe.id}>
                    {/* Link to the recipe */}
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
