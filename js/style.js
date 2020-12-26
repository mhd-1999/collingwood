var app=angular.module('myApp',['ngRoute']);
app.controller('MyCtrl',function($scope,$http){
    $http.get("data/data.json")
    .then(function(data){
        $scope.pro=data
    })
    
});
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'dess.html'
    })
    .when('/access',{
        templateUrl:'acess.html'
    })
})
$(function(){
    $(window).scroll(function(event){
        var localBody= $('body').scrollTop();
        var localIntro=$('.intro').offset().top;
        var localIntro2=$('.intro2').offset().top;
        localIntro2=localBody -750;
        localIntro=localBody;
        if(localBody>=localIntro){
           $('.intro').addClass('animation-intro')
           
        }
        if(localBody>=localIntro2){
            $('.intro2').addClass('animation-intro2')
        }
    })})
$(function(){

    $('input[type="number"]').niceNumber();
  
  });
$('.color1').on({'click': function(){
    $('#detail-1').attr('src','img/product/detail/detail12.jpg');
    $('#detail-2').attr('src','img/product/detail/detail22.jpg');
    $('#detail-3').attr('src','img/product/detail/detail32.jpg');
    $('#detail-4').attr('src','img/product/detail/detail42.jpg');
}});
$('.color2').on({'click': function(){
    $('#detail-1').attr('src','img/product/detail/detail1.jpg');
    $('#detail-2').attr('src','img/product/detail/detail2.jpg');
    $('#detail-3').attr('src','img/product/detail/detail3.jpg');
    $('#detail-4').attr('src','img/product/detail/detail4.jpg');
}});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  };

$(window).on("scroll",function(){
    if($(window).scrollTop()){
        $('nav').addClass('sticky');
        $('#logo-img').attr('src','img/logo-footer.png');
        $('.navbar-toggler').addClass('navbar-button')
    }
    else{
        $('nav').removeClass('sticky');
        $('#logo-img').attr('src','img/logo.png');
        $('.navbar-toggler').removeClass('navbar-button')

    }
})
