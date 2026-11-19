
// Recursively search strings, numbers, arrays, and objects
const normalizeAndCheck = (
    value: unknown,
    normalizedSearchValue: string,
    searchWords: string[],
    ignoredKeys: ReadonlySet<string>,
    visited: WeakSet<object>
): boolean => {

    // Check string values
    if (typeof value === "string") {
        return isSmartTextMatch(
            value,
            normalizedSearchValue,
            searchWords
        );
    }

    // Check numeric values with exact matching
    if (typeof value === "number") {
        if (!Number.isFinite(value)) {
            return false;
        }

        return normalizeForSearch(String(value)) === normalizedSearchValue;
    }

    // Handle null and undefined values
    if (value === null || value === undefined) {
        return false;
    }

    // Ignore non-object values
    if (typeof value !== "object") {
        return false;
    }

    // Prevent circular references
    if (visited.has(value)) {
        return false;
    }

    visited.add(value);

    try {
        // Search inside arrays
        if (Array.isArray(value)) {
            return value.some((item) =>
                normalizeAndCheck(
                    item,
                    normalizedSearchValue,
                    searchWords,
                    ignoredKeys,
                    visited
                )
            );
        }

        // Search inside object properties
        return Object.entries(value as Record<string, unknown>).some(
            ([key, item]) => {

                // Skip ignored object properties
                if (ignoredKeys.has(key)) {
                    return false;
                }

                return normalizeAndCheck(
                    item,
                    normalizedSearchValue,
                    searchWords,
                    ignoredKeys,
                    visited
                );
            }
        );

    } finally {
        // Allow shared objects to be checked in other branches
        visited.delete(value);
    }
};

// Filter an array using smart search
const filterArrayBySearch = <T,>(
    data: T[],
    searchValue: string | number,
    ignoredKeys: string[] = []
): T[] => {
    try {
        // Validate the input data
        if (!Array.isArray(data)) {
            console.error("Search Error: Data must be an array.");
            return [];
        }

        // Normalize the search value
        const normalizedSearchValue = normalizeForSearch(
            String(searchValue).trim()
        );

        // Return all items when the search value is empty
        if (!normalizedSearchValue) {
            return data;
        }

        // Extract searchable words
        const searchWords =
            normalizedSearchValue.match(/[\p{L}\p{N}]+/gu) ?? [];

        // Return no results when the input contains no searchable characters
        if (searchWords.length === 0) {
            return [];
        }

        // Convert ignored keys into a Set
        const ignoredKeysSet = new Set(ignoredKeys);

        // Filter items while handling individual item errors
        return data.filter((item) => {
            try {
                const visited = new WeakSet<object>();

                return normalizeAndCheck(
                    item,
                    normalizedSearchValue,
                    searchWords,
                    ignoredKeysSet,
                    visited
                );
            } catch (error) {
                handleSearchError(error);
                return false;
            }
        });

    } catch (error) {
        handleSearchError(error);
        return [];
    }
};

export {
    normalizeAndCheck,
    filterArrayBySearch
}
