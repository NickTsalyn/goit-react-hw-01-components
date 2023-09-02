import { Photo, Wrapper } from "./Description.styled"
import PropTypes from 'prop-types'


export const Description = ({user: {avatar, username, tag, location}}) => {
    return (
        <Wrapper>
    <Photo src={avatar} alt={username}/>
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </Wrapper>
    )
}


Description.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string
}
