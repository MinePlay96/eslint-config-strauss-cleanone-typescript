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
    "brace-style": "off",
    "comma-spacing": "off",
    "default-param-last": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "no-array-constructor": "off",
    "no-dupe-class-members": "off",
    "no-empty-function": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-magic-numbers": "off",
    "no-unused-expressions": "off",
    "no-useless-constructor": "off",
    "quotes": "off",
    "no-return-await": "off",
    "require-await": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "camelcase": "off",
    
    // fixes
    "@typescript-eslint/interface-name-prefix": "off",
    
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
    "@typescript-eslint/no-type-alias": ["error", {
      allowCallbacks: "always",
      allowConditionalTypes: "always",
      allowConstructors: "always",
      allowMappedTypes: "always"
    }],
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
    "@typescript-eslint/brace-style": "error",
    "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }], 
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": "first",
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": { "parameters": 2, "body": 1 },
      "FunctionExpression": { "parameters": 2, "body": 1 },
      "CallExpression": { "arguments": 1 },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false,
      "ignoredNodes": ["TemplateLiteral *", "JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      "offsetTernaryExpressions": true
    }],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-extra-parens": "error",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-magic-numbers": ["error", { 
      "enforceConst": true, 
      "detectObjects": true,
      "ignore": [0, 1],
      "ignoreEnums": true
    }],
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/semi": ["error", "always", { "omitLastInOneLineBlock": true}],
    "@typescript-eslint/space-before-function-paren": ["error", "never"],
  }
};
