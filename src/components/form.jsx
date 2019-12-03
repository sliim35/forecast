import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import AsyncSelect from 'react-select/async';

import * as helpers from '../helpers';
import * as actions from '../store/actions';
import * as api from '../api';

const FormStyled = styled.form`
  display: flex;
  padding: 16px 32px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SelectStyled = styled(AsyncSelect)`
  width: 50%;
  padding: 8px;
`;

const SubmitButtonStyled = styled.button`
  display: block;
  border: 1px solid #2684ff;
  border-radius: 4px;
  color: #2684ff;
  padding: 8px;
  height: 36px;
`;

export const Form = () => {
  const [foreacast, setForecast] = useState('');
  const dispatch = useDispatch();

  const filterOptions = ({
    wind,
    main: { pressure, temp } = {},
    weather,
    name,
    id
  } = {}) => [
    {
      value: name,
      label: name,
      temperature: Math.round(temp),
      wind,
      pressure: helpers.convertPressureValue(pressure),
      weather,
      id
    }
  ];

  const promiseOptions = async (inputValue) => {
    try {
      const { data, status } = await api.fetchForecastByCity(inputValue);

      if (status === 404 || status === 400) {
        return;
      }

      if (data) {
        return filterOptions(data);
      }
    } catch (error) {
      console.error(`Something went wrong with error: ${error}`);
    }
  };

  return (
    <FormStyled
      onSubmit={(e) => {
        e.preventDefault();

        if (foreacast) {
          dispatch(actions.addForecastWidget(foreacast));
        }
      }}
    >
      <SelectStyled
        loadOptions={promiseOptions}
        onChange={(value) => setForecast(value)}
      />
      <SubmitButtonStyled type='submit'>+</SubmitButtonStyled>
    </FormStyled>
  );
};
