/**
 * Compares todos for sorting
 */
export function statusComparator(todo1, todo2) {
    if (todo1.done) {
        return 1;
    }
    if (todo2.done) {
        return -1
    }
    return 0;
}