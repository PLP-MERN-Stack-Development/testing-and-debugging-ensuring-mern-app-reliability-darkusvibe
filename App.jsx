import BugForm from "./components/BugForm";
import BugList from "./components/BugList";

export default function App() {
  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm />
      <BugList />
    </div>
  );
}
