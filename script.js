function delayNavigation(event, target) {
  event.preventDefault(); // Mencegah navigasi langsung pada link
  
  // Mengatur jeda sebelum tindakan dilakukan (contoh: 500ms)
  setTimeout(function() {
    // Tindakan yang diinginkan setelah jeda waktu
    if (target === 'link1') {
      window.location.href = 'index.html'; // Ganti dengan tujuan navigasi
    } else if (target === 'link2') {
      window.location.href = 'about.html'; // Ganti dengan tujuan navigasi
    }
    // ...
  }, 500); // Ganti angka dengan durasi delay dalam milidetik
}


window.addEventListener("scroll", function () {
  let image = document.getElementById("scrollImage");
  let scrollPosition = window.scrollY;

  // Mengatur transformasi berdasarkan pergerakan scroll
  image.style.transform = `translateY(-${scrollPosition / 2}px)`;
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

function checkScroll() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const rect = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (rect < windowHeight) {
      card.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Trigger once on page load

window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;
  const elements = document.querySelectorAll('.scroll-animation');

  elements.forEach(function(el) {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight * 0.75) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animateLeftElements = document.querySelectorAll(".animate-left");
  const animateRightToLeftElements = document.querySelectorAll(".animate-right");

  function checkAnimation() {
    animateLeftElements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("active");
      }
    });

    animateRightToLeftElements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("active");
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Panggil fungsi checkAnimation saat melakukan scroll
  window.addEventListener("scroll", checkAnimation);
  // Panggil fungsi checkAnimation pada awal load jika elemen tersebut sudah terlihat
  checkAnimation();
});