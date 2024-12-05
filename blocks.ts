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

        // Use the selected operation to calculate the result
        switch (operation) {
            case TrigonometricOperations.sin:
                result = Trigonometry.sinFunction(angle);
                break;
            case TrigonometricOperations.cos:
                result = Trigonometry.cosFunction(angle);
                break;
            case TrigonometricOperations.tan:
                result = Trigonometry.tanFunction(angle);
                break;
            case TrigonometricOperations.asin:
                result = Trigonometry.asinFunction(angle);
                break;
            case TrigonometricOperations.acos:
                result = Trigonometry.acosFunction(angle);
                break;
            case TrigonometricOperations.atan:
                result = Trigonometry.atanFunction(angle);
                break;
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
