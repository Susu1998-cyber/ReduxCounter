import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitform } from "../redux/form/formAction";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        margin: "24px",
      }}
    >
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        style={{ width: "200px" }}
      />
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        style={{ width: "200px" }}
      />
      <button
        onClick={() => dispatch(submitform({ name, age }))}
        style={{ margin: "24px" }}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
