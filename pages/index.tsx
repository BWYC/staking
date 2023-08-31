import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
	<Image alt="logo" width={300} height={100} src="./logo/public/logo.png" />
      {/* Top Section */}
      <h1 className={styles.h1}>BoredWhalesYachtClub MINTING AND STAKING</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
		 onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image style={{marginTop: "5%"}} src="/icons/drop.png" alt="drop" width={90} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Mint a Whale NFT and stake it to earn $WHLS per day under controlled staking.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.png" alt="token" width={80} height={70} style={{marginTop: "5%"}} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
           Staking of #BWYC is free for all whales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
