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
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (isNaN(num) == true) {
      window.alert("그러지마세요");
    }
  }, [num]);

  let { id } = useParams();
  let result = props.shoes.find((item) => item.id === Number(id));
  return (
    <div className="container">
      {alert === true && (
        <div className="alert alert-warning"> 2초이내 구매시 할인</div>
      )}

      {count}
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
          <input
            placeholder="숫자만 입력하세요"
            onChange={(e) => {
              setNum(e.target.value);
              //   console.log(e);
            }}
          ></input>
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
