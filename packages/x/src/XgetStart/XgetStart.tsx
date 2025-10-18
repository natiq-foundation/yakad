import classNames from "classnames";
import {
    GridContainer,
    GridItem,
    SvgIcon,
    Container,
    ContainerProps,
} from "@yakad/ui";
import styles from "./XgetStart.module.css";

export interface XgetStartProps extends ContainerProps {
    logo?: React.ReactNode;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

export function XgetStart({
    logo,
    size = "lg",
    className,
    children,
    ref,
    ...restProps
}: XgetStartProps) {
    const joinedClassNames = classNames(styles.xgetstart, className);

    return (
        <Container
            ref={ref}
            size={size}
            className={joinedClassNames}
            {...restProps}
        >
            <GridContainer gap={2}>
                <GridItem md={12} xl={5}>
                    <SvgIcon
                        style={{
                            width: "70vw",
                            maxWidth: "40rem",
                            margin: "auto",
                        }}
                    >
                        {logo}
                    </SvgIcon>
                </GridItem>
                <GridItem
                    md={12}
                    xl={7}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {children}
                </GridItem>
            </GridContainer>
        </Container>
    );
}
