import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useState } from "react";

function App() {
    const [value, setValue] = useState({
        value: 0,
        action: null,
        secondValue: 0,
        equal: false,
        final: null,
        calculate: 0,
    });

    const numberHandle = (e) => {
        const num = e.target.innerHTML;
        if (value.action === null) {
            if (value.value === 0) {
                setValue({ ...value, value: +num });
            } else {
                const updateVal = +(value.value + "" + num);
                setValue({ ...value, value: updateVal });
            }
        }
        if (value.action !== null) {
            if (value.secondValue === 0) {
                setValue({ ...value, secondValue: +num });
            } else {
                const updateVal = +(value.secondValue + "" + num);
                setValue({ ...value, secondValue: updateVal });
            }
        }
    };

    const actionHandle = (e) => {
        const action = e.target.innerHTML;
        if (action === "+") {
            setValue({
                ...value,
                action: "+",
                calculate: value.value,
                value: "+",
            });
        }
        if (action === "=") {
            const calculateData = +value.calculate + +value.secondValue;
            console.log(value.value);
            console.log(value.secondValue);
            setValue({ ...value, final: calculateData });
        }
    };

    // const numberHandle = (e) => {
    //     const num = e.target.innerHTML;
    //     if (value.value === 0 || value === "+") {
    //         setValue(+num);
    //     } else {
    //         const newValue = +(value + "" + num);
    //         setValue(newValue);
    //     }
    // };
    // const actionHandle = (e) => {
    //     const action = e.target.innerHTML;
    //     if (action === "+") {
    //         setValue("+");
    //     }
    //     if (action === "=") {

    //     }
    // };
    return (
        <div className="App">
            <div className="calculator__main-frame d-flex flex-column gap-3 animation">
                <div className="calculator__screen">
                    <h3>
                        {value.action === null
                            ? value.value
                            : value.secondValue}
                    </h3>
                </div>
                <div className="calculator__func-panel d-flex justify-content-between">
                    <div>
                        <button
                            onClick={() => setValue({ ...value, value: 0 })}
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
                        <button className="calculator__func-button">X</button>
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
                        <button className="calculator__func-button">,</button>
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
