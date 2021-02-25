module.exports = {
    /*
     * 通用规则
     *
     * 安装依赖：
     * npm install --save-dev eslint babel-eslint eslint-config-alloy
     * 或：
     * yarn add --dev eslint babel-eslint eslint-config-alloy
     */
    // extends: ["alloy"],

    /*
     * Vue 专用规则
     *
     * 安装依赖：
     * npm install --save-dev eslint babel-eslint vue-eslint-parser@5.0.0 eslint-plugin-vue eslint-config-alloy
     * 或：
     * yarn add --dev eslint babel-eslint vue-eslint-parser@5.0.0 eslint-plugin-vue eslint-config-alloy
     */
    // extends: ["alloy", "alloy/vue"],

    /*
     * React 专用规则
     *
     * 安装依赖：
     * npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-config-alloy
     * 或：
     * yarn add --dev eslint babel-eslint eslint-plugin-react eslint-config-alloy
     */
    // extends: ["alloy", "alloy/react"],

    /*
     * TypeScript 专用规则
     *
     * 安装依赖：
     * npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
     * 或：
     * yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
     */
    // extends: ["alloy", "alloy/typescript"],

    /*
     * TypeScript React 专用规则
     *
     * 安装依赖：
     * npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy
     * 或：
     * yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy
     */
    // extends: ["alloy", "alloy/react", "alloy/typescript"],

    extends: ["alloy", "alloy/typescript"],

    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        node: true,
        // mocha: true,
        jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            { accessibility: "no-public" },
        ],
        "@typescript-eslint/no-parameter-properties": ["error", { allows: ["private readonly"] }],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    ignorePatterns: ["dist/**/*.js", "public/**/*.js", "typings.d.ts", ".eslintrc.js"],
};
