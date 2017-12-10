import { rehydrate } from "glamor";

const withGlamor = WrappedComponent => {
  if (typeof window !== "undefined") {
    rehydrate(window.__NEXT_DATA__.ids);
  }

  return WrappedComponent;
};

export default withGlamor;
