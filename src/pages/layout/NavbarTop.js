import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  // Container,
  // Row,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  // Input,
} from "reactstrap";

const NavbarTop = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [scrolling, setScrolling] = useState(false);
  const onScroll = () => {
    if (window.scrollY >= 72) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", onScroll);
  return (
    <>
      <body
        className={scrolling ? "position-relative scroll" : "position-relative"}
      >
        <header className="fixed-top page-header">
          <Navbar className="scroll" id="navbar" dark expand="lg">
            <NavbarBrand className="ml-3">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Desa Tirtomulyo
              </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="ml-lg-5" navbar>
                <NavItem>
                  <NavLink
                    to="/tentang"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Tentang Kami
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/eduwisata"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Eduwisata
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/pemesanan"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Pemesanan
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/gallery"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Galeri
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/panduanwisata"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Panduan Wisata
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/barang"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Produk Desa
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    to="/konten"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Konten
                  </NavLink>
                </NavItem> */}

                {/* <div className="text-white ml-auto">
                <a className="mr-2">
                  <i class="fas fa-phone"></i>
                  <div className="d-none d-xl-inline">082174398682</div>
                </a>
                <a>
                  <i className="fas fa-envelope"></i>
                  <div className="d-none d-xl-inline">
                    rickyrivaldo98@gmail.com
                  </div>
                </a>
              </div> */}
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    to="/register"
                    className="text-white nav-link p-2 ml-auto disabled"
                  >
                    082174398682
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/register"
                    className="text-white nav-link p-2 ml-auto disabled"
                  >
                    desatirtomulyo@gmail.com
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </body>
    </>
  );
};

export default NavbarTop;
