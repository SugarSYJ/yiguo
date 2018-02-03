require.config({
	// 别名/虚拟路径
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'carousel':'../lib/jquery-yjCarousel/jquery.yjCarousel',
		'gdszoom':'../lib/jquery-gdsZoom/jquery.gdsZoom'
	},
	shim:{
		// 设置依赖
		gdszoom:['jquery'],
		carousel:['jquery'],
		head:['jquery'],
		foot:['jquery'],
		common:['jquery']
	}
});
