import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../store/count/Count_action"


function Counter() {
    const dispatch = useDispatch();
    const redux_count = useSelector((state => {return state.Count.value;})); // or
    const [count, setCount] = useState("0");

    const Inc = () => {
        dispatch(increment());
    }
    const Dec = () => {
        dispatch(decrement());
    }
    const addCount = () => {
        dispatch(incrementByAmount(parseInt(count)))
    }

    const onChangeInput = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case "Counter":
                setCount(value);
                break;
        }
    }
    return (
        <div className="Todo_Container">
            <div className="Todo_Header">
                Current Value {redux_count}
            </div>
            <div className="Todo_Content">
                <div className="Todo_Content_amount">
                    <input type="number" placeholder="지정할 값을 입력해주세요" name="Counter" onChange={onChangeInput} value={count} />
                    <button onClick={() => addCount()}>
                        지정
                    </button>
                </div>
                <div className="Todo_Content_btns">
                    <button onClick={() => Inc()}>
                        증가
                    </button>
                    <button onClick={() => Dec()}>
                        감소
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter;