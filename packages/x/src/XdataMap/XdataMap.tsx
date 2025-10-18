import { Table, Thead, Tbody, Tr, Th, Td } from "@yakad/ui";

type RowDataItem = string | number | boolean | object | null | undefined;
interface RowData {
    [key: string]: RowDataItem;
}

export interface XdataMapProps
    extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "children"> {
    data: RowData[];
    ref?: React.Ref<HTMLTableElement>;
}

export function XdataMap({ data, ref, ...restProps }: XdataMapProps) {
    const dataKeys: string[] = Object.keys(data[0]);

    return (
        <Table ref={ref} {...restProps}>
            <Thead>
                <Tr>
                    {dataKeys?.map((key) => (
                        <Th key={key}>{key.replace("_", " ").toUpperCase()}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data.map((row, index) => (
                    <Tr key={index}>
                        {dataKeys?.map((cell) => (
                            <Td key={cell}>
                                {typeof row[cell] === "object" ? (
                                    <pre>
                                        {JSON.stringify(row[cell], null, 2)}
                                    </pre>
                                ) : (
                                    (row[cell] as Exclude<RowDataItem, object>)
                                )}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
