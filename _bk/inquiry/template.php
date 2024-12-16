<?php
//ユーザー情報
$user  = @gethostbyaddr($_SERVER['REMOTE_ADDR']) . "\n";
$user .= $_SERVER['HTTP_USER_AGENT'] . "\n";
$user .= date("Y/m/d - H:i:s");

//送信メッセージ
$mail_message = <<< EOM
【{$mail_subject}】より以下の内容で送信されました。
────────────────────────────────────
■名前
{$_SESSION['name']}

■メールアドレス
{$_SESSION['email']}

■お問い合わせ内容
{$_SESSION['message']}
────────────────────────────────────
□ユーザー情報
{$user}
EOM;
?>