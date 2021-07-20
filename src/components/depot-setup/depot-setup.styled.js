import styled from "styled-components";

const commonAfter = `
  &:after {
    position: absolute;
    display: block;
    width: 1px;
    content: "";
    background-color: black;
  }
`;

const lineHeight = {
  sm: 'calc(100% + 15px)',
  md: 'calc(100% + 30px)',
  minusMd: 'calc(100% - 30px)',
  xl: 'calc(100% + 45px)',
}

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
  padding: 14px 0 14px 20px;
  margin-left: 30px;
  cursor: move;

  ${commonAfter};

  &:after {
    height: ${lineHeight.sm};
    bottom: 28px;
    right: calc(100% + 19px);
  }

  &:first-child {
    &:after {
      height: ${lineHeight.minusMd};
    }
  }
  &:not(first-child) {
    &:after {
      height: ${lineHeight.md};
      bottom: 22px;
    }
  }
`;

export const StyledParentWrapper = styled(StyledBlock)`
    width: calc(100% - 20px);
    padding: 14px 20px;
    left: -20px;

    &::before {
      ${ ({main}) => main ? 'display: none' : '' }
    }

    &:last-child {
      ${commonAfter};
      &:after {
        height: ${lineHeight.md};
        bottom: -35px;
        right: calc(100% - 12px);
      }
    };
`;

export const StyledGroup = styled.div`
    position: relative;
    padding-left: 50px;

    &:last-child > div:first-child {
      &:after {
        ${commonAfter};
        height: ${lineHeight.md};
        bottom: 29px;
        right: calc(100% + 19px);
      }
    };

    &:not(:first-child) > div:first-child {
      ${commonAfter};
      &:after {
        height: ${lineHeight.md};
        bottom: 22px;
        right: calc(100% + 19px);
      }
    };

    &:not(:last-child) > div:not(:first-child) {
      ${commonAfter};
      &:after {

        height: ${lineHeight.sm};
        bottom: -35px;
        right: calc(100% - 12px);
      }
    };

    &:first-child > div:first-child {
      ${commonAfter};
      &:after {
        height: ${lineHeight.minusMd};
        bottom: 22px;
        right: calc(100% + 19px);
      }
    };
`;
