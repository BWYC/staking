import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
	<img alt="logo" width={300} height={100} src="https://bafybeihej6esxlwjiqcifrkcj3tkkn3xterxtr5tnynot6zsct4hwrwedi.ipfs.nftstorage.link/JKH.png" />
      {/* Top Section */}
      <h1 className={styles.h1} style={{fontFamily: "courier"}}>Bored Whales Yacht Club STAKING🐋</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
		 onClick={() => router.push(`/stake`)}
        >
          {/* Mint a new NFT */}
          <Image style={{marginTop: "5%"}} src="/icons/drop.png" alt="drop" width={150} height={250} style={{borderRadius: "8px", marginTop: "5%", borderStyle: "solid", borderWidth: "1px", borderColor: "orange"}} />
          <h2 className={styles.selectBoxTitle}>Stake Your Whale NFT</h2>
          <p className={styles.selectBoxDescription}>
            Stake #BoredWhale NFT to earn 1 $WHLS/DAY
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake2`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.png" alt="token" width={150} height={250} style={{borderRadius: "8px", marginTop: "5%", borderStyle: "solid", borderWidth: "1px", borderColor: "white"}} />
          <h2 className={styles.selectBoxTitle}>Stake Your WhaleCards</h2>
          <p className={styles.selectBoxDescription}>
           WhaleCards are only unique to 1 address and staking them earns you more tokens but minting is expensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
