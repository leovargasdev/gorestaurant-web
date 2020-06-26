import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    width: 140px;
    padding: 8px;
    border-radius: 4px;
    border: 0;
    text-align: center;
    font-size: 11px;
    font-weight: 500;

    transition: opacity 0.4s;
    opacity: 0;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
