class getResolved {
	apply(compiler) {
		compiler.hooks.normalModuleFactory.tap("getResolved", factory => {
			factory.hooks.afterResolve.tap("getResolved", result => {
				console.log("ddd", result);
			});
		});
	}
}

module.exports = getResolved;
