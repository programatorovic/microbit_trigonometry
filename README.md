# Micro:bit Trigonometry Extension

This extension provides trigonometric functions for the BBC micro:bit in the MakeCode environment. It includes blocks for the following trigonometric operations:

- **sin**: Calculates the sine of an angle in degrees.
- **cos**: Calculates the cosine of an angle in degrees.
- **tan**: Calculates the tangent of an angle in degrees.
- **asin**: Calculates the arcsine of a value (returns angle in degrees).
- **acos**: Calculates the arccosine of a value (returns angle in degrees).
- **atan**: Calculates the arctangent of a value (returns angle in degrees).

## How to Use

1. Import this extension into your MakeCode project by using its GitHub URL.
2. After importing, you will see a new category **"Math Trig"** in the MakeCode block editor.
3. Use the provided blocks to perform trigonometric calculations with angles or values.

## Example Usage

### Example 1: Calculating the sine of an angle
```typescript
let angle = 30;
let result = TrigonometryBlocks.sin(angle);
basic.showNumber(result);
