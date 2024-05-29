import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function Answer({ ans }) {
  const { ansId } = useParams();
  const newArr = ans.filter((item) => item.id == ansId);
  console.log(newArr[0].answer);
  return (
    <div>
      <h1>Answer: </h1>
      <p>{newArr[0]?.answer}</p>
      <Link to={"/questions"}>Questions</Link>
    </div>
  );
}
