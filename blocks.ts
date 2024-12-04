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
    //% operation.shadow="dropdown" operation.defl=TrigonometricOperations.sin
    //% angle.defl=0
    //% group="Math Trig"
    export function trigonometry(operation: TrigonometricOperations, angle: number): number {
        let result = 0;

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

    // Provide dropdown options for operations
    //% blockId=trigonometry_operation_enum block="%operation"
    export enum TrigonometricOperations {
        // Dropdown options
        sin = "sin",
        cos = "cos",
        tan = "tan",
        asin = "asin",
        acos = "acos",
        atan = "atan"
    }
}
