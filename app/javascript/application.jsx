import React from "react";
import { createRoot } from "react-dom/client";

import logoUrl from '../assets/images/outdoorsy-logo.png';

const Application = () => <div>this is the app <img src={logoUrl} /></div>;

createRoot(document.getElementById("application-root")).render(<Application />);
