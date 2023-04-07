import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useState } from "react";

function App() {
    const [value, setValue] = useState({
        value: 0,
        secondValue: null,
        action: null,
        equal: false,
        final: null,
        calculate: 0,
    });

    const numberHandle = (e) => {
        const num = e.target.innerHTML;
        if (value.value === 0) {
            setValue({ ...value, value: +num });
        } else {
            const startVal = value.value;

            const updateVal = +(startVal + num);
            setValue({ ...value, value: updateVal });
        }
    };

    const actionHandle = (e) => {
        const action = e.target.innerHTML;

        if (action === "+" || value.equal === true) {
            setValue({
                ...value,
                action: "+",
                final: value.final + value.value,
                value: 0,
            });
        }

        if (
            action === "=" &&
            value.secondValue === null &&
            value.action === "+"
        ) {
            setValue({
                ...value,
                secondValue: value.value,
                equal: true,
                final: value.final + value.value,
                value: value.final + value.value,
            });
        } else if (
            action === "=" &&
            value.secondValue !== null &&
            value.action === "+"
        ) {
            const newValue = value.final + value.secondValue;
            const convNewValue = parseFloat(newValue.toFixed(2));
            console.log(newValue);
            setValue({
                ...value,
                value: convNewValue,
                final: parseFloat((value.final + value.secondValue).toFixed(2)),
            });
        }
    };

    const comaHandle = () => {
        if (value.value % 1 === 0) {
            setValue({ ...value, value: value.value + "." });
        }
    };

    return (
        <div className="App">
            <div className="calculator__main-frame d-flex flex-column gap-3 animation">
                <div className="calculator__screen">
                    <h3>
                        {value.equal
                            ? parseFloat(value.final.toFixed(2))
                            : value.value}
                    </h3>
                </div>
                <div className="calculator__func-panel d-flex justify-content-between">
                    <div>
                        <button
                            onClick={() =>
                                setValue({
                                    ...value,
                                    value: 0,
                                    action: null,
                                    final: null,
                                    calculate: 0,
                                    equal: false,

                                    secondValue: null,
                                })
                            }
                            className="calculator__func-button"
                        >
                            AC
                        </button>
                    </div>
                    <div>
                        <button className="calculator__func-button">+/-</button>
                    </div>
                    <div>
                        <button className="calculator__func-button">%</button>
                    </div>
                    <div>
                        <button className="calculator__func-button">/</button>
                    </div>
                </div>
                <div className="calculator__func-panel d-flex justify-content-between">
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            7
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            8
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            9
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => actionHandle(e)}
                            className="calculator__func-button"
                        >
                            X
                        </button>
                    </div>
                </div>
                <div className="calculator__func-panel d-flex justify-content-between">
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            4
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            5
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            6
                        </button>
                    </div>
                    <div>
                        <button className="calculator__func-button">-</button>
                    </div>
                </div>
                <div className="calculator__func-panel d-flex justify-content-between">
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            1
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            2
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button"
                        >
                            3
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => actionHandle(e)}
                            className="calculator__func-button"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="calculator__func-panel calculator__func-panel-bottom d-flex justify-content-between">
                    <div>
                        <button
                            onClick={(e) => numberHandle(e)}
                            className="calculator__func-button-zero"
                        >
                            0
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={comaHandle}
                            className="calculator__func-button"
                        >
                            ,
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => actionHandle(e)}
                            className="calculator__func-button"
                        >
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
