import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Recipes from './MyComponents/Recipes';
import About from './MyComponents/About';
import AddRecipe from './MyComponents/AddRecipe';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  // let initRecipe;
  // if (localStorage.getItem("myRecipes") === null) {
  //   initRecipe = [];
  // }
  // else {
  //   initRecipe = JSON.parse(localStorage.getItem("myRecipes"));
  // }

  // On Delete Function
  const onDelete = (recipe) => {
    if (window.confirm("Are you sure you want to delete this recipe ?")) {
      console.log('I am deleting' + recipe);
      setRecipes(recipes.filter((e) => e !== recipe))
      // localStorage.setItem("myRecipes", JSON.stringify(recipe));
    }
  }

  // Adding New 
  function addNewRecipeItem(title, desc) {
    console.log('New record !');
    let id_ = (recipes.length) + 1;
    console.log(id_);
    const newItem = {
      id: id_,
      title: title,
      desc: desc
    }
    // console.log(newItem)
    setRecipes([...recipes, newItem]);
  }

  // Recipes List _ useState
  const [recipes, setRecipes] = useState([
    {
      'id': 1,
      'title': 'Milk shake',
      'desc': 'Add mango sugar in milk and blend it.'
    },
    {
      'id': 2,
      'title': 'Fries',
      'desc': 'Take 1 potato cut it and fry it.'
    },
    {
      'id': 3,
      'title': 'Juice',
      'desc': 'Use tang and chilled water.'
    }

  ]);

  // Recipes List _ useState
  // const [recipes, setRecipes] = useState([initRecipe]);
  // _ useEffect Hook
  // useEffect(() => {
  //   localStorage.setItem("myRecipes", JSON.stringify(recipes));
  // }, [recipes])

  // Return JSX
  return (
    <>
      <Router>
        <Header title="|| RECIPE LIST ||" showCurrentDate={true} />
        <Routes>
          {/* link '/' */}
          <Route exact path="/" element={
            <>
              <AddRecipe addNew={addNewRecipeItem} />|
              <Recipes recipes_list={recipes} onDelete={onDelete} />
            </>} />
            {/* link '/about' */}
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
