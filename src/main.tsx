import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColorfulDiv from "./packages/ColorfulDiv";

const rootElement = document.getElementById("root");
const root = rootElement && createRoot(rootElement);

root?.render(
  <StrictMode>
    <ColorfulDiv
      value="[张三]去了一趟理塘，[李四]去了一趟丽江。"
      list={["张三", "李四"]}
    />
  </StrictMode>,
);
