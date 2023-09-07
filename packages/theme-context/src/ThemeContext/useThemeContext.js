import { useContext } from "react";

import * as BaseContext from "./BaseContext";

// console.log('BaseContext', BaseContext);
const useThemeContext = () => useContext(BaseContext);
// console.log('useThemeContext', useThemeContext);

export default useThemeContext;
