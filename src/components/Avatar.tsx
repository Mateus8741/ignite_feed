import styles from "./Avatar.module.css";

interface Props {
  nick: string;
  hasBorder?: boolean;
}

export function Avatar({ nick, hasBorder = true }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={`https://github.com/${nick}.png`}
    />
  );
}
