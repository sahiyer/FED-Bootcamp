import clsx from "clsx";
import styles from "./home.module.scss";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main>
      00 Home 01 Destination 02 Crew 03 Technology
      <h2 className={clsx(barlowCondensed.className, styles.subtitle)}>
        So, you want to travel to
      </h2>
      <h1 className={clsx(bellefair.className, styles.title)}>Space</h1>
      <p className={clsx(barlow.className, styles.paragraph)}>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
      <div className={styles.exploreOval}>
        <p className={clsx(bellefair.className, styles.explore)}>Explore</p>
      </div>
    </main>
  );
}
