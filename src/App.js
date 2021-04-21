
import './App.css';
import Food from './components/Food.js'
import React, {useState} from 'react'
import sandwich from "./images/sandwiches.jpg"
import slices from "./images/slices.jpg"
function App() {
  let [foodSet, changeSet] = useState(new Set())
  let [foodString, changeString] = useState("")
  let [questionScreen, changeScreen] = useState(true)
  let [answer, setAnswer] = useState("")
  let [health, setHealth] = useState(0)
  let [taste, setTaste] = useState(0)
  let [gameOver, setOver] = useState("")
  let foodRecipes = new Map()
  foodRecipes.set("Nachos Fish Spinach ", ["Spinach Nachos",30,30])
  foodRecipes.set("Tortilla Wrap Fish Avocado ",["Keto Burrito",40,40])
  foodRecipes.set("Nachos Beans Avocado " , ["Vegan Nachos",20,40])
  foodRecipes.set( "Pizza Dough Chicken Spinach " ,["Roasted Chicken Pizza",40,30])
  foodRecipes.set("Pizza Dough Cheese Spinach ", ["Vegetarian Pizza",30,30])
  foodRecipes.set("Bread Slices Chicken Spinach ", ["Green Chicken Sandwich",40,30])
  foodRecipes.set("Bread Slices Cheese Nuts ", ["Peanut Butter and Jelly",-30,30])
  foodRecipes.set("Bread Slices Fish Nuts ", ["Tuna Sandwich",10,30])
  foodRecipes.set("Tortilla Wrap Beans Avocado ", ["Keto Veg Burrito",30,30])
  foodRecipes.set("Tortilla Wrap Chicken Spinach ", ["Green Chicken Burrito",40,10])
  foodRecipes.set("Pizza Dough Cheese Apple ", ["Apple Pizza",-10,-10])
  foodRecipes.set("Nachos Cheese Avocado ", ["Avocado Nachos",0,40])
  foodRecipes.set("Nachos Cheese Spinach ", ["Green Nachos",30,30])
  foodRecipes.set("Bread Slices Chicken Avocado ", ["Chicken Avocado Sandwich",20,30])
  foodRecipes.set("Tortilla Wrap Chicken Nuts ", ["Crunchy Burrito",20,10])
   
  function handleChange(checked, label){
    if(checked){
      //adds food to the array
      const clonedFood = new Set(foodSet)
      clonedFood.add(label)
      let clonedString = "";
      for (let item of clonedFood.keys()){
        clonedString = clonedString + item + " " 
      }
      changeSet(clonedFood)
      foodString = clonedString
      changeString(clonedString)
    }
    else{
      const clonedFood = new Set(foodSet)
      console.log(clonedFood)
      clonedFood.delete(label)
      let clonedString = ""
      for (let item of clonedFood.keys()){
        clonedString = clonedString + item + " " 
      }
      changeSet(clonedFood)
      changeString(clonedString)
      console.log(clonedString)
    }
  }
  function handleHome(){
    changeScreen(true)
  }
  function handleSubmit(){
    
    console.log("Food string is " + foodString)
    if(foodRecipes.get(foodString) !== undefined){
      console.log(foodRecipes.get(foodString)[0])
      setAnswer(foodRecipes.get(foodString)[0])
      setHealth(health + foodRecipes.get(foodString)[1])
      setTaste(taste + foodRecipes.get(foodString)[2])
      if (health >200 && taste>200){
        setHealth(0)
        setTaste(0)
        setOver("Game Over")
      }
    }
    else{
      setAnswer("Gunk")

    }
    foodString = ""
    changeString(foodString)
    changeScreen(false)
    changeSet(new Set())

  }
  return (
    <div className="App">
      <img className = "image" src = {sandwich} alt = "sandwiches"></img>
      <div className = "main body">
        <h1>Welcome to the Recipe Maker</h1>
        {questionScreen? <form onSubmit={handleSubmit}>
          <div className = "main-container">
            <div className = "category">
              <div>
                <Food food = "Bread Slices" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Tortilla Wrap" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Pizza Dough" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Nachos" change = {handleChange} ></Food>
              </div>
            </div>
            
            <div className = "category">
              <div>
                <Food food = "Chicken" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Fish" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Beans"  change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Cheese" change = {handleChange}  ></Food>
              </div>
            </div>

            <div className = "category">
              <div>
                <Food food = "Nuts" change = {handleChange}  ></Food>
              </div>
              <div>
                <Food food = "Apple" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Spinach" change = {handleChange} ></Food>
              </div>
              <div>
                <Food food = "Avocado" change = {handleChange} ></Food>
              </div>
            </div>
          </div>
        
          <div>
            <button className = "button" type="submit">Make the recipe</button>
          </div>
        </form> :
          <div className = "stats">
            <h2> You have got {answer}!</h2>
            <h3>Health: {health}</h3>
            <h3>Taste: {taste}</h3>
            <h3>Total: {health+taste}</h3>
            <button className = "button" onClick  = {handleHome}>Go back to home screen</button>
            {gameOver && <h3>Game Over</h3>}
          </div>
        
        
        }
      </div>
      <img className = "image" src = {slices} alt = "pictures toast and cream slices"></img>
      
    </div>
  );
}
//submit - everything should become empty
export default App;
