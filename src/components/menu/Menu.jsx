import { Link } from 'react-router-dom';
import { MENU_INFO } from '../../constants/menu-info';

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          {MENU_INFO.map(menu => (
            <li key={menu.id}>
              <Link to={menu.link}> {menu.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Menu;
