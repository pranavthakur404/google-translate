import styles from "../component_css/Header.module.css";
import Container from "./Container";
import { FaLanguage } from "react-icons/fa6";

function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <nav>
          <FaLanguage className={styles.icon} />
          <h1>Google Translate</h1>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
