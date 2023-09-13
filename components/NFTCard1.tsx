import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
import {
  contractAddress2,
  stakingContractAddress1,
} from "../consts/contractAddresses";
  import styles from "../styles/Home.module.css";
  
  
  interface NFTCardProps {
    tokenId: number;
  }
  
  const NFTCard1: FC<NFTCardProps> = ({ tokenId }) => {
    const { contract } = useContract(contractAddress2, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div className={styles.nftBox}>
            {nft.metadata && (
              <ThirdwebNftMedia
              style={{
                marginLeft: "2%",
                borderRadius: "16px",
                border: "solid",
                borderColor: "black",
                borderWidth: "1px",
                width: "auto"
                }}
                metadata={nft.metadata}
                className={styles.nftMedia}
              />
            )}
            <h3>{nft.metadata.name}</h3>
            <Web3Button
		 style={{backgroundColor: "black", borderStyle: "solid", borderColor: "Orange", color: "Orange"}}
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress1}
            >
              Withdraw
            </Web3Button>
          </div>
        )}
      </>
    );
  };
  export default NFTCard1;