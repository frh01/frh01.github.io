$(function() {
	function i() {
		var c = 0,
			i = 0;
		$(".itxt").each(function(t, e) {
				c += parseInt($(e).val())
			}),
			$(".amount-sum em").text(c),
			$(".p-sum").each(function(t, e) {
				i += parseFloat($(e).text().substr(1))
			}),
			$(".price-sum em").text("￥" + i.toFixed(2))
	}
	$(".checkall").change(function() {
			$(".j-checkbox, .checkall").prop("checked", $(this).prop("checked")),
				$(this).prop("checked") ? $(".cart-item").addClass("check-cart-item") : $(".cart-item")
				.removeClass("check-cart-item")
		}),
		$(".j-checkbox").change(function() {
			$(".j-checkbox:checked").length === $(".j-checkbox").length ? $(".checkall").prop("checked", !
				0) : $(".checkall").prop("checked", !1),
				$(this).prop("checked") ? $(this).parents(".cart-item").addClass("check-cart-item") : $(
					this).parents(".cart-item").removeClass("check-cart-item")
		}),
		$(".increment").click(function() {
			var t = $(this).siblings(".itxt").val();
			t++,
			$(this).siblings(".itxt").val(t);
			var e = (e = $(this).parents(".p-num").siblings(".p-price").html()).substr(1);
			console.log(e);
			var c = (e * t).toFixed(2);
			$(this).parents(".p-num").siblings(".p-sum").html("￥" + c),
				i()
		}),
		$(".decrement").click(function() {
			var t = $(this).siblings(".itxt").val();
			if (1 == t) return !1;
			t--,
			$(this).siblings(".itxt").val(t);
			var e = (e = $(this).parents(".p-num").siblings(".p-price").html()).substr(1);
			console.log(e),
				$(this).parents(".p-num").siblings(".p-sum").html("￥" + (e * t).toFixed(2)),
				i()
		}),
		$(".itxt").change(function() {
			var t = $(this).val(),
				e = (e = $(this).parents(".p-num").siblings(".p-price").html()).substr(1);
			$(this).parents(".p-num").siblings(".p-sum").html("￥" + (e * t).toFixed(2)),
				i()
		}),
		i(),
		$(".p-action a").click(function() {
			$(this).parents(".cart-item").remove(),
				i()
		}),
		$(".remove-batch").click(function() {
			$(".j-checkbox:checked").parents(".cart-item").remove(),
				i(),
				0 == $(".cart-item").length && $(".checkall").prop("checked", !1)
		}),
		$(".clear-all").click(function() {
			$(".cart-item").remove(),
				i(),
				$(".checkall").prop("checked", !1)
		})
});
