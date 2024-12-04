// main.ts

namespace Trigonometry {
    // Trigonometrické funkcie v stupňoch
    export function sinFunction(angle: number): number {
        return Math.sin(Math.PI * angle / 180); // konvertuje stupeň na radián
    }

    export function cosFunction(angle: number): number {
        return Math.cos(Math.PI * angle / 180); // konvertuje stupeň na radián
    }

    export function tanFunction(angle: number): number {
        return Math.tan(Math.PI * angle / 180); // konvertuje stupeň na radián
    }

    export function asinFunction(value: number): number {
        return Math.asin(value) * 180 / Math.PI; // konvertuje radiány na stupne
    }

    export function acosFunction(value: number): number {
        return Math.acos(value) * 180 / Math.PI; // konvertuje radiány na stupne
    }

    export function atanFunction(value: number): number {
        return Math.atan(value) * 180 / Math.PI; // konvertuje radiány na stupne
    }
}
