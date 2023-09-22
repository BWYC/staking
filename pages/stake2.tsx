import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard1 from "../components/NFTCard1";
import {
  contractAddress2,
  stakingContractAddress1,
  tokenContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Stake2: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    contractAddress2,
    "nft-drop",
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token",
  );
  const { contract, isLoading } = useContract(stakingContractAddress1);

  const { data: ownedNFTs } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress1,
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress1, true);
    }
    await contract?.call("stake", [[id]]);
  }
  if (isLoading) {
    return (
      <div
        style={{
          margin: "100%",
          fontFamily: "monospace",
          fontSize: "25px",
          width: "100%",
        }}
      >
        PLEASE WAIT! THE OCEAN🌊 IS LOADING...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image alt="logo" width={300} height={100} src="/icons/logo.png" />
      <h1 className={styles.h1}>
        Stake your Whalecards NFT to Earn the Utility Token(WHLS).
      </h1>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      {!address ? (
        <ConnectWallet />
      ) : (
        <>
          <h2>$WHLS BALANCES</h2>
          <div className={styles.tokenGrid}>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Rewards Earned</h3>
              <p className={styles.tokenValue}>
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Current Balance</h3>
              <p className={styles.tokenValue}>
                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
              </p>
            </div>
          </div>

          <Web3Button
            style={{
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "Orange",
              color: "Orange",
            }}
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingContractAddress1}
          >
            Claim Rewards
          </Web3Button>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2>Your Staked Whalecard🎴</h2>
          <div className={styles.nftBoxGrid}>
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard1
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2>Your Unstaked Whalecard🎴</h2>
          <div className={styles.nftBoxGrid}>
            {ownedNFTs?.map((nft) => (
              <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  style={{
                    marginLeft: "2%",
                    borderRadius: "16px",
                    border: "solid",
                    borderColor: "black",
                    borderWidth: "1px",
                    width: "auto",
                  }}
                  metadata={nft.metadata}
                  className={styles.nftMedia}
                />
                <h3>{nft.metadata.name}</h3>
                <Web3Button
               
                  style={{
                    backgroundColor: "black",
                    borderStyle: "solid",
                    borderColor: "Orange",
                    color: "Orange",
                  }}
                  contractAddress={stakingContractAddress1}
                  action={() => stakeNft(nft.metadata.id)}
                >
                  Stake
                </Web3Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Stake2;
