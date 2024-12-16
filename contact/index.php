<?php

require_once "../form/contact_config.php";
require_once "../form/form.php";


function confirm($form_data){
  $errors = array();

  if(!$form_data["name"]){
    $errors["name"] = "お名前を入力してください。";
  }

  if(!$form_data["email"]){
    $errors["email"] = "メールアドレスを入力してください。";
  }else if(!preg_match("/.+@.+$/", $form_data["email"])){
    $errors["email"] = "メールアドレスが正しくありません。";
  }

  if(!$form_data["emailcheck"]){
    $errors["emailcheck"] = "確認用メールアドレスを入力してください。";
  }else if($form_data["email"] !== $form_data["emailcheck"]){
    $errors["emailcheck"] = "確認用メールアドレスと一致しませんでした。";
  }else if(isset($errors["email"])){
    $errors["emailcheck"] = "メールアドレスが正しくありません。";
  }


  if(!$form_data["text"]){
    $errors["text"] = "お問い合わせ内容を入力してください。";
  }

  return $errors;
}


function map($form_data){
  $map = array(
    "%name%" => $form_data["name"],
    "%email%" => $form_data["email"],
    "%text%" => $form_data["text"]
  );
  return $map;
}

