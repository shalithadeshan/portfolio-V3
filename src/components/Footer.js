import { useState, useEffect } from "react";
const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });
  useEffect(() => {
    fetch("https://api.github.com/repos/shalithadeshan/portfolio-V3")
      .then((response) => response.json())

      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div>
      <div
        className="flex justify-center font-monospace mb-10 md:mb-0"
        style={{ cursor: "pointer" }}
      >
        <a href="https://github.com/shalithadeshan/portfolio-V3.git">
          <div>
            <p className="text-dark-color hover:text-secondary-color">
              Built by Shalitha Jayasekara
            </p>
            <div className="flex justify-center mb-20 md:mb-10 text-dark-color hover:text-secondary-color">
              <span>
                <i className="las la-star"></i>
                <span>{githubInfo.stars}</span>&nbsp;
              </span>
              <span>
                <i className="las la-code-branch"></i>
                <span>{githubInfo.forks}</span>&nbsp;
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
