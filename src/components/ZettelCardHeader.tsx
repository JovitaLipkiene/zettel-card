import * as React from "react";

export interface ZettelCardHeaderProps {
  uniqueId: string;
  title: string;
  headerStyle?: React.CSSProperties;
  headerTitleStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ZettelCardHeader: React.FC<ZettelCardHeaderProps> = (props) => {
  const { uniqueId, title, headerStyle, headerTitleStyle, children } = props;
  return (
    <div className="zettelCardHeader" style={headerStyle}>
      <div>
        <span className="zettelCardHeaderUniqueId">{uniqueId}</span>
        {children && (
          <span className="zettelCardHeaderChildren">{children}</span>
        )}
      </div>
      <div>
        <span className="zettelCardHeaderTitle" style={headerTitleStyle}>
          {title}
        </span>
      </div>
    </div>
  );
};
