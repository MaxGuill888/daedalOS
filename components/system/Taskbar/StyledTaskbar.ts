import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const TASKBAR_Z_INDEX = 100000;

const StyledTaskbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  border-top: 1px solid hsl(0 0% 100% / 8%);
  box-shadow: 0 -10px 30px hsl(0 0% 0% / 18%);
  bottom: 0;
  contain: size layout;
  height: ${TASKBAR_HEIGHT}px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
  z-index: ${TASKBAR_Z_INDEX};

  &::before {
    background: linear-gradient(
      90deg,
      hsl(0 0% 100% / 4%),
      transparent 35%,
      hsl(0 0% 100% / 3%)
    );
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  &::after {
    backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
    content: "";
    display: block;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: -${TASKBAR_Z_INDEX};
  }
`;

export default StyledTaskbar;
