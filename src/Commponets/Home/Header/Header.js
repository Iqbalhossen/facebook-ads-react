import React, { useContext } from 'react';
import { Button, Dropdown,  Menu, Navbar } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';



const Header = () => {
  const { authUser} = useContext(AuthContext);
    return (
        <div className=" flex bg-amber-500 w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Navbar>
          <Navbar.Start>
            <Dropdown>
              <Button color="ghost" tabIndex={0} className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </Button>
              <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                <Dropdown.Item>Item 1</Dropdown.Item>
                <li tabIndex={0}>
                  <Link className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <Dropdown.Item>Item 3</Dropdown.Item>
                <Dropdown.Item>Login</Dropdown.Item>
                <Dropdown.Item>Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link className="btn btn-ghost normal-case text-xl" to="/">daisyUI</Link>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="p-0">
              <Menu.Item>
                <Link>Item 1</Link>
              </Menu.Item>
              <Menu.Item tabIndex={0}>
                <Link >
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <Menu className="p-2 bg-base-100">
                  <Menu.Item>
                    <Link>Submenu 1</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link>Submenu 2</Link>
                  </Menu.Item>
                </Menu>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Blog">Blog</Link>
                { authUser?.data?._id ? "" :<Link to="/login">Login</Link> }

                { authUser?.data?._id ? "" :<Link to="/register">Register</Link> }
                
                
              </Menu.Item>
            </Menu>
          </Navbar.Center>
          <Navbar.End>
          { authUser?.data?._id ? <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
              </div>
            </Button>
            <Dropdown.Menu className="w-52 menu-compact">
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> :"" }
         
          </Navbar.End>
        </Navbar>
      </div>
    );
};

export default Header;