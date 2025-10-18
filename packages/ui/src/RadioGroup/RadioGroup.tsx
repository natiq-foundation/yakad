"use client";

import { useState, Children } from "react";
import { RadioButton, RadioButtonProps } from "..";

type RadioButtonElement = React.ReactElement<RadioButtonProps>;
type ExcludedTypes = "defaultValue" | "children";
export interface RadioGroupProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, ExcludedTypes> {
    name: string;
    defaultValue?: string;
    children?: RadioButtonElement | RadioButtonElement[];
}

export function RadioGroup({
    name,
    defaultValue,
    className,
    children,
    ref,
    ...restProps
}: RadioGroupProps & { ref?: React.Ref<HTMLDivElement> }) {
        const [selectedValue, setSelectedValue] = useState<
            string | number | null
        >(defaultValue || null);

        const arrayChildren = Children.toArray(children);

        const renderChildrens = () =>
            (arrayChildren as RadioButtonElement[]).map((child, index) => (
                <RadioButton
                    key={index}
                    {...child.props}
                    dataFromRadioGroup={{
                        name: name,
                        onSelect: () => setSelectedValue(child.props.value),
                        checked: selectedValue === child.props.value,
                    }}
                />
            ));

    return (
        <div ref={ref} {...restProps} className={className}>
            {renderChildrens()}
        </div>
    );
}
