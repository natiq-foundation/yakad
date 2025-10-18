import { Container, ContainerProps, Row } from "@yakad/ui";

export function XScrollContainer({
    style,
    children,
    ref,
    ...restProps
}: ContainerProps & { ref?: React.Ref<HTMLDivElement> }) {
    return (
        <Container ref={ref} style={{ padding: 0, ...style }} {...restProps}>
            <Row overflow="scroll" style={{ padding: "2rem", gap: "2rem" }}>
                {children}
            </Row>
        </Container>
    );
}
