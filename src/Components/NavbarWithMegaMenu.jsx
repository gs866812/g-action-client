import React from "react";
import {  Navbar,  Collapse,  Typography,  Button,  IconButton,  List,  ListItem,  Menu,  MenuHandler,  MenuList,  MenuItem,} from "@material-tailwind/react";
import {  ChevronDownIcon,  Bars3Icon,  XMarkIcon,} from "@heroicons/react/24/outline";
import {  Bars4Icon,  GlobeAmericasIcon,  NewspaperIcon,  PhoneIcon,  RectangleGroupIcon,  SquaresPlusIcon,  SunIcon,  TagIcon,
  UserGroupIcon,} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
 
const navListMenuItems = 
    [
        { title: "Products", description: "Find the perfect solution for your needs.", icon: SquaresPlusIcon, link:"products"},
        { title: "About Us", description: "Meet and learn about our dedication", icon: UserGroupIcon, link: "about-Us"},
        { title: "Blog", description: "Find the perfect solution for your needs.", icon: Bars4Icon, link: "Blog"},
        { title: "Services", description: "Learn how we can help you achieve your goals.", icon: SunIcon, link: "services"},
        { title: "Support", description: "Reach out to us for assistance or inquiries", icon: GlobeAmericasIcon, link: "support"},
        { title: "Contact", description: "Find the perfect solution for your needs.", icon: PhoneIcon },
        { title: "News", description: "Read insightful articles, tips, and expert opinions.", icon: NewspaperIcon },
        { title: "Products", description: "Find the perfect solution for your needs.", icon: RectangleGroupIcon },
        { title: "Special Offers", description: "Explore limited-time deals and bundles", icon: TagIcon },
    ];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" href="/services" variant="small" className="font-medium lg:mx-3 ">
            <ListItem
              className={`flex items-center gap-2 pr-5 hover:bg-white rounded-none text-[18px] text-[#0C0C0C] hover:text-[#1AD1A5] lg:pb-2 px-1 lg:hover:border-b-[2px] hover:border-[#1AD1A5] hover:duration-1000 hover:transition-colors ${window.location.pathname === '/services' ? 'active' : ''}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Link to='/services' className={`hover:text-[#1AD1A5]`}>Services</Link>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                } text-[#1AD1A5]`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        {/* Dropdown menu container */}
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block mt-1"> 
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:gap-4">
      <Typography as="a" href="/" variant="small" className={`font-medium text-[#0C0C0C] ${window.location.pathname === '/' ? 'active' : ''}`}>
        <ListItem className="flex items-center gap-2 pr-5 hover:bg-white rounded-none text-[18px] hover:text-[#1AD1A5]     pb-2 px-1 hover:border-b-[2px] hover:border-[#1AD1A5] hover:duration-1000 hover:transition-colors">
            Home
        </ListItem>
      </Typography>

      <Typography as="a" href="/about" variant="small" className={`font-medium text-[#0C0C0C] ${window.location.pathname === '/about' ? 'active' : ''}`}>
        <ListItem className="flex items-center gap-2 pr-5 hover:bg-white rounded-none text-[18px] hover:text-[#1AD1A5]     pb-2 px-1 hover:border-b-[2px] hover:border-[#1AD1A5] hover:duration-1000 hover:transition-colors">
            About
        </ListItem>
      </Typography>

      <NavListMenu />

      <Typography
        as="a"
        href="/portfolio"
        variant="small"
        className={`font-medium text-[#0C0C0C] ${window.location.pathname === '/portfolio' ? 'active' : ''} `}
      >
        <ListItem className="flex items-center gap-2 pr-5 hover:bg-white rounded-none text-[18px] hover:text-[#1AD1A5] pb-2 px-1 hover:border-b-[2px] hover:border-[#1AD1A5] hover:duration-1000 hover:transition-colors">Portfolio</ListItem>
      </Typography>

      <Typography
        as="a"
        href="/pricing"
        variant="small"
        className={`font-medium text-[#0C0C0C] ${window.location.pathname === '/pricing' ? 'active' : ''} `}
      >
        <ListItem className="flex items-center gap-2 pr-5 hover:bg-white rounded-none text-[18px] hover:text-[#1AD1A5] pb-2 px-1 hover:border-b-[2px] hover:border-[#1AD1A5] hover:duration-1000 hover:transition-colors">Price</ListItem>
      </Typography>

      <Typography
        as="a"
        href="/contact"
        variant="small"
        className={`font-medium text-[#0C0C0C] ${window.location.pathname === '/contact' ? 'active' : ''} `}
      >
        <ListItem className="flex items-center gap-2 pr-5 hover:bg-white rounded-none text-[18px] hover:text-[#1AD1A5] pb-2 px-1 hover:border-b-[2px] hover:border-[#1AD1A5] hover:duration-1000 hover:transition-colors">Contact</ListItem>
      </Typography>
    </List>
  );
}
 
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className=" px-4 py-2 " fullWidth={true}>
      <div className="flex mx-auto max-w-screen-2xl items-center justify-between">
        <Link to='/' className="lg:w-[18%] w-[40%]"><img src={logo} alt="Graphics Action" /></Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}