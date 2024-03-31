import styles from "./Profile.module.css";

interface UserData {
  data: {
    email: string;
    image_source: string;
  }[];
}

interface Props {
  userData: UserData;
}

export const Profile = ({ userData }: Props) => {
  const { email, image_source } = userData?.data[0] || {};
  return (
    <div className={styles.Profile}>
      <img
        className={styles.ProfileImage}
        src={image_source}
        alt="프로필 이미지"
      />
      <span className={styles.ProfileEmail}>{email}</span>
    </div>
  );
};
