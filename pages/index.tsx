import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <Image alt="logo" width={300} height={100} src="/icons/logo.png" />
        {/* Top Section */}
        <h1 className={styles.h1} style={{ fontFamily: "courier" }}>
          Bored Whales Yacht Club STAKING🐋
        </h1>
        <p style={{ fontStyle: "italic" }}>
          Staking Earns your $WHLS rewards and locks Whale NFT until minting
          event ends!
        </p>
        <div className={styles.nftBoxGrid}>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/stake`)}
          >
            {/* Mint a new NFT */}
            <Image
              src="/icons/drop.png"
              alt="drop"
              width={150}
              height={250}
              style={{
                borderRadius: "8px",
                marginTop: "5%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "orange",
              }}
            />
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
            <Image
              src="/icons/token.png"
              alt="token"
              width={150}
              height={250}
              style={{
                borderRadius: "8px",
                marginTop: "5%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
              }}
            />
            <h2 className={styles.selectBoxTitle}>Stake Your WhaleCards</h2>
            <p className={styles.selectBoxDescription}>
              WhaleCards are only unique to 1 address and staking them earns you
              more tokens but minting is expensive.
            </p>
          </div>

          <div className={styles.optionSelectBox} role="button">
            {/* Staking an NFT */}
            <h1
              style={{
                color: "white",
                fontFamily: "courier",
                fontSize: "28px",
                fontWeight: "bolder",
                border: "0px",
              }}
            >
              <a
                style={{
                  color: "white",
                  fontFamily: "courier",
                  fontSize: "28px",
                  fontWeight: "bolder",
                  border: "0px",
                }}
                href="https://app.youngparrotnft.com/core/launchpads/bwyc"
              >
                {" "}
                MINT NEW #BWYC{" "}
              </a>
            </h1>
            <p className={styles.selectBoxDescription}>
              10,000 Whale NFT can be minted on YoungParrot NFT Marketplace
              Price: 0.750 CORE at a fair price for everyone.
            </p>
          </div>

          <div className={styles.optionSelectBox} role="button">
            {/* Staking an NFT */}
            <h2 className={styles.selectBoxTitle}>
              <a
                href="https://boredwhalesyachtclub.org/#mint"
                style={{
                  color: "white",
                  fontFamily: "courier",
                  fontSize: "28px",
                  fontWeight: "bolder",
                  border: "0px",
                }}
              >
                MINT NEW WHALECARD
              </a>
            </h2>
            <p className={styles.selectBoxDescription}>
              Whalecards have an unlimited supply but are burnable. 1000 Cards
              will be used to cross-chains, Card holders can stake to earn the
              utility token at higher rates or trade on{" "}
              <a
                href="https://marketplace.boredwhalesyachtclub.org"
                style={{
                  color: "white",
                  fontFamily: "courier",
                  fontSize: "16px",
                  fontWeight: "bolder",
                  border: "0px",
                }}
              >
                Whalecard Marketplace
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
