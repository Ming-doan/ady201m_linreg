import { Spacer } from "./Utils";
import { useSelector, useDispatch } from "react-redux";
import {
  setSqft,
  setBedrooms,
  setBathrooms,
  setIsBrick,
  setNeighborhood,
  setResult,
} from "../store/appStore";
import { Button } from "antd";
import { formatCurrency } from "../utils";

function Result() {
  const result = useSelector((state) => state.app.result);
  const dispatch = useDispatch();

  function onNewPrice() {
    dispatch(setSqft(1450));
    dispatch(setBedrooms(2));
    dispatch(setBathrooms(2));
    dispatch(setIsBrick(false));
    dispatch(setNeighborhood("East"));
    dispatch(setResult(0));
  }

  return (
    <div>
      <div className="center price">
        <span>
          {result ? "House Price is:" : "Press Predict in step 2 to get Price"}
        </span>
        <Spacer space={0.5} />
        <b id="price">{result ? `$${formatCurrency(result)}` : null}</b>
      </div>
      <Spacer space={1} />
      <div className="center">
        {result ? (
          <Button type="primary" onClick={onNewPrice}>
            New Price
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Result;
