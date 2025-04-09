import React from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "./style.module.less";

interface Props {
  text: string;
}

function CopyIcon(props: Props): React.ReactElement {
  const { text } = props;
  console.log(text);

  return (
    <button className={s.icon} type="button" aria-label="Copy">
      <FontAwesomeIcon icon={faCopy} />
    </button>
  );
}

export default CopyIcon;
