const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: true,

	// 全局注入 Vue 运行时特性标志，避免那个 feature-flag 警告
	chainWebpack: config => {
		config.plugin("define").tap(definitions => {
			definitions[0]["__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"] =
				JSON.stringify(false);
			return definitions;
		});
	},
});
