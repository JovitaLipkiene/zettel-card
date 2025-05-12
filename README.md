# @jovita-li/zettelkasten-card

The `ZettelCard` component is a reusable React component designed for creating Zettelkasten-style cards. It provides customizable headers, footers, and menus, allowing developers to create rich, interactive card-based UIs.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Components](#components)
- [Styling](#styling)
- [Usage](#usage)
- [Props](#props)
- [Licenses](#licenses)
- [Changelog](#changelog)

## Installation

```bash
npm install @jovita-li/zettelkasten-card
```

Ensure you have the following peer dependencies installed:

**React**: ^17.0.1 or higher  
**React-DOM**: ^17.0.1 or higher

## Features

**Customizable Header**: Add custom styles and children to the card header.  
**Customizable Footer**: Add custom styles and children to the card footer.  
**Interactive Menu**: Include menu items with visibility toggling.  
**Flexible Content**: Pass any React nodes as the main content of the card.  
**Styling Support**: Apply custom styles to the container, header, content, and footer.

## Components

`ZettelCard`  
The main component for creating Zettelkasten-style cards. It supports customizable headers, footers, menus, and flexible content. You can use it to create interactive card-based UIs.

`ZettelCardHeader`  
The header component for the card. It supports custom styles and additional children.

`ZettelCardFooter`  
The footer component for the card. It supports custom styles and additional children.

`ZettelCardMenu`  
The menu component for the card. It supports visibility toggling and custom menu items.

## Styling

You can customize the appearance of the ZettelCard component using the following props:

`cardContainerStyle`: Styles for the outer container.  
`headerStyle`: Styles for the header.  
`contentStyle`: Styles for the content area.  
`footerStyle`: Styles for the footer.

## Usage

Here is an example of how to use the `ZettelCard` component:

```
import React from "react";
import { ZettelCard } from "@jovita-li/zettelkasten-card";
import {
  TfiPencilAlt,
  TfiPencil,
  TfiPinAlt,
  TfiTrash,
  TfiSave,
  TfiLayoutMediaRightAlt,
} from "react-icons/tfi";
import "./App.css";

function App() {
  const headerChildren: React.ReactNode[] = [
    <span style={{ marginRight: "10px" }}>
      <TfiPencilAlt />
      <span style={{ marginLeft: "5px" }}>5</span>
    </span>,
    <span>
      <TfiLayoutMediaRightAlt />
      <span style={{ marginLeft: "5px" }}>2</span>
    </span>,
  ];

  return (
    <>
      <ZettelCard
        uniqueId="215487521325485"
        title="Reasons to learn React"
        cardContainerStyle={{ maxWidth: "500px" }}
        cardHeaderChildren={headerChildren}
        cardMenuChildren={[
          <TfiPencil />,
          <TfiSave />,
          <TfiPinAlt />,
          <TfiTrash />,
        ]}
        cardFooterChildren={[
          <hr />,
          <div>Note source: book "How to program with React"</div>,
        ]}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pharetra tortor sed diam tristique, et interdum tortor malesuada.
            Maecenas congue dolor eget aliquet tempus.
          </p>
        </div>
      </ZettelCard>
    </>
  );
}

export default App;
```

![alt text](image.png)

![alt text](image-1.png)

## Props

### `ZettelCardProps`

| Prop Name            | Type                    | Description                                            |
| -------------------- | ----------------------- | ------------------------------------------------------ |
| `uniqueId`           | `string`                | A unique identifier for the card.                      |
| `title`              | `string`                | The title displayed in the card header.                |
| `cardContainerStyle` | `React.CSSProperties`   | Custom styles for the card container.                  |
| `headerStyle`        | `React.CSSProperties`   | Custom styles for the card header.                     |
| `contentStyle`       | `React.CSSProperties`   | Custom styles for the card content area.               |
| `footerStyle`        | `React.CSSProperties`   | Custom styles for the card footer.                     |
| `children`           | `React.ReactNode`       | The main content of the card.                          |
| `cardHeaderChildren` | `React.ReactNode[]`     | Additional elements to render in the card header.      |
| `cardFooterChildren` | `React.ReactNode[]`     | Additional elements to render in the card footer.      |
| `cardMenuChildren`   | `React.ReactNode[]`     | Elements to render in the card menu.                   |
| `cardHeaderProps`    | `ZettelCardHeaderProps` | Additional props for the `ZettelCardHeader` component. |
| `cardFooterProps`    | `ZettelCardFooterProps` | Additional props for the `ZettelCardFooter` component. |
| `cardMenuProps`      | `ZettelCardMenuProps`   | Additional props for the `ZettelCardMenu` component.   |

## Licenses

All files on the Zettel Card GitHub repository are subject to the MIT license. Please read the License file at the root of the project.

## Changelog

We use [GitHub Releases](https://github.com/JovitaLipkiene/zettel-card/releases) to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes on the [releases page](https://github.com/JovitaLipkiene/zettel-card/blob/main/CHANGELOG.md).
