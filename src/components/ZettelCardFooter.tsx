import * as React from "react";

export interface ZettelCardFooterProps {
  footerStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ZettelCardFooter: React.FC<ZettelCardFooterProps> = (props) => {
  const { footerStyle, children } = props;

  return (
    <div className="zettelCardFooter" style={footerStyle}>
      {children && <>{children}</>}
    </div>
  );
};
