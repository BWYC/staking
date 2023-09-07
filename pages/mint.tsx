import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"


import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
	<Image alt="logo" width={300} height={100} src="/icons/logo.png" />
      <h1 className={styles.h1} style={{fontFamily: "courier"}}>Mint A WHALECARD. PRICE 0.6 CORE<br></br> LIMIT: 50/WALLET!</h1>
      <Link href={"https://boredwhalesyachtclub.org"} style={{color: "orange"}}>Without Whalecards, You Can not access Whaleverse(boredwhalesyachtclub.org)An Epic World for Whales.</Link> 
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
	  style={{backgroundColor: "black", borderStyle: "solid", borderColor: "Orange", color: "Orange"}}
        theme="dark"
        contractAddress={"0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E"}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Claim An NFT
      </Web3Button>
    </div>
  );
};

export default Mint;
