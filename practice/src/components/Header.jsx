import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header()
{
  const{Theme,setTheme}=useContext(ThemeContext);
  return(
    <div>
        <h2>Toggle Button</h2>
        <button onClick={()=>
        setTheme(Theme==="dark"?"light":"dark")
        }> click me</button>

    </div>
  )
}
export default Header;