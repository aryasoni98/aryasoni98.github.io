import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Projects.style'
import * as Icon from 'react-feather'

interface Project {
  title: string
  description: string
  tags: string
  link: string
  github: string
}

const AboutComponent: React.FC = () => {
  const Projects: Project[] = [
    {
      title: 'AI Interview',
      description: 'AI that asks questions on the basis of a code which the aspirant has written, asked from a diverse pack of frequently asked coding questions. ',
      tags: 'React | Pyhton | AI | ML | Flask | OpenCV',
      link: 'https://github.com/aryasoni98/AI-Interview',
      github: 'aryasoni98/AI-Interview',
    },
  ]

  return (
    <S.ProjectsContainer>
      <ScrollAnimation animateIn="animate__bounceInRight" animateOnce={true}>
        <S.ProjectsHeader>Other Things I've Built...</S.ProjectsHeader>
      </ScrollAnimation>
      <S.ProjectsGrid>
        {Projects.map((project, index) => (
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <S.ProjectBox key={index}>
              <S.ProjectTopContainer>
                <S.ProjectHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F4F4F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <S.ProjectLinks>
                    <S.ProjectLink
                      href={`https://${project.link}`}
                      target="_blank"
                    >
                      <Icon.Paperclip />
                    </S.ProjectLink>
                    <S.ProjectLink
                      href={`https://github.com/${project.github}`}
                      target="_blank"
                    >
                      <Icon.GitHub />
                    </S.ProjectLink>
                  </S.ProjectLinks>
                </S.ProjectHeader>
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                <S.ProjectDescription>
                  {project.description}
                </S.ProjectDescription>
              </S.ProjectTopContainer>
              {project.tags}
            </S.ProjectBox>
          </ScrollAnimation>
        ))}
      </S.ProjectsGrid>
    </S.ProjectsContainer>
  )
}

export default AboutComponent
