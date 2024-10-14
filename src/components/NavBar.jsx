import * as React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";

import {
  Dashboard,
  Menu,
  Home,
  ProfileCircle,
  SelectFace3d,
  Xmark,
} from "iconoir-react";




const LINKS = [
  {
    

    title: "Home",

    href: "/",
  },

  {
   

    title: "Product",

    href: "/product",
  },

  {
    

    title: "Sale",

    href: "/sale",
  },

  {
    

    title: "Dashboard",

    href: "/dashboard",
  },

  {
    
    title: "About",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 hover:text-primary"
          >
           

            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function NavbarDemo() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",

      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl">
      <div className="flex items-center">
        <Typography
          as="a"
          href="#"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          Material Tailwind
        </Typography>

        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />

        <div className="hidden lg:block">
          <NavList />
        </div>

        <Link to="/register">
          <Button size="sm" className="hidden lg:ml-72 lg: lg:inline-block">
            Sign Up
          </Button>
        </Link>

        <Link to="/login">
          <Button size="sm" className="hidden lg:ml-3 lg:inline-block  ">
            Sign In
          </Button>
        </Link>

        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />

        <Link to="/register">
          <Button isFullWidth size="sm" className="mt-4">
            Sign Up
          </Button>
        </Link>

        <Link to="/login">
          <Button isFullWidth size="sm" className="mt-4">
            Sign In
          </Button>
        </Link>
      </Collapse>
    </Navbar>
  );
}
