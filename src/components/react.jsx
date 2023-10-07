import React from "react";

export default function ReactApp() {
  return (
    <div className="react-content">
      <div className="react-body">
        <div className="react-head">
          <a href="https://react.dev"> 
            <img src="images/react.svg" className="react"></img>
          </a>
          <div className="react-text">
            <h1 className="react-header">Standalone React TS</h1>
            <p className="react-pgraph">
              <span className="react-title">
                Make your life simple and organize  with{" "}
              </span>
              <img src="images/react.svg" className="react-img"></img>
              <span className="react-js"> React Js.</span>
            </p>
            <p className="react-title">
              esbuild Version. supports Codespace
            </p>
          </div>
          <a href="https://esbuild.github.io/">
            <img src="images/esbuild.png" className="esbuild"></img>
          </a>
        </div>
        <div className="footer">
          <p className="version">Version 1.0.6</p>
          <a
            href="https://github.com/features/codespaces/"
            className="git"
          >
            {" "}
            <img
              src="images/github.png"
              className="github"
            /> Codespaces{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
