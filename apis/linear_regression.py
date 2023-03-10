import numpy as np
import pickle
import os

MODEL_PATH = 'models/sklearn_hp1.pickle'
MIN_SQFT = 1450
MAX_SQFT = 2590
BEDROOMS_MAP = {
    '2': 0,
    '4': 1,
    '3': 2,
    '5': 3,
}
BATHROOMS_MAP = {
    '2': 0,
    '3': 1,
    '4': 2,
}
NEIGHBORHOOD_MAP = {
    'East': 0,
    'North': 1,
    'West': 2,
}
MIN_PRICE = 69100
MAX_PRICE = 211200


def load_model():
    models_dir = os.path.abspath(os.path.join(
        os.path.dirname(__file__), '..', 'models'))
    with open(os.path.join(models_dir, 'sklearn_hp1.pickle'), 'rb') as f:
        model = pickle.load(f)
    return model


def relu(x):
    return np.maximum(0, x)


def re_process(sqft, bedrooms, bathrooms, is_brick, neighborhood):
    _sqft = relu((int(sqft) - MIN_SQFT) / (MAX_SQFT - MIN_SQFT))
    _bedrooms = BEDROOMS_MAP[bedrooms]
    _bathrooms = BATHROOMS_MAP[bathrooms]
    _is_brick = 1 if is_brick == 'true' else 0
    _neighborhood = NEIGHBORHOOD_MAP[neighborhood]
    return [_sqft, _bedrooms, _bathrooms, _is_brick, _neighborhood]


def predict(x: list):
    _x = np.array([x])

    model = load_model()
    _pred = model.predict(_x)

    pred = _pred[0] * (MAX_PRICE - MIN_PRICE) + MIN_PRICE

    return pred
