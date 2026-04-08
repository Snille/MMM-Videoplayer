import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
	js.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "script",
			globals: {
				...globals.browser,
				Module: "readonly"
			}
		},
		rules: {
			"no-unused-vars": ["error", { "args": "none" }]
		}
	}
]);
