import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import lodashUniqBy from 'lodash/uniqBy';

import * as actions from '../store/actions';
import * as helpers from '../helpers';

import { getWidgets } from '../store/selectors/widgets';

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 56px;
`;

const WidgetStyled = styled.li`
  position: relative;
  padding: 16px 32px;
  border: 1px solid #eee;
  border-radius: 8px;
  width: 240px;
  margin: 4px;
  display: ${(props) => (props.hide ? 'none' : 'block')};
`;

const BlockWithTemperature = styled.div`
  display: flex;
  align-items: center;
`;

const TemperatureStyled = styled.span`
  font-size: 24px;
`;

const RemoveButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
`;

export const Dashboard = () => {
  const widgets = useSelector(getWidgets);
  const dispatch = useDispatch();

  return (
    <ListStyled>
      {lodashUniqBy(widgets, 'label').map(
        ({ label, temperature, wind, pressure, weather, id, hide = false }) => {
          const [iconCode] = weather;
          return (
            <WidgetStyled key={id} hide={hide}>
              <RemoveButton
                onClick={() => dispatch(actions.removeForecastWidget(id))}
              >
                X
              </RemoveButton>
              <h2>{label}</h2>
              <BlockWithTemperature>
                <span>
                  <img src={helpers.makeIconUrl(iconCode.icon)} alt={label} />
                </span>
                <TemperatureStyled>{`${temperature} ℃`}</TemperatureStyled>
              </BlockWithTemperature>
              <p>{`${wind.speed} м/c`}</p>
              <p>{`${pressure} мм рт ст`}</p>
            </WidgetStyled>
          );
        }
      )}
    </ListStyled>
  );
};
