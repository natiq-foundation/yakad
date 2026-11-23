
// Convert Persian and Arabic digits to English digits
const arabicDigitsToEnglish = (str: string): string => {
    const digitsMap: Record<string, string> = {
        "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4",
        "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9",
        "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4",
        "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9",
    };

    return str.replace(
        /[\u0660-\u0669\u06f0-\u06f9]/g,
        (char) => digitsMap[char] ?? char
    );
};

// Remove Arabic diacritics
const removeArabicDiacritics = (text: string): string => {
    return text.replace(/[\u064B-\u0652\u0670]/g, "");
};

// Normalize characters for search
const normalizeForSearch = (str: string): string => {
    const replacementMap: Record<string, string> = {
        ة: "ه",
        ؤ: "و",
        آ: "ا",
        أ: "ا",
        إ: "ا",
        ي: "ی",
        ئ: "ی",
        ى: "ی",
        ك: "ک",
    };

    const normalizedText = str
        .toLowerCase()
        .replace(/[ةؤآأإيئكى]/g, (char) => replacementMap[char] ?? char);

    const withoutDiacritics = removeArabicDiacritics(normalizedText);

    const normalizedWords = withoutDiacritics.replace(
        /ال\s?[کك]/g,
        "الک"
    );

    return arabicDigitsToEnglish(normalizedWords);
};

// Calculate the Levenshtein distance between two words
const levenshteinDistance = (
    first: string,
    second: string
): number => {
    if (first === second) return 0;

    if (first.length === 0) return second.length;
    if (second.length === 0) return first.length;

    let previousRow = Array.from(
        { length: second.length + 1 },
        (_, index) => index
    );

    for (let i = 1; i <= first.length; i++) {
        const currentRow = [i];

        for (let j = 1; j <= second.length; j++) {
            const substitutionCost =
                first[i - 1] === second[j - 1] ? 0 : 1;

            currentRow[j] = Math.min(
                currentRow[j - 1] + 1,
                previousRow[j] + 1,
                previousRow[j - 1] + substitutionCost
            );
        }

        previousRow = currentRow;
    }

    return previousRow[second.length];
};

// Determine the maximum allowed typo distance
const getMaxDistance = (word: string): number => {
    if (word.length <= 2) return 0;
    if (word.length <= 5) return 1;

    return 2;
};

// Check whether two words are similar
const isSimilarWord = (
    searchWord: string,
    targetWord: string
): boolean => {
    if (searchWord.length <= 2) {
        return searchWord === targetWord;
    }

    if (targetWord.includes(searchWord)) {
        return true;
    }

    const maxDistance = getMaxDistance(searchWord);

    if (Math.abs(searchWord.length - targetWord.length) > maxDistance) {
        return false;
    }

    return (
        levenshteinDistance(searchWord, targetWord) <= maxDistance
    );
};

// Smart text search engine
const isSmartTextMatch = (
    text: string,
    normalizedSearchValue: string,
    searchWords: string[]
): boolean => {
    const normalizedText = normalizeForSearch(text);

    // Match numeric searches against complete number sequences
    if (/^\d+$/.test(normalizedSearchValue)) {
        const targetNumbers: string[] =
            normalizedText.match(/\d+/g) ?? [];

        return targetNumbers.includes(normalizedSearchValue);
    }

    // Check for exact or partial text matches
    if (normalizedText.includes(normalizedSearchValue)) {
        return true;
    }

    // Extract words from the target text
    const targetWords =
        normalizedText.match(/[\p{L}\p{N}]+/gu) ?? [];

    if (targetWords.length === 0) {
        return false;
    }

    // Check whether every search word matches a target word
    return searchWords.every((searchWord) =>
        targetWords.some((targetWord) =>
            isSimilarWord(searchWord, targetWord)
        )
    );
};

export {
    arabicDigitsToEnglish,
    removeArabicDiacritics,
    normalizeForSearch,
    normalizedText,
    levenshteinDistance,
    getMaxDistance,
    isSimilarWord,
    isSmartTextMatch,
}