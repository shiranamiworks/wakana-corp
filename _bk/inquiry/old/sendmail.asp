<%
'���[���A�h���X
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

  Subject="HP��肨�₢���킹"

'-----------------------------------------------------------------------------

  Set smtp = Server.CreateObject("dsmtp")
  '********************************************************
  '��؊��֑��M
  smtp.HostName = "mail.wakana-p.co.jp"
  smtp.Port = 25
  '********************************************************
 
  '----------------����҂�--------------------------------
  '���l����̃G���g���[�������l�փ��^�[�����[��
  smtp.Sender = mailfrom
  smtp.From   = mailfrom
  smtp.To     = EMAIL
  smtp.Subject ="���₢���킹���肪�Ƃ��������܂��B"
  wMSG = "������Ў�؊��ւ̂��₢���킹���肪�Ƃ��������܂��B" & vbCRLF
  wMSG = wMSG & "���L���e�̂��₢���킹����܂����B" & vbCRLF
  wMSG = wMSG & "��������炩�炲�A�������Ă��������܂��B" & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "�����O�F" & name & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "E-Mail�F" & email & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "���₢���킹���e�F" & vbCRLF & "�@" & opinion & vbCRLF & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "(��)��؊��" & vbCRLF
  wMSG = wMSG & "��104-0054" & vbCRLF
  wMSG = wMSG & "�����s�����揟�ǂ�1-7-3���ǂ��T���X�N�F�A5F" & vbCRLF
  wMSG = wMSG & "Tel:03-3536-2241" & vbCRLF
  wMSG = wMSG & "Fax:03-3536-2242" & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  smtp.Message = wMSG

  '�T�[�o�֐ڑ�
  err = smtp.connect 'SMTP�|�[�g�͈�ʓI�Ɂu�Q�T�v
  If err <> 0 then
    Response.Write "�T�[�o�ւ̐ڑ������ŃG���[���������܂����B<BR>"
    Response.Write "�G���[�ԍ��́u" & err & "�v�ł��B<BR>"
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If
  '���[�����M
  err = smtp.sendmail
  If err <> 0 then
    Response.Write "���[�����M���ɃG���[���������܂����B<BR>"
    Response.Write "�G���[�ԍ��́u" & err & "�v�ł��B<BR>"
    '--- �G���[��������uquit�v���邱�ƁB ---
    smtp.quit
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If


'----------------�����܂�--------------------------------

'----------------��؊���--------------------------------
   smtp.Sender = mailfrom
   smtp.From = mailfrom
   smtp.To = mailfrom
   smtp.Cc = "info@wakana-p.co.jp"
   smtp.Bcc = "sato@a-pex.co.jp"

   smtp.Subject = Subject  
   wMSG = "�g�o��肨�₢���킹������܂����B" & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  wMSG = wMSG & "�����O�F" & name & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "E-Mail�F" & email & vbCRLF
  wMSG = wMSG & vbCRLF
  wMSG = wMSG & "���₢���킹���e�F" & vbCRLF & "�@" & opinion & vbCRLF & vbCRLF
  wMSG = wMSG & "-----------------------------------------------" & vbCRLF
  smtp.Message = wMSG

  '�T�[�o�֐ڑ�
  err = smtp.connect 'SMTP�|�[�g�͈�ʓI�Ɂu�Q�T�v
  If err <> 0 then
    Response.Write "�T�[�o�ւ̐ڑ������ŃG���[���������܂����B<BR>"
    Response.Write "�G���[�ԍ��́u" & err & "�v�ł��B<BR>"
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If
  '���[�����M
  err = smtp.sendmail
  If err <> 0 then
    Response.Write "���[�����M���ɃG���[���������܂����B<BR>"
    Response.Write "�G���[�ԍ��́u" & err & "�v�ł��B<BR>"
    '--- �G���[��������uquit�v���邱�ƁB ---
    smtp.quit
    Response.Write "<BR></FONT></TD></TR></TABLE></CENTER></HTML>"
    Response.End
  End If


'----------------�����܂�--------------------------------

  '�ؒf�i���[�����M��K��quit�j
  err = smtp.quit
  If err <> 0 then
    Response.Write "���[�����M���ɃG���[���������܂����B<BR>"
    Response.Write "�G���[�ԍ��́u" & err & "�v�ł��B<BR>"
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
<meta http-equiv="description" content="�A���Ԃɓ������A�J�[�Z���T�[�G�b�W�ɑ�\�����}�̂��戵���L���㗝�X�̎�؊��">
<meta http-equiv="keywords" content="�G�b�W�@�A���ԁ@�A���ԎG���@�L���㗝�X">

<title>�b�A���Ԃɓ��������L���㗝�X�b������Ё@��؊��</title>

<link rev="made" href="mailto:info@wakana-p.co.jp">
<link rev="start" href="http://www.wakana-p.co.jp/">
<link rel="stylesheet" type="text/css" href="../style.css" media="all">
<script src="AC_RunActiveContent.js" type="text/javascript"></script>
</head>


<body>
<div id="all">
	<div id="header2">
		<h1><a href="../index.html">������Ў�؊��bWAKANA PLANNING</a></h1>

		<div id="menu">
			<ul>
				<li class="btn_home"><a href="../index.html">HOME</a></li>
				<li class="btn01"><a href="../about.html">�L���㗝�X�ɂ���</a></li>
				<li class="btn02"><a href="../baitai.html">��v�}��</a></li>
				<li class="btn03"><a href="../company.html">��ЊT�v</a></li>
				<li class="btn04"><a href="../sosiki.html">�g�D�}</a></li>
				<li class="btn05"><a href="../kyoten.html">���_���</a></li>
				<li class="btn06"><a href="inquiry.html">���⍇��</a></li>
			</ul>
		</div>
	</div>
	<div id="main">
		<div id="main_box">
			<h1 class="inquiry">���₢����</h1>
			<br><br>
			<P class="setu2">�������&nbsp;��؊��ւ̂��₢���킹���肪�Ƃ��������܂��B</p>
			<P class="setu2">&nbsp;</p>
			<P class="setu2">�����͂��������܂������[���A�h���X�ցA��������炩�炲�A�������Ă��������܂��B</p>
			<P class="setu2">&nbsp;</p>
			<P class="setu2">���X���҂��������B</p>
			<br><br><br><br><br><br>
		</div>

		<div id="footer-space"></div>
	</div>
</div>

<div id="footer">

		<div id="b_menu">
			<ul>
				<li class="btn_home"><a href="../index.html">HOME</a></li>
				<li class="btn01"><a href="../about.html">�L���㗝�X�ɂ���</a></li>
				<li class="btn02"><a href="../baitai.html">��v�}��</a></li>
				<li class="btn03"><a href="../company.html">��ЊT�v</a></li>
				<li class="btn04"><a href="../sosiki.html">�g�D�}</a></li>
				<li class="btn05"><a href="../kyoten.html">���_���</a></li>
				<li class="btn06"><a href="inquiry.html">���⍇��</a></li>
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
