import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import '../index.css';

const SubMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div className={open ? 'menu-item open' : 'menu-item'}>
        <div className='menu-title'>
          <span>{item.title}</span>
          <AiIcons.AiOutlineDown
            className='toggle-btn'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='menu-content'>
          {item.children.map((child, index) => (
            <SubMenu key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || '#'} className='menu-item plain'>
        {item.title}
      </Link>
    );
  }
};

export default SubMenu;