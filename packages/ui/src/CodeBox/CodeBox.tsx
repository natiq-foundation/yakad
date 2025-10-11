import { forwardRef } from "react";
import classNames from "classnames";
import { Symbol } from "@yakad/symbols";
import { Button, Card } from "..";
import styles from "./CodeBox.module.css";

export interface CodeBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    copyButton?: boolean;
    children?: React.ReactNode;
}

export const CodeBox = forwardRef<HTMLDivElement, CodeBoxProps>(
    function CodeBox({ copyButton, className, children, ...restProps }, ref) {
        const joinedClassNames = classNames(
            { fullWidthOnParentDemand: true },
            styles.ZZZZZZZZZZ,
            className
        );

        return (
            <Card ref={ref} {...restProps} className={joinedClassNames}>
                <pre>{children}</pre>
                {copyButton && <Button icon={<Symbol icon="copy_all" />} />}
            </Card>
        );
    }
);
