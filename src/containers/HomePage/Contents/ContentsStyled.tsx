import styled from 'styled-components'
import { colors } from '@/constants/color'

export const PortFolioStyled = styled.div``

export const SkillsStyled = styled.div`
  .skill-container {
    width: 100%;
    // padding-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    overflow: hidden;
  }
  .skill-wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 15px;
    column-gap: 10px;
    justify-items: center;
    align-items: center;
    .proficient {
      width: 70px;
      height: 10px;
    }
  }

  .hover {
    .content {
      transform: rotateY(180deg);
      transition: transform 0.5s;
    }
  }
`

export const ExperienceStyled = styled.div`
  .experience-container {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    .experience-wrapper {
      .name {
        color: ${colors.primaryOrange};
      }
    }
  }
  .experience-card {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    width: 100%;
  }
`
