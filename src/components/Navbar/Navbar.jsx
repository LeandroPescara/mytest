import platonico from "../../assets/platonico.png";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <Flex>
            <Box p="2">
              <Link to={"/"}>
                <img className="imgplatonico" src={platonico} alt="" />
              </Link>
            </Box>
            <Box p="2" className="categorias">
              <Menu>
                <MenuButton className="buttonMenu">Categorias</MenuButton>
                <MenuList>
                  <MenuItem className="categoria">
                    <Link to={`/categoria/${"PROTEINA"}`}>Proteina</Link>
                  </MenuItem>
                  <MenuItem className="categoria">
                    <Link to={`/categoria/${"GUARNICIONES"}`}>Guarnicones</Link>
                  </MenuItem>
                  <MenuItem className="categoria">
                    <Link to={`/categoria/${"BEBIDAS"}`}>Bebidas</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton className="buttonMenu">Nosotros</MenuButton>
                <MenuList>
                  <MenuItem className="categoria">Seccion</MenuItem>
                  <MenuItem className="categoria">Seccion</MenuItem>
                  <MenuItem className="categoria">Seccion</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton className="buttonMenu">Contactanos</MenuButton>
                <MenuList>
                  <MenuItem className="categoria">Seccion</MenuItem>
                  <MenuItem className="categoria">Seccion</MenuItem>
                  <MenuItem className="categoria">Seccion</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          <p className="cantP">Cantidad de productos:</p>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
