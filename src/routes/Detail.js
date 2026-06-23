import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let result = props.shoes.find((item) => item.id === Number(id));
  console.log(result);
  return (
    <div className="container">
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
