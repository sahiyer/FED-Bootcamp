import clsx from "clsx";
import styles from "./home.module.scss";
import NavBar from "@/components/NavBar";
import { barlow, barlowCondensed, bellefair, comicNeue } from "@/utils/fonts";

export default function Home() {
  const navItems = [
    { text: "00 Home", href: "/" },
    { text: "01 Destination", href: "/destination/Moon" },
    { text: "02 Crew", href: "/" },
    { text: "03 Technology", href: "/" },
  ];

  return (
    <body className={styles.body}>
      <div className={styles.mainNavBarBackground}>
        <NavBar data={navItems} className={styles.mainNavBar}></NavBar>
      </div>

      <h2 className={clsx(comicNeue.className, styles.subtitle)}>So, you want to travel to</h2>

      <h1 className={clsx(comicNeue.className, styles.title)}>Space</h1>

      <p className={clsx(barlow.className, styles.paragraph)}>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>

      <div className={styles.exploreOval}>
        <p className={clsx(bellefair.className, styles.explore)}>Explore</p>
      </div>
    </body>
  );
}
