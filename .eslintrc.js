/*eslint-disable */

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb-base",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	parser: "@typescript-eslint/parser",
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"no-unused-vars": "warn",
		"linebreak-style": 0,
		"object-curly-spacing": 0,
		quotes: 0,
		"import/no-unresolved": 0,
		"arrow-body-style": 0,
		"import/extensions": 0,
		"no-tabs": 0,
		indent: 0,
		"object-curly-newline": 0,
		"import/prefer-default-export": 0,
		"no-multiple-empty-lines": 0,
	},
};
