import { Children, ReactElement } from "react";
import { Td, Tfoot, TfootProps, Tr } from "@yakad/ui";
import { XTrProps, XTfProps } from "./Xtrhdf";

export interface XTfootProps extends TfootProps {
    children: ReactElement<XTrProps>;
}

export function XTfoot({
    children,
    ref,
    ...restProps
}: XTfootProps & { ref?: React.Ref<HTMLTableSectionElement> }) {
    const ChildXTr: ReactElement<XTrProps> = children;

    const ChildsXTf = Children.toArray(ChildXTr.props.children);

    return (
        <Tfoot ref={ref} {...restProps}>
            <Tr {...ChildXTr.props}>
                {(ChildsXTf as ReactElement<XTfProps>[]).map(
                    (ChildXTf, index) => (
                        <Td key={index} {...ChildXTf.props}>
                            {ChildXTf.props.children}
                            {ChildXTf.props.children &&
                                ChildXTf.props.footFunc &&
                                " | "}
                            {ChildXTf.props.footFunc
                                ? ChildXTf.props.footFunc
                                : null}
                        </Td>
                    )
                )}
            </Tr>
        </Tfoot>
    );
}
