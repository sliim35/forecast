import 'rc-slider/assets/index.css';

import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'rc-slider';

import * as actions from '../store/actions';
import * as selectors from '../store/selectors';

const FilterStyled = styled(Slider)`
  width: 100%;
`;

const marks = {
  '-10': '-10°C',
  '-5': '-5°C',
  '0': '0°C',
  '5': '5°C',
  '10': '10°C'
};

export const Filter = () => {
  const widgets = useSelector(selectors.getWidgets);
  const dispatch = useDispatch();

  const onChangeHandler = (value) => {
    if (widgets.length) {
      dispatch(actions.filterForecastWidgets(value));
    }
  };

  return (
    <>
      <h2>Где сейчас теплее, чем</h2>
      <FilterStyled
        min={-10}
        max={10}
        marks={marks}
        dots
        step={5}
        onChange={onChangeHandler}
        defaultValue={-10}
      />
    </>
  );
};
