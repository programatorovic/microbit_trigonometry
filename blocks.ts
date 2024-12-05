// blocks.ts

// Namespace for graphical blocks and category setup
//% color=#800080 icon="\u223F" block="Math Trig"
namespace TrigonometryBlocks {
    /**
     * Calculates the sine of an angle
     * @param angle Angle in degrees
     */
    //% blockId=sin_function block="sin %angle|degrees"
    //% angle.shadow="math_number" angle.defl=0
    //% group="Math Trig"
    export function sin(angle: number): number {
        return Trigonometry.sinFunction(angle);
    }

    /**
     * Calculates the cosine of an angle
     * @param angle Angle in degrees
     */
    //% blockId=cos_function block="cos %angle|degrees"
    //% angle.shadow="math_number" angle.defl=0
    //% group="Math Trig"
    export function cos(angle: number): number {
        return Trigonometry.cosFunction(angle);
    }

    /**
     * Calculates the tangent of an angle
     * @param angle Angle in degrees
     */
    //% blockId=tan_function block="tan %angle|degrees"
    //% angle.shadow="math_number" angle.defl=0
    //% group="Math Trig"
    export function tan(angle: number): number {
        return Trigonometry.tanFunction(angle);
    }

    /**
     * Calculates the arcsine of a value
     * @param value Input value (must be between -1 and 1)
     */
    //% blockId=asin_function block="asin %value"
    //% value.shadow="math_number" value.defl=0
    //% group="Math Trig"
    export function asin(value: number): number {
        return Trigonometry.asinFunction(value);
    }

    /**
     * Calculates the arccosine of a value
     * @param value Input value (must be between -1 and 1)
     */
    //% blockId=acos_function block="acos %value"
    //% value.shadow="math_number" value.defl=0
    //% group="Math Trig"
    export function acos(value: number): number {
        return Trigonometry.acosFunction(value);
    }

    /**
     * Calculates the arctangent of a value
     * @param value Input value
     */
    //% blockId=atan_function block="atan %value"
    //% value.shadow="math_number" value.defl=0
    //% group="Math Trig"
    export function atan(value: number): number {
        return Trigonometry.atanFunction(value);
    }
}
