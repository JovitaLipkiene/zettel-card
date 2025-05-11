import * as React from "react";

export interface ZettelCardMenuProps {
  isVisible: boolean;
  menuStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ZettelCardMenu: React.FC<ZettelCardMenuProps> = (props) => {
  const { isVisible, menuStyle, children } = props;
  if (!isVisible) return null;

  return (
    <div className="zettelCardMenu" style={menuStyle}>
      {children && <>{children}</>}
    </div>
  );
};
