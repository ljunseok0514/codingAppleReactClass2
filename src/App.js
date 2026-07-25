import "./App.css";
import { createContext, useEffect, useState } from "react";
import { props } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg-1.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";

export let Context1 = createContext();

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let [clickCount, setClickCount] = useState(0);
  let [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card key={i} shoes={shoes[i]} i={i + 1} />;
          })}
        </div>
      </div>
      {clickCount >= 2 ? (
        ""
      ) : (
        <button
          onClick={() => {
            let nextCount = clickCount + 1;
            setClickCount(nextCount);
            if (nextCount === 1) {
              setLoading(true);
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((결과) => {
                  console.log(결과.data);
                  let copy = [...shoes, ...결과.data];
                  setShoes(copy);
                  console.log("end");
                  setLoading(false);
                })
                .catch(() => {
                  console.log("실패함");
                  console.log("end");
                  setLoading(false);
                });
            } else if (nextCount === 2) {
              axios
                .get("https://codingapple1.github.io/shop/data3.json")
                .then((결과) => {
                  console.log(결과.data);
                  let copy = [...shoes, ...결과.data];
                  setShoes(copy);
                })
                .catch(() => {
                  console.log("실패함");
                });
            } else {
              return;
            }
          }}
        >
          더보기
        </button>
      )}
      {loading === true ? (
        <div className="loading">
          <p>로딩중</p>
        </div>
      ) : (
        ""
      )}

      <Routes>
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>장소임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>잘못된주소</div>} />
      </Routes>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
