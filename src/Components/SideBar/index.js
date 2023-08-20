import {CDBSidebar, CDBSidebarContent, CDBSidebarMenuItem} from "cdbreact";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflow: "scroll initial",
            }}
        >
            <CDBSidebar
                textColor="black"
                backgroundColor="lightgray"
                breakpoint={1200}
            >
                <CDBSidebarContent className="sidebar-content">
                    <NavLink
                        to="/profile"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="user" style={{color: "black"}}>
                            User Information
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/addaddress"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="map" style={{color: "black"}}>
                            Addresses
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/addpayment"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="wallet" style={{color: "black"}}>
                            Payments
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/reviews"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="pen" style={{color: "black"}}>
                            Reviews
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/likes"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="heart" style={{color: "black"}}>
                            Wishlist
                        </CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};
export default SideBar;
