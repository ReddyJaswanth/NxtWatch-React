import styled from 'styled-components'

export const VideosLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const SavedBanerCont = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const BannerHeading = styled.h1`
  color: ${props => props.headingColor};
  margin-left: 10px;
`
export const SavedTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedVideoList = styled.ul`
  background-color: ${props => props.bgColor};
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-left: 0px;
  min-height: 90vh;
`