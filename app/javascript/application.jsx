import React from "react";
import { createRoot } from "react-dom/client";

const Application = () => <div>this is the app</div>;

createRoot(document.getElementById("application-root")).render(<Application />);
