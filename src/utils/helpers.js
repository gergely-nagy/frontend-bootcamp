/**
 * Formtas pages difficulty level to stars.
 * @param {number} level - The difficulty level of the lecture.
 */
export function formatDifficulty(level) {
    return new Array(level || 1).fill('⭐').join('');
}