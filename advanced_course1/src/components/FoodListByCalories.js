// transforming the data
const FoodListByCalories = (props) => {
    
    // Creating a variable to transform the data
    const lowCalorieFood = props.data
    .filter((dessert) => { 
        return dessert.calories < 500; }) // filtering by calories
    .sort((a, b) => {
        return a.calories - b.calories;}) // sorting by calories on ascending order
    .map(food => {
        const food_item = `${food.name} - ${food.calories}` // transforming the data
        return (
            <li>{food_item}</li> // creating html components
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