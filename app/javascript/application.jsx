import React from "react";
import { createRoot } from "react-dom/client";

import { Outdoorsy } from './outdoorsy';

const Application = () => <Outdoorsy />;

createRoot(document.getElementById("application-root")).render(<Application />);
