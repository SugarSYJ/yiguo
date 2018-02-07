require.config({
	// 别名/虚拟路径
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'carousel':'../lib/jquery-yjCarousel/jquery.yjCarousel',
		'jqzoom':'../lib/fangdajing/jqzoom'
	},
	shim:{
		// 设置依赖
		carousel:['jquery'],
		headFoot:['jquery'],
		common:['jquery'],
		jqzoom:['jquery']
	}
});
