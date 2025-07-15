import js from "@eslint/js"
import tsESLint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import svelte from "eslint-plugin-svelte"
import svelteParser from "svelte-eslint-parser"
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"

const unusedVarsConfig = {
    args: "all",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    caughtErrorsIgnorePattern: "^_",
    destructuredArrayIgnorePattern: "^_",
    varsIgnorePattern: "^_",
    ignoreRestSiblings: true,
}

export default [
    // Stylistic
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        semi: false,
        jsx: false,
    }),
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        },
    },

    // JavaScript
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            "no-unused-vars": ["error", unusedVarsConfig],
        },
    },

    // TypeScript
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": tsESLint,
        },
        rules: {
            ...tsESLint.configs.recommended.rules,
            "no-unused-vars": "off",
            "no-undef": "off",
            "@typescript-eslint/no-unused-vars": ["error", unusedVarsConfig],
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },

    // Svelte
    ...svelte.configs.recommended,
    {
        files: ["**/*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsParser,
            },
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            svelte,
            "@typescript-eslint": tsESLint,
        },
        rules: {
            "svelte/no-dom-manipulating": "warn",
            "svelte/require-each-key": "warn",
            "svelte/css-unused-selector": "off",
            "svelte/no-unused-svelte-ignore": "off",
            "no-unused-vars": "off",
            "no-undef": "off",
            "@typescript-eslint/no-unused-vars": ["error", unusedVarsConfig],
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },

    {
        // Ignore generated files
        ignores: [
            ".svelte-kit/**",
            "node_modules/**",
            "build/**",
        ],
    },
]
