// transforming the data
const FoodListByCalories = (props) => {
    
    // Creating a variable to transform the data
    const lowCalorieFood = props.data
    .filter((dessert) => { 
        return dessert.calories < 500; }) // Filtering by calories
    .sort((a, b) => {
        return a.calories - b.calories;}) // Sorting by calories on ascending order
    .map(food => {
        return (
            <li>{food.name} - {food.calories} cal</li> // Transforming the datacreating html components
        )});

    return (
        <div>
            <ul>
                {lowCalorieFood}
            </ul>
        </div>
    )
}

// using the data
export default FoodListByCalories;