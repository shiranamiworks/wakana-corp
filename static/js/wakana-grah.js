(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"wakana_grah_atlas_", frames: [[0,0,212,221],[0,400,178,253],[214,0,266,150],[180,400,147,271],[0,223,259,175]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.graph01 = function() {
	this.spriteSheet = ss["wakana_grah_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.graph02 = function() {
	this.spriteSheet = ss["wakana_grah_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.graph03 = function() {
	this.spriteSheet = ss["wakana_grah_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.graph04 = function() {
	this.spriteSheet = ss["wakana_grah_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.spriteSheet = ss["wakana_grah_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.wakanagrah = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_134 = new cjs.Graphics().p("AnuhZIqRp7INSHSIWtMcIhjC7g");
	var mask_graphics_135 = new cjs.Graphics().p("AOgIoI0qnbIhLgpIrOqXIZJIyIL9HuIhFDHg");
	var mask_graphics_136 = new cjs.Graphics().p("AQLH7I17kyIhOgtIsGqyIaFEhIMEI7IgqDRg");
	var mask_graphics_137 = new cjs.Graphics().p("AlWE2IhTgxIs7rMIa+AhIMLKDIgQDbIhkAQg");
	var mask_graphics_138 = new cjs.Graphics().p("AmZHBIttrkIb0jRIMQLGIAJDlIg8A7I4OADg");
	var mask_graphics_139 = new cjs.Graphics().p("AmRI9Iudr7Icnm2IMVMHIAhDtIgWBjI5RCRg");
	var mask_graphics_140 = new cjs.Graphics().p("AmRKwIvJsQIdWqKIMaNCIA2D2IAPCHI6QEXg");
	var mask_graphics_141 = new cjs.Graphics().p("AmbMbIvysjIeCtRIMfN6IB6GnI7KGSg");
	var mask_graphics_142 = new cjs.Graphics().p("AmkN/IwYs3IerwHIMiOuIBeEEIBODKI8AIDg");
	var mask_graphics_143 = new cjs.Graphics().p("AmsPbIw8tIIfQyxIMnPeIBvELIBsDnI80Jtg");
	var mask_graphics_144 = new cjs.Graphics().p("Am0QuIxctXIfz1LIMqQJIB/ESICFEBI9gLNg");
	var mask_graphics_145 = new cjs.Graphics().p("Am7R6Ix5tlMAgSgXWIMuQwICNEWICcEaI+JMkg");
	var mask_graphics_146 = new cjs.Graphics().p("AnCS+IyTtyMAgugZTIMxRTICaEcICyEuI+vNyg");
	var mask_graphics_147 = new cjs.Graphics().p("A5xF9MAhHgbCIMzRzICkEfIDFFDI/PO1g");
	var mask_graphics_148 = new cjs.Graphics().p("A6KGnMAhcgchIM1SNICvEjIDVFUI/rPwg");
	var mask_graphics_149 = new cjs.Graphics().p("A6fHLMAhvgdxIM2SjIC4EmIDiFiMggDAQjg");
	var mask_graphics_150 = new cjs.Graphics().p("A6wHoMAh9gezIM4S1IGsKWMggXARNg");
	var mask_graphics_151 = new cjs.Graphics().p("A69H/MAiIgfnIM6TEIG5KhMgglARsg");
	var mask_graphics_152 = new cjs.Graphics().p("A7GIPMAiQggMIM6TPIHDKoMggwASEg");
	var mask_graphics_153 = new cjs.Graphics().p("A7MIZMAiVggiIUEeCMgg3ASRg");
	var mask_graphics_154 = new cjs.Graphics().p("A5CKDIiMhnICMiFIUWzVIL1rPIHgLPIMmS2Mgg5ASWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_graphics_134,x:21.2,y:170.6}).wait(1).to({graphics:mask_graphics_135,x:31.7,y:163.8}).wait(1).to({graphics:mask_graphics_136,x:41.6,y:157.3}).wait(1).to({graphics:mask_graphics_137,x:51,y:152}).wait(1).to({graphics:mask_graphics_138,x:60.3,y:138.1}).wait(1).to({graphics:mask_graphics_139,x:69.7,y:130.3}).wait(1).to({graphics:mask_graphics_140,x:79.3,y:123.1}).wait(1).to({graphics:mask_graphics_141,x:89.2,y:116.3}).wait(1).to({graphics:mask_graphics_142,x:98.4,y:110.1}).wait(1).to({graphics:mask_graphics_143,x:106.9,y:104.3}).wait(1).to({graphics:mask_graphics_144,x:114.6,y:99.1}).wait(1).to({graphics:mask_graphics_145,x:121.5,y:94.3}).wait(1).to({graphics:mask_graphics_146,x:127.8,y:90.1}).wait(1).to({graphics:mask_graphics_147,x:133.3,y:86.3}).wait(1).to({graphics:mask_graphics_148,x:138.1,y:83.1}).wait(1).to({graphics:mask_graphics_149,x:142.1,y:80.3}).wait(1).to({graphics:mask_graphics_150,x:145.4,y:78.1}).wait(1).to({graphics:mask_graphics_151,x:148,y:76.3}).wait(1).to({graphics:mask_graphics_152,x:149.8,y:75.1}).wait(1).to({graphics:mask_graphics_153,x:150.9,y:74.3}).wait(1).to({graphics:mask_graphics_154,x:151.3,y:74.1}).wait(1));

	// graph05.png
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(10,1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).wait(21));

	// レイヤー 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_102 = new cjs.Graphics().p("AUquWIAhDEI/BVxIg5AnIgGgnIqVD4g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AhphDIWhpMIASBnIgEBcIx7KmIutGLIgHgrIpgBXg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AshGlIovhDIVZqrIU1iIIATBuIgYBVIztJ/ItmBhg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AtOFoIgIgwIoBjRIXMqFITPEfIAUB1IgrBOI1XJbg");
	var mask_1_graphics_106 = new cjs.Graphics().p("At+EZIgJgzInWlWIY2piIRwKqIAVB7Ig8BGI26I5g");
	var mask_1_graphics_107 = new cjs.Graphics().p("AurDPIgJg2ImvnQIaZpBIQXQVIAXCBIhNBAI4VIbg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AvVCLIgJg4ImKpCIbzoiIPHVkIAXCHIhcA7I5qH9g");
	var mask_1_graphics_109 = new cjs.Graphics().p("Av7BNIgJg6IlpqpIdGoIIN9aZIAYCKIhqA2I63Hkg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AwdAUIgKg6IlKsIIeRnuIM5etIAZCQIh2AwI79HMg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Aw7gdIgKg9IkwtcIfUnXMAL+AilIAZCTIiAAtI88G3g");
	var mask_1_graphics_112 = new cjs.Graphics().p("AxWhKIgLg+IkYumMAgQgHDMALJAmAIAaCWIiLAqI9yGjg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AxuhwIgLhAIkDvlMAhDgGzMAKbAo+IAbCaIiUAmI+iGTg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AxrgrIghimIjywcMAhugGlMAJ0ArfIAbCdIiaAjI/KGFg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A2A01MAiRgGYMAJVAtiIAbCeIigAhI/rF6g");
	var mask_1_graphics_116 = new cjs.Graphics().p("A2C1tMAitgGPMAJYAxoMgiqAGRg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A2D2VMAjBgGJMAJGAyzMgi/AGJg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A2D2tMAjMgGFMAI7AzgMgjMAGFg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_152 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A2E21MAjRgGDMAI4AzuMgjRAGDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_1_graphics_102,x:122.8,y:392.9}).wait(1).to({graphics:mask_1_graphics_103,x:118.2,y:377.9}).wait(1).to({graphics:mask_1_graphics_104,x:114.6,y:369.3}).wait(1).to({graphics:mask_1_graphics_105,x:111.2,y:358.1}).wait(1).to({graphics:mask_1_graphics_106,x:108.1,y:345.8}).wait(1).to({graphics:mask_1_graphics_107,x:105.2,y:334.5}).wait(1).to({graphics:mask_1_graphics_108,x:102.5,y:324}).wait(1).to({graphics:mask_1_graphics_109,x:100.1,y:314.5}).wait(1).to({graphics:mask_1_graphics_110,x:97.9,y:305.8}).wait(1).to({graphics:mask_1_graphics_111,x:95.9,y:298.1}).wait(1).to({graphics:mask_1_graphics_112,x:94.2,y:291.3}).wait(1).to({graphics:mask_1_graphics_113,x:92.7,y:285.4}).wait(1).to({graphics:mask_1_graphics_114,x:91.4,y:280.4}).wait(1).to({graphics:mask_1_graphics_115,x:90.4,y:276.3}).wait(1).to({graphics:mask_1_graphics_116,x:89.6,y:273.1}).wait(1).to({graphics:mask_1_graphics_117,x:89,y:270.9}).wait(1).to({graphics:mask_1_graphics_118,x:88.7,y:269.5}).wait(1).to({graphics:mask_1_graphics_119,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_120,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_121,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_122,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_123,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_124,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_125,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_126,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_127,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_128,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_129,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_130,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_131,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_132,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_133,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_134,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_135,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_136,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_137,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_138,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_139,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_140,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_141,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_142,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_143,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_144,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_145,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_146,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_147,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_148,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_149,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_150,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_151,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_152,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_153,x:88.5,y:269}).wait(1).to({graphics:mask_1_graphics_154,x:88.5,y:269}).wait(1));

	// graph04.png
	this.instance_1 = new lib.graph04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,137);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).wait(53));

	// レイヤー 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_67 = new cjs.Graphics().p("AhmJuIgWwFICdlHIBckTIAAfjg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AjAKUIhFjjIgPuCIDrkoICbj4ICjJGIAAOCIiXIbg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AkWK3IiBjMIgNv0IEzkJIDYjfIE+ILIAAP0IkmHkg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AloLaIi5i2IgMxiIF3jsIETjHIHRHSIAARiImuGvg");
	var mask_2_graphics_71 = new cjs.Graphics().p("Am0L5IjvihIgKzIIG4jRIFIiwIJbGdIAATIIotF+g");
	var mask_2_graphics_72 = new cjs.Graphics().p("An8MYIkhiOIgK0pIH1i3IF8ibILeFrIAAUoIqmFQg");
	var mask_2_graphics_73 = new cjs.Graphics().p("Ao/M0IlQh8IgI2CIItigIGsiHINWE8IAAWCIsUElg");
	var mask_2_graphics_74 = new cjs.Graphics().p("Ap9NOIl9hqIgH3WIJjiLIHZh0IPHERIAAXWIt9D8g");
	var mask_2_graphics_75 = new cjs.Graphics().p("Aq3NmImlhbIgG4jIKTh2IIChjIQwDoIAAYkIveDXg");
	var mask_2_graphics_76 = new cjs.Graphics().p("ArtN9InKhNIgF5rILAhiIIphUISQDDIAAZsIw3C0g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AsdORIntg/IgE6tILqhRIJLhFIToChIAAatIyICVg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AtJOjIoLgyIgE7oIV5h6IU4CCIAAboIzRB5g");
	var mask_2_graphics_79 = new cjs.Graphics().p("AtwO0IongoIgE8dIW4hgIV+BnIAAccI0TBgg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AuTPDIpAggIgC9KIXthKIW+BPIAAdLI1NBJg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A4GO5IgB90IYbg2IX1A6IAAdzI2BA2g");
	var mask_2_graphics_82 = new cjs.Graphics().p("A4yPKIgB+VIZEgmIYiAoIAAeWI2qAlg");
	var mask_2_graphics_83 = new cjs.Graphics().p("A5VPYIAA+xIZkgYIZHAaIAAexI3NAYg");
	var mask_2_graphics_84 = new cjs.Graphics().p("A5wPjIgB/GIZ+gOIZlAOIAAfHI3oAOg");
	var mask_2_graphics_85 = new cjs.Graphics().p("A6EPrIgB/WIaQgGIZ6AGIAAfXI37AGg");
	var mask_2_graphics_86 = new cjs.Graphics().p("A6QPxIAA/gMA0hAAAIAAfgg");
	var mask_2_graphics_87 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_88 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_91 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_92 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_93 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_98 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_103 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_104 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_105 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_106 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_107 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_108 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_109 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_110 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_111 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_112 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_113 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_114 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_115 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_116 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_117 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_118 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_119 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_120 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_121 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_122 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_123 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_124 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_125 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_126 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_127 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_128 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_129 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_130 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_131 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_132 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_133 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_134 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_135 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_136 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_149 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_150 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_151 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_152 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_153 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A6UPyIAA/jMA0pAAAIAAfjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_2_graphics_67,x:376.5,y:362}).wait(1).to({graphics:mask_2_graphics_68,x:358.4,y:362}).wait(1).to({graphics:mask_2_graphics_69,x:341.2,y:362}).wait(1).to({graphics:mask_2_graphics_70,x:324.9,y:362}).wait(1).to({graphics:mask_2_graphics_71,x:309.6,y:362}).wait(1).to({graphics:mask_2_graphics_72,x:295.2,y:362}).wait(1).to({graphics:mask_2_graphics_73,x:281.7,y:362}).wait(1).to({graphics:mask_2_graphics_74,x:269.1,y:362}).wait(1).to({graphics:mask_2_graphics_75,x:257.5,y:362}).wait(1).to({graphics:mask_2_graphics_76,x:246.8,y:362}).wait(1).to({graphics:mask_2_graphics_77,x:237,y:362}).wait(1).to({graphics:mask_2_graphics_78,x:228.2,y:362}).wait(1).to({graphics:mask_2_graphics_79,x:220.3,y:362}).wait(1).to({graphics:mask_2_graphics_80,x:213.3,y:362}).wait(1).to({graphics:mask_2_graphics_81,x:207.3,y:362}).wait(1).to({graphics:mask_2_graphics_82,x:202.2,y:362}).wait(1).to({graphics:mask_2_graphics_83,x:198,y:362}).wait(1).to({graphics:mask_2_graphics_84,x:194.7,y:362}).wait(1).to({graphics:mask_2_graphics_85,x:192.4,y:362}).wait(1).to({graphics:mask_2_graphics_86,x:191,y:362}).wait(1).to({graphics:mask_2_graphics_87,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_88,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_89,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_90,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_91,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_92,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_93,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_94,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_95,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_96,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_97,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_98,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_99,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_100,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_101,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_102,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_103,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_104,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_105,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_106,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_107,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_108,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_109,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_110,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_111,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_112,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_113,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_114,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_115,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_116,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_117,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_118,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_119,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_120,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_121,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_122,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_123,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_124,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_125,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_126,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_127,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_128,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_129,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_130,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_131,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_132,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_133,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_134,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_135,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_136,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_137,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_138,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_139,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_140,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_141,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_142,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_143,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_144,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_145,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_146,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_147,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_148,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_149,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_150,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_151,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_152,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_153,x:190.5,y:362}).wait(1).to({graphics:mask_2_graphics_154,x:190.5,y:362}).wait(1));

	// graph03.png
	this.instance_2 = new lib.graph03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,302);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).wait(88));

	// レイヤー 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_36 = new cjs.Graphics().p("A1tI6QgCgDEpjfIEojeIWno6ILlh6I5dJVIo+ERQo5EPgHAAIAAgBg");
	var mask_3_graphics_37 = new cjs.Graphics().p("A1wHIQAygWI2kOIJskpIEQhqIPhiZIEchEIr0DXIozETItvCZIkmCJQjtCNguAAQgIAAgCgFg");
	var mask_3_graphics_38 = new cjs.Graphics().p("A10FtIKOk4IKalBIEhh2IPUAyIDMgBIsEEtIpCFMItbglIkjA4QirBIhIAAQgoAAgKgWg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AszFAIkggVQj8A/gohdIKylLILElYIEyiCIPJDyIB+A9IsSF/IpQGDg");
	var mask_3_graphics_40 = new cjs.Graphics().p("As6FOIkdhdQjuAQg1h5IAAgBILTldILrlsIFDiNIO+GmIA2B3IsgHNIpcG1g");
	var mask_3_graphics_41 = new cjs.Graphics().p("AtHFcIkaigQjigdhBiTIAAgBILzluIMQmBIFRiWIO0JOIgNCuIssIVIppHkg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AtsFoIkYjeQjXhGhLirIAAAAIMQmAIMzmTIFfigIOrLsIhODgIs3JZIp0IQg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AuOF0IkWkZQjMhqhVjEIAAAAQEjiQIIj+INSmkIFtipIOhN9IiIEPItCKYIp/I5g");
	var mask_3_graphics_44 = new cjs.Graphics().p("AuuF/IkUlOQjCiOhejYIAAAAINEmcINvm0IF4iwIOaQCIi+E6ItMLRIqIJeg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AvLGIIkSl+Qi5iuhnjrIAAgBQFeiuH9j6IOKnCIGDi4IOTR9IjvFhItVMGIqSKBg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AvlGSIkQmqQixjMhvj8IAAgBINwm0IOinOIGNi/IOMTrIkcGFItdM2IqZKfg");
	var mask_3_graphics_47 = new cjs.Graphics().p("Av8GZIkQnQQipjmh1kMIAAgBIOBm+IO5naIGVjEIOGVNIlDGlItlNhIqgK6g");
	var mask_3_graphics_48 = new cjs.Graphics().p("AwRGgIkOn0Qijj8h7kaIAAgBIOSnGIPLnkIGdjKIOBWkIlmHBItrOHIqnLTg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AwiGmIkOoRQiekRiAkmIAAAAIOgnPIPcntIGkjOIN8XwImEHZItxOoIqsLog");
	var mask_3_graphics_50 = new cjs.Graphics().p("AwyGsIkMosQiZkhiEkwIAAgBIOrnUIPrn1IGpjSIN4YwImeHuIt1PDIqyL6g");
	var mask_3_graphics_51 = new cjs.Graphics().p("Aw+GvIkLpAQiWkuiIk5IAAgBIO2nZIP1n7IGujVIN2ZkIm0H/It5PZIq1MJg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AxIGzIkKpQQiTk6iLk/IAAgBIO9ndIP/oAIGxjYINzaOInDIMI40b+g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AxOG1IkLpcQiQlBiNlDIAAgBIPDngIQFoEIGzjZINyaqMggIAkpg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AxTG2IkJpiIkdqMIAAgBIPFniIQJoFIG2jbINva8MggRAk7g");
	var mask_3_graphics_55 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_98 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_114 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A57s9MAmHgTEIA8B2IM0ZMIs0OpIzhWYg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_3_graphics_36,x:394,y:159.1}).wait(1).to({graphics:mask_3_graphics_37,x:389.6,y:175.3}).wait(1).to({graphics:mask_3_graphics_38,x:385.5,y:188.8}).wait(1).to({graphics:mask_3_graphics_39,x:381.6,y:202.6}).wait(1).to({graphics:mask_3_graphics_40,x:377.9,y:219.9}).wait(1).to({graphics:mask_3_graphics_41,x:375.2,y:236}).wait(1).to({graphics:mask_3_graphics_42,x:375.2,y:251}).wait(1).to({graphics:mask_3_graphics_43,x:375.2,y:264.9}).wait(1).to({graphics:mask_3_graphics_44,x:375.1,y:277.7}).wait(1).to({graphics:mask_3_graphics_45,x:375.1,y:289.4}).wait(1).to({graphics:mask_3_graphics_46,x:375.1,y:300}).wait(1).to({graphics:mask_3_graphics_47,x:375.1,y:309.4}).wait(1).to({graphics:mask_3_graphics_48,x:375.1,y:317.8}).wait(1).to({graphics:mask_3_graphics_49,x:375.1,y:325}).wait(1).to({graphics:mask_3_graphics_50,x:375,y:331.1}).wait(1).to({graphics:mask_3_graphics_51,x:375,y:336.1}).wait(1).to({graphics:mask_3_graphics_52,x:375,y:340}).wait(1).to({graphics:mask_3_graphics_53,x:375,y:342.8}).wait(1).to({graphics:mask_3_graphics_54,x:375,y:344.5}).wait(1).to({graphics:mask_3_graphics_55,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_56,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_57,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_58,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_59,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_60,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_61,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_62,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_63,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_64,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_65,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_66,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_67,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_68,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_69,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_70,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_71,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_72,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_73,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_74,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_75,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_76,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_77,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_78,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_79,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_80,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_81,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_82,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_83,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_84,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_85,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_86,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_87,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_88,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_89,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_90,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_91,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_92,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_93,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_94,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_95,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_96,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_97,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_98,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_99,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_100,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_101,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_102,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_103,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_104,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_105,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_106,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_107,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_108,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_109,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_110,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_111,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_112,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_113,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_114,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_115,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_116,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_117,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_118,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_119,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_120,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_121,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_122,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_123,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_124,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_125,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_126,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_127,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_128,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_129,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_130,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_131,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_132,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_133,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_134,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_135,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_136,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_137,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_138,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_139,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_140,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_141,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_142,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_143,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_144,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_145,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_146,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_147,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_148,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_149,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_150,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_151,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_152,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_153,x:375,y:345}).wait(1).to({graphics:mask_3_graphics_154,x:375,y:345}).wait(1));

	// graph02.png
	this.instance_3 = new lib.graph02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(272,157);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(119));

	// レイヤー 8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("An2nQIDPjxINxjwIwKNJIiJQag");
	var mask_4_graphics_1 = new cjs.Graphics().p("ApYpTIG1i2INPglIwsNBIkrMcg");
	var mask_4_graphics_2 = new cjs.Graphics().p("Aq0qBIKNh/IMvCaIxMM6InDItg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AsKqaINWhNIMTFOIxrM0IpSFMg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AtbqzIQUgbIL3H1IyHMuIrYB6g");
	var mask_4_graphics_5 = new cjs.Graphics().p("Av6KdIBT2CITFARILdKSIyhMog");
	var mask_4_graphics_6 = new cjs.Graphics().p("AxAJCIBT2CIVpA8ILFMhIy6Mkg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AyAHuIBT2BIYABhIKuOnIzQMfg");
	var mask_4_graphics_8 = new cjs.Graphics().p("Ay7GiIBT2BIaJCEIKbQhIzlMag");
	var mask_4_graphics_9 = new cjs.Graphics().p("AzwFdIBT2BIcGCkIKISPIz3MWg");
	var mask_4_graphics_10 = new cjs.Graphics().p("A0gEgIBU2CId0DAIJ5TxI0JMUg");
	var mask_4_graphics_11 = new cjs.Graphics().p("A1KDpIBU2BIfWDaIJrVHI0YMQg");
	var mask_4_graphics_12 = new cjs.Graphics().p("A1uC6IBU2CMAgrADwIJeWTI0lMOg");
	var mask_4_graphics_13 = new cjs.Graphics().p("A2NCSIBU2BMAh0AEBIJTXTI0vMMg");
	var mask_4_graphics_14 = new cjs.Graphics().p("A2mByIBU2CMAiuAERIJLYGI04MKg");
	var mask_4_graphics_15 = new cjs.Graphics().p("A25BYIBT2BMAjdAEcIJDYvI0+MIg");
	var mask_4_graphics_16 = new cjs.Graphics().p("A3HBGIBT2CMAj+AElII+ZMI1DMIg");
	var mask_4_graphics_17 = new cjs.Graphics().p("A3QA7IBU2CMAkRAEqII8ZeI1HMHg");
	var mask_4_graphics_18 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_19 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_20 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_21 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_22 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_23 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_24 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_25 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_26 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_27 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_28 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_29 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_30 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_31 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_32 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_33 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_34 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_35 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_36 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_37 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_38 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_39 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_40 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_41 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_42 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_43 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_44 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_45 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_46 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_47 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_48 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_49 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_50 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_51 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_52 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_53 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_54 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_55 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_56 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_57 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_58 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_59 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_60 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_61 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_62 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_63 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_64 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_65 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_66 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_67 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_68 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_69 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_70 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_73 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_74 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_78 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_79 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_80 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_81 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_82 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_83 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_84 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_85 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_86 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_87 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_88 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_89 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_90 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_91 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_92 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_93 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_94 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_95 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_96 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_97 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_98 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_99 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_100 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_101 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_102 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_103 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_104 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_105 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_106 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_107 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_108 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_109 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_110 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_111 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_112 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_113 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_114 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_115 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_116 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_117 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_118 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_119 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_120 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_121 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_122 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_123 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_124 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_125 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_126 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_127 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_128 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_129 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_130 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_131 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_132 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_133 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_134 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_135 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_136 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_137 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_138 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_139 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_140 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_141 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_142 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_143 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_144 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_145 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_146 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_147 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_148 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_149 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_150 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_151 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_152 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_153 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");
	var mask_4_graphics_154 = new cjs.Graphics().p("A3SA4IBT2CMAkYAErII6ZkI1HMGg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:244.8,y:22.7}).wait(1).to({graphics:mask_4_graphics_1,x:254.5,y:35.8}).wait(1).to({graphics:mask_4_graphics_2,x:263.8,y:40.4}).wait(1).to({graphics:mask_4_graphics_3,x:272.4,y:43}).wait(1).to({graphics:mask_4_graphics_4,x:280.5,y:45.4}).wait(1).to({graphics:mask_4_graphics_5,x:288.1,y:50.4}).wait(1).to({graphics:mask_4_graphics_6,x:295,y:59.5}).wait(1).to({graphics:mask_4_graphics_7,x:301.5,y:67.9}).wait(1).to({graphics:mask_4_graphics_8,x:307.3,y:75.5}).wait(1).to({graphics:mask_4_graphics_9,x:312.6,y:82.4}).wait(1).to({graphics:mask_4_graphics_10,x:317.4,y:88.5}).wait(1).to({graphics:mask_4_graphics_11,x:321.6,y:94}).wait(1).to({graphics:mask_4_graphics_12,x:325.2,y:98.7}).wait(1).to({graphics:mask_4_graphics_13,x:328.3,y:102.7}).wait(1).to({graphics:mask_4_graphics_14,x:330.8,y:105.9}).wait(1).to({graphics:mask_4_graphics_15,x:332.7,y:108.5}).wait(1).to({graphics:mask_4_graphics_16,x:334.1,y:110.3}).wait(1).to({graphics:mask_4_graphics_17,x:335,y:111.4}).wait(1).to({graphics:mask_4_graphics_18,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_19,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_20,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_21,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_22,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_23,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_24,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_25,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_26,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_27,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_28,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_29,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_30,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_31,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_32,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_33,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_34,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_35,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_36,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_37,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_38,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_39,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_40,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_41,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_42,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_43,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_44,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_45,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_46,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_47,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_48,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_49,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_50,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_51,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_52,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_53,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_54,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_55,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_56,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_57,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_58,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_59,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_60,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_61,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_62,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_63,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_64,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_65,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_66,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_67,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_68,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_69,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_70,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_71,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_72,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_73,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_74,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_75,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_76,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_77,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_78,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_79,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_80,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_81,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_82,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_83,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_84,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_85,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_86,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_87,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_88,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_89,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_90,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_91,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_92,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_93,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_94,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_95,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_96,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_97,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_98,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_99,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_100,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_101,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_102,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_103,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_104,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_105,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_106,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_107,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_108,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_109,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_110,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_111,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_112,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_113,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_114,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_115,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_116,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_117,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_118,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_119,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_120,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_121,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_122,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_123,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_124,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_125,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_126,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_127,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_128,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_129,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_130,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_131,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_132,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_133,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_134,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_135,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_136,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_137,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_138,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_139,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_140,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_141,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_142,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_143,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_144,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_145,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_146,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_147,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_148,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_149,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_150,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_151,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_152,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_153,x:335.3,y:111.7}).wait(1).to({graphics:mask_4_graphics_154,x:335.3,y:111.7}).wait(1));

	// graph01.png
	this.instance_4 = new lib.graph01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(227,1);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(452,227,76.4,116.3);
// library properties:
lib.properties = {
	width: 450,
	height: 452,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/wakana_grah_atlas_.png", id:"wakana_grah_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;