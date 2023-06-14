import styled from "styled-components"; // Importing the styled-components library for styling
import { useState } from "react"; // Importing the useState hook from the React library
import { FaSearch } from "react-icons/fa"; // Importing the FaSearch icon component from the react-icons/fa library
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from the react-router-dom library

function Search() {
  const [input, setInput] = useState(''); // Initializing state for the input value and its corresponding setter function
  const navigate = useNavigate(); // Initializing the navigate function from the useNavigate hook

  const submitHandler = (e) => {
    e.preventdefault(); // Preventing the default form submission behavior
    navigate('/searched/' + input); // Navigating to the '/searched/{input}' route
  };

  return (
    <FormStyle onSubmit={submitHandler}> {/* A styled form component with submitHandler as the onSubmit event handler */}
        <div>
            <FaSearch></FaSearch> {/* Render the FaSearch icon */}
            <input onChange={(e) => setInput(e.target.value)} type='text' value={input} /> {/* An input field that updates the input state when its value changes */}
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form` /* Styled component for the form */
    margin: 0rem 20rem; /* Setting margin */
    div {
        width: 100%; /* Setting width */
        position: relative; /* Setting position */
    }
    input {
        border: none; /* Removing border */
        background: linear-gradient(35deg, #494949, #313131); /* Setting background gradient */
        font-size: 1.5rem; /* Setting font size */
        color: white; /* Setting font color */
        padding: 1rem 3rem; /* Setting padding */
        border: none; /* Removing border */
        border-radius: 1rem; /* Setting border radius */
        outline: none; /* Removing outline */
        width: 100% /* Setting width */
    }
    svg {
        position: absolute; /* Setting position */
        top: 50%; /* Setting top position */
        left: 0%; /* Setting left position */
        transform: translate(100%, -50%); /* Translating the element */
        color: white; /* Setting icon color */
    }
`

export default Search // Exporting the Search component as the default export
