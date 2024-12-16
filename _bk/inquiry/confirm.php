<?php
//セッションを利用するのでここは削除しないで下さい
session_start();
if (SID) Err('Cookieを有効にして下さい');
if (!$_SESSION) header('Location: completion.html');

function Err($err) {
	echo <<< EOM
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
<title>エラー：$err</title></head>
<body style="font-size: 12px; line-height: 1.8em;">
<strong>エラー : </strong>$err<br>
<input type="button" value="戻る" onclick="history.back();">
<input name="autoReply" type="hidden" value="1" />
</body></html>
EOM;
	exit;
}
//ここまで
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja" dir="ltr">
<head>
<meta http-equiv="content-type" content="text/html; charset=shift_jis" />
<title>お問い合わせ｜リクルート独占代理店 - 若菜企画</title>
<meta http-equiv="content-style-type" content="text/css" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta name="description" content="輸入車に特化し、カーセンサーエッジに代表される媒体を取扱う広告代理店の若菜企画" />
<meta name="keywords" content="エッジ,輸入車,輸入車雑誌,広告代理店" />

<link rev="made" href="mailto:info@wakana-p.co.jp">
<link rel="start" href="http://www.wakana-p.co.jp/">
<link rel="shortcut icon" href="../favicon.ico">

<link href="../common/css/default.css" rel="stylesheet" type="text/css" media="all" />
<link href="../common/css/common.css" rel="stylesheet" type="text/css" media="all" />
<link href="../common/css/inquiry.css" rel="stylesheet" type="text/css" media="all" />

<script type="text/javascript" language="javaScript" src="../common/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" language="javaScript" src="../common/js/yuga.js"></script>
<script type="text/javascript" language="javaScript" src="../common/js/common.js"></script>
<!--[if IE 6]>
<script src="../common/js/DD_belatedPNG.js" type="text/javascript"></script>
<script type="text/javascript">
	DD_belatedPNG.fix('img, .png_bg');
</script>
<![endif]-->
</head>

<body id="inquiry">

<div id="header">
	<h1>お問い合わせ｜輸入車の広告代理店の若菜企画｜リクルート独占代理店</h1>
	
	<div id="logo"><a href="../index.html" class="hover"><img src="../common/img/logo.gif" alt="WAKANA PLANNING" /></a></div>
	
	<div id="hd_info"><img src="../common/img/header_info.gif" alt="お気軽にお問い合わせください " /></div>
	<div id="hd_info_btn"><a href="../inquiry/sformmail.html" class="hover"><img src="../common/img/header_info_btn.gif" alt="お問い合わせ" /></a></div>
	
	<div id="gnavi">
		<ul>
			<li id="btn_about"><a href="../about.html" class="hover"><img src="../common/img/gnavi_about.gif" alt="若菜企画について" /></a></li>
			<li id="btn_business"><a href="../business.html" class="hover"><img src="../common/img/gnavi_business.gif" alt="事業紹介" /></a></li>
			<li id="btn_media"><a href="../media.html" class="hover"><img src="../common/img/gnavi_media.gif" alt="主要媒体" /></a></li>
			<li id="btn_company"><a href="../company/index.html" class="hover"><img src="../common/img/gnavi_company.gif" alt="企業情報" /></a></li>
			<li id="btn_staff"><a href="../staff.html" class="hover"><img src="../common/img/gnavi_staff.gif" alt="若菜の社員" /></a></li>
		</ul>
	<!-- / #gnavi --></div>

<!-- / #header --></div>


<div id="ttl"><img src="../img/inquiry/ttl.jpg" alt="お問い合わせ" /></div>


