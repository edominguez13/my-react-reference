import MealsProvider from "../providers/MealsProvider";
import MealsCounter from "./MealsCounter";
import MealsList from "./MealsList";

const MiniAppMealsCounter = () => {
    return (
        <MealsProvider>
            <MealsList />
            <MealsCounter />
        </MealsProvider>
    );
}

export default MiniAppMealsCounter;