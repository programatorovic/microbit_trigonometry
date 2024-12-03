// blocks.ts

// Importujeme potrebné funkcie z main.ts
import { sinFunction, cosFunction, tanFunction, asinFunction, acosFunction, atanFunction } from "./main";

// Pridanie bloku s trigonometrickými funkciami
namespace blocks {
    // Vytvorenie bloku "trigonometry"
    export function trigonometry(operation: string, angle: number): number {
        let result = 0;

        if (operation == "sin") {
            result = sinFunction(angle);
        } else if (operation == "cos") {
            result = cosFunction(angle);
        } else if (operation == "tan") {
            result = tanFunction(angle);
        } else if (operation == "asin") {
            result = asinFunction(angle);
        } else if (operation == "acos") {
            result = acosFunction(angle);
        } else if (operation == "atan") {
            result = atanFunction(angle);
        }

        return result;
    }

    // Registrácia bloku v MakeCode
    export function createBlocks() {
        // Blok s názvom trigonometria, ktorý ponúka operácie ako "sin", "cos", atď.
        blocks.registerBlock("trigonometry", {
            // Menu na výber trigonometrickej funkcie
            args: [
                blocks.createArgument("operation", "dropdown", ["sin", "cos", "tan", "asin", "acos", "atan"]),
                blocks.createArgument("angle", "number", 0)
            ],
            callback: (args) => trigonometry(args.operation, args.angle)
        });
    }
}
