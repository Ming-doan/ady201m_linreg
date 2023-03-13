import "./App.css";
import { Steps, Button, theme } from "antd";
import { Spacer, Expanded } from "./components/Utils";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "./store/appStore";
import ModelInputComponent from "./components/Inputs";
import PredictPrice from "./components/Predict";
import Result from "./components/Result";
import { hFlexStyle, vFlexStyle } from "./components/constants";

function App() {
  // Constant Style
  const { token } = theme.useToken();
  const contentStyle = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    padding: "1rem",
    flex: 1,
  };

  // Steps
  const step = useSelector((state) => state.app.step);
  const isTraining = useSelector((state) => state.app.isTraining);
  const dispatch = useDispatch();
  const stepItems = [
    {
      title: "Input Data",
    },
    {
      title: "Predict Price",
    },
    {
      title: "Result",
    },
  ];
  function onPrev() {
    let newStep = step - 1;
    dispatch(setStep(newStep));
  }
  function onNext() {
    let newStep = step + 1;
    dispatch(setStep(newStep));
  }
  function onChanges(current) {
    dispatch(setStep(current));
  }
  const stepComponent = [ModelInputComponent, PredictPrice, Result];
  const CurrentComponent = stepComponent[step];

  // Component Return
  return (
    <div className="App">
      <div className="center">House Price Prediction</div>
      <Spacer space={1} />
      <Steps
        current={step}
        items={stepItems}
        onChange={isTraining ? null : onChanges}
      />
      <Spacer space={1} />
      <div style={vFlexStyle} className="Content">
        <div style={contentStyle}>
          <CurrentComponent />
        </div>
      </div>
      <Spacer space={1} />
      <div style={hFlexStyle}>
        {step !== 0 ? (
          <Button onClick={onPrev} disabled={isTraining}>
            Previous Step
          </Button>
        ) : null}
        <Expanded />
        {step !== 2 ? (
          <Button type="primary" onClick={onNext} disabled={isTraining}>
            Next Step
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
