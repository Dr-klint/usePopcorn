// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./starRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This movie has {movieRating} rating</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating size="24" color="red" className="text" />
    <Test /> */}
    <App />
  </React.StrictMode>
);
