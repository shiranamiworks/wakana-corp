<?php
//�Z�b�V�����𗘗p����̂ł����͍폜���Ȃ��ŉ�����
session_start();
if (SID) Err('Cookie��L���ɂ��ĉ�����');
if (!$_SESSION) header('Location: completion.html');

function Err($err) {
	echo <<< EOM
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
<title>�G���[�F$err</title></head>
<body style="font-size: 12px; line-height: 1.8em;">
<strong>�G���[ : </strong>$err<br>
<input type="button" value="�߂�" onclick="history.back();">
<input name="autoReply" type="hidden" value="1" />
</body></html>
EOM;
	exit;
}
//�����܂�
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja" dir="ltr">
<head>
<meta http-equiv="content-type" content="text/html; charset=shift_jis" />
<title>���₢���킹�b���N���[�g�Ɛ�㗝�X - ��؊��</title>
<meta http-equiv="content-style-type" content="text/css" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta name="description" content="�A���Ԃɓ������A�J�[�Z���T�[�G�b�W�ɑ�\�����}�̂��戵���L���㗝�X�̎�؊��" />
<meta name="keywords" content="�G�b�W,�A����,�A���ԎG��,�L���㗝�X" />

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
	<h1>���₢���킹�b�A���Ԃ̍L���㗝�X�̎�؊��b���N���[�g�Ɛ�㗝�X</h1>
	
	<div id="logo"><a href="../index.html" class="hover"><img src="../common/img/logo.gif" alt="WAKANA PLANNING" /></a></div>
	
	<div id="hd_info"><img src="../common/img/header_info.gif" alt="���C�y�ɂ��₢���킹�������� " /></div>
	<div id="hd_info_btn"><a href="../inquiry/sformmail.html" class="hover"><img src="../common/img/header_info_btn.gif" alt="���₢���킹" /></a></div>
	
	<div id="gnavi">
		<ul>
			<li id="btn_about"><a href="../about.html" class="hover"><img src="../common/img/gnavi_about.gif" alt="��؊��ɂ���" /></a></li>
			<li id="btn_business"><a href="../business.html" class="hover"><img src="../common/img/gnavi_business.gif" alt="���ƏЉ�" /></a></li>
			<li id="btn_media"><a href="../media.html" class="hover"><img src="../common/img/gnavi_media.gif" alt="��v�}��" /></a></li>
			<li id="btn_company"><a href="../company/index.html" class="hover"><img src="../common/img/gnavi_company.gif" alt="��Ə��" /></a></li>
			<li id="btn_staff"><a href="../staff.html" class="hover"><img src="../common/img/gnavi_staff.gif" alt="��؂̎Ј�" /></a></li>
		</ul>
	<!-- / #gnavi --></div>

<!-- / #header --></div>


<div id="ttl"><img src="../img/inquiry/ttl.jpg" alt="���₢���킹" /></div>


<div id="wrapper">
	<div id="container" class="clearfix">
		<div id="main">
			<div class="inquiry_block mb30">
				<h2 class="mb20"><img src="../img/inquiry/ttl_s_04.png" alt="���͓��e�̂��m�F" /></h2>
				<div class="textbox_w940">
					<form id="form" name="form" method="post" action="sformmail.php">
					<div id="inquiry_form" class="fixHeight clearfix">
						<table id="inquiry_table" class="fixHeightChild fl_l">
							<tr>
								<th>�����O</th>
								<td><?=$_SESSION['name']?></td>
							</tr>
							<tr>
								<th>���[���A�h���X<br />
								<span class="f11">�i���ׂĔ��p�p���ł����͂��������j</span></th>
								<td><?=$_SESSION['email']?></td>
							</tr>
							<tr>
								<th>���₢���킹���e<br />
								<span class="f11">�i�o���邾���ڂ����������������j</span></th>
								<td><?=$_SESSION['message']?></td>
							</tr>
						</table>
						
						<ul id="inquiry_btn" class="fixHeightChild fl_r">
							<?php
								//���͍��ڃG���[����
								if($_SESSION['inputErr']){
									echo'<ul>
									<li><button type="button" onclick="history.back();" class="hover"><img src="../img/inquiry/btn_back.gif" alt="�߂�" /></button></li>
									</ul>';
								}else{
									echo'<p class="mb20">���͂���������΁A���M�{�^���������ĉ������B</p>
									<ul>
									<li class="mb10"><input name="mode" type="hidden" id="mode" value="SEND" />
									<input type="image" src="../img/inquiry/btn_send.gif" name="submit" value="���M" /></li>
									
									<li><button type="button" onclick="history.back();" class="hover"><img src="../img/inquiry/btn_back.gif" alt="�߂�" /></button></li>
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
				<h2 class="mb20"><img src="../img/inquiry/ttl_s_03.png" alt="�l���ی���j" /></h2>
				<p class="white">���T�C�g�̉^�c�ɍۂ��A���q�l�̃v���C�o�V�[�𑸏d���l���ɑ΂��ď\���Ȕz�����s���ƂƂ��ɁA��؂ɕی삵�A�K���ȊǗ����s�����Ƃɓw�߂Ă���܂��B<br />
				<br />
				<strong>�y�l���̗��p�ړI�z</strong><br />
				<br />
				a) ���q�l�̂��v�]�ɍ��킹���T�[�r�X�����񋟂��邽�߂̊e�킲�A���B<br />
				<br />
				b) ���₢���킹����������������ւ̉񓚂̂��A���B<br />
				�擾�����l���́A���{�l�̓��ӂȂ��ɖړI�ȊO�ł͗��p���܂���B��񂪘R�k���Ȃ��悤�΍���u���A�]�ƈ������łȂ��ϑ��Ǝ҂��ē��܂��B���{�l�̓��ӂ𓾂��ɑ�O�҂ɏ���񋟂��܂���B���{�l����̋��߂ɉ��������J�����܂��B���J���ꂽ�l��񂪎����ƈقȂ�ꍇ�A������폜�ɉ����܂��B�l���̎�舵���Ɋւ�����ɑ΂��A�K�؁E�v���ɑΏ����܂��B</p>
			<!-- / .inquiry_block --></div>
		<!-- / #main --></div>
	<!-- / #container --></div>
<!-- / #wrapper --></div>


<div id="pagetop"><a href="#header" class="hover"><img src="../common/img/btn_pagetop.png" alt="PAGE TOP" /></a></div>

<div id="footer_navi">
	<ul>
		<li class="first_child"><a href="../index.html">�g�b�v�y�[�W</a></li>
		<li><a href="../about.html">��؊��ɂ���</a></li>
		<li><a href="../business.html">���ƏЉ�</a></li>
		<li><a href="../media.html">��v�}��</a></li>
		<li><a href="../company/index.html">��Ə��</a></li>
		<li><a href="../staff.html">��؂̎Ј�</a></li>
		<li class="last_child"><a href="../inquiry/sformmail.html">���₢���킹</a></li>
	</ul>
<!-- / #footer_navi --></div>

<div id="footer">
	<div id="foot_body" class="clearfix">
		<div id="ft_logo"><img src="../common/img/footer_logo.png" alt="������Ў�؊��" /></div>
		<div id="ft_address"><img src="../common/img/footer_address.png" alt="��104-0054 �����s�����揟�ǂ�1-7-3 ���ǂ��T���X�N�F�A5F" /></a></div>
		<div id="ft_info" class="png_bg"><a href="../inquiry/sformmail.html" class="hover"><img src="../common/img/footer_info_btn.gif" alt="���₢���킹" /></a></div>
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