import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 bg-transparent text-[#fff] text-center flex flex-col items-center justify-between p-8 gap-10">
      <div>
        <Link to="/">
          <h1 className="text-5xl mb-10 hover:underline">Green Harmony</h1>
        </Link>
        <a
          className="text-2xl "
          href="https://www.linkedin.com/in/letodiani-roma/"
        >
          Built By <span className="underline">Roman Letodiani</span>
        </a>
      </div>
      <div>
        <ul className="flex gap-5">
          <a href="https://www.facebook.com/LetodianiRoma/" target="__blank">
            <li className="border-2 rounded-full p-3 transition hover:transform hover:scale-[1.2] hover:bg-[#fff] hover:text-[#000]">
              <FacebookIcon />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/letodiani-roma/"
            target="__blank"
          >
            <li className="border-2 rounded-full p-3 transition hover:transform hover:scale-[1.2] hover:bg-[#fff] hover:text-[#000]">
              <LinkedInIcon />
            </li>
          </a>
          <a href="https://github.com/RomaLetodiani" target="__blank">
            <li className="border-2 rounded-full p-3 transition hover:transform hover:scale-[1.2] hover:bg-[#fff] hover:text-[#000]">
              <GitHubIcon />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
