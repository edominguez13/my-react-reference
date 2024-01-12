import { useUser } from "../providers/UserContext";

export const UserContextConsumer = () => {
    const { user } = useUser();

    return <h2>The name of the mock authenticated user is {user.name} </h2>
}