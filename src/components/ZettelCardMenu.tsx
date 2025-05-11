import * as React from "react";

export interface ZettelCardMenuProps {
  isVisible: boolean;
  menuStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ZettelCardMenu: React.FC<ZettelCardMenuProps> = (props) => {
  const { isVisible, menuStyle, children } = props;
  return (
    <div
      className="zettelCardMenu"
      style={{ ...menuStyle, visibility: isVisible ? "visible" : "hidden" }}
    >
      {children && <>{children}</>}
    </div>
  );
};
