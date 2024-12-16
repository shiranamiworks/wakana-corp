/*
 * yuga.js 0.7.2 - �D���Web����̂��߂�JS
 *
 * Copyright (c) 2009 Kyosuke Nakamura (kyosuke.jp)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Since:     2006-10-30
 * Modified:  2012-02-04
 *
 * jQuery 1.3.1
 * ThickBox 3.1
 */

/*
 * [�g�p���@] XHTML��head�v�f���Ŏ��̂悤�ɓǂݍ��݂܂��B
 
<link rel="stylesheet" href="css/thickbox.css" type="text/css" media="screen" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/thickbox.js"></script>
<script type="text/javascript" src="js/yuga.js" charset="utf-8"></script>

 */

(function($) {

	$(function() {
		$.yuga.selflink({
			selfLinkAreaSelector:'#gnavi',
			changeImgSelf:false,
			changeImgParents:false
		});
		$.yuga.rollover();
		//$.yuga.externalLink();
		//$.yuga.thickbox();
		$.yuga.scroll();
		//$.yuga.tab();
		//$.yuga.stripe();
		//$.yuga.css3class();
	});

	//---------------------------------------------------------------------

	$.yuga = {
		// URI����͂����I�u�W�F�N�g��Ԃ�function
		Uri: function(path){
			var self = this;
			this.originalPath = path;
			//��΃p�X���擾
			this.absolutePath = (function(){
				var e = document.createElement('a');
				e.href = path;
				return e.href;
			})();
			//��΃p�X�𕪉�
			var fields = {'schema' : 2, 'username' : 5, 'password' : 6, 'host' : 7, 'path' : 9, 'query' : 10, 'fragment' : 11};
			var r = /^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);
			for (var field in fields) {
				this[field] = r[fields[field]];
			}
			this.querys = {};
			if(this.query){
				$.each(self.query.split('&'), function(){
					var a = this.split('=');
					if (a.length == 2) self.querys[a[0]] = a[1];
				});
			}
		},
		//���݂̃y�[�W�Ɛe�f�B���N�g���ւ̃����N
		selflink: function (options) {
			var c = $.extend({
				selfLinkAreaSelector:'body',
				selfLinkClass:'current',
				parentsLinkClass:'parentsLink',
				postfix: '_on',//_cr
				changeImgSelf:true,
				changeImgParents:true
			}, options);
			$(c.selfLinkAreaSelector+((c.selfLinkAreaSelector)?' ':'')+'a[href]').each(function(){
				var href = new $.yuga.Uri(this.getAttribute('href'));
				var setImgFlg = false;
				if ((href.absolutePath == location.href) && !href.fragment) {
					//���������Ƀ����N
					$(this).addClass(c.selfLinkClass);
					setImgFlg = c.changeImgSelf;
				} else if (0 <= location.href.search(href.absolutePath)) {
					//�e�f�B���N�g�������N
					$(this).addClass(c.parentsLinkClass);
					setImgFlg = c.changeImgParents;
				}
				if (setImgFlg){
					//img�v�f���܂܂�Ă����猻�ݗp�摜�i_cr�j�ɐݒ�
					$(this).find('img').each(function(){
						this.originalSrc = $(this).attr('src');
						this.currentSrc = this.originalSrc.replace(new RegExp('('+c.postfix+')?(\.gif|\.jpg|\.png)$'), c.postfix+"$2");
						$(this).attr('src',this.currentSrc);
					});
				}
			});
		},
		//���[���I�[�o�[
		rollover: function(options) {
			var c = $.extend({
				hoverSelector: '.btn, .allbtn img',
				groupSelector: '.btngroup',
				postfix: '_on'
			}, options);
			//���[���I�[�o�[����m�[�h�̏�����
			var rolloverImgs = $(c.hoverSelector).filter(isNotCurrent);
			rolloverImgs.each(function(){
				this.originalSrc = $(this).attr('src');
				this.rolloverSrc = this.originalSrc.replace(new RegExp('('+c.postfix+')?(\.gif|\.jpg|\.png)$'), c.postfix+"$2");
				this.rolloverImg = new Image;
				this.rolloverImg.src = this.rolloverSrc;
			});
			//�O���[�v����img�v�f���w�肷��Z���N�^����
			var groupingImgs = $(c.groupSelector).find('img').filter(isRolloverImg);

			//�ʏ탍�[���I�[�o�[
			rolloverImgs.not(groupingImgs).hover(function(){
				$(this).attr('src',this.rolloverSrc);
			},function(){
				$(this).attr('src',this.originalSrc);
			});
			//�O���[�v�����ꂽ���[���I�[�o�[
			$(c.groupSelector).hover(function(){
				$(this).find('img').filter(isRolloverImg).each(function(){
					$(this).attr('src',this.rolloverSrc);
				});
			},function(){
				$(this).find('img').filter(isRolloverImg).each(function(){
					$(this).attr('src',this.originalSrc);
				});
			});
			//�t�B���^�pfunction
			function isNotCurrent(i){
				return Boolean(!this.currentSrc);
			}
			function isRolloverImg(i){
				return Boolean(this.rolloverSrc);
			}

		},
		//�O�������N�͕ʃE�C���h�E��ݒ�
		externalLink: function(options) {
			var c = $.extend({
				windowOpen:true,
				externalClass: 'externalLink',
				addIconSrc: ''
			}, options);
			var uri = new $.yuga.Uri(location.href);
			var e = $('a[href^="http://"]').not('a[href^="' + uri.schema + '://' + uri.host + '/' + '"]');
			if (c.windowOpen) {
				e.click(function(){
					window.open(this.href, '_blank');
					return false;
				});
			}
			if (c.addIconSrc) e.not(':has(img)').after($('<img src="'+c.addIconSrc+'" class="externalIcon" />'));
			e.addClass(c.externalClass);
		},
		//�摜�֒������N�����thickbox�ŕ\��(thickbox.js���p)
		thickbox: function() {
			try {
				tb_init('a[href$=".jpg"]:not(.thickbox, a[href*="?"]), a[href$=".gif"][href!="?"]:not(.thickbox, a[href*="?"]), a[href$=".png"][href!="?"]:not(.thickbox, a[href*="?"])');
			} catch(e) {
			}	
		},
		//�y�[�W�������N�͂��邷��X�N���[��
		scroll: function(options) {
			//�h�L�������g�̃X�N���[���𐧌䂷��I�u�W�F�N�g
			var scroller = (function() {
				var c = $.extend({
					easing:100,
					step:30,
					fps:60,
					fragment:''
				}, options);
				c.ms = Math.floor(1000/c.fps);
				var timerId;
				var param = {
					stepCount:0,
					startY:0,
					endY:0,
					lastY:0
				};
				//�X�N���[�����Ɏ��s�����function
				function move() {
					if (param.stepCount == c.step) {
						//�X�N���[���I����
						setFragment(param.hrefdata.absolutePath);
						window.scrollTo(getCurrentX(), param.endY);
					} else if (param.lastY == getCurrentY()) {
						//�ʏ�X�N���[����
						param.stepCount++;
						window.scrollTo(getCurrentX(), getEasingY());
						param.lastY = getEasingY();
						timerId = setTimeout(move, c.ms); 
					} else {
						//�L�����Z������
						if (getCurrentY()+getViewportHeight() == getDocumentHeight()) {
							//��ʉ��̂��߃X�N���[���I��
							setFragment(param.hrefdata.absolutePath);
						}
					}
				}
				function setFragment(path){
					location.href = path
				}
				function getCurrentY() {
					return document.body.scrollTop  || document.documentElement.scrollTop;
				}
				function getCurrentX() {
					return document.body.scrollLeft  || document.documentElement.scrollLeft;
				}
				function getDocumentHeight(){
					return document.documentElement.scrollHeight || document.body.scrollHeight;
				}
				function getViewportHeight(){
					return (!$.browser.safari && !$.browser.opera) ? document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight : window.innerHeight;
				}
				function getEasingY() {
					return Math.floor(getEasing(param.startY, param.endY, param.stepCount, c.step, c.easing));
				}
				function getEasing(start, end, stepCount, step, easing) {
					var s = stepCount / step;
					return (end - start) * (s + easing / (100 * Math.PI) * Math.sin(Math.PI * s)) + start;
				}
				return {
					set: function(options) {
						this.stop();
						if (options.startY == undefined) options.startY = getCurrentY();
						param = $.extend(param, options);
						param.lastY = param.startY;
						timerId = setTimeout(move, c.ms); 
					},
					stop: function(){
						clearTimeout(timerId);
						param.stepCount = 0;
					}
				};
			})();
			$('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').each(function(){
				this.hrefdata = new $.yuga.Uri(this.getAttribute('href'));
			}).click(function(){
				var target = $('#'+this.hrefdata.fragment);
				if (target.length == 0) target = $('a[name='+this.hrefdata.fragment+']');
				if (target.length) {
					scroller.set({
						endY: target.offset().top,
						hrefdata: this.hrefdata
					});
					return false;
				}
			});
		},
		//�^�u�@�\
		tab: function(options) {
			var c = $.extend({
				tabNavSelector:'.tabNav',
				activeTabClass:'active'
			}, options);
			$(c.tabNavSelector).each(function(){
				var tabNavList = $(this).find('a[href^=#], area[href^=#]');
				var tabBodyList;
				tabNavList.each(function(){
					this.hrefdata = new $.yuga.Uri(this.getAttribute('href'));
					var selecter = '#'+this.hrefdata.fragment;
					if (tabBodyList) {
						tabBodyList = tabBodyList.add(selecter);
					} else {
						tabBodyList = $(selecter);
					}
					$(this).unbind('click');
					$(this).click(function(){
						tabNavList.removeClass(c.activeTabClass);
						$(this).addClass(c.activeTabClass);
						tabBodyList.hide();
						$(selecter).show();
						return false;
					});
				});
				tabBodyList.hide()
				tabNavList.filter(':first').trigger('click');
			});
		},
		//��A�����������ǉ�
		stripe: function(options) {
			var c = $.extend({
				oddClass:'odd',
				evenClass:'even'
			}, options);
			$('ul, ol').each(function(){
				//JS�ł�0���琔����̂�even��add���t�Ɏw��
				$(this).children('li:odd').addClass(c.evenClass);
				$(this).children('li:even').addClass(c.oddClass);
			});
			$('table, tbody').each(function(){
				$(this).children('tr:odd').addClass(c.evenClass);
				$(this).children('tr:even').addClass(c.oddClass);
			});
		},
		//css3�̃N���X��ǉ�
		css3class: function() {
			//:first-child, :last-child���N���X�Ƃ��Ēǉ�
			$('body :first-child').addClass('firstChild');
			$('body :last-child').addClass('lastChild');
			//css3��:empty���N���X�Ƃ��Ēǉ�
			$('body :empty').addClass('empty');
		}
	};
})(jQuery);
