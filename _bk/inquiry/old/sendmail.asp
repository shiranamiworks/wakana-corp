<%
'メールアドレス
'  mailsender = "info@carhoo.co.jp"
  mailfrom   = "info@wakana-p.co.jp"
'-----------------------------------------------------------
  g_type     = Request("g_type")
  kind       = Request("kind")
  place      = Request("place")
  name       = Request("name")
  address    = Request("address")
  phone1     = Request("phone1")
  phone2     = Request("phone2")
  email      = Request("email")
  s_career   = Request("s_career")
  b_career   = Request("b_career")
  motive     = Request("motive")
  pr         = Request("pr")
  opinion    = Request("opinion")
'-----------------------------------------------------------
  CurPath = Request.ServerVariables("PATH_INFO")
  pp = InstrREV(CurPath,"/")
  CurPath = Left(CurPath,pp)
'-----------------------------------------------------------

  Subject="HPよりお問い合わせ"

'-----------------------------------------------------------------------------

  Set smtp = Server.CreateObject("dsmtp")
  '********************************************************
  '若菜企画へ送信
  smtp.HostName = "mail.wakana-p.co.jp"
  smtp.Port = 25
  '********************************************************
 
  '----------------応募者へ--------------------------------
  '求人公募のエントリーをした人へリターンメール
  smtp.Sender = mailfrom
  smtp.From   = mailfrom
  smtp.To     = EMAIL
  smtp.Subject ="お問い合わせありがとうございます。"
  wMSG = "株式会社若菜企画へのお問い合わせありがとうございます。" & vbCRLF
  wMSG = wMSG & "下記内容のお問い合わせ承りました。" & vbCRLF
  wMSG = wMSG & "後日こちらからご連絡させていただきます。" & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "お名前：" & name & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "E-Mail：" & email & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "お問い合わせ内容：" & vbCRLF & "　" & opinion & vbCRLF & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "(株)若菜企画" & vbCRLF
  wMSG = wMSG & "〒104-0054" & vbCRLF
  wMSG = wMSG & "東京都中央区勝どき1-7-3勝どきサンスクェア5F" & vbCRLF
  wMSG = wMSG & "Tel:03-3536-2241" & vbCRLF
  wMSG = wMSG & "Fax:03-3536-2242" & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  smtp.Message = wMSG

  'サーバへ接続
  err = smtp.connect 'SMTPポートは一般的に「２５」
  If err <> 0 then
    Response.Write "サーバへの接続処理でエラーが発生しました。<BR>"
    Response.Write "エラー番号は「" & err & "」です。<BR>"
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If
  'メール送信
  err = smtp.sendmail
  If err <> 0 then
    Response.Write "メール送信時にエラーが発生しました。<BR>"
    Response.Write "エラー番号は「" & err & "」です。<BR>"
    '--- エラーだったら「quit」すること。 ---
    smtp.quit
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If


'----------------ここまで--------------------------------

'----------------若菜企画へ--------------------------------
   smtp.Sender = mailfrom
   smtp.From = mailfrom
   smtp.To = mailfrom
   smtp.Cc = "info@wakana-p.co.jp"
   smtp.Bcc = "sato@a-pex.co.jp"

   smtp.Subject = Subject  
   wMSG = "ＨＰよりお問い合わせがありました。" & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "お名前：" & name & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "E-Mail：" & email & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "お問い合わせ内容：" & vbCRLF & "　" & opinion & vbCRLF & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  smtp.Message = wMSG

  'サーバへ接続
  err = smtp.connect 'SMTPポートは一般的に「２５」
  If err <> 0 then
    Response.Write "サーバへの接続処理でエラーが発生しました。<BR>"
    Response.Write "エラー番号は「" & err & "」です。<BR>"
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If
  'メール送信
  err = smtp.sendmail
  If err <> 0 then
    Response.Write "メール送信時にエラーが発生しました。<BR>"
    Response.Write "エラー番号は「" & err & "」です。<BR>"
    '--- エラーだったら「quit」すること。 ---
    smtp.quit
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If


'----------------ここまで--------------------------------

  '切断（メール送信後必ずquit）
  err = smtp.quit
  If err <> 0 then
    Response.Write "メール送信時にエラーが発生しました。<BR>"
    Response.Write "エラー番号は「" & err & "」です。<BR>"
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If
'-----------------------------------------------------------------------------
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="ja">
<head>

<meta http-equiv="Content-Type" content="text/html;charset=shift_jis">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="description" content="輸入車に特化し、カーセンサーエッジに代表される媒体を取扱う広告代理店の若菜企画">
<meta http-equiv="keywords" content="エッジ　輸入車　輸入車雑誌　広告代理店">

<title>｜輸入車に特化した広告代理店｜株式会社　若菜企画</title>

<link rev="made" href="mailto:info@wakana-p.co.jp">
<link rev="start" href="http://www.wakana-p.co.jp/">
<link rel="stylesheet" type="text/css" href="../style.css" media="all">
<script src="AC_RunActiveContent.js" type="text/javascript"></script>
</head>


<body>
<div id="all">
	<div id="header2">
		<h1><a href="../index.html">株式会社若菜企画｜WAKANA PLANNING</a></h1>

		<div id="menu">
			<ul>
				<li class="btn_home"><a href="../index.html">HOME</a></li>
				<li class="btn01"><a href="../about.html">広告代理店について</a></li>
				<li class="btn02"><a href="../baitai.html">主要媒体</a></li>
				<li class="btn03"><a href="../company.html">会社概要</a></li>
				<li class="btn04"><a href="../sosiki.html">組織図</a></li>
				<li class="btn05"><a href="../kyoten.html">拠点情報</a></li>
				<li class="btn06"><a href="inquiry.html">お問合せ</a></li>
			</ul>
		</div>
	</div>
	<div id="main">
		<div id="main_box">
			<h1 class="inquiry">お問い合せ</h1>
			<br><br>
			<P class="setu2">株式会社&nbsp;若菜企画へのお問い合わせありがとうございます。</p>
			<P class="setu2">&nbsp;</p>
			<P class="setu2">ご入力いただきましたメールアドレスへ、後日こちらからご連絡させていただきます。</p>
			<P class="setu2">&nbsp;</p>
			<P class="setu2">少々お待ち下さい。</p>
			<br><br><br><br><br><br>
		</div>

		<div id="footer-space"></div>
	</div>
</div>

<div id="footer">

		<div id="b_menu">
			<ul>
				<li class="btn_home"><a href="../index.html">HOME</a></li>
				<li class="btn01"><a href="../about.html">広告代理店について</a></li>
				<li class="btn02"><a href="../baitai.html">主要媒体</a></li>
				<li class="btn03"><a href="../company.html">会社概要</a></li>
				<li class="btn04"><a href="../sosiki.html">組織図</a></li>
				<li class="btn05"><a href="../kyoten.html">拠点情報</a></li>
				<li class="btn06"><a href="inquiry.html">お問合せ</a></li>
			</ul>
		</div>
	<p class="copyright">Copyright(c)2008 WAKANA PLANNING All right reserved.</p>
</div>

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
