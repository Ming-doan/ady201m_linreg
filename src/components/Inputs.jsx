import { InputNumber, Radio, Switch } from "antd";
import { Text, Spacer } from "./Utils";
import { useSelector, useDispatch } from "react-redux";
import {
  setSqft,
  setBedrooms,
  setBathrooms,
  setIsBrick,
  setNeighborhood,
} from "../store/appStore";
import { bedroomsRadio, bathroomsRadio, directionRadio } from "./constants";
import { formatNumber } from "../utils";

function SqFtLabel() {
  return (
    <div>
      Feet<sup>2</sup>
    </div>
  );
}

function ModelInputComponent() {
  // State
  const sqft = useSelector((state) => state.app.sqft);
  const bedrooms = useSelector((state) => state.app.bedrooms);
  const bathrooms = useSelector((state) => state.app.bathrooms);
  const isBrick = useSelector((state) => state.app.isBrick);
  const direction = useSelector((state) => state.app.neighborhood);
  const dispatch = useDispatch();

  function onSqFtChange(value) {
    dispatch(setSqft(value));
  }

  function onBedroomsChange(e) {
    dispatch(setBedrooms(e.target.value));
  }

  function onBathroomsChange(e) {
    dispatch(setBathrooms(e.target.value));
  }

  function onBrickChange(value) {
    dispatch(setIsBrick(value));
  }

  function onDirectionChange(e) {
    dispatch(setNeighborhood(e.target.value));
  }

  return (
    <div>
      <Text message="House Square Feet" />
      <Spacer space={0.5} />
      <InputNumber
        addonAfter={<SqFtLabel />}
        formatter={formatNumber}
        value={sqft}
        min={1450}
        onChange={onSqFtChange}
      />
      <Spacer space={2} />
      <Text message="Bedrooms" />
      <Spacer space={0.5} />
      <Radio.Group onChange={onBedroomsChange} value={bedrooms}>
        {bedroomsRadio.map((radio) => (
          <Radio key={radio.value} value={radio.value}>
            {radio.label}
          </Radio>
        ))}
      </Radio.Group>
      <Spacer space={2} />
      <Text message="Bathrooms" />
      <Spacer space={0.5} />
      <Radio.Group onChange={onBathroomsChange} value={bathrooms}>
        {bathroomsRadio.map((radio) => (
          <Radio key={radio.value} value={radio.value}>
            {radio.label}
          </Radio>
        ))}
      </Radio.Group>
      <Spacer space={2} />
      <Text message="Brick House" />
      <Spacer space={0.5} />
      <Switch checked={isBrick} onChange={onBrickChange} />
      <Spacer space={2} />
      <Text message="Neighborhood" />
      <Spacer space={0.5} />
      <Radio.Group onChange={onDirectionChange} value={direction}>
        {directionRadio.map((radio) => (
          <Radio.Button key={radio.value} value={radio.value}>
            {radio.label}
          </Radio.Button>
        ))}
      </Radio.Group>
      <Spacer space={2} />
    </div>
  );
}

export default ModelInputComponent;
