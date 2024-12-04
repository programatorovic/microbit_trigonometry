// blocks.ts

namespace TrigonometryBlocks {
    // Pridanie bloku s trigonometrickými funkciami
    export function trigonometry(operation: string, angle: number): number {
        let result = 0;

        if (operation == "sin") {
            result = Trigonometry.sinFunction(angle);
        } else if (operation == "cos") {
            result = Trigonometry.cosFunction(angle);
        } else if (operation == "tan") {
            result = Trigonometry.tanFunction(angle);
        } else if (operation == "asin") {
            result = Trigonometry.asinFunction(angle);
        } else if (operation == "acos") {
            result = Trigonometry.acosFunction(angle);
        } else if (operation == "atan") {
            result = Trigonometry.atanFunction(angle);
        }

        return result;
    }
}
