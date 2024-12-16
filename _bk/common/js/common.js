/*--------------------------------------------------------------------------*
 *
 * common.js
 *
 *--------------------------------------------------------------------------*/

// ウィンドウがロードされたら実行
window.onload = function() {
	// ポップアップウィンドウの設定
	$('a.openwin').openwin({
		option:{
			width		: 900,
			height		: 800,
			top			: false,
			left		: false,
			menubar		: "no",
			toolbar		: "no",
			location	: "no",
			status		: "no",
			resizable	: "yes",
			scrollbars	: "yes",
			directories	: "no",
			titlebar	: "yes",
			fullscreen	: "no"
		}
	});
};


/*--------------------------------------------------------------------------*
 * ポップアップウィンドウ
 *
 * jquery.openwin.js
 * http://shanabrian.com/web/jquery/window01.php
 *
 * 下記の様にhtml側のrel要素で個別にオプション指定も可。
 * <a href="" class="openwin" rel="scrollbars=yes,target=_self,blur=true">hoge</a>
 *--------------------------------------------------------------------------*/
 
(function($) {
	$.fn.openwin = function(settings) {
		settings = jQuery.extend({
			option: {
				width		: false,
				height		: false,
				top			: false,
				left		: false,
				menubar		: "no",
				toolbar		: "no",
				location	: "no",
				status		: "no",
				resizable	: "no",
				scrollbars	: "no",
				directories	: "no",
				titlebar	: "yes",
				fullscreen	: "no"
			},
			target : "_blank"
			/*
			blur   : false,
			focus  : false
			*/
		}, settings);
		
		this.click(function() {
			var options = [];
			if($(this).attr("rel")) {
				var rel = $(this).attr("rel").split(",");
				var reloption = {};
				for(var i in rel) {
					var a = rel[i].split("=");
					reloption[a[0]] = a[1];
				}
			}
			for(var k in settings.option) {
				var v = settings.option[k];
				if(reloption) {
					if(reloption[k]) {
						v = reloption[k];
					}
				}
				if(v != false) {
					options.push(k + "=" + v);
				}
			}
			var target = settings.target;
			if(reloption) {
				if(reloption["target"]) {
					target = reloption["target"];
				}
			}
			var win = window.open($(this).attr("href"), target, options.join(","));
			return false;
			
			/* IEで親ウィンドウまで遷移してしまうバグがあったので以下コメントアウト
			if(settings.blur == true) {
				win.blur();
			}
			if(settings.focus == true) {
				win.focus();
			}
			*/
		});
	}
})(jQuery);


/*--------------------------------------------------------------------------*
 * fixHeight - jQuery Plugin
 *
 * Author Koji Kimura @ STARRYWORKS inc.
 * http://www.starryworks.co.jp/
 *
 * Licensed under the MIT License
 *--------------------------------------------------------------------------*/

(function (b) {
	function j(a) {
		a = b(a);
		if (a.data("fixHeightChildrenGroups")) return a.data("fixHeightChildrenGroups");
		var e = [],
			c = a.find(".fixHeightChild");
		c.length && e.push(c);
		c = a.find("*[class*='fixHeightChild']:not(.fixHeightChild)");
		if (c.length) {
			var f = {};
			c.each(function () {
				var a = b(this).attr("class").split(" "),
					c, e = a.length,
					d;
				for (c = 0; c < e; c++) if (d = a[c].match(/fixHeightChild[a-z0-9_-]+/i))(d = d.toString()) && (f[d] = d)
			});
			for (var d in f) e.push(a.find("." + d))
		}
		e.length || (c = a.children(), c.length && e.push(c));
		a.data("fixHeightChildrenGroups", e);
		g.push(a);
		return e
	}
	function k() {
		h || (h = !0, d = b(document).append('<div style="position:absolute;left:-9999px;top:-9999px;">s</div>'), setInterval(b.checkFixHeight, 1E3), b(window).resize(b.checkFixHeight), b.checkFixHeight(), b(window).load(function () {
			b.checkFixHeight(!0)
		}))
	}
	var h = !1,
		g = [],
		i = 0,
		d;
	b.fn.fixHeight = function () {
		this.each(function () {
			var a = j(this);
			b.each(a, function () {
				var a = b(this);
				if (a.filter(":visible").length) {
					var c = [],
						d = 0;
					a.each(function () {
						if (d != b(this).position().top) b(c).sameHeight(), c = [], d = b(this).position().top;
						c.push(this)
					});
					c.length && b(c).sameHeight()
				}
			})
		});
		k();
		return this
	};
	b.checkFixHeight = function (a) {
		typeof d != "undefined" && !(d.height() == i && a !== !0) && (i = d.height(), b(g).fixHeight())
	};
	b.fn.sameHeight = function () {
		var a = 0;
		this.css("height", "auto");
		this.each(function () {
			b(this).height() > a && (a = b(this).height())
		});
		return this.height(a)
	}
})(jQuery);
jQuery(document).ready(function () {
	$(".fixHeight").fixHeight()
});