# Remove Dart Error/Warning Imports

The **Remove Dart Error/Warning Imports** extension for Visual Studio Code streamlines your Dart development workflow by automatically removing `import`, `export`, `part`, and `part of` statements that cause errors or warnings in your code.

---

## Features

- **Automated Cleanup**: Scans your Dart files and removes lines with `import`, `export`, `part`, and `part of` statements that have associated errors or warnings, helping to maintain clean and error-free code.

- **User-Friendly Commands**: Easily accessible through the command palette or context menu for quick integration into your development process.

---

## How to Use

1. **Using Command Palette**:

    - Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).

    - Type the desired command and select it when it appears:

        - `Remove Dart Error/Warning`

        - `Remove Dart Errors Only`

        - `Remove Dart Warnings Only`

2. **Using Context Menu**:

    - Right-click within the code editor.

    - Select the desired command from the context menu:

        - `Remove Dart Error/Warning`

        - `Remove Dart Errors Only`

        - `Remove Dart Warnings Only`

---

**Note**: The extension uses the following regular expressions to identify and remove lines:

1. **For Import, Export, Part, and Part of Statements**:

   ```regex
   ^(import|export|part|part of)\s
   ```

   This regex matches lines that are import, export, part, or part of statements.

2. **For Variable Declarations Starting with `const`, `final`, `var`, or `late`**:

   ```regex
   ^\s*(const|final|var|late)\s+[\w<>,\s]+\s+\w*\s*(=.*)?\s*;$
   ```

   This regex matches lines that are variable declarations starting with `const`, `final`, `var`, or `late`.

These regular expressions are used to identify lines that should be removed based on their content and associated diagnostics.

---

## Commands

The extension provides the following commands for flexibility:

- **Remove Dart Error/Warning**: Removes all `import`, `export`, `part`, and `part of` statements with errors or warnings.

- **Remove Dart Errors Only**: Removes only the statements with errors.

- **Remove Dart Warnings Only**: Removes only the statements with warnings.

---

## Installation

To install the extension, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Stan.remove-dart-error-imports) and click 'Install'.

---

## Contributing

Contributions are welcome! If you encounter issues or have suggestions for improvements, please visit the [GitHub repository](https://github.com/stan-at-work/remove-dart-error-warning) to report them or submit pull requests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/stan-at-work/remove-dart-error-warning/blob/master/LICENSE.md) file for details.
