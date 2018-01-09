module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "eqeqeq": "error",
        "curly": "error",
        "array-element-newline": "error",
        "array-bracket-spacing": "error"
    },
    "globals": {
        "$": true,
        "jQuery": true
    }
}