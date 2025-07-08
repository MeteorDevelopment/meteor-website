import js from "@eslint/js";
import sveltePlugin from "eslint-plugin-svelte";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
    js.configs.recommended,
    ...sveltePlugin.configs.recommended,
    {
        // JavaScript
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            "no-unused-vars": ["warn", { args: "all", argsIgnorePattern: "^_" }],
            "quotes": ["warn", "double", { "avoidEscape": true }]
        }
    },
    {
        // TypeScript
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json"
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            "@typescript-eslint": tsPlugin
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { args: "all", argsIgnorePattern: "^_" }],
            "quotes": ["warn", "double", { "avoidEscape": true }]
        }
    },
    {
        // Svelte
        files: ["**/*.svelte"],
        plugins: {
            svelte: sveltePlugin,
            "@typescript-eslint": tsPlugin
        },
        languageOptions: {
            parserOptions: {
                parser: {
                    // Parse TypeScript in <script lang="ts"> blocks
                    ts: tsParser,
                    typescript: tsParser
                },
                extraFileExtensions: [".svelte"]
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        processor: "svelte/svelte",
        rules: {
            "svelte/no-unused-svelte-ignore": "off",
            "svelte/no-dom-manipulating": "warn",
            "svelte/css-unused-selector": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { args: "all", argsIgnorePattern: "^_" }],
            // Disable the base rule as it can report incorrect errors in Svelte files
            "no-unused-vars": "off",
            "quotes": ["warn", "double", { "avoidEscape": true }]
        }
    },
    {
        // Ignore generated files
        ignores: [".svelte-kit/**", "node_modules/**", "build/**"]
    }
];
