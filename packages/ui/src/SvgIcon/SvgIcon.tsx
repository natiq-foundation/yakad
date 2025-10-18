import classNames from "classnames";
import styles from "./SvgIcon.module.css";

export interface SvgIconProps extends React.HTMLAttributes<HTMLElement> {
    size?: number;
    children?: React.ReactNode;
}

export function SvgIcon({
         size, className, style, children,
        ref,
        ...restProps
    }: SvgIconProps & { ref?: React.Ref<HTMLDivElement> }) {
        const joinedClassNames = classNames(styles.svg, className!);

        const sizeStyle = size && { width: `${size}rem`, height: `${size}rem` };

        return (
            <div
                ref={ref}
                {...restProps}
                className={joinedClassNames}
                style={{
                    ...style,
                    ...sizeStyle,
                }}
            >
                {children}
            </div>
        );
    }
