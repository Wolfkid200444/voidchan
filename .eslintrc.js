module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-unicorn",
        "eslint-plugin-jsdoc",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "generic"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "explicit",
                    "constructors": "explicit",
                    "parameterProperties": "explicit"
                }
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            "tab"
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "arrow-body-style": "error",
        "brace-style": [
            "error",
            "1tbs"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "functions": "never",
                "objects": "always-multiline"
            }
        ],
        "complexity": "warn",
        "constructor-super": "error",
        "curly": [
            "error",
            "multi-line"
        ],
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "optionalDependencies": false
            }
        ],
        "import/order": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/no-types": "error",
        "linebreak-style": [
            "off",
            "unix"
        ],
        "new-parens": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-imports": [
            "error",
            "domain",
            "freelist",
            "smalloc",
            "sys",
            "colors"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-sparse-arrays": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-useless-constructor": "error",
        "no-void": "error",
        "object-shorthand": "error",
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "unicorn/filename-case": [
            "error",
            {
                "cases": {
                    "undefined": true
                }
            }
        ],
        "use-isnan": "error",
        "yoda": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "array-bracket-spacing": [
                        true,
                        "never"
                    ],
                    "bool-param-default": true,
                    "consecutive-overloads": true,
                    "encoding": true,
                    "handle-callback-err": true,
                    "import-spacing": true,
                    "match-default-export-name": true,
                    "max-union-size": [
                        true,
                        3
                    ],
                    "no-accessor-field-mismatch": true,
                    "no-all-duplicated-branches": true,
                    "no-alphabetical-sort": true,
                    "no-array-delete": true,
                    "no-case-with-or": true,
                    "no-collapsible-if": true,
                    "no-collection-size-mischeck": true,
                    "no-dead-store": true,
                    "no-duplicate-case": true,
                    "no-duplicate-in-composite": true,
                    "no-duplicated-branches": true,
                    "no-dynamic-delete": true,
                    "no-element-overwrite": true,
                    "no-empty-array": true,
                    "no-empty-character-class": true,
                    "no-empty-destructuring": true,
                    "no-ex-assign": true,
                    "no-extra-boolean-cast": true,
                    "no-extra-semi": true,
                    "no-gratuitous-expressions": true,
                    "no-hardcoded-credentials": [
                        true,
                        "password",
                        "passwd",
                        "pwd",
                        "secret",
                        "botToken"
                    ],
                    "no-identical-conditions": true,
                    "no-identical-functions": true,
                    "no-ignored-initial-value": true,
                    "no-ignored-return": true,
                    "no-in-misuse": true,
                    "no-inconsistent-return": true,
                    "no-inferred-empty-object-type": true,
                    "no-inner-declarations": [
                        true,
                        "functions"
                    ],
                    "no-invalid-await": true,
                    "no-invariant-return": true,
                    "no-inverted-boolean-check": true,
                    "no-misleading-array-reverse": true,
                    "no-misspelled-operator": true,
                    "no-multi-spaces": [
                        true,
                        {
                            "exceptions": {
                                "PropertyAssignment": true
                            }
                        }
                    ],
                    "no-multiline-string-literals": true,
                    "no-nested-switch": true,
                    "no-null-undefined-union": true,
                    "no-redundant-boolean": true,
                    "no-redundant-jump": true,
                    "no-redundant-parentheses": true,
                    "no-same-line-conditional": true,
                    "no-self-assignment": true,
                    "no-statements-same-line": true,
                    "no-tautology-expression": true,
                    "no-unconditional-jump": true,
                    "no-undefined-argument": true,
                    "no-unexpected-multiline": true,
                    "no-unnecessary-callback-wrapper": true,
                    "no-unthrown-error": true,
                    "no-unused-array": true,
                    "no-useless-cast": true,
                    "no-useless-catch": true,
                    "no-useless-increment": true,
                    "no-useless-intersection": true,
                    "number-literal-format": true,
                    "object-curly-spacing": [
                        true,
                        "always"
                    ],
                    "parameters-max-number": [
                        true,
                        4
                    ],
                    "prefer-default-last": true,
                    "prefer-immediate-return": true,
                    "prefer-optional": true,
                    "prefer-promise-shorthand": true,
                    "static-this": true,
                    "switch-final-break": [
                        true,
                        "always"
                    ],
                    "ter-arrow-parens": [
                        true,
                        "as-needed"
                    ],
                    "ter-arrow-spacing": [
                        true,
                        {
                            "after": true,
                            "before": true
                        }
                    ],
                    "ter-func-call-spacing": [
                        true,
                        "never"
                    ],
                    "ter-indent": [
                        true,
                        "tab",
                        {
                            "CallExpression": {
                                "arguments": 1
                            },
                            "FunctionDeclaration": {
                                "body": 1,
                                "parameters": 1
                            },
                            "FunctionExpression": {
                                "body": 1,
                                "parameters": 1
                            },
                            "SwitchCase": 1
                        }
                    ],
                    "ter-no-self-compare": true,
                    "ter-padded-blocks": [
                        true,
                        "never"
                    ],
                    "tsr-detect-buffer-noassert": true,
                    "tsr-detect-non-literal-buffer": true,
                    "tsr-detect-non-literal-regexp": true,
                    "tsr-detect-non-literal-require": true,
                    "tsr-detect-pseudo-random-bytes": true,
                    "tsr-detect-sql-literal-injection": true,
                    "tsr-detect-unsafe-regexp": true,
                    "unnecessary-else": true,
                    "use-primitive-type": true,
                    "use-type-alias": true,
                    "valid-jsdoc": [
                        true,
                        {
                            "requireParamDescription": true,
                            "requireParamType": false,
                            "requireReturn": false,
                            "requireReturnDescription": true,
                            "requireReturnType": false
                        }
                    ],
                    "valid-typeof": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-module",
                        "check-separator",
                        "check-rest-spread",
                        "check-type",
                        "check-typecast",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
