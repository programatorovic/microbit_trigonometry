// blocks.ts

// Namespace for graphical blocks and category setup

//% color=#800080 icon="\u222B" block="Math Trig"
namespace TrigonometryBlocks {
    /**
     * Performs a trigonometric operation on the given angle
     * @param operation Type of trigonometric operation: "sin", "cos", "tan", etc.
     * @param angle Angle in degrees for the operation
     */
    //% blockId=trigonometry_operation block="trigonometry %operation|of %angle|degrees"
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
}
