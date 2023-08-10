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

  const destinationNavItems = [
    { text: "Moon", href: "/destination/Moon" },
    { text: "Mars", href: "/destination/Mars" },
    { text: "Europa", href: "/destination/Europa" },
    { text: "Titan", href: "/destination/Titan" },
  ];

  // We only take the first element, but there should only be one.
  const currentData = data.destinations.filter((object) => object.name == params.slug)[0];

  return (
    <body className={styles.body}>
      <div className={homeStyles.mainNavBarBackground}>
        <NavBar data={homeNavItems} className={homeStyles.mainNavBar}></NavBar>
      </div>

      <div className={styles.subtitle}>
        <span className={clsx(styles.subtitleNumber, barlowCondensed.className)}>01</span>
        <span className={clsx(styles.subtitleText, barlowCondensed.className)}>
          Pick your destination
        </span>
      </div>

      <Image
        src={currentData.images.png}
        alt={`Image of ${currentData.name}`}
        className={styles.image}
        width={445}
        height={445}
      ></Image>

      <NavBar data={destinationNavItems} className={styles.destinationNavBar}></NavBar>

      <h1 className={clsx(styles.destinationName, bellefair.className)}>{currentData.name}</h1>
      <p className={clsx(styles.destinationDescription, barlow.className)}>
        {currentData.description}
      </p>

      <p className={clsx(styles.avgDistanceHeader, barlowCondensed.className)}>Avg. Distance</p>
      <p className={clsx(styles.avgDistance, bellefair.className)}>{currentData.distance}</p>

      <p className={clsx(styles.travelTimeHeader, barlowCondensed.className)}>Est. Travel Time</p>
      <p className={clsx(styles.travelTime, bellefair.className)}>{currentData.travel}</p>
    </body>
  );
}
