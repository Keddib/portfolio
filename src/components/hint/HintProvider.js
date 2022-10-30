import { useState } from "react";
import HintLabel from "src/context/hintLabel";


export default function HintProvider({ children }) {

  const [hintRef, setHintRef] = useState(null);
  const [hintText, setHintText] = useState("");

  let Hint = {
    hintRef,
    hintText,
    setHintText,
    setHintRef
  };

  return <HintLabel.Provider value={Hint}>{children}</HintLabel.Provider>;
};
