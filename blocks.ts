// blocks.ts

// Namespace for graphical blocks and category setup
//% color=#800080 icon="\u223F" block="Math Trig"
namespace TrigonometryBlocks {
    /**
     * Performs a trigonometric operation on the given angle
     * @param operation Type of trigonometric operation
     * @param angle Angle in degrees for the operation
     */
    //% blockId=trigonometry_operation block="trigonometry %operation|of %angle|degrees"
    //% angle.shadow="math_number" angle.defl=0
    //% group="Math Trig"
    export function trigonometry(operation: TrigonometricOperations, angle: number): number {
        let result = 0;

        // Match the operation and calculate
        if (operation == TrigonometricOperations.sin) {
            result = Trigonometry.sinFunction(angle);
        } else if (operation == TrigonometricOperations.cos) {
            result = Trigonometry.cosFunction(angle);
        } else if (operation == TrigonometricOperations.tan) {
            result = Trigonometry.tanFunction(angle);
        } else if (operation == TrigonometricOperations.asin) {
            result = Trigonometry.asinFunction(angle);
        } else if (operation == TrigonometricOperations.acos) {
            result = Trigonometry.acosFunction(angle);
        } else if (operation == TrigonometricOperations.atan) {
            result = Trigonometry.atanFunction(angle);
        }

        return result;
    }

    /**
     * Enum for dropdown menu options for operations
     */
    export enum TrigonometricOperations {
        sin = "sin",
        cos = "cos",
        tan = "tan",
        asin = "asin",
        acos = "acos",
        atan = "atan"
    }
}
