<?php
//���[�U�[���
$user  = @gethostbyaddr($_SERVER['REMOTE_ADDR']) . "\n";
$user .= $_SERVER['HTTP_USER_AGENT'] . "\n";
$user .= date("Y/m/d - H:i:s");

//���M���b�Z�[�W
$mail_message = <<< EOM
�y{$mail_subject}�z���ȉ��̓��e�ő��M����܂����B
������������������������������������������������������������������������
�����O
{$_SESSION['name']}

�����[���A�h���X
{$_SESSION['email']}

�����₢���킹���e
{$_SESSION['message']}
������������������������������������������������������������������������
�����[�U�[���
{$user}
EOM;
?>