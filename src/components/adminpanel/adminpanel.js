// import React, { Fragment } from "react";
// import { BsFillPeopleFill, BsPeopleCircle } from "react-icons/bs";
// import { FaBan } from "react-icons/fa";
// import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
// import { InnerNavHeader } from "../../components/controls/innerHeader/InnerNavHeader";
// import { InnerNav } from "../../components/controls/innerNav/InnerNav";
// import { InnerNavBody } from "../../components/innerNavBody/InnerNavBody";
// import { OuterSectionWrapper } from "../../components/section-wrapper/OuterSectionWrapper";
// import { settingRoutes } from "../../routes";
// import "./settings.scss";

// const settings = [
//     {
//         section: "General",
//         menus: [
//             {
//                 title: "Agents",
//                 path: "agents",
//                 icon: <BsFillPeopleFill />,
//             },
//             {
//                 title: "My Profile",
//                 path: "me",
//                 icon: <BsPeopleCircle />,
//             },
//             {
//                 title: "Departments",
//                 path: "departments",
//                 icon: <BsFillPeopleFill />,
//             },
//             {
//                 title: "Ban list",
//                 path: "bannedvisitors",
//                 icon: <FaBan />,
//             },
//         ],
//     },
// ];

// const SettingsSectionTitle = ({ children }) => {
//     return <div className="settings-section-title">{children}</div>;
// };

// const SettingMenuItem = ({ to, children }) => (
//     <NavLink to={to} className="setting-menu-item" activeClassName="active">
//         {children}
//     </NavLink>
// );

// const AdminPanel = () => {
//     let { path } = useRouteMatch();

//     return (
//         <OuterSectionWrapper>
//             <InnerNav className="visitors-nav">
//                 <InnerNavHeader>Settings</InnerNavHeader>
//                 <InnerNavBody>
//                     {settings.map((section) => {
//                         let menus = section.menus.map((menu, index) => (
//                             <SettingMenuItem
//                                 key={section.section + index}
//                                 to={`${path}/${menu.path}`}
//                             >
//                                 {menu.icon} {menu.title}{" "}
//                             </SettingMenuItem>
//                         ));

//                         return (
//                             <Fragment key={section.section}>
//                                 <SettingsSectionTitle>{section.section}</SettingsSectionTitle>
//                                 {menus}
//                             </Fragment>
//                         );
//                     })}
//                 </InnerNavBody>
//             </InnerNav>

//             <div className="settings-main-body">
//                 <Switch>
//                     {settingRoutes &&
//                         settingRoutes.routes.map((route, index) => (
//                             <Route
//                                 key={index}
//                                 path={`${settingRoutes.base}/${route.path}`}
//                                 name="agents management"
//                                 render={(props) => <route.component {...props} />}
//                             />
//                         ))}
//                 </Switch>
//             </div>
//         </OuterSectionWrapper>
//     );
// };

// export default AdminPanel;
