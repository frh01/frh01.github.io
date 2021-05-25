$(document).ready(function() {
	function t() {
		$(".t-load-bar .inner-load-bar").css("animation", "load 3s linear infinite")
	}

	function e() {
		return "0px" === $(".current-t-slide").css("left") && "0px" === $(".current-t-slide").css("right")
	}

	function s() {
		$(".current-t-slide").next().hasClass("t-slide") && e() ? ($(".current-t-slide").removeClass(
			"current-t-slide").css($hiddenSlideStylesLeft).next().css($tSlideInStyles).addClass(
			"current-t-slide"), $(".current-dot").removeClass("current-dot").next().addClass(
			"current-dot")) : e() && ($(".current-t-slide").removeClass("current-t-slide"), $(".t-slide")
			.first().addClass("current-t-slide").css($tSlideInStyles), l(), $(".current-dot").removeClass(
				"current-dot"), $(".t-dot").first().addClass("current-dot"))
	}

	function n() {
		$(".current-t-slide").prev().hasClass("t-slide") && e() ? ($(".current-t-slide").removeClass(
			"current-t-slide").css($hiddenSlideStylesRight).prev().css($tSlideInStyles).addClass(
			"current-t-slide"), $(".current-dot").removeClass("current-dot").prev().addClass(
			"current-dot")) : e() && ($(".current-t-slide").removeClass("current-t-slide"), $(".t-slide")
			.last().addClass("current-t-slide").css($tSlideInStyles), $t_total = $(".t-slide").length - 1,
			$(".t-slide").each(function(t, e) {
				t < $t_total && $(this).css($hiddenSlideStylesLeft)
			}), $(".current-dot").removeClass("current-dot"), $(".t-dot").last().addClass("current-dot"))
	}

	function l() {
		$(".t-slide").each(function(t, e) {
			0 < t && $(this).css($hiddenSlideStylesRight)
		})
	}
	$offset = $(".trent-slider").width(),
		$tSlideInStyles = {
			left: "0",
			right: "0"
		},
		$t_loadBarStopStyles = {
			animation: "none",
			width: "0%"
		},
		$hiddenSlideStylesRight = {
			left: $offset,
			right: 0 - $offset
		},
		$hiddenSlideStylesLeft = {
			right: $offset,
			left: 0 - $offset
		},
		$(".t-slide").each(function(t, e) {
			$(".t-slide-dots").append('<div class="t-dot"></div>'),
				0 === t && $(".t-dot").first().addClass("current-dot")
		}),
		$(".trent-slider").css("height", $(".trent-slider").width() / 2),
		l(),
		t(),
		$(".trent-slider").hover(function() {
				$(".t-load-bar .inner-load-bar").css($t_loadBarStopStyles)
			},
			function() {
				t()
			});
	var r = window.setInterval(function() {
			s()
		},
		3e3);
	$(".trent-slider").mouseover(function() {
			clearInterval(r)
		}).mouseout(function() {
			r = window.setInterval(function() {
					s()
				},
				3e3)
		}),
		$(".t-slider-controls .arrow").click(function() {
			$(this).hasClass("right-arrow") ? s() : $(this).hasClass("left-arrow") && n()
		}),
		$(".t-slide-dots .t-dot").click(function() {
			$newDotIndex = $(this).index(),
				$currentDotIndex = $(".current-dot").index(),
				e() && $(".t-slide").each(function(t, e) {
					$(".current-dot").removeClass("current-dot"),
						$(".current-t-slide").removeClass("current-t-slide"),
						$(".t-dot").eq($newDotIndex).addClass("current-dot"),
						$(".t-slide").eq($newDotIndex).css($tSlideInStyles).addClass("current-t-slide"),
						t > $newDotIndex ? $(this).css($hiddenSlideStylesRight) : t < $newDotIndex && $(
							this).css($hiddenSlideStylesLeft)
				})
		}),
		$(document).ready(function() {
			var t = $(".banner"),
				e = $(".bannerAllPic"),
				s = $(".aLeft"),
				n = $(".aRight"),
				l = parseInt($(".banner").css("width")),
				r = 0,
				d = $(".banner>.bannerAllPic>li:first").clone();
			e.append(d);
			var i = $(".bannerAllPic > li").length;
			e.css("width", i * l),
				n.click(function() {
					r == i - 1 && (r = 0, e.css("left", 0)),
						r++,
						e.stop().animate({
							left: -r * l
						})
				});
			var a = ($(".tmall").width() - $(".downline").width()) / (i - 2);
			setInterval(function() {
						var t = r + 1;
						7 == t && (t = 1),
							$(".tmall .tmall-hd .counter span").html(t);
						var e = a * (t - 1);
						$(".tmall .tmall-hd .downline").stop().animate({
								left: e + "px"
							},
							100)
					},
					100),
				s.click(function() {
					r <= 0 && (r = i - 1, e.css("left", -r * l)),
						r--,
						e.stop().animate({
							left: -r * l
						})
				});
			var c = setInterval(function() {
					n.click()
				},
				3e3);
			t.hover(function() {
					clearInterval(c)
				},
				function() {
					c = setInterval(function() {
							n.click()
						},
						3e3)
				})
		})
});
