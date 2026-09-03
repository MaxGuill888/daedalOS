import styled from "styled-components";

type StyledTitlebarProps = {
  $foreground: boolean;
};

const StyledTitlebar = styled.header<StyledTitlebarProps>`
  background: ${({ $foreground }) =>
    $foreground
      ? "linear-gradient(180deg, hsl(0 0% 18% / 98%), hsl(0 0% 12% / 98%))"
      : "linear-gradient(180deg, hsl(0 0% 15% / 98%), hsl(0 0% 10% / 98%))"};
  border-bottom: 1px solid hsl(0 0% 100% / 10%);
  display: flex;
  height: ${({ theme }) => theme.sizes.titleBar.height}px;
  min-height: ${({ theme }) => theme.sizes.titleBar.height}px;
  position: relative;
  top: 0;
  z-index: 2;

  > button {
    align-items: center;
    color: ${({ $foreground, theme }) =>
      $foreground
        ? theme.colors.titleBar.text
        : theme.colors.titleBar.textInactive};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      pointer-events: none;
      position: relative;
      top: -1px;

      picture {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin-right: ${({ theme }) => theme.sizes.titleBar.iconMarginRight};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }

      img,
      picture {
        pointer-events: all;
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border: 0;
      border-radius: 10px;
      display: flex;
      height: calc(100% - 10px);
      margin: 5px 3px;
      place-content: center;
      place-items: center;
      transition: background-color 150ms ease, transform 150ms ease;
      width: ${({ theme }) => `calc(${theme.sizes.titleBar.buttonWidth} - 6px)`};

      svg {
        fill: ${({ $foreground, theme }) =>
          $foreground
            ? theme.colors.titleBar.text
            : theme.colors.titleBar.buttonInactive};
        margin: 0 1px 2px 0;
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
          margin-right: 0;
        }
      }

      &:hover {
        background-color: hsl(0 0% 100% / 12%);

        svg {
          fill: ${({ theme }) => theme.colors.titleBar.text};
        }

        &.close {
          background-color: hsl(0 72% 48% / 90%);
          transition: background-color 0.25s ease;
        }
      }

      &:active {
        background-color: hsl(0 0% 100% / 20%);
        transform: scale(0.94);

        &.close {
          background-color: hsl(0 72% 36% / 95%);
        }
      }

      &:disabled {
        svg {
          fill: ${({ $foreground }) =>
            $foreground ? "rgb(50, 50, 50)" : "rgb(60, 60, 60)"};
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`;

export default StyledTitlebar;
