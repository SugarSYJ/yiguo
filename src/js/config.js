require.config({
	// 别名/虚拟路径
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'gdszoom':'../lib/jquery-gdsZoom/jquery.gdsZoom',
		'carousel':'../lib/jquery-yjCarousel/jquery.yjCarousel.js'
	},
	shim:{
		// 设置依赖
		gdszoom:['jquery'],
		carousel:['jquery']
	}
});
