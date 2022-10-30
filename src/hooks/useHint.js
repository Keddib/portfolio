import { useContext } from "react";
import hintLabel from "src/context/hintLabel";

export default function useHint() {
  return useContext(hintLabel);
}
