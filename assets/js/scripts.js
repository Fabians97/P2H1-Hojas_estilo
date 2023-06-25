$(function () {
    $(".sidebar-link").click(function () {
     $(".sidebar-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   $(window)
    .resize(function () {
     if ($(window).width() > 1090) {
      $(".sidebar").removeClass("collapse");
     } else {
      $(".sidebar").addClass("collapse");
     }
    })
    .resize();
   
   const allVideos = document.querySelectorAll(".video");
   
   allVideos.forEach((v) => {
    v.addEventListener("mouseover", () => {
     const video = v.querySelector("video");
     video.play();
    });
    v.addEventListener("mouseleave", () => {
     const video = v.querySelector("video");
     video.pause();
    });
   });
   
   $(function () {
    $(".logo, .logo-expand, .discover").on("click", function (e) {
     $(".main-container").removeClass("show");
     $(".main-container").scrollTop(0);
    });
    $(".trending, .video").on("click", function (e) {
     $(".main-container").addClass("show");
     $(".main-container").scrollTop(0);
     $(".sidebar-link").removeClass("is-active");
     $(".trending").addClass("is-active");
    });
   
    $(".video").click(function () {
     var source = $(this).find("source").attr("src");
     var title = $(this).find(".video-name").text();
     var person = $(this).find(".video-by").text();
     var img = $(this).find(".author-img").attr("src");
     $(".video-stream video").stop();
     $(".video-stream source").attr("src", source);
     $(".video-stream video").load();
     $(".video-p-title").text(title);
     $(".video-p-name").text(person);
     $(".video-detail .author-img").attr("src", img);
    });
   });
   

   document.getElementById('dropdown-icon').addEventListener('click', function() {
    var dropdownMenu = this.parentNode.querySelector('.dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });

  
  // Función para mostrar el formulario de inicio de sesión
function showLoginForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  }
  
  // Función para mostrar el formulario de registro
  function showRegisterForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
  
  window.onload = function() {
    // Obtener el valor del parámetro 'form' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const formToShow = urlParams.get('form');
  
    // Mostrar el formulario correspondiente
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    if (formToShow === 'login') {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    } else if (formToShow === 'register') {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    }
  };
  