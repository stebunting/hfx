import React, { useRef, useState } from "react";
import { faCopy, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "./style.module.less";

interface Props {
  text: string;
}

function CopyIcon(props: Props): React.ReactElement {
  const { text } = props;
  const [icon, setIcon] = useState(faCopy);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIcon(faCheck);
        ref.current && (ref.current.className = [s.icon, s.copied].join(" "));
        setTimeout(() => {
          setIcon(faCopy);
          ref.current && (ref.current.className = s.icon);
        }, 2000);
      })
      .catch(() => {
        setIcon(faXmark);
        ref.current && (ref.current.className = [s.icon, s.error].join(" "));
      });
  };

  return (
    <button
      ref={ref}
      className={s.icon}
      onClick={handleClick}
      type="button"
      aria-label="Copy"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default CopyIcon;
