<?php

/*--------------------------------------------------------------
	�t�H�[�����[�� - sformmmail
	2008-8-20 Ver. 1.40
	(c)sapphirus.biz
	
	�ڂ��������͉��L��URL���Q�Ƃ��ĉ������B
	http://www.sapphirus.biz/php/sformmail/
	
	sformmail.php - �{��
	sformmail.html - ���̓t�H�[��
	sformmail.css - ���ʃX�^�C���V�[�g
	confirm.php - �m�F��ʗp
	completion.html - ���M�������
	template.php - ���[�����M�p�e���v���[�g
	reply.php - �����ԐM�p�e���v���[�g
	
	�t�H�[����name�Ɂu;s�v�I�v�V�����������
	�K�{���ڈ����ɂȂ�܂��B
	��) name="comment;s"
	name��email���w�肷��ƃ��[���A�h���X�Ƃ��Ĉ����܂��B
	name��emailcheck���w�肷��ƃ��[���A�h���X�̍ē��͂̊m�F��
	���邱�Ƃ��ł��܂��B
	��email���g��Ȃ��ꍇ�Aemailcheck�����p���Ȃ��悤�ɂ��ĉ������B
	
	���͉�ʂ������͊m�F��ʂ�
	�uautoReply�v�ɑ΂��āu1�v��n���Ɠ��͂��ꂽ���[���A�h���X��
	�����ԐM�����܂��B
	��j<input name="autoReply" type="hidden" value="1" />
	or�@<input name="autoReply" type="checkbox" value="1" />
	��email�̍��ڂ��Ȃ��ꍇ�͖����ɂȂ�܂��B
	
	�m�F��ʗp(confirm.php)�ɂ͔�\���t�B�[���h��
	�umode�v�ɑ΂��āuSEND�v��K���n���ĉ������B
	��j<input name="mode" type="hidden" value="SEND" />
================================================================
	��ʂ̗���
	sformmail.html(����) �� sformmail.php(���̓`�F�b�N) ��
	confirm.php(�m�F) �� sformmail.php(���M[template.php/reply.php]) ��
	completion.html(����)
--------------------------------------------------------------*/

// �ݒ�
$mail_to = 'info@wakana-p.co.jp'; // �t�H�[���f�[�^���󂯎�郁�[���A�h���X
$mail_subject = 'HP��肨�₢���킹'; // �󂯎�鎞��Subject�i�����j
$reply_subject = '������Ў�؊��ւ̂��₢���킹���肪�Ƃ��������܂��B'; // ���M�҂֎����ԐM��Subject�i�����j
$mail_bcc = ''; // BCC�Ŏ󂯎�肪�K�v�ȏꍇ�͐ݒ�
$internal_enc = 'Shift_JIS'; // �����G���R�[�h


// ���C��
session_start();
if (!extension_loaded('mbstring')) Err('�}���`�o�C�g������֐������p�ł��܂���');
if (!$mail_to) Err('���惁�[���A�h���X���ݒ肳��Ă܂���');
if (!$_POST) Err('POST�f�[�^������܂���');
mb_language('ja');
mb_internal_encoding($internal_enc);
$x_mailer = 'Sapphirus.Biz Formmail Ver. 1.40 (PHP/' . phpversion() . ')';
$mode = $_POST['mode'];

switch ($mode) {
case 'SEND': // ���[�����M
	if (!$_SESSION) Err('�Z�b�V�����f�[�^������܂���');

	// ���[���w�b�_
	if (!$_SESSION['email']) $mail_from = 'S.B.Formmail';
	else $mail_from = $_SESSION['email'];
	$mail_header  = "From: {$mail_from}\n";
	if ($mail_bcc) $mail_header .= "Bcc: {$mail_bcc}\n";
	$mail_header .= "X-Mailer: {$x_mailer}";

	// ���[�����M
	include ('template.php');
	$mail_message = html_entity_decode($mail_message, ENT_QUOTES, $internal_enc);
	$mail_message = str_replace("<br />", "", $mail_message);
	$mail_message = str_replace("\t", "\n", $mail_message);
	$mail_message = mb_convert_encoding($mail_message, $internal_enc, 'AUTO');
	mb_send_mail($mail_to, $mail_subject, $mail_message, $mail_header);

	// ���[�������ԐM
	if ($_SESSION['autoReply'] && $_SESSION['email'] && is_file('reply.php')) {
		$reply_header  = "From: {$mail_to}\n";
		if ($mail_bcc) $reply_header .= "Bcc: {$mail_bcc}\n";
		$reply_header .= "X-Mailer: {$x_mailer}";
		include ('reply.php');
		$reply_message = html_entity_decode($reply_message, ENT_QUOTES, $internal_enc);
		$reply_message = str_replace("<br />", "", $reply_message);
		$reply_message = str_replace("\t", "\n", $reply_message);
		$reply_message = mb_convert_encoding($reply_message, $internal_enc, 'AUTO');
		mb_send_mail($mail_from, $reply_subject, $reply_message, $reply_header);
	}
	$_SESSION = array(); 
	session_unset();
	session_destroy();
	header('Location: completion.html');
	break;

default: // ���̓f�[�^����
	session_unset();
	foreach ($_POST as $key => $value) {
		list($name, $option) = explode(";", $key);
		if ($option == 's' && !$value) {
			$_SESSION[$name] = '<span class="ERR">�K�{���ڂł�</span>';
			$error = 1;
		} elseif ($name == 'email' && $value) {
			if (!preg_match("/^[\w\-\.]+\@[\w\-\.]+\.([a-z]+)$/", $value)) {
				$_SESSION['email'] = '<span class="ERR">���[���A�h���X�����������͂���Ă܂���</span>';
				$error = $email = 1;
			} else {
				$_SESSION['email'] = $email = $value;
			}
		} elseif ($name == 'emailcheck') {
			if ($email != 1 && $email != $value) {
				$_SESSION['email'] = "���[���A�h���X����v���܂���";
				$error = 1;
			}
		} else {
			if (is_array($value)) {
				$value = implode("\t", $value);
			}
		if (get_magic_quotes_gpc()) $value = stripslashes($value);
		$value = mb_convert_encoding($value, $internal_enc, 'AUTO');
		$value = mb_convert_kana($value, 'KV');
		$value = htmlspecialchars($value, ENT_QUOTES);
		$_SESSION[$name] = nl2br($value);
		}
	}
	$_SESSION['inputErr'] = $error;
	header('Location: confirm.php');
}
exit;


function Err($err) { // �G���[�\���p
	$internal_enc = $GLOBALS['internal_enc'];
	echo <<<EOM
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset={$internal_enc}" />
<title>�G���[�F$err</title></head>
<body style="font-size: 12px; line-height: 1.8em;">
<strong>�G���[ : </strong>$err<br>
<input type="button" value="�߂�" onclick="history.back();">
</body></html>
EOM;
	exit;
}

?>
