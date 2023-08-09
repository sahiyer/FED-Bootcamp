"use client";

import NavBar from "@/components/NavBar";
import { barlow, barlowCondensed, bellefair } from "@/utils/fonts";
import clsx from "clsx";
import homeStyles from "../../home.module.scss";
import styles from "./destination.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import data from "@/utils/data.json";

export default function Destination({ params }: { params: { slug: string } }) {
  const router = useRouter();

  if (
    params.slug != "Moon" &&
    params.slug != "Mars" &&
    params.slug != "Europa" &&
    params.slug != "Titan"
  ) {
    router.push("/404");
    return;
  }

  const homeNavItems = [
    { text: "00 Home", href: "/" },
    { text: "01 Destination", href: "/destination/Moon" },
    { text: "02 Crew", href: "/" },
    { text: "03 Technology", href: "/" },
  ];

  // We only take the first element, but there should only be one.
  const currentData = data.destinations.filter((object) => object.name == params.slug)[0];

  return (
    <body className={styles.body}>
      <div className={homeStyles.mainNavBarBackground}>
        <NavBar data={homeNavItems} className={homeStyles.mainNavBar}></NavBar>
      </div>

      <div className={styles.subtitle}>
        <span className={clsx(styles.subtitleNumber, barlowCondensed)}>01</span>
        <span className={clsx(styles.subtitleText, barlowCondensed)}>Pick your destination</span>
      </div>

      <Image
        src={currentData.images.png}
        alt={`Image of ${currentData.name}`}
        className={styles.image}
        width={445}
        height={445}
      ></Image>
    </body>
  );
}
