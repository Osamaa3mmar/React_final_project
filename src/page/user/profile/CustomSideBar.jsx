import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import style from './profile.module.css'
export default function CustomSideBar() {
  return (
    <div>
            <Sidebar className={style.side}>
  <Menu
    menuItemStyles={{
      button: {
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/user/profile/main"/>}> Documentation</MenuItem>
    <MenuItem component={<Link to="/user/profile/edit"/>}> Calendar</MenuItem>
    <MenuItem component={<Link to="/user/profile/orders"/>}> E-commerce</MenuItem>
  </Menu>
</Sidebar>
    </div>
  )
}
