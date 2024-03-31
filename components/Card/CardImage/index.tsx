import Image from "next/image";
import defaultImage from "@/public/images/card-default.png";
import star from "@/public/images/folder/star.svg";
import { Link } from "../../../types";
import styles from "./CardImage.module.css";

interface Props {
  items: Link;
  isZoomedIn: boolean;
}

export const CardImage = ({ items, isZoomedIn }: Props) => {
  const { imageSource, image_source } = items;
  const imageSourceValue = imageSource || image_source;
  const className = isZoomedIn
    ? `${styles.cardImage} ${styles.cardImageZoomIn}`
    : styles.cardImage;

  const backgroundImageStyle = {
    backgroundImage: `url(${imageSourceValue || defaultImage.src})`,
  };

  return (
    <div className={styles.cardImageContainer}>
      <div style={backgroundImageStyle} className={className} />
      <Image className={styles.starImg} src={star} alt="likeButton" />
    </div>
  );
};
