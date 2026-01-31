import MadinehOutlined from "./symbols/MadinehOutlined";
import MadinehFilled from "./symbols/MadinehFilled";
import MakkahOutlined from "./symbols/MakkahOutlined";
import MakkahFilled from "./symbols/MakkahFilled";

const Icons = {
    "MadinehOutlined": {
        outlined: <MadinehOutlined />,
        filled: <MadinehFilled />
    },
    "MakkahOutlined": {
        outlined: <MakkahOutlined />,
        filled: <MakkahFilled />
    }
};

interface SymbolProps {
    icon: keyof typeof Icons;
    filled: boolean;
}

export default function Symbol({ icon, filled }: SymbolProps) {
    return filled ? Icons[icon].filled : Icons[icon].outlined;
}
