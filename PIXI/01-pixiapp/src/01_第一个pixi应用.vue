<template><div></div></template>

<script setup>
	import * as PIXI from "pixi.js";

	// 创建应用
	const app = new PIXI.Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0x1099bb,
		resolution: window.devicePixelRatio || 1,
	});

	// 将应用画布添加到DOM中
	document.body.appendChild(app.view);

	// 创建矩形
	const rectangle = new PIXI.Graphics();
	// 设置矩形边框
	rectangle.lineStyle(4, 0xffd900, 1);
	rectangle.beginFill(0x66ccff); // 填充颜色
	rectangle.drawRect(0, 0, 200, 64); // 绘制矩形
	rectangle.endFill(); // 结束填充

	// 图形的缩放
	// rectangle.scale.set(2, 2);

	// 图形的位移
	rectangle.position.set(200, 200);
	// 图形的旋转
	rectangle.rotation = 0.5;
	// 设置对象的坐标原点
	rectangle.pivot.set(100, 32);

	// 创建一个圆形
	const circle = new PIXI.Graphics();
	circle.beginFill(0x66ccff, 0.9);
	circle.drawCircle(0, 0, 32);
	circle.endFill();
	circle.position.set(600, 600);

	// 将矩形添加到舞台
	app.stage.addChild(rectangle);
	// 将圆形添加到舞台
	app.stage.addChild(circle);
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	canvas {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
