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
    //% operation.shadow="dropdown" operation.defl="sin"
    //% angle.shadow="math_number" angle.defl=0
    //% group="Math Trig"
    export function trigonometry(operation: string, angle: number): number {
        let numericAngle = +angle; // Explicitly convert input to a number
        let result = 0;

        // Match the operation and calculate
        if (operation == "sin") {
            result = Trigonometry.sinFunction(numericAngle);
        } else if (operation == "cos") {
            result = Trigonometry.cosFunction(numericAngle);
        } else if (operation == "tan") {
            result = Trigonometry.tanFunction(numericAngle);
        } else if (operation == "asin") {
            result = Trigonometry.asinFunction(numericAngle);
        } else if (operation == "acos") {
            result = Trigonometry.acosFunction(numericAngle);
        } else if (operation == "atan") {
            result = Trigonometry.atanFunction(numericAngle);
        }

        return result;
    }

    /**
     * Dropdown menu for trigonometric operations
     */
    //% blockId=trigonometry_dropdown block="%operation"
    //% blockHidden=true
    export function operationDropdown(operation: string): string {
        return operation;
    }
}
