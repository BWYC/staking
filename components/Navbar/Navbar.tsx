import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/favicon.png"
              width={60}
              height={50}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/stake2" className={styles.link}>
              Stake Cards
            </Link>
            <Link href="/stake" className={styles.link}>
              Stake Whales
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="light" btnTitle="Connect Wallet" style={{background: "sky-blue", color: "white", border: "solid", borderColor: "orange"}} />
          </div>
          <Link href="https://boredwhalesyachtclub.org">
          <Image
                className={styles.profileImage}
                src="/user.png"
                width={42}
                height={42}
                alt="Profile"
              />
          </Link>
        
        </div>
      </nav>
    </div>
  );
}