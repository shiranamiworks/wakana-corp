<?php
//ユーザー情報
$user  = @gethostbyaddr($_SERVER['REMOTE_ADDR']) . "\n";
$user .= $_SERVER['HTTP_USER_AGENT'] . "\n";
$user .= date("Y/m/d - H:i:s");

//送信メッセージ
$reply_message = <<< EOM
この度はお問い合せ頂き誠にありがとうございました。
改めて担当者よりご連絡をさせていただきます。

────────────────────────────────────

■お名前
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