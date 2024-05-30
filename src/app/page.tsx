import Image from "next/image";
import styles from "./page.module.css";
import AppLogo from "./components/AppLogo";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      {
        process.env.DB_PASSWORD === '1212312121' && <p>Password OK!</p>
      }
      <AppLogo title="Logo 1" />
      <AppLogo title="Logo 2" />
    </main>
  );
}
