module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "standard",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
        "prettier/standard",
    ],
    "plugins": [
        "react",
        "prettier",
        "standard"
    ],
    "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "react/prop-types": 0,
        "prettier/prettier": "error"
    }
};