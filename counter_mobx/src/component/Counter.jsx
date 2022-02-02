
import { Provider, observer } from "mobx-react";
import { useState } from "react"
import {useStores} from "../store/context";

function Counter() {
    const { counter } = useStores();
    const [count, setCount] = useState("0");
    const Inc = () => {
        counter.increment();
    }
    const Dec = () => {
        counter.decrement();
    }
    const addCount = () => {
        counter.incrementByAmount(parseInt(count));
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
        <Provider>
            <div className="Todo_Container">
                <div className="Todo_Header">
                    Current Value {counter.count}
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
        </Provider>
    )
}

export default observer(Counter);