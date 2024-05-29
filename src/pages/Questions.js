import { Link } from "react-router-dom";
export default function Questions({ ques }) {
  return (
    <div>
      <h1>QuestionSet Page: </h1>
      <ul>
        {ques.map((item) => {
          return (
            <li>
              <h2>{item.question}</h2>
              <Link style={{ margin: "5px" }}>Upvote</Link>
              <Link style={{ margin: "5px" }}>Downvote</Link>
              <Link to={`/answer/${item.id}`} style={{ margin: "5px" }}>
                Answer
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
