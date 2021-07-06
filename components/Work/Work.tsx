import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Work.style'
import * as Icon from 'react-feather'

import AInterview from './../../public/AInterview.png'
import BiometricAuth from './../../public/Biometric_Auth.png'
import ToDoList from './../../public/ToDoList.png'
import MaskDetection from './../../public/MaskDetection.png'
import Face from './../../public/3DFace.png'
import TextScan from './../../public/TextScan.png'

interface Projects {
  title: string
  image: any
  description: string
  skills: string
  github: string
  link: string
}

const AboutComponent: React.FC = () => {
  const Projects: Projects[] = [
    {
      title: 'Face Mask Detection',
      image: MaskDetection,
      description: 'Face Mask Detection system built with OpenCV, Keras/TensorFlow using Deep Learning and Computer Vision concepts in order to detect face masks in static images as well as in real-time video streams.',
      skills: 'Neural Networks | Keras | Tensorflow | OpenCV',
      github: 'Face-Mask-Detection',
      link: 'https://github.com/aryasoni98/Face-Mask-Detection',
    },
    {
      title: '3D Face Movements',
      image: Face,
      description: 'Controlling 3D character Face Movements using OpenCV and Python 🐍 It a python script to control a 3d character face movements by capturing user face landmarks.',
      skills: 'Blender | Python | OpenCV',
      github: '3D-Face-Movements',
      link: 'https://github.com/aryasoni98/3D-Face-Movements',
    },
    {
      title: 'Biometric Auth',
      image: BiometricAuth,
      description: 'Integrating Face ID Login Page UI With Firebase Authentication Using SwiftUI - SwiftUI 2.',
      skills: 'Swift | SwiftUI | Ruby',
      github: 'Biometric-Auth',
      link: 'https://github.com/aryasoni98/Biometric-Auth',
    },
    {
      title: 'ToDo List',
      image: ToDoList,
      description: 'Full source code for the SwiftUI Todo List. The project uses MVVM architecture and UserDefaults to persist data.',
      skills: 'Swift | SwiftUI',
      github: 'ToDo-List',
      link: 'https://github.com/aryasoni98/ToDo-List',
    },
    {
      title: 'Text Scan',
      image: TextScan,
      description: 'A scene text recognition demo app using Vision framework and tesseract.',
      skills: 'Swift | SwiftUI',
      github: 'TextScan',
      link: 'https://github.com/aryasoni98/TextScan',
    },
  ]

  return (
    <S.WorkContainer id="projects">
      <ScrollAnimation animateIn="animate__bounceInRight" animateOnce={true}>
        <S.WorkHeader>My Work</S.WorkHeader>
      </ScrollAnimation>
      {Projects.map((project, index) => (
        <S.ProjectBox key={index}>
          <S.InfoContainer>
            <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
              <S.ProjectTech>{project.skills}</S.ProjectTech>
            </ScrollAnimation>
            <S.ButtonsContainer>
              <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
                <S.ViewProjectButton
                  href={`https://${project.link}`}
                  target="_blank"
                >
                  View Project
                </S.ViewProjectButton>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
                <S.GitHubButton
                  href={`https://github.com/aryasoni98/${project.github}`}
                  target="_blank"
                >
                  <Icon.GitHub />
                </S.GitHubButton>
              </ScrollAnimation>
            </S.ButtonsContainer>
          </S.InfoContainer>
          <S.ProjectGraphic>
            <img
              src={project.image}
              alt="Project Graphic"
              width={350}
              height={700}
            />
          </S.ProjectGraphic>
        </S.ProjectBox>
      ))}
    </S.WorkContainer>
  )
}

export default AboutComponent
