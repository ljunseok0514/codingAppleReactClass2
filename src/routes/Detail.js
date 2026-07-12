import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

import { Context1 } from "./../App.js";

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
  let { 재고, shoes } = useContext(Context1);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, []);
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
    <div className={`container start ${fade}`}>
      {alert === true && (
        <div className="alert alert-warning"> 2초이내 구매시 할인</div>
      )}
      {재고[0]}

      {/* {count} */}
      {/* <Box>
        <NewBtn>버튼</NewBtn>
      </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${result.id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            placeholder="숫자만 입력하세요"
            onChange={(e) => {
              setNum(e.target.value);
            }}
          ></input>
          <h4 className="pt-5">{result.title}</h4>
          <p>{result.content}</p>
          <p>{result.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes} />
    </div>
  );
}
function TabContent({ tab, shoes }) {
  let { 재고 } = useContext(Context1);
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {재고[0]}
      <p>{shoes[0].id}</p>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
