$(function() {
	window.onbeforeunload = function() {
			document.documentElement.scrollTop = 0,
				document.body.scrollTop = 0
		},
		$("#holder").focus(),
		setTimeout(function() {
				$(".core").stop().fadeIn(1e3),
					$(".tmall-lb").stop().fadeIn(1e3)
			},
			500),
		$(".place").on("click", "li",
			function() {
				var o = $(this).html();
				$(".place span").html(o)
			}),
		$(".tbh-qr-wrapper a b").click(function() {
			$(".tbh-qr-wrapper").remove()
		}),
		$(".notice-hd li").mouseover(function() {
			$(this).addClass("bottomjuse"),
				$(this).siblings().removeClass("bottomjuse");
			var o = $(this).index();
			$(".notice-bd ul").index();
			$(this).parent().parent().find(".notice-bd ul").eq(o).show().siblings().hide()
		});
	var s = $("#holder").attr("placeholder").replace("格子短袖女泡泡袖", "");
	$(".search-triggers li").click(function() {
			$(this).addClass("ju").siblings().removeClass("ju");
			var o = $(this).index();
			$("#holder").focus(),
				1 == o ? $(".search-ft").hide() : $(".search-ft").show(),
				1 == o | 2 == o ? ($("#holder").attr("placeholder", s), $("#photos").hide()) : ($("#holder")
					.attr("placeholder", s + "格子短袖女泡泡袖"), $("#photos").show())
		}),
		$(".fixedtool").stop().fadeIn();
	var o = $(".conve").offset().top;

	function l() {
		$(document).scrollTop() >= o ? ($(".fixedtool").css({
			position: "fixed",
			top: "75px"
		}), $(".fixedtool a").eq(5).stop().slideDown()) : ($(".fixedtool").css({
			position: "absolute",
			top: "592px"
		}), $(".fixedtool a").eq(5).stop().slideUp())
	}
	l(),
		$(".fixedtool a").mouseenter(function() {
			$(this).addClass("enterclass")
		}),
		$(".fixedtool a").mouseleave(function() {
			$(this).removeClass("enterclass")
		}),
		$(".fixedtool a").eq(6).mouseenter(function() {
			$("#ic").addClass("iclass")
		}),
		$(".fixedtool a").eq(6).mouseleave(function() {
			$("#ic").removeClass("iclass")
		}),
		$(".fixedtool a").eq(5).click(function() {
			$("body, html").stop().animate({
				scrollTop: 0
			})
		});
	var e = $(".layer").offset().top - 50;
	$(".fixedtool a").eq(0).click(function() {
		$(this).addClass("toolclass").siblings().removeClass("toolclass"),
			$("body, html").stop().animate({
				scrollTop: e
			})
	});
	var t = $("#indexmr").offset().top - 50;
	$(".fixedtool a").eq(1).click(function() {
		$(this).addClass("toolclass").siblings().removeClass("toolclass"),
			$("body, html").stop().animate({
				scrollTop: t
			})
	});
	var i = $("#life").offset().top - 50;
	$(".fixedtool a").eq(2).click(function() {
		$(this).addClass("toolclass").siblings().removeClass("toolclass"),
			$("body, html").stop().animate({
				scrollTop: i
			})
	});
	var a = $("#inexpensives").offset().top - 50;
	$(".fixedtool a").eq(3).click(function() {
		$(this).addClass("toolclass").siblings().removeClass("toolclass"),
			$("body, html").stop().animate({
				scrollTop: a
			})
	});
	var c = $("#like").offset().top - 50;
	$(".fixedtool a").eq(4).click(function() {
		$(this).addClass("toolclass").siblings().removeClass("toolclass"),
			$("body, html").stop().animate({
				scrollTop: c
			})
	});
	var n = t - 10,
		d = i - 10,
		r = a - 10,
		f = c - 10;
	setTimeout(function() {
			0 <= $(window).scrollTop() && $(window).scrollTop() < n && $(".fixedtool a").eq(0).addClass(
				"toolclass").siblings().removeClass("toolclass")
		},
		100);
	var p = $(".nav_second").offset().top;
	$(window).scroll(function() {
		l(),
			0 <= $(window).scrollTop() && $(window).scrollTop() < n && $(".fixedtool a").eq(0).addClass(
				"toolclass").siblings().removeClass("toolclass"),
			$(window).scrollTop() >= n && $(window).scrollTop() < d && $(".fixedtool a").eq(1).addClass(
				"toolclass").siblings().removeClass("toolclass"),
			$(window).scrollTop() >= d && $(window).scrollTop() < r && $(".fixedtool a").eq(2).addClass(
				"toolclass").siblings().removeClass("toolclass"),
			$(window).scrollTop() >= r && $(window).scrollTop() < f && $(".fixedtool a").eq(3).addClass(
				"toolclass").siblings().removeClass("toolclass"),
			$(window).scrollTop() >= f && $(".fixedtool a").eq(4).addClass("toolclass").siblings()
			.removeClass("toolclass"),
			$(window).scrollTop() >= p ? $(".fixationsearch").show() : $(".fixationsearch").hide()
	})
});
