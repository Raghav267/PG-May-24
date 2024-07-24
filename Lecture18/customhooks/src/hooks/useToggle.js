import { useState } from "react"

const useToogle = (iniTailValue = false) => {
    const [value, setValue] = useState(iniTailValue)

    const toggle = () => {
        setValue(!value);
    }
    return [value, toggle];
}

export default useToogle;