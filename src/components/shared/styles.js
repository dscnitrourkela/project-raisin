import styled from 'styled-components';

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #525252;
  border: #525252 solid 1px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    height: 1px;
    overflow: hidden;
    width: 130px;
    background-image: repeating-linear-gradient(
        0deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      ),
      repeating-linear-gradient(
        90deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      ),
      repeating-linear-gradient(
        180deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      ),
      repeating-linear-gradient(
        270deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      );
    background-size:
      1px 100%,
      100% 1px,
      1px 100%,
      100% 1px;
    background-position:
      0 0,
      0 0,
      100% 0,
      0 100%;
    background-repeat: no-repeat;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    right: 0;
    transform: translate(50%, -50%);
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    height: 1px;
    overflow: hidden;
    width: 130px;
    background-image: repeating-linear-gradient(
        0deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      ),
      repeating-linear-gradient(
        90deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      ),
      repeating-linear-gradient(
        180deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      ),
      repeating-linear-gradient(
        270deg,
        #cfcece,
        #cfcece 4px,
        transparent 4px,
        transparent 15px,
        #cfcece 15px
      );
    background-size:
      1px 100%,
      100% 1px,
      1px 100%,
      100% 1px;
    background-position:
      0 0,
      0 0,
      100% 0,
      0 100%;
    background-repeat: no-repeat;
  }
`;