<div id="wrapper">
	<div id="container" class="clearfix">
		<div id="main">
			<div class="inquiry_block mb30">
				<h2 class="mb20"><img src="../img/inquiry/ttl_s_04.png" alt="入力内容のご確認" /></h2>
				<div class="textbox_w940">
					<form id="form" name="form" method="post" action="sformmail.php">
					<div id="inquiry_form" class="fixHeight clearfix">
						<table id="inquiry_table" class="fixHeightChild fl_l">
							<tr>
								<th>お名前</th>
								<td><?=$_SESSION['name']?></td>
							</tr>
							<tr>
								<th>メールアドレス<br />
								<span class="f11">（すべて半角英数でご入力ください）</span></th>
								<td><?=$_SESSION['email']?></td>
							</tr>
							<tr>
								<th>お問い合わせ内容<br />
								<span class="f11">（出来るだけ詳しくお書き下さい）</span></th>
								<td><?=$_SESSION['message']?></td>
							</tr>
						</table>
						
						<ul id="inquiry_btn" class="fixHeightChild fl_r">
							<?php
								//入力項目エラー判定
								if($_SESSION['inputErr']){
									echo'<ul>
									<li><button type="button" onclick="history.back();" class="hover"><img src="../img/inquiry/btn_back.gif" alt="戻る" /></button></li>
									</ul>';
								}else{
									echo'<p class="mb20">入力が正しければ、送信ボタンを押して下さい。</p>
									<ul>
									<li class="mb10"><input name="mode" type="hidden" id="mode" value="SEND" />
									<input type="image" src="../img/inquiry/btn_send.gif" name="submit" value="送信" /></li>
									
									<li><button type="button" onclick="history.back();" class="hover"><img src="../img/inquiry/btn_back.gif" alt="戻る" /></button></li>
									</ul>';
								}
							?>
						</ul>
					<!-- / #inquiry_form --></div>
					</form>
				</div>
				<div class="textbox_bottom"><img src="../common/img/txtbox_w940_bottom.png" alt="" /></div>
			<!-- / .inquiry_block --></div>
			
			<div class="inquiry_block">
				<h2 class="mb20"><img src="../img/inquiry/ttl_s_03.png" alt="個人情報保護方針" /></h2>
				<p class="white">当サイトの運営に際し、お客様のプライバシーを尊重し個人情報に対して十分な配慮を行うとともに、大切に保護し、適正な管理を行うことに努めております。<br />
				<br />
				<strong>【個人情報の利用目的】</strong><br />
				<br />
				a) お客様のご要望に合わせたサービスをご提供するための各種ご連絡。<br />
				<br />
				b) お問い合わせいただいたご質問への回答のご連絡。<br />
				取得した個人情報は、ご本人の同意なしに目的以外では利用しません。情報が漏洩しないよう対策を講じ、従業員だけでなく委託業者も監督します。ご本人の同意を得ずに第三者に情報を提供しません。ご本人からの求めに応じ情報を開示します。公開された個人情報が事実と異なる場合、訂正や削除に応じます。個人情報の取り扱いに関する苦情に対し、適切・迅速に対処します。</p>
			<!-- / .inquiry_block --></div>
		<!-- / #main --></div>
	<!-- / #container --></div>
<!-- / #wrapper --></div>


<div id="pagetop"><a href="#header" class="hover"><img src="../common/img/btn_pagetop.png" alt="PAGE TOP" /></a></div>

<div id="footer_navi">
	<ul>
		<li class="first_child"><a href="../index.html">トップページ</a></li>
		<li><a href="../about.html">若菜企画について</a></li>
		<li><a href="../business.html">事業紹介</a></li>
		<li><a href="../media.html">主要媒体</a></li>
		<li><a href="../company/index.html">企業情報</a></li>
		<li><a href="../staff.html">若菜の社員</a></li>
		<li class="last_child"><a href="../inquiry/sformmail.html">お問い合わせ</a></li>
	</ul>
<!-- / #footer_navi --></div>

<div id="footer">
	<div id="foot_body" class="clearfix">
		<div id="ft_logo"><img src="../common/img/footer_logo.png" alt="株式会社若菜企画" /></div>
		<div id="ft_address"><img src="../common/img/footer_address.png" alt="〒104-0054 東京都中央区勝どき1-7-3 勝どきサンスクェア5F" /></a></div>
		<div id="ft_info" class="png_bg"><a href="../inquiry/sformmail.html" class="hover"><img src="../common/img/footer_info_btn.gif" alt="お問い合わせ" /></a></div>
	<!-- / #foot_body --></div>
	
	<div id="copyright" class="png_bg">Copyright c WAKANA PLANNING All rights reserved.</div>
<!-- / #footer --></div>


<script type="text/javascript"> 
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script> 
<script type="text/javascript"> 
var pageTracker = _gat._getTracker("UA-4303184-1");
pageTracker._initData();
pageTracker._trackPageview();
</script>

</body>
</html>