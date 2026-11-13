import { useQuery } from "@apollo/client/react";
import { GET_TASKS } from "./graphql/queries";

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
}

interface GetTasksData {
  tasks: Task[];
}

function App() {
  const { loading, error, data } =
    useQuery<GetTasksData>(GET_TASKS);

  if (loading) return <h2>Loading tasks...</h2>;

  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>TaskFlow Dashboard</h1>

      {data?.tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;