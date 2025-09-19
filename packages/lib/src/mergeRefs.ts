export function mergeRefs<T>(
    ...refs: (React.Ref<T> | undefined | null)[]
): React.RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref && typeof ref === "object" && "current" in ref) {
                (ref as React.RefObject<T | null>).current = value;
            }
        });
    };
}
