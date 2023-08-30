import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
  import styles from "../styles/Home.module.css";
  
  
  interface NFTCardProps {
    tokenId: number;
  }
  
  const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
    const { contract } = useContract(nftDropContractAddress, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div className={styles.nftBox}>
            {nft.metadata && (
              <ThirdwebNftMedia
			  style={{
			  marginLeft: "-28%",
			  }}
                metadata={nft.metadata}
                className={styles.nftMedia}
              />
            )}
            <h3>{nft.metadata.name}</h3>
            <Web3Button
		 style={{backgroundColor: "black", borderStyle: "solid", borderColor: "Orange", color: "Orange"}}
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress}
            >
              Withdraw
            </Web3Button>
          </div>
        )}
      </>
    );
  };
  export default NFTCard;