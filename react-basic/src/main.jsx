import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ======== 메인 ========
// 페이지 컴포넌트
// import { App } from "./App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//   <App />
//   // </StrictMode>
// );

// ======== 과제 or 스터디 용========
import App from "./days/day26/App.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
