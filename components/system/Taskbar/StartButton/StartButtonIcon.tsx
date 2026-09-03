import { memo } from "react";

const PI_ICON_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/System/Icons/pi-widget.png`;

const StartButtonIcon = memo(() => (
  <img
    alt=""
    src={PI_ICON_SRC}
  />
));

export default StartButtonIcon;
