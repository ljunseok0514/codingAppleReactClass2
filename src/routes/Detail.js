import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let NewBtn = styled(YellowBtn)`
  color: red;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 2000);
  });
  let [count, setCount] = useState(0);

  let { id } = useParams();
  let result = props.shoes.find((item) => item.id === Number(id));
  console.log(result);
  return (
    <div className="container">
      <div className="alert alert-warning"> 2초이내 구매시 할인</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <Box>
        <NewBtn>버튼</NewBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{result.title}</h4>
          <p>{result.content}</p>
          <p>{result.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
