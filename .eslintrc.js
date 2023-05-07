module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
  },
};
