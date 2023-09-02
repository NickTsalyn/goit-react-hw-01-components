import { List, ListItem } from "./StatsList.styled"
import PropTypes from 'prop-types'

export const StatsList = ({user: {stats: {followers, views, likes}}}) => {
    return <List>
    <ListItem>
      <span>Followers</span>
      <span>{followers}</span>
    </ListItem>
    <ListItem>
      <span>Views</span>
      <span>{views}</span>
    </ListItem>
    <ListItem>
      <span>Likes</span>
      <span>{likes}</span>
    </ListItem>
  </List>
}

StatsList.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}