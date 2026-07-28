import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice";
import { increaseCount, delState } from "../store.js";
function Cart() {
  let stock = useSelector((state) => state.stock);
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>

      <button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        button
      </button>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>추가</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((a, i) => {
            console.log(a.name);
            return (
              <tr key={a.id || i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                      dispatch(increaseCount(a.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(delState(a.id));
                      console.log(a.id);
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
