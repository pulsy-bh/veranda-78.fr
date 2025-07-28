$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});



if (matchMedia) {
  var mq = window.matchMedia("(min-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(document).ready(function () {

    });
  }
}


function addTitleToLinks() {
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (!link.hasAttribute('title')) {
      var linkText = link.textContent;
      link.setAttribute('title', linkText);
    }
  });
}

addTitleToLinks();


$(window).scroll(function () {

  if ($(document).scrollTop() > 0) {
    $(".menu").animate({}, 1000);
    $(".menu").addClass('fixmenu');
  } else {
    $(".menu").animate({}, 1000);
    $(".menu").removeClass('fixmenu');
  }
});


$(document).ready(function () {

  $('.bxslider').bxSlider({
    minSlides: 1,
    auto: true,
    moveSlides: 1,
    speed: 1000,
    pause: 5000,
    maxSlides: 1,
    slideWidth: 980,
    slideMargin: 0,
    touchEnabled: true,
    controls: false,
    infiniteLoop: true,
  });

  $('.bxslider2').bxSlider({
    minSlides: 3,
    auto: true,
    moveSlides: 1,
    speed: 1000,
    pause: 3000,
    maxSlides: 5,
    slideWidth: 100,
    slideMargin: 20,
    touchEnabled: true,
    controls: false,
    infiniteLoop: true,
    pager: false
  });

});

//   var $lightbox = $('#lightbox');

//   $('[data-target="#lightbox"]').on('click', function (event) {
//     var $img = $(this).find('img'),
//       src = $img.attr('src'),
//       alt = $img.attr('alt'),
//       css = {
//         'maxWidth': $(window).width() - 100,
//         'maxHeight': $(window).height() - 100
//       };

//     $lightbox.find('.close').addClass('hidden');
//     $lightbox.find('img').attr('src', src);
//     $lightbox.find('img').attr('alt', alt);
//     $lightbox.find('img').css(css);
//   });

//   $lightbox.on('shown.bs.modal', function (e) {
//     var $img = $lightbox.find('img');

//     $lightbox.find('.modal-dialog').css({
//       'width': $img.width()
//     });
//     $lightbox.find('.close').removeClass('hidden');
//   });
// });



var conf_name = "veranda-78.fr";
var conf_email = "cfv.commercial@orange.fr";
var modal_rgpd = '<div class="modal fade" id="modal-rgpd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
  '        <div class="modal-dialog" role="document">' +
  '            <div class="modal-content">' +
  '                <div class="modal-body">' +
  '                  * En cochant cette case, j’accepte que mes données personnelles soient collectées et traitées par le service commercial de ' + conf_name + '.' +
  '                   Leur traitement a pour finalité de traiter votre demande spécifique.<br>' +
  '                   Les données collectées sont conservées pour la durée de nos relations commerciales + 1 an. Conformément à la loi' +
  '                   « informatique et libertés », vous pouvez exercer votre droit d’accès aux données vous concernant et les faire rectifier' +
  '                   auprès de notre référent à <a href="mailto:"' + conf_email + '">' + conf_email + '</a>.<br>' +
  '                   Vous disposez également d’un droit de rectification, à l’oubli, à la portabilité, de limitation ou d’opposition auprès de notre référent à ' +
  '                   <a href="mailto:' + conf_email + '">' + conf_email + '</a>.<br><br>' +
  '                   En dernier recours, vous pouvez déposer une réclamation auprès de la CNIL.' +
  '                </div>' +
  '                <div class="modal-footer">' +
  '                    <div class="form-group text-center">' +
  '                        <button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Fermer</button>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '        </div>' +
  '    </div>';
$(document).ready(function () {
  $(".info-rgpd label").after(function () {
    return '&nbsp;<a href="#" data-toggle="modal" data-target="#modal-rgpd"><i class="fa fa-info-circle"></i></a>' + modal_rgpd;
  });
});



$(window).scroll(function () {
  if ($(document).scrollTop() > 350) {
    $(".backTotop").addClass('active');
  } else {
    $(".backTotop").removeClass('active');
  }
});

$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top - 200
  }, 'slow');
  return false;
});




$('count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {

    //chnage count up speed here
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});