import * as React from "react";
import {
  ZettelCardHeader,
  ZettelCardMenu,
  ZettelCardHeaderProps,
  ZettelCardMenuProps,
} from "./components";
import "./ZettelCard.css";

export interface ZettelCardProps {
  uniqueId: string;
  title?: string;
  cardContainerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  cardHeaderChildren?: React.ReactNode[];
  cardMenuChildren?: React.ReactNode[];
  cardHeaderProps?: ZettelCardHeaderProps;
  cardMenuProps?: ZettelCardMenuProps;
}

export const ZettelCard: React.FC<ZettelCardProps> = (props) => {
  const {
    uniqueId,
    title,
    cardContainerStyle,
    children,
    cardHeaderChildren,
    contentStyle,
    cardMenuChildren,
    cardHeaderProps,
    cardMenuProps,
  } = props;

  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className="zettelCardContainer" style={cardContainerStyle}>
      <div style={{ position: "relative" }}>
        <ZettelCardHeader
          uniqueId={uniqueId}
          title={title}
          {...cardHeaderProps}
        >
          {cardHeaderChildren && (
            <span className="zettelCardHeaderChildrenContainer">
              {cardHeaderChildren.map((el, index) => (
                <span key={index}>{el}</span>
              ))}
            </span>
          )}
        </ZettelCardHeader>
        <span className="zettelCardMenuButton" onClick={toggleMenuVisibility}>
          ...
        </span>
      </div>
      <div className="zettelCardContent" style={contentStyle}>
        {children}
      </div>
      <ZettelCardMenu isVisible={isMenuVisible} {...cardMenuProps}>
        {cardMenuChildren && (
          <>
            {cardMenuChildren.map((el, index) => (
              <div key={index}>{el}</div>
            ))}
          </>
        )}
      </ZettelCardMenu>
    </div>
  );
};
