import { Outlet } from "react-router-dom";
import { Menu } from "./menu/Menu";
// import PropTypes from "prop-types";

export function Layout() {
    return (
    <div className="ui container">
        <Menu />

        <Outlet />
        {/* {children} */}
    </div>
  );
}

// Layout.propTypes = {
//     children: PropTypes.array,
// }
