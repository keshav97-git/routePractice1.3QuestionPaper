import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Welcome Keshav</h1>
      <Link to={"/questions"}>Questions</Link>
    </div>
  );
}
