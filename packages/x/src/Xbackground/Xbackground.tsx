import classNames from "classnames";
import styles from "./Xbackground.module.css";

export interface XbackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "dotted" | "strips";
    separator?: "shadowinside" | "shadowoutside";
    imageSrc?: string;
    fixed?: boolean;
    children?: React.ReactNode;
}

export function Xbackground({
    variant = "dotted",
    separator,
    imageSrc,
    fixed,
    className,
    style,
    children,
    ref,
    ...restProps
}: XbackgroundProps & { ref?: React.Ref<HTMLDivElement> }) {
    const joinedClassNames = classNames(
        styles.background,
        styles[variant],
        { [styles[separator as string]]: separator },
        { [styles.image]: imageSrc },
        { [styles.fixed]: fixed },
        className
    );

    const joinedStyles = imageSrc
        ? { ...style, backgroundImage: `url(${imageSrc})` }
        : style;

    return (
        <div
            ref={ref}
            {...restProps}
            className={joinedClassNames}
            style={joinedStyles}
        >
            {children}
        </div>
    );
}
