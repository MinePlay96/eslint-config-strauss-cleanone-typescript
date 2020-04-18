module.exports = {
  root: true,
  env: {
    "es6": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint-config-strauss-cleanone"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType:  'module'
  },
  rules: {
    // eslint for compadabylity
    "no-underscore-dangle": ["error", { allowAfterThis: true, allowAfterSuper: true }],
    "no-unused-vars": "off",
    // ts rules
    "@typescript-eslint/array-type": ["error", { "default": "generic", "readonly": "generic" }],
    "@typescript-eslint/ban-ts-comment": ["error"],
    "@typescript-eslint/ban-types": ["error", {
      "types": {
          "{}": {
            "message": "Use object instead",
            "fixWith": "object"
          }
      }
    }],
    "@typescript-eslint/class-literal-property-style": ["error", "getters"],
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: 'explicit' }],
    "@typescript-eslint/member-delimiter-style": ["error", { 
      multiline: { delimiter: "semi" },
      singleline: { delimiter: "semi" }
    }],
    "@typescript-eslint/member-ordering": ["error", {
      "default": [
        // Index signature
        "signature",
    
        // Fields
        "public-static-field",
        "protected-static-field",
        "private-static-field",
    
        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",
    
        "public-abstract-field",
        "protected-abstract-field",
        "private-abstract-field",
    
        "public-field",
        "protected-field",
        "private-field",
    
        "static-field",
        "instance-field",
        "abstract-field",
    
        "field",
    
        // Constructors
        "public-constructor",
        "protected-constructor",
        "private-constructor",
    
        "constructor",
    
        // Methods
        "public-static-method",
        "protected-static-method",
        "private-static-method",
    
        "public-instance-method",
        "protected-instance-method",
        "private-instance-method",
    
        "public-abstract-method",
        "protected-abstract-method",
        "private-abstract-method",
    
        "public-method",
        "protected-method",
        "private-method",
    
        "static-method",
        "instance-method",
        "abstract-method",
    
        "method"
      ]
    }],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "prefix": ["I"]
      },
      {
        "selector": "typeParameter",
        "format": ["PascalCase"],
        "prefix": ["T"]
      },
      {
        "selector": "enum",
        "format": ["PascalCase"],
        "prefix": ["E"]
      },
      {
        "selector": "variable",
        "types": ["boolean"],
        "format": ["PascalCase"],
        "prefix": ["is", "should", "has", "can", "did", "will"]
      }
    ],
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "error", // TODO: usefull ?
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-type-alias": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    // ts overwrites
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }], 
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": "error",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": "first",
      "FunctionExpression": {"parameters": "first"},
      "FunctionDeclaration": {"parameters": "first"},
      "CallExpression": {"arguments": "first"}
    }],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "error",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": ["error", { 
      "enforceConst": true, 
      "detectObjects": true ,
      "ignoreEnums": true
    }],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "single"],
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always", { "omitLastInOneLineBlock": true}],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", "never"],
  }
};
