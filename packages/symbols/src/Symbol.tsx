import MadinehOutlined from "./symbols/MadinehOutlined";
import MadinehFilled from "./symbols/MadinehFilled";
import MakkahOutlined from "./symbols/MakkahOutlined";
import MakkahFilled from "./symbols/MakkahFilled";
import { IconSizeKey, resolveIconSize } from "./sizes";

const Icons = {
    MadinehOutlined: {
        outlined: MadinehOutlined,
        filled: MadinehFilled,
    },
    MakkahOutlined: {
        outlined: MakkahOutlined,
        filled: MakkahFilled,
    },
};

interface SymbolProps extends React.SVGProps<SVGSVGElement> {
    icon: keyof typeof Icons;
    filled?: boolean;
    size?: number | IconSizeKey;
}

export default function Symbol({
    icon,
    filled = false,
    size,
    ...restProps
}: SymbolProps) {
    const SelectedIcon = filled ? Icons[icon].filled : Icons[icon].outlined;

    const sizeProps = size
        ? {
            width: resolveIconSize(size),
            height: resolveIconSize(size),
        }
        : {};

    return <SelectedIcon {...sizeProps} {...restProps} />;
}