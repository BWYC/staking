import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
	<img width={300} height={100} src="https://bafybeihej6esxlwjiqcifrkcj3tkkn3xterxtr5tnynot6zsct4hwrwedi.ipfs.nftstorage.link/JKH.png" />
      {/* Top Section */}
      <h1 className={styles.h1}>BoredWhalesYachtClub MINTING AND STAKING</h1>
      <div className={styles.nftBoxGrid}>
        <a
          className={styles.optionSelectBox}
          role="button"
          href="/"
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.png" alt="drop" width={90} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Mint a Whale NFT and stake it to earn $WHLS per day under controlled staking.
          </p>
        </a>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.png" alt="token" width={80} height={80} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
            to stake your NFTs, and earn tokens from the <b>Token</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
