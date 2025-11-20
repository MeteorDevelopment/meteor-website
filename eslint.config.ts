import js from "@eslint/js"
import globals from "globals"
import tsESLint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"
import svelte from "eslint-plugin-svelte"
import svelteParser from "svelte-eslint-parser"
import { defineConfig } from "eslint/config"

export default defineConfig([
    // ------------------------------------------------------------------------
    // 1. Ignore build folders
    // ------------------------------------------------------------------------
    {
        ignores: [
            "node_modules/**",
            "build/**",
            ".svelte-kit/**",
        ],
    },

    // ------------------------------------------------------------------------
    // 2. Base recommended configs FIRST
    // ------------------------------------------------------------------------
    js.configs.recommended,
    ...tsESLint.configs.recommended,
    ...svelte.configs.recommended,

    // ------------------------------------------------------------------------
    // 3. TypeScript files
    // ------------------------------------------------------------------------
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: {
            parser: tsESLint.parser,
            globals: globals.browser,
        },
        plugins: {
            "@stylistic": stylistic,
        },
    },

    // ------------------------------------------------------------------------
    // 4. Svelte files
    // ------------------------------------------------------------------------
    {
        files: ["**/*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsESLint.parser,
                extraFileExtensions: [".svelte"],
            },
            globals: globals.browser,
        },
    },

    // ------------------------------------------------------------------------
    // 5. Shared stylistic + rules
    // ------------------------------------------------------------------------
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,svelte}"],
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            ...stylistic.configs.customize({
                indent: 4,
                quotes: "double",
                semi: false,
                jsx: false,
            }).rules,
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],

            "@typescript-eslint/no-unused-vars": ["warn", {
                args: "all",
                argsIgnorePattern: "^_",
                caughtErrors: "all",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            }],
        },
    },
])
