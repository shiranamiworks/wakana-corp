var _ua = window.navigator.userAgent.toLowerCase();

$(".disable").find("a").on("click",function(e){
  e.preventDefault();
});


$(".print-btn").on("click",function(e){
  e.preventDefault();
  window.print();
});

$(".close-btn").on("click",function(e){
  e.preventDefault();
  window.close();
});

if(_ua.indexOf('iphone') < 0 && _ua.indexOf('ipod') < 0 && _ua.indexOf('ipad') < 0 && _ua.indexOf('android') < 0 ) {
  var reloadID;
  $(window).on("resize",function(){
    clearTimeout(reloadID);
    reloadID = setTimeout(function(){
      location.reload();
    },300);
  });
}

//scroll
$(".scroll").on("click",function(event){
  event.preventDefault();
  var target_element = $(this).attr("href") === "#" ? "html,body" : $(this).attr("href") ;
    var target_scroll = $(target_element).offset().top-50;
  if($(".tb").is(":visible")){
    target_scroll = target_scroll - 80;
  }
  if($(".sp").is(":visible")){
    target_scroll = target_scroll - 60;
  }
  $("html,body").animate({scrollTop:target_scroll},350,function(){
    return false;
  });
});



//popup
$(".pop").on("click",function(){
  var url = $(this).attr("href");
  window.open(url, '_blank', 'width=810, height=800, menubar=no, toolbar=no, scrollbars=yes');
  return false;
});



//disable
$("a").on("click",function(e){
  if($(this).parents(".disable").length){ return false; }
});

$("a.close-window").on("click",function(e){
  e.preventDefault();
  window.close();
});

$("a.print").on("click",function(e){
  e.preventDefault();
  window.print();
});

$(".comming-soon a,a.no-link").on("click",function(e){
  e.preventDefault();
});

// scroll-addclass

$(window).on("load",function(){
  $(window).on("resize scroll",function(){
    var ws = $(this).scrollTop();
    var wh = $(this).height();
    $(".js-scroll-addclass").each(function(){
      var ts = $(this).offset().top;
      var classname = $(this).data("classname");
      if(ts <= ws+wh/3*2){
        $(this).addClass(classname);
      }
    });
  }).scroll();
});

// menu
$(".menu-button").on("click", function(){
  $(this).toggleClass("opened");
  $(".global-navi").toggleClass("opened");
});



if($(location.hash).length){
  var target_H = $(".sp").is(":visible") ? $(location.hash).offset().top - 54 : $(location.hash).offset().top - 60;
  $("html,body").animate({"scrollTop":target_H},300);
}

if(!$("#top").length){
  setTimeout(function(){
    $(".site-header").removeClass("hidden");
  },2000);
}


