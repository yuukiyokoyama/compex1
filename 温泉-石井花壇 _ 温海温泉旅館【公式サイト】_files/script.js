// headerスクロール時の背景色とロゴ変更
"use strict";

jQuery(window).on("scroll", function () {
	if (jQuery(".header").height() < jQuery(this).scrollTop()) {
		jQuery(".header").addClass("change-color");
		jQuery(".bar").addClass("change-background-color");
		jQuery(".header__site-title").addClass("change-before");
	} else {
		jQuery(".header").removeClass("change-color");
		jQuery(".bar").removeClass("change-background-color");
		jQuery(".header__site-title").removeClass("change-before");
	}
});

// ハンバーガーメニュー
$(".burger__btn").on("click", function () {
	//.burger__btnをクリックすると
	$(".bar").toggleClass("cross"); //.barにcrossクラスを付与(ボタンのアニメーション)
	$(".header__menu").toggleClass("is-show"); //.header__menuにis-showクラスを付与(ボタンのアニメーション)
	$("body").toggleClass("noscroll"); //bodyにnoscrollクラスを付与(スクロールを固定)
});
// $(".header__menu").on("click", function () {
// 	$(".bar").toggleClass("cross"); //.barにcrossクラスを付与(ボタンのアニメーション)
// 	$(".header__menu").fadeToggle(500); //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
// 	$("body").toggleClass("noscroll"); //bodyにnoscrollクラスを付与(スクロールを固定)
// });
// モーダル
$(function () {
	//is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
	//アニメーションはcss側に記載しています
	$(".header__reservation").on("click", function () {
		$("#modalArea").toggleClass("is-show");
		$("body").addClass("noscroll");
	});
	$("#closeModal").on("click", function () {
		$("#modalArea").toggleClass("is-show");
		$("body").removeClass("noscroll");
	});
	$("#modalBg").on("click", function () {
		$("#modalArea").toggleClass("is-show");
		$("body").removeClass("noscroll");
	});
});

// カレンダー
const config = {
	locale: "ja",
	minDate: "today",
	mode: "range",
	dateFormat: "Y-m-d",
};

flatpickr(".flatpickr", config);

// AOS
AOS.init();

// お知らせタブ
$(".js-tab-trigger").on("click", function () {
	//まずは全triggerからclass削除
	$(".js-tab-trigger").removeClass("is-active");
	//次に全targetからclass削除
	$(".js-tab-target").removeClass("is-active");
	//次にクリックした要素にis-active
	$(this).addClass("is-active");
	//data属性を取得する
	let id = $(this).data("id");
	//data属性値=idが等しいものにclass付与
	$("#" + id).addClass("is-active");
});
