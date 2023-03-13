import { Button, Spin } from "antd";
import { vFlexStyle } from "./constants";
import { Spacer } from "./Utils";
import { postMethod } from "../apis/linregService";
import { useSelector, useDispatch } from "react-redux";
import { setTraining, setResult } from "../store/appStore";
import { formatData } from "../utils";

function PredictPrice() {
  const isTraining = useSelector((state) => state.app.isTraining);
  const sqft = useSelector((state) => state.app.sqft);
  const bedrooms = useSelector((state) => state.app.bedrooms);
  const bathrooms = useSelector((state) => state.app.bathrooms);
  const isBrick = useSelector((state) => state.app.isBrick);
  const direction = useSelector((state) => state.app.neighborhood);
  const dispatch = useDispatch();

  function onPredict() {
    dispatch(setTraining(true));
    const data = formatData(sqft, bedrooms, bathrooms, isBrick, direction);
    postMethod(data).then((res) => {
      dispatch(setTraining(false));
      dispatch(setResult(res.price));
    });
  }

  return (
    <div className="center">
      <Spin spinning={isTraining}>
        <div style={vFlexStyle}>
          <div>Press to Predict House Price</div>
          <Spacer space={1} />
          <Button type="primary" onClick={onPredict}>
            Predict House Price
          </Button>
        </div>
      </Spin>
    </div>
  );
}

export default PredictPrice;
