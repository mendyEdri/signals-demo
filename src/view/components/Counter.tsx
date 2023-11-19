import { useCount } from "../hooks"

export const Counter = () => {
    const count = useCount();

    return <h2>Number of tasks: {count}</h2>   
}