import styled from 'styled-components'
import { ProjectCardProps } from '@/interfaces/components/ProjectCard'
import { colors } from '@/constants/color'

export default styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px;
  row-gap: 15px;
  column-gap: 15px;
`

export const ProjectCardStyled = styled.div<ProjectCardProps>`
  position: relative;
  .project-card {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(ProjectCardProps) => ProjectCardProps.thumbnail});
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 0;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      margin-top: -10px;
      .badge {
        visibility: visible;
        opacity: 1;
      }
    }
    .badge {
      visibility: hidden;
      opacity: 0;
      width: 100%;
      height: 100%;
      color: white;
      // background-color: rgba(219, 158, 68, 0.9);
      position: relative;
      border-radius: 15px;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after {
        content: '';
        background-image: linear-gradient(315deg, ${colors.tertiaryOrange} 0%, ${colors.secondaryOrange} 74%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.9;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        border-radius: 15px;
      }
      .text {
        line-height: 1.5;
        white-space: normal;
        text-align: center;
        padding: 10px;
        font-size: 20px;
        z-index: 2;
      }
    }
  }
`
