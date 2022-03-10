module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        "plugin:import/recommended",
        'airbnb-typescript',
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',
        "plugin:jest/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    plugins: ["jest"],
    parserOptions:  {
        ecmaVersion: "latest",
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
            jsx:  true,  // Allows for the parsing of JSX
        },
        project: ["./tsconfig.json"],
    },
    ignorePatterns: ['.eslintrc.js'],
    rules:  {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-var-requires": "off",
        "import/no-dynamic-require": "off",
        "typedef": 0,
        "function-name":"off",
        "variable-name": "off",
        "ter-arrow-parens": "off",
        "no-parameter-reassignment": "off",
        "no-else-after-return": "off",
        "no-underscore-dangle": 0,
        "global-require": 0,
        "linebreak-style": [2, "windows"],
        "no-console": 0,
        "semi": 1,
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/interactive-supports-focus": "off",
        "no-restricted-globals": "off",
        "react/no-did-update-set-state": "off",
        //
        "react/require-default-props": "off",
        "react/display-name": "off"
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings:  {
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        "jest/globals": true,
        "browser": true,
        "node": true
    }
};