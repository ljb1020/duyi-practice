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

	// 创建一个纹理
	const texture = PIXI.Texture.from("/favicon.ico");

	// 创建一个精灵
	const sprite = new PIXI.Sprite(texture);
	// 设置精灵的锚点
	sprite.anchor.set(0.5);

	// 设置精灵位置
	sprite.x = app.screen.width / 2;
	sprite.y = app.screen.height / 2;

	app.stage.addChild(sprite);

	// ticker实现动画
	app.ticker.add(delta => {
		sprite.rotation += 0.01 * delta;
	});
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
