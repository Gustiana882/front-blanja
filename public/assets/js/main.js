// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    });

  // carousel category
  $('.category').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    autoWidth: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoHeight: true,
        mouseDrag: false,
        touchDrag: true,
      },
    }
  });

  // carousel trend
  $('.trend').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nav:true,
    responsive: {
      0: {
        items: 1,
        mouseDrag: false,
        touchDrag: true
      },
    }
  });

  // responsive: {
  //   0: {
  //     items: 2,
  //   },
  //   600: {
  //     items: 3
  //   },
  //   1000: {
  //     items: 7
  //   }
  // }
})()