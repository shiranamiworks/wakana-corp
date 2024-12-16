<?php

session_start();
if($_SERVER["REQUEST_METHOD"] === "GET"){
  if(!isset($_SESSION["send"]) || !$_SESSION["send"]){
    $_SESSION["send"] = false;
    require_once "../contact/view/input.php";
  }else if($_SESSION["send"]){
    $_SESSION["send"] = false;
    require_once "../contact/view/thanks.php";
  }
}else if(isset($_POST["action"])){
  $form_data = form_data();
  switch($_POST["action"]){
    case "back":
    require_once "../contact/view/input.php";
    break;
    case "confirm":
    $errors = confirm($form_data);
    if(empty($errors)){
      $form_data = form_data("-");
      require_once "../contact/view/confirm.php";
    }else{
      require_once "../contact/view/input.php";
    }
    break;
    case "send":
      if(isset($_SESSION["send"])){
        if(!$_SESSION["send"]){
          $_SESSION["send"] = true;
          $errors = confirm($form_data);
          if(empty($errors) && send($form_data)){
            require_once "../contact/view/thanks.php";
          }else{
            $form_data = array();
            $_SESSION["send"] = false;
            require_once "../contact/view/input.php";
          }
        }else{
            $form_data = array();
          $_SESSION["send"] = false;
          require_once "../contact/view/input.php";
        }
      }else{
        $form_data = array();
        $_SESSION["send"] = false;
        require_once "../contact/view/input.php";
      }
    break;
  }
}else{
  $_SESSION = array();
  session_destroy();
  $form_data = array();
  $_SESSION["send"] = false;
  require_once "../contact/view/input.php";
}

function h($str){
  return htmlspecialchars($str);
}

function element($array, $key, $default=false){
  return isset($array[$key]) && $array[$key] ? $array[$key] : $default;
}

function form_data($default=false){
  $form_data = array();
  foreach(explode(",", FORM_ELEMENTS) as $key){
    $form_data[$key] = element($_POST, $key, $default);
  }
  return $form_data;
}

function send($form_data){
  require_once "mailer.php";
  $form_data = form_data("-");

  $from = MAIL_FROM;
  $name = MAIL_NAME;
  $title = MAIL_TITLE;

  $body = "";
  $file = fopen(MAIL_BODY, "r");
  while(!feof($file)){
    $str = fgets($file);
    $body .= $str;
  }
  fclose($file);

  foreach(map($form_data) as $key => $val){
    $body = str_replace($key, $val, $body);
  }

  $to = $form_data["email"];
  $mailer = new Mailer($from, $name, $title);
  $mailer->body = $body;
  $mailer->send($to);

  $re_from = RE_MAIL_FROM;
  $re_name = MAIL_NAME;
  $re_title = RE_MAIL_TITLE;

  $re_body = "";
  $re_file = fopen(RE_MAIL_BODY, "r");
  while(!feof($re_file)){
    $str = fgets($re_file);
    $re_body .= $str;
  }
  fclose($re_file);

  foreach(map($form_data) as $key => $val){
    $re_body = str_replace($key,$val,$re_body);
  }

  $re_to = RE_MAIL_TO;
  $mailer = new Mailer($re_from, $re_name, $re_title);
  $mailer->body = $re_body;
  $mailer->send($re_to);
  return true;
}


