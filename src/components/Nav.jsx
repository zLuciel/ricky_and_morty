
import { Cabezera} from "./css/Nav";
import Search  from "./Search";
import { Hamburguesa } from "./Hamburguesa";
import ContainerNavLink from "./ContainerNavLink";
const Nav = () => { 
  return (
    <Cabezera>
      <div className="container-flex-header">

        {/*arriba esta la secion de amburgesa */}
       <Search/> <Hamburguesa/>
        {<ContainerNavLink mostrar={false}/>}
      </div>
    </Cabezera>
  );
};
export default Nav;
