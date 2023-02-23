import React from "react";
import githubLogo from "./icon/github_logo.png";
import linkedInLogo from "./icon/linkedIn_logo.png";
import "./Navigation.css";

export default function Footer() {
    return (
      <div className="footer-div grid-footer">
            <span id="developer_ls">Developers: </span>
            <div className="footer-individual-div">

        <div className='left_box'>
          <span>Nan Guo</span>
        </div>
        <div className='right_box'>
        <a id="linkedin_icon"
          style={{ height: "25px" }}
          href="https://www.linkedin.com/in/nan-guo-a7762325a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInLogo}
            alt="linkedin"
            style={{ height: "20px" }}
          ></img>
          </a>
        <a
          style={{ height: "24px" }}
          href="https://github.com/Alicenanguo"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i
            className="fa-brands fa-github"
            style={{
              fontSize: "20px",
              background: "white",
              borderRadius: "2px",

            }}
            ></i>
          </a>
          </div>

            </div>
        </div>
         );
        }
