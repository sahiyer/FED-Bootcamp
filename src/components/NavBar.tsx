import Link from "next/link";
import styles from "./NavBar.module.scss";
import { barlowCondensed } from "@/utils/fonts";
import clsx from "clsx";

export default function NavBar({
  data,
  className,
}: {
  data: { text: string; href: string }[];
  className: string;
}) {
  return (
    <>
      <ul className={clsx(className, styles.navBar)}>
        {data.map((value) => {
          return (
            <Link key={value.href} href={value.href} className={styles.navLink}>
              <li className={clsx(barlowCondensed.className, styles.navItem)}>{value.text}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