if($("#top").length){
  var video = document.getElementById("video");
  video.volume = 0;
  video.loop = true;
  video.play();
  $(window).on("load",function(){
    setTimeout(function(){
      $(".site-header").removeClass("hidden");
    },800);
    setTimeout(function(){
      $(".mv .lead").fadeIn(800);
    },1600);
    setTimeout(function(){
      $(".mv .scroll-img").removeClass("hidden");;
    },5000);
    $(window).on("resize scroll",function(){
      var ws = $(this).scrollTop();
      var wh = $(this).height();
      $(".separate-image").each(function(){
        var ts = $(this).offset().top;
        if(ts <= ws+wh/3*2){
          $(this).addClass("opened");
        }
      });
    }).scroll();
  });
  var current = 0;
  $(window).on("load",function(){
    setInterval(function(){
      var next = (current+1 >= $(".mv .slides li").length ) ? 0 : current+1 ;
      $(".mv .slides li").eq(current).fadeOut(1000);
      $(".mv .slides li").eq(next).fadeIn(1000,function(){
        current = next;
      });
    },4500);
  });
}
if($("#inquiry").length){
  $(".color_r").each(function(){
    var val = $(this).val();
    $(this).on("change",function(){
      if(val !== $(this).val()) $(this).removeClass("color_r");
    });
  });
  $(".form-button").on("click",function(){
    $("#form_action").val("back");
    $("#mail_form").submit();
  });
  $("input['type=submit']").on("click",function(){
    $(this).remove();
  });
}
if($("#office").length){
  var d1 = 200;
  var d2 = 600;
  var d3 = 600;
  var d4 = 1500;
  $(window).on("scroll",function(){
    var ms = $(".map-wrap").offset().top;
    var ws = $(window).scrollTop();
    var wh = $(window).height();
    var percent = $(".sp").is(":visible") ? 0.4 : 0.1 ;
    if($(".map-wrap").offset().top < $(window).scrollTop()+$(window).height()*percent){
        $(".map-wrap .tokyo").find(".dot").addClass("on");
//      $(".map-wrap").find(".dot").addClass("on");
      setTimeout(function(){
        $(".map-wrap .nagoya").find(".dot").addClass("on");
      },d1);
      setTimeout(function(){
        $(".map-wrap .nagoya").find(".dot").addClass("on");
      },d1*2);
      setTimeout(function(){
        $(".map-wrap .osaka").find(".dot").addClass("on");
      },d1*3);
      setTimeout(function(){
        $(".map-wrap .fukuoka").find(".dot").addClass("on");
      },d1*4);
      setTimeout(function(){
        $(".map-wrap .okinawa").find(".dot").addClass("on");
      },d1*5);
      setTimeout(function(){
        $(".map-wrap .tokyo").find(".line .inner").addClass("on");
      },d3);
      setTimeout(function(){
        $(".map-wrap .tokyo").find(".circle .inner").addClass("on");
      },d4);
      setTimeout(function(){
        setTimeout(function(){
          $(".map-wrap .nagoya").find(".line .inner").addClass("on");
        },d3);
        setTimeout(function(){
          $(".map-wrap .nagoya").find(".circle .inner").addClass("on");
        },d4);
      },d2);
      setTimeout(function(){
        setTimeout(function(){
          $(".map-wrap .osaka").find(".line .inner").addClass("on");
        },d3);
        setTimeout(function(){
          $(".map-wrap .osaka").find(".circle .inner").addClass("on");
        },d4);
      },d2*2);
      setTimeout(function(){
        setTimeout(function(){
          $(".map-wrap .fukuoka").find(".line .inner").addClass("on");
        },d3);
        setTimeout(function(){
          $(".map-wrap .fukuoka").find(".circle .inner").addClass("on");
        },d4);
      },d2*3);
      setTimeout(function(){
        setTimeout(function(){
          $(".map-wrap .okinawa").find(".line .inner").addClass("on");
        },d3);
        setTimeout(function(){
          $(".map-wrap .okinawa").find(".circle .inner").addClass("on");
        },d4);
      },d2*4);
    }
  }).scroll();
}
if($("#work").length){
  var d1 = 1000;
  $(window).on("scroll",function(){
    var percent = $(".sp").is(":visible") ? 0.5 : 0.3 ;
    if(!$(".graph").hasClass("animed") && $(".graph").offset().top < $(window).scrollTop()+$(window).height()*percent){
      $(".graph").addClass("animed");
      init();
      console.log("dddd");
      setTimeout(function(){
        $(".graph .texts").find(".cond01").addClass("on");
        setTimeout(function(){
          $(".graph .texts").find(".cond02").addClass("on");
          setTimeout(function(){
            $(".graph .texts").find(".cond03").addClass("on");
            setTimeout(function(){
              $(".graph .texts").find(".cond04").addClass("on");
              setTimeout(function(){
                $(".graph .texts").find(".cond05").addClass("on");
              },d1+200);
            },d1+600);
          },d1+500);
        },d1);
      },d1);
    }
  }).scroll();
}
var modal_template = '\
  <div class="modal-layer"></div>\
  <a href="#" class="btn">\
    <span class="span1"></span>\
    <span class="span2"></span>\
  </a>\
  <div class="modal-content"><div class="modal-inner"><iframe width="560" height="315" src="https://www.youtube.com/embed/-cYskVDiCVg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>\
';
  if($(".people-movie").length){
    $(".people-movie a").on("click",function(e){
      e.preventDefault();
      var modal = $('<div class="modal" />').html(modal_template);
      $(".all-wrap").append(modal);
      $(".all-wrap .modal").fadeIn(700);
      $(".all-wrap .modal .btn,.all-wrap .modal .modal-layer").on("click",function(e){
      e.preventDefault();
        $(".all-wrap .modal").fadeOut(700,function(){
          $(".all-wrap .modal").remove();
        });
      });
    });
  }

// For discussion and comments, see: http://remysharp.com/2009/01/07/html5-enabling-script/
(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(',');for(var i=0;i<e.length;i++){document.createElement(e[i]);}})();
