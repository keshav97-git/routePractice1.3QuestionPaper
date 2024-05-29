import "./styles.css";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Answer from "./pages/Answer";
import { fakeFetch } from "./api/api1";
import { useEffect, useState } from "react";
export default function App() {
  const [ques, setQues] = useState([]);
  const [ans, setAns] = useState([]);
  const handleData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/questions");
      if (res.status == 200) {
        // console.log(res.data.questions);
        setQues(res.data.questions);
        setAns(res.data.questions) 
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="App">
      <NavLink to={"/"} style={{ margin: "5px" }}>
        Home
      </NavLink>
      {/* <NavLink to={"/questions"} style={{ margin: "5px" }}>
        Questions
      </NavLink> */}
      {/* <NavLink to={"/answer"} style={{ margin: "5px" }}> */}
      {/* Answers */}
      {/* </NavLink> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions ques={ques} />} />
        <Route path="/answer/:ansId" element={<Answer />} />
      </Routes>
    </div>
  );
}
