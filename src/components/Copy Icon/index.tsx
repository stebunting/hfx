import React from 'react';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyToClipboard from 'react-copy-to-clipboard';

import s from './style.module.less';

interface Props {
  text: string,
}

function CopyIcon(props: Props): React.ReactElement {
  const { text } = props;

  return (
    <CopyToClipboard text={text}>
      <button
        className={s.icon}
        type="button"
      >
        <FontAwesomeIcon
          icon={faCopy}
        />
      </button>
    </CopyToClipboard>
  );
}

export default CopyIcon;
