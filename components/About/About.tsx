import React from 'react'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './About.style'
import * as Icon from 'react-feather'

import computer from './../../public/computer.png'
import idCard from './../../public/1.png'
import video from './../../public/2.png'

const AboutComponent: React.FC = () => {
  const skills = [
    'Python',
    'JavaScript',
    'SwiftUI',
    'Docker',
    'React',
    'Node',
    'MongoDB',
    'TensorFlow',
    'Machine Learning',
    'Deep Learniing',
  ]

  return (
    <S.AboutContainer id="about">
      <S.InfoContainer>
        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce={true}>
          <S.AboutHeader>About Me</S.AboutHeader>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <S.AboutDescription>
            Hi! I'm Arya Soni, I have passion for inventing stuff, designing solutions and learning new things.
          </S.AboutDescription>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <S.AboutDescription>
            I am well versed in data structures and algorithms of Python and capable of designing and developing interactive and user-friendly iOS App.
            I like solving problems and creating solutions.
          </S.AboutDescription>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <S.AboutDescription>
          I am fascinated by Artificial Intelligence and the concept of Self-Driving cars and am in search of opportunities that provide more hands-on and practical experience in these areas.
          I am enthusiastic about breaking into fields I haven't ventured into so far and would love to be a part of any project that helps me develop.
          </S.AboutDescription>
        </ScrollAnimation>
        <S.SkillsContainer>
          {skills.map((skill, index) => (
            <ScrollAnimation
              animateIn="animate__flipInX"
              animateOnce={true}
              key={index}
            >
              <S.SkillBox>
                <Icon.ArrowRight style={{ marginRight: 5 }} />
                {skill}
              </S.SkillBox>
            </ScrollAnimation>
          ))}
        </S.SkillsContainer>
      </S.InfoContainer>
      <S.ImgBox style={{ width: 500, marginLeft: 700 }}>
        <img src={computer} alt="Computer" width={580} height={450} />
        <ParallaxProvider>
          <S.ImgBox style={{ marginLeft: 300 }}>
            <Parallax x={[-30, 30]}>
              <img src={video} alt="1" width={200} height={200} />
            </Parallax>
          </S.ImgBox>
          <S.ImgBox style={{ marginTop: 200 }}>
            <Parallax y={[-100, 100]}>
              <img src={idCard} alt="2" width={100} height={90} />
            </Parallax>
          </S.ImgBox>
        </ParallaxProvider>
      </S.ImgBox>
    </S.AboutContainer>
  )
}

export default AboutComponent
