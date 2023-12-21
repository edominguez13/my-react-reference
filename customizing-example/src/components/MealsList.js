/* Get the context data */
import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {

    /* Destructuring the meals from the use MealsListContext */
    const { meals } = useMealsListContext();

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}

export default MealsList;