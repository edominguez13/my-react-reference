/* Get the context data */
import { useMealsListContext } from "../providers/MealsProvider";

const MealsCounter = () => {

    const { meals } = useMealsListContext();

    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3> 
            {/* length not lenght , remember */}
        </div>
    );
}

export default MealsCounter;