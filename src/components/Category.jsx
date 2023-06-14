// Importing necessary icons from the 'react-icons' package
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

// Importing the 'styled' function from the 'styled-components' package
import styled from 'styled-components';

// Importing the 'NavLink' component from the 'react-router-dom' package
import { NavLink } from 'react-router-dom';

// Defining a functional component called 'Category'
function Category() {
  return (
    <List>
      {/* NavLink components with different cuisine categories */}
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice /> {/* Displaying the 'FaPizzaSlice' icon */}
        <h4>Italian</h4> {/* Displaying the cuisine category name */}
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger /> {/* Displaying the 'FaHamburger' icon */}
        <h4>American</h4> {/* Displaying the cuisine category name */}
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles /> {/* Displaying the 'GiNoodles' icon */}
        <h4>Thai</h4> {/* Displaying the cuisine category name */}
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks /> {/* Displaying the 'GiChopsticks' icon */}
        <h4>Japanese</h4> {/* Displaying the cuisine category name */}
      </SLink>
    </List>
  );
}

// Styling the 'List' container div using the 'styled' function
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

// Styling the 'SLink' component (a styled version of NavLink) using the 'styled' function
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

// Exporting the 'Category' component as the default export of this module
export default Category;
