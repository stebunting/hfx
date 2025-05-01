import React from "react";

import s from "./style.module.less";

interface Props {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function LocaleSelector(props: Props): React.ReactElement {
  return (
    <div className={s.localeSelector}>
      <select value={props.value} name="locale" onChange={props.handleChange}>
        <option value="sv-SE">Sweden</option>
        <option value="en-GB">UK</option>
      </select>
    </div>
  );
}

export default LocaleSelector;
