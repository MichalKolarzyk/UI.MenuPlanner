class Sorter {
    static numberSorter = (a: number, b: number) => {
        if (a > b || b === null || b === undefined) {
            return 1;
        }
        if (b > a || a === null || a === undefined) {
            return -1;
        }
        return 0;
    };

    static stringSorter = (a: string, b: string) => {
        if (a > b || a === null || a === undefined) {
            return 1;
        }
        if (b > a || b === null || b === undefined) {
            return -1;
        }
        return 0;
    };
}

export default Sorter;
