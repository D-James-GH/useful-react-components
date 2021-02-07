import React from "react";

export interface INavbarContext {
  expanded: boolean;
}

const context = React.createContext<INavbarContext | null>(null);
context.displayName = "NavbarContext";

export default context;
