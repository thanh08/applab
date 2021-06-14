$(function () {
    $('.text3-1top11content').slideUp();
    $('.text3-1top11').click(function () { 
        $(this).next().slideToggle();
        $(this).toggleClass('addtext3-1');
        $(this).children().toggleClass('themtop11');
    });
    
    //lựa chọn gói năm or tháng
      $('.text2top9 button').click(function () { 
          console.log("click");
        ten=$(this).attr('href');
        console.log(ten);
        $('.card').hide();
        $(ten).show();
      });
    //scroll menu trượt
    $('ul li.nav-item:nth-child(1)').on('click', function () {
      $('html.body').animate({scrollTop:0},150,'easeOutCubic');
      
    });

    $('ul li.nav-item:nth-child(2)').on('click', function () {
      $('html,body').animate({scrollTop:$('.top2').offset().top},150,'easeOutCubic');
      console.log($('.top2').offset().top);
      
    });
    $('ul li.nav-item:nth-child(3)').on('click', function () {
      $('html,body').animate({scrollTop:$('.top7').offset().top},150,'easeOutCubic');
      
    });
    $('ul li.nav-item:nth-child(4)').on('click', function () {
      $('html,body').animate({scrollTop:$('.top6').offset().top},150,'easeOutCubic');
      
    });
    $('ul li.nav-item:nth-child(5)').on('click', function () {
      $('html,body').animate({scrollTop:$('.top10').offset().top},150,'easeOutCubic');
      
    });
    $('ul li.nav-item:nth-child(6)').on('click', function () {
      $('html,body').animate({scrollTop:$('.top9').offset().top},150,'easeOutCubic');
      
    });
    //slide top 10
    var soluongsline = $('.texttop10').length;
    console.log(soluongsline);
    var vitrislines = 0;
    slines = document.querySelectorAll('.texttop10');
    var nutphai = document.querySelector('i.phai');
    nutphai.addEventListener('click',clicknutphai);
    var nuttrai = document.querySelector('i.trai');
    nuttrai.addEventListener('click',clicknuttrai);
    var trangthaiclick = 'stop'
    var thucthi = setInterval(autosline,3000);

    function clicknutphai () { 
      if(trangthaiclick == 'run'){return false;}
      trangthaiclick = 'run'
      clearInterval(thucthi);
      var chisochuyendong = 0;
      var phantuhientai = slines[vitrislines];
      if(vitrislines < soluongsline - 1)
      {
        vitrislines = vitrislines + 1
        console.log(vitrislines);
      }
      else{
        vitrislines = 0;
        console.log(vitrislines);
      }
      var phantutieptheo = slines[vitrislines];
      var xulyhientaiketthuccd = function () {
        $(phantuhientai).removeClass('kichhoattop10');
        $(phantuhientai).removeClass('chuyencanhtop10');
        chisochuyendong++;
        if(chisochuyendong == 2){
          trangthaiclick= 'stop'
        }
       
      }
      
      var xulytieptheoketthuccd = function () {
        $(phantutieptheo).removeClass('chuyencanhtop10-1');
         $(phantutieptheo).addClass('kichhoattop10');
         chisochuyendong++;
         if(chisochuyendong == 2){
           trangthaiclick= 'stop';
         }
        
      }
      phantuhientai.addEventListener('webkitAnimationEnd',xulyhientaiketthuccd);
      phantutieptheo.addEventListener('webkitAnimationEnd',xulytieptheoketthuccd);

      $(phantutieptheo).addClass('chuyencanhtop10-1');
      $(phantuhientai).addClass('chuyencanhtop10');

      
      
    };
    function clicknuttrai() {
      if(trangthaiclick == 'run'){return false;}
      trangthaiclick = 'run'
      clearInterval(thucthi)
      var chisochuyendong = 0;
      var phantuhientai = slines[vitrislines];
      if(vitrislines > 0){
        vitrislines--;
      }
      else{
        vitrislines = soluongsline - 1;
      }
      var phantutieptheo = slines[vitrislines];
      $(phantuhientai).addClass('chuyencanhtop10-2');
      $(phantutieptheo).addClass('chuyencanhtop10-3');
      //xu ly sau chuyen dong animation
      var xulyhientaiketthuccd = function () {
        $(phantuhientai).removeClass('kichhoattop10');
        $(phantuhientai).removeClass('chuyencanhtop10-2');
        chisochuyendong++;
         if(chisochuyendong == 2){
           trangthaiclick= 'stop';
         }
       
      }
      
      var xulytieptheoketthuccd = function () {
        $(phantutieptheo).removeClass('chuyencanhtop10-3');
         $(phantutieptheo).addClass('kichhoattop10');
         chisochuyendong++;
         if(chisochuyendong == 2){
           trangthaiclick= 'stop';
         }

      }
      phantuhientai.addEventListener('webkitAnimationEnd',xulyhientaiketthuccd);
      phantutieptheo.addEventListener('webkitAnimationEnd',xulytieptheoketthuccd);

    }
    // code autosline
    var vitriht = 0;
    function autosline() {
      
      var phantuhientai = slines[vitriht];
      if(vitriht < soluongsline - 1)
      {
        vitriht = vitriht + 1
        console.log(vitriht);
      }
      else{
        vitriht = 0;
        console.log(vitriht);
      }
      var phantutieptheo = slines[vitriht];
      
        $(phantuhientai).addClass('chuyencanhtop10');
        $(phantutieptheo).addClass('chuyencanhtop10-1')
      var xulyhientaiketthuccd = function () {
        $(phantuhientai).removeClass('chuyencanhtop10');
        $(phantuhientai).removeClass('kichhoattop10');
      }
      phantuhientai.addEventListener('webkitAnimationEnd',xulyhientaiketthuccd);
      var xulytieptheoketthuccd = function () {
        $(phantutieptheo).removeClass('chuyencanhtop10-1'); 
         $(phantutieptheo).addClass('kichhoattop10');
      }
      phantutieptheo.addEventListener('webkitAnimationEnd',xulytieptheoketthuccd);
      
     
      
    }
    // ket thuc sline top10
    
    //scroll hien thi hieu ung
    var vitri = 'dang moc nho hon 900'
    $(document.body).on('touchmove', onScroll); // for mobile
    $(window).on('scroll', onScroll);
    function onScroll(){
      console.log(window.pageYOffset);
      var vt  = $('.top2').offset().top;
      console.log(vt);
      var vt1 = $('.top4').offset().top;
      console.log(vt1); 
      if (window.pageYOffset > vt && window.pageYOffset < vt1) {
        if (vitri == 'dang moc nho hon 900') {
          vitri = 'dang moc lon hon 900';
         $('.dt1 img,.dt2 img,.dt3 img').css('animation-play-state','running');
        }
        
       } 
       else if(window.pageYOffset < vt || window.pageYOffset > vt1){
         if (vitri = 'dang moc lon hon 900') {
          vitri = 'dang moc nho hon 900';
      $('.dt1 img,.dt2 img,.dt3 img').css('animation-play-state','paused');

         }}
        
     
     
    };
      
});