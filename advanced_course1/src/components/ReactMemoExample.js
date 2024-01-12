
// React.memo()
/* Improves performance because instead of re-rendering the entire app, it only renders the
apps that are affected by the change of context and not the entire tree of components.

in this case the context Provider component and the ComponentC.
*/

import { useUser } from "../providers/UserContext";
import { memo } from 'react';

const ReactMemoExample = memo(() => <ComponentA />);

const ComponentA = () => <ComponentB />;
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
    const { user } = useUser();

    return <h2>Hello {user.name}, this is a React.memo example  </h2>
};

export default ReactMemoExample;