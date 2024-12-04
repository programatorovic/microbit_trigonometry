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
    //% operation.defl="sin"
    //% angle.defl=0
    //% group="Math Trig"
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

    /**
     * Dropdown menu options for operations
     */
    //% blockId=trigonometry_operation_menu block="%operation"
    //% blockHidden=true
    export function operationMenu(operation: string): string {
        return operation;
    }
}
