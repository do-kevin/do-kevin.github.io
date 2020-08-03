import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const link = 'https://kevin-do.netlify.app';
const githubLink = 'https://github.com/do-kevin';

const Content = styled.div.attrs({
  className:
    'w-auto m-auto h-full text-center flex flex-col justify-center items-center break-word leading-tight p-3 box-border',
})``;

const Introduction = styled.p.attrs({
  className: 'w-auto text-3xl my-0',
})``;

const CallToAction = styled.p.attrs({
  className: 'w-auto text-xl my-0',
})``;

const PortfolioWebsiteBtn = styled.a.attrs({
  className:
    'bg-blue-500 hover:bg-blue-700 active:bg-blue-700 text-white font-bold py-2 px-3 rounded m-2 no-underline outline-none focus:shadow-outline focus:bg-blue-700',
})``;

const GithubButton = styled.a.attrs({
  className:
    'bg-gray-800 hover:bg-gray-700 active:bg-gray-700 text-white font-bold py-2 px-3 rounded my-2 no-underline outline-none focus:shadow-outline focus:bg-gray-700',
})``;

class Home extends Component {
  render() {
    return (
      <Content>
        <Introduction>Hello there, I'm Kevin Do</Introduction>
        <CallToAction>
          If you're looking for my portfolio website, it has moved to
        </CallToAction>
        <div className="flex">
          <GithubButton href={githubLink}>
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </GithubButton>
          <PortfolioWebsiteBtn href={link}>
            {link}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="ml-2 text-xl relative"
              style={{ top: 2 }}
            />
          </PortfolioWebsiteBtn>
        </div>
      </Content>
    );
  }
}

export default Home;
