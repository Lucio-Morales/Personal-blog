import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <main className={styles.mainContainer}>
      <nav className={styles.navBar}>
        <ul className={styles.navBarUl}>
          <li>
            <NavLink
              className={styles.navBarLink}
              style={({ isActive }) =>
                isActive ? { textDecoration: "underline" } : {}
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navBarLink}
              style={({ isActive }) =>
                isActive ? { textDecoration: "underline" } : {}
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navBarLink}
              to="/projects"
              style={({ isActive }) =>
                isActive ? { textDecoration: "underline" } : {}
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navBarLink}
              to="/contact"
              style={({ isActive }) =>
                isActive ? { textDecoration: "underline" } : {}
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
