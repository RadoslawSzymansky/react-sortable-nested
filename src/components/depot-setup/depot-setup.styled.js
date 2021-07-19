import styled from "styled-components";

export const StyledDepotWrapper = styled.div`
  margin-left: 15px;
  padding: 15px 15px 15px 35px;
  border: 1px solid #000;
  background: #e5e5e5;
`;

export const StyledBlock = styled.div`
  position: relative;
  margin-bottom: 10px;
  background: #e5e5e5;
  border: 1px solid rgba(33, 33, 33, 0.86);

  &::before {
    position: absolute;
    top: 50%;
    right: 100%;
    display: inline-block;
    width: 19px;
    height: 1px;
    background: #212121;
    content: "";
  }
`;

export const StyledBlockWrapper = styled(StyledBlock)`
  padding: 20px 0 20px 20px;
  margin-left: 30px;
  cursor: move;

  &:after {
    position: absolute;
    display: block;
    width: 1px;
    height: calc(100% + 15px);
    content: "";
    background-color: black;
    bottom: 28px;
    right: calc(100% + 19px);
  }

  &:first-child {
    &:after {
      height: calc(100% - 40px);
    }
  }
  &:not(first-child) {
    &:after {
      height: calc(100% + 35px);
      bottom: 29px;
      background-color: black;
    }
  }
`;

export const StyledParentWrapper = styled(StyledBlock)`
    width: calc(100% - 20px);
    padding: 20px;
    left: -20px;

    &::before {
      ${ ({main}) => main ? 'display: none' : '' }
    }

    &:last-child {
      &:after {
        position: absolute;
        display: block;
        width: 1px;
        height: calc(100% + 30px);
        content: "";
        background-color: black;
        bottom: -37.5px;
        right: calc(100% - 12px);
      }
    };
`;

export const StyledGroup = styled.div`
    position: relative;
    padding-left: 50px;

    &:last-child > div:first-child {
      &:after {
        position: absolute;
        display: block;
        width: 1px;
        height: calc(100% + 30px);
        content: "";
        background-color: black;
        bottom: 29px;
        right: calc(100% + 19px);
      }
    };

    &:not(:first-child) > div:first-child {
      &:after {
        position: absolute;
        display: block;
        width: 1px;
        height: calc(100% + 35px);
        content: "";
        background-color: black;
        bottom: 29px;
        right: calc(100% + 19px);
      }
    };

    &:not(:last-child) > div:not(:first-child) {
      &:after {
        position: absolute;
        display: block;
        width: 1px;
        height: calc(100% + 30px);
        content: "";
        background-color: black;
        bottom: -37.5px;
        right: calc(100% - 12px);
      }
    };

    &:first-child > div:first-child {
      &:after {
        position: absolute;
        display: block;
        width: 1px;
        height: calc(100% - 40px);
        content: "";
        background-color: black;
        bottom: 29px;
        right: calc(100% + 19px);
      }
    };

`;
