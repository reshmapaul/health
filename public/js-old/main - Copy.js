$(window).load(function () {
  $("#preloader").fadeOut("slow");
  $('.morelink').each(function( index ) {
  var id = $(this).attr('id');
     
      if(id == 'data0'){
         $(this).addClass("Demand_medical_records_read");  
      }
      else if(id == 'data1'){
         $(this).addClass("Acess_wearables_read"); 
      }
      else if(id == 'data2'){
          $(this).addClass("Need_for_transparency_read");
      }
      else if(id == 'data3'){
          $(this).addClass("Correction_of_error_read");
      }
      else if(id == 'data4'){
          $(this).addClass("Rise_for_patients_read");
      }
      else if(id == 'data5'){
          $(this).addClass("Decisions_for_care_read");
      }
      else if(id == 'data6'){
          $(this).addClass("Improve_patient_satisfaction_read");
      }
      else if(id == 'data7'){
          $(this).addClass("Healthcare_organizations_read");
      }  
     
});
});


$(document).ready(function () {
/*twitter hashtag feed */

  /*var query =
    '{"query":"query {\n  unblockhealth_tweets {\n    date\n    description\n    favcount\n    id\n    image_url\n    retweeted\n    screen_name\n    title\n    tweet_id\n    tweetcount\n    video_url\n  profile_image_url\n  }\n}\n"}';

  $.ajax({
    url: 'https://api-twitter-hashtag.infra.lectio.cc/v1/graphql',
    contentType: 'application/json',
    dataType: 'json',
    type: 'POST',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('x-hasura-admin-secret', 'MkH57Eokp6nu');
    },
    data: query,
    success: function(result) {
      // console.log(result['data']['unblock_test_unblockhealth_tweets']);
      const feedsList = result['data']['unblockhealth_tweets'];
      //console.log(feedsList);

      let feedListHtml = '';
      feedsList.forEach(function(feed) {
        console.log('<div class="dropdown-menu"><iframe src="https://www.facebook.com/plugins/share_button.php?href=https://twitter.com/statuses/'+feed.tweet_id+'"&layout=button&size=small&appId=831536586968161&width=67&height=20" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
        /* html population start */
        /*feedListHtml += ' <div class="panel-body twitter-feed-sec">';
        feedListHtml += '<div class="retweet-top">';
        if (feed.retweeted) {
          feedListHtml +=
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" class="eapps-twitter-feed-posts-item-retweet-status-icon">';
          feedListHtml +=
            '<path  d="M17.712 11.961a.493.493 0 0 1 0 .698l-2.518 2.517a.491.491 0 0 1-.698 0l-2.517-2.517a.493.493 0 1 1 .698-.698l1.675 1.674V6.468c0-.817-.665-1.481-1.481-1.481H8.494a.494.494 0 1 1 0-.987h4.377a2.471 2.471 0 0 1 2.468 2.468v7.168l1.675-1.675a.493.493 0 0 1 .698 0zm-8.348 2.373a.494.494 0 0 1 0 .988H4.986a2.471 2.471 0 0 1-2.468-2.47V5.686L.843 7.36a.493.493 0 1 1-.698-.698l2.518-2.518a.493.493 0 0 1 .698 0l2.517 2.518a.493.493 0 1 1-.698.698L3.505 5.685v7.168c0 .817.665 1.48 1.48 1.48h4.379z">';
          feedListHtml += '</path>';
          feedListHtml += '</svg>';
          feedListHtml +=
            '<span class="retweet-count"><a href="https://twitter.com/'+feed.screen_name+'" target="_blank">'+
            feed.retweeted +
            '</a> Retweeted</span>';
        }
        feedListHtml +=
          '<span class="twitter-icon-right"><a href="https://twitter.com/'+feed.screen_name+'/status/'+feed.tweet_id+'" target="_blank" title="View on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></span>';
        feedListHtml += '</div >';
        feedListHtml += '<div class="media">';
        feedListHtml += '<div class="media-left">';

        feedListHtml += '<a href="https://twitter.com/'+feed.screen_name+'" target="_blank"><img src="' + feed.profile_image_url + '"';
        feedListHtml += 'class="media-object circle">';
        feedListHtml += '</div>';
        feedListHtml += '<div class="media-body">';
        feedListHtml +=
          '<p><a href="https://twitter.com/'+feed.screen_name+'" target="_blank"><span class="feed-main-name">' +
          feed.title +
          '</span></a> <a href="https://twitter.com/'+feed.screen_name+'" target="_blank"><span class="time">@' +
          feed.screen_name +
          '<span class="separator"></span><span class="time-lapse">' +
          timeSince(feed.date) +
          'ago</span></a></span></p>';
        feedListHtml += '</div>';
        feedListHtml += '</div>';
        feedListHtml += '<div class="description-area">';
        var description;
        //console.log(feed.description.indexOf(feed.screen_name));
        if (feed.description.indexOf(feed.screen_name + ':') > 0) {
          description = feed.description.split('@' + feed.screen_name + ':');
          description = description[1];
        } else {
          description = feed.description ? feed.description : '';
        }
        // console.log('substring' + description);
        feedListHtml += '<p>' + description + '</p>';
        feedListHtml += '</div>';
        feedListHtml += '<div class="post">';
        if (feed.image_url) {
          feedListHtml += '<img class="not" src="' + feed.image_url + '">';
        }
        feedListHtml += '<p class="iconsec">';
        feedListHtml +=
          '<i class="" aria-hidden="true"><a href="https://twitter.com/intent/tweet?in_reply_to='+feed.tweet_id+'&related='+feed.screen_name+'" target="_blank" title="Reply"><svg width="18" height="18" viewBox="0 0 18 18">';
        feedListHtml +=
          '<path d="M13.359 11.545c-.747.632-3.2 2.242-4.458 3.056v-2.098a.493.493 0 0 0-.493-.493H7.146c-2.41 0-4.159-1.63-4.159-3.874 0-2.327 1.822-4.148 4.147-4.148l3.729.006c2.326 0 4.147 1.821 4.149 4.144 0 1.257-.619 2.531-1.653 3.407zM7.136 3C4.255 3 2 5.256 2 8.136c0 2.685 2.079 4.727 4.877 4.851h1.037v2.52a.49.49 0 0 0 .759.416c.174-.111 4.261-2.725 5.324-3.625 1.252-1.06 2-2.612 2.003-4.154-.004-2.886-2.258-5.136-5.134-5.137L7.136 3z">';
        feedListHtml += '</path>';
        feedListHtml += '</svg></a>';
        feedListHtml += '</i>';
        feedListHtml += '<i class="" aria-hidden="true">';
        feedListHtml +=
          '<a href="https://twitter.com/intent/retweet?tweet_id='+feed.tweet_id+'&related='+feed.screen_name+'" target="_blank" title="Retweet"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18"  class="eapps-twitter-feed-posts-item-retweet-status-icon">';
        feedListHtml +=
          '<path  d="M17.712 11.961a.493.493 0 0 1 0 .698l-2.518 2.517a.491.491 0 0 1-.698 0l-2.517-2.517a.493.493 0 1 1 .698-.698l1.675 1.674V6.468c0-.817-.665-1.481-1.481-1.481H8.494a.494.494 0 1 1 0-.987h4.377a2.471 2.471 0 0 1 2.468 2.468v7.168l1.675-1.675a.493.493 0 0 1 .698 0zm-8.348 2.373a.494.494 0 0 1 0 .988H4.986a2.471 2.471 0 0 1-2.468-2.47V5.686L.843 7.36a.493.493 0 1 1-.698-.698l2.518-2.518a.493.493 0 0 1 .698 0l2.517 2.518a.493.493 0 1 1-.698.698L3.505 5.685v7.168c0 .817.665 1.48 1.48 1.48h4.379z">';
        feedListHtml += '</path>';
        feedListHtml +=
          '</svg><span class="retweet-count">' +
          feed.tweetcount +
          '</span></a></i>';
        feedListHtml +=
          '<i class="" aria-hidden="true"><a href="https://twitter.com/intent/like?tweet_id='+feed.tweet_id+'&related='+feed.screen_name+'" title="Like" class="popup"><svg width="18" height="18" viewBox="0 0 18 18">';
        feedListHtml +=
          '<path d="M5.556 4.988c-1.368 0-2.569 1.309-2.569 2.801 0 3.778 4.63 6.632 5.628 6.673.998-.041 5.628-2.895 5.628-6.673 0-1.492-1.201-2.801-2.57-2.801-1.665 0-2.593 1.932-2.602 1.951-.152.371-.761.371-.913 0-.008-.019-.937-1.951-2.602-1.951zM2 7.789C2 5.771 3.662 4 5.556 4c1.508 0 2.522 1.041 3.059 1.797C9.152 5.041 10.165 4 11.673 4c1.895 0 3.557 1.771 3.557 3.789 0 4.197-4.906 7.629-6.606 7.661C6.906 15.418 2 11.986 2 7.789z">';
        feedListHtml += '</path>';
        feedListHtml +=
          '</svg><span class="like-count">' + feed.favcount + '</span></a></i>';
        feedListHtml +=
          '<span class="right"><div class="btn-group dropup share-dropdown"><button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18">';
        feedListHtml +=
          '<path transform="rotate(-90 8.5 8.5)" d="M11.516 4.815l3.342 3.34a.486.486 0 0 1 0 .69l-3.341 3.34a.488.488 0 0 1-.689-.689l2.507-2.508H5.497a.487.487 0 1 1 0-.975h7.838l-2.508-2.508a.488.488 0 0 1 .69-.69zm-4.352 9.21a.488.488 0 0 1 0 .976H3.49A1.493 1.493 0 0 1 2 13.51V3.49C2 2.668 2.668 2 3.49 2h3.674a.488.488 0 0 1 0 .975H3.49a.515.515 0 0 0-.515.515v10.02c0 .285.23.515.515.515h3.674z">';
        feedListHtml += '</path>';
        feedListHtml += '</svg><span class="share-text">Share</span></a></i></span></button>';
        //feedListHtml += '<div class="dropdown-menu"><a class="dropdown-item facebook popup" href="https://www.facebook.com/sharer/sharer.php?u=https://twitter.com/statuses/'+feed.tweet_id+'"><i class="fa fa-facebook" aria-hidden="true"></i> Share on Facebook</a>';
        feedListHtml += '<div class="dropdown-menu"><iframe src="https://www.facebook.com/plugins/share_button.php?href=https://twitter.com/statuses/'+feed.tweet_id+'"&layout=button&size=small&appId=831536586968161&width=67&height=20" width="67" height="20" style="border:none;overflow:hidden;margin-left:25px;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';
        feed_screen_name = "Twitter User"; 
        if( feed.screen_name.trim()  != undefined ){
          if( feed.screen_name.trim() != '' ){
            feed_screen_name = feed.screen_name.trim(); 
          }
        }
        feedListHtml += '<a class="dropdown-item twitter" onclick="twitterShare('+feed.tweet_id+',\''+feed_screen_name+'\')"><i class="fa fa-twitter" aria-hidden="true"></i> Share</a></div></div></span>';
        feedListHtml += '</div>';
        feedListHtml += '</div>';
        /* html population End*/
      /* });
      $('#twitter_feed').html(feedListHtml);

    }
  });*/

  /*twitter hashtag feed end */
 

$('.readmore-link').each(function( index ) {
      var id = $(this).attr('id');    
      if(id == 'loadMore0'){
         $(this).addClass("Health_information_management_read");  
      }
      else if(id == 'loadMore1'){
         $(this).addClass("Office_of_patient_experience_read"); 
      }
      else if(id == 'loadMore2'){
          $(this).addClass("Regulatory_read");
      }
      else if(id == 'loadMore3'){
          $(this).addClass("Patients_and_carepartners_read");
      }
      else if(id == 'showLess0'){
         $(this).addClass("Health_information_management_show");  
      }
      else if(id == 'showLess1'){
         $(this).addClass("Office_of_patient_experience_show"); 
      }
      else if(id == 'showLess2'){
          $(this).addClass("Regulatory_show");
      }
      else if(id == 'showLess3'){
          $(this).addClass("Patients_and_carepartners_show");
      }
  });

  /*$('#loadMore0').click(function(){
    $("#loadMore0").addClass("Health_information_management_read");
  });
  $('#showLess0').click(function(){
    $("#showLess0").addClass("Health_information_management_show");
  });
   $('#loadMore1').click(function(){
    $("#loadMore1").addClass("Office_of_patient_experience_read");
  });
  $('#showLess1').click(function(){
    $("#showLess1").addClass("Office_of_patient_experience_show");
  });
   $('#loadMore2').click(function(){
    $("#loadMore2").addClass("Regulatory_read");
  });
  $('#showLess2').click(function(){
    $("#showLess2").addClass("Regulatory_show");
  });
   $('#loadMore3').click(function(){
    $("#loadMore3").addClass("Patients_and_carepartners_read");
  });
  $('#showLess3').click(function(){
    $("#showLess3").addClass("Patients_and_carepartners_show");
  });*/
  
  $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
   });
  var pathname = window.location.pathname;
  
  if (pathname == '/faqs/') {
    $('#top-nav').addClass('confirmregistration');
    $('#top-nav').addClass('animated');
    $('#current').addClass('current');
     
    //$('#commonfooter').addClass('confirm-page-footer');
  }
  if(pathname.includes('/news/')) {
    $('#top-nav').addClass('confirmregistration');
    $('#current').removeClass('current');
    $('#news').addClass('current'); 
  }
  if(pathname.includes('/press/')) {
    $('#top-nav').addClass('confirmregistration');
    $('#current').removeClass('current');
    $('#press').addClass('current'); 
  }
  if(pathname.includes('/events/')) {
    $('#top-nav').addClass('confirmregistration');
    $('#current').removeClass('current');
    $('#events').addClass('current'); 
  }
  if(pathname == '/faqs/'){
    $('#current').removeClass('current');
    $('#faq').addClass('current'); 
  }
  if(pathname.includes('/blog/')) {
    $('#top-nav').addClass('confirmregistration');
    $('#current').removeClass('current');
    $('#blog').addClass('current'); 
  }
  if (pathname == '/404.html') {
    $('#top-nav').addClass('confirmregistration');
    $('#top-nav').addClass('animated');
  }

  new WOW().init();

  $('#top-nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 1200
  });


  //animated header class
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
      //console.log('a');
      $(".navigation").addClass("animated");
    } else {
      //console.log('a');
      $(".navigation").removeClass("animated");
    }
  });

  $year = $('#countdown_dashboard').data('year');
  $month = $('#countdown_dashboard').data('month');
  $day = $('#countdown_dashboard').data('day');
  $hour = $('#countdown_dashboard').data('hour');
  $min = $('#countdown_dashboard').data('minute');
  $seconds = $('#countdown_dashboard').data('seconds');
  if ($('#countdown_dashboard').length != 0) {
    $('#countdown_dashboard').countDown({
      targetDate: {
        'day': $day,
        'month': $month,
        'year': $year,
        'hour': $hour,
        'min': $min,
        'sec': $seconds,
      },
      omitWeeks: true
    });
  }
  $(".about-slider").owlCarousel(
    {
      singleItem: true,
      pagination: true,
      autoPlay: 5000,
    }
  );
  //contact form validation
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
  var uid = uuidv4();
  //alert(uid);
  $('#cntbtn').click(function () {
    $('#patientoption').val('PA').trigger('change');
  })
  $('#hospitalhimbtn').click(function () {
    $('#patientoption').val('HIM').trigger('change');
  })
  $('#contact-submit').click(function (e) {
    var first_name = $('#quickname').val();
    var email = $('#quickemail').val();
    var subject = $('#quicksubject').val();
    var message = $('#message').val();
    var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (first_name == '') {
      $('#quicknamealert').css('display', 'block');
      return false;
    }
    else {
      $('#quicknamealert').css('display', 'none');
    }
    if (email == '' || email.search(o) == -1) {
      $('#quickemailalert').css('display', 'block');
      return false;
    }
    else {
      $('#quickemailalert').css('display', 'none');
    }
    if (subject == '') {
      $('#quicksubjectalert').css('display', 'block');
      return false;
    }
    else {
      $('#quicksubjectalert').css('display', 'none');
    }
    if (message == '') {
      $('#messagealert').css('display', 'block');
      return false;
    }
    else {
      $('#messagealert').css('display', 'none');
    }

  });
  $('#subscribe-submit').click(function (e) {
    var first_name = $('#subscribename').val();
    var email = $('#subscribeemail').val();
    var title = $('#title').val();
    var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (first_name == '') {
      $('#subscribenamealert').css('display', 'block');
      return false;
    }
    else {
      $('#subscribenamealert').css('display', 'none');
    }
    if (email == '' || email.search(o) == -1) {
      $('#subscribeemailalert').css('display', 'block');
      return false;
    }
    else {
      $('#subscribeemailalert').css('display', 'none');
    }

    var form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("client_id", "93d80a68-5ad0-878d-a787-5da44425070f");
    form.append("client_secret", "_S9UX^KZ&&t9W(aH");
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://crm.unblock.health/Api/access_token",
      "method": "POST",
      "headers": {
        "Accept": "application/vnd.api+json"
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {

      var obj = $.parseJSON(response);
      var access_token = obj.access_token;
      var settings = {
        "url": "https://crm.unblock.health/Api/V8/module",
        "method": "POST",
        "headers": {
          "Accept": "application/vnd.api+json",
          "Authorization": "Bearer " + access_token + "",
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{\r\n  \"data\": {\r\n    \"type\": \"Contacts\",\r\n    \"id\": \"" + uid + "\",\r\n    \"attributes\": {\r\n     \"first_name\":\"" + first_name + "\",\r\n     \"email1\":\"" + email + "\"\r\n,\r\n     \"lead_source\":\"Web Site\"\r\n,\r\n     \"title\":\"" + title + "\"\r\n   }\r\n  }\r\n}\r\n"
      }

      $.ajax(settings).done(function (response) {
        //console.log(response);
        var contactid = response.data.id;
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://crm.unblock.health/Api/V8/module/Accounts/aba27ce2-d758-bdeb-adef-5da4294bf9e8/relationships",
          "method": "POST",
          "headers": {
            "Accept": "application/vnd.api+json",
            "Authorization": "Bearer " + access_token + "",
            "Content-Type": "application/json"
          },
          "processData": false,
          "data": "{  \r\n   \"data\":{  \r\n         \"type\":\"Contacts\",\r\n         \"id\":\"" + contactid + "\"\r\n\t    \r\n      }\r\n}"
        }

        $.ajax(settings).done(function (response) {
          //console.log(response);
          if (response.meta.message != "") {
            $('#subscribename').val('');
            $('#subscribeemail').val('');
            var $subscribesuccess = $('#subscribesuccess'); // get the reference of the div
            $subscribesuccess.show().html('You have been successfully added to our Mailing List!');
          }
        });
      });
    });
  });
  $('#contact-submit-live').click(function (e) {
    var first_name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var patientdetails = $('#patientoption').val();
    var message = $('#message').val();
    var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (first_name == '') {
      $('#namealert').css('display', 'block');
      return false;
    }
    else {
      $('#namealert').css('display', 'none');
    }
    if (email == '' || email.search(o) == -1) {
      $('#emailalert').css('display', 'block');
      return false;
    }
    else {
      $('#emailalert').css('display', 'none');
    }
    if (subject == '') {
      $('#subjectalert').css('display', 'block');
      return false;
    }
    else {
      $('#subjectalert').css('display', 'none');
    }
    if (patientdetails == '') {
      $('#patientalert').css('display', 'block');
      return false;
    }
    else {
      $('#patientalert').css('display', 'none');
    }

    var form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("client_id", "93d80a68-5ad0-878d-a787-5da44425070f");
    form.append("client_secret", "_S9UX^KZ&&t9W(aH");
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://crm.unblock.health/Api/access_token",
      "method": "POST",
      "headers": {
        "Accept": "application/vnd.api+json"
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {

      var obj = $.parseJSON(response);
      var access_token = obj.access_token;
      var settings = {
        "url": "https://crm.unblock.health/Api/V8/module",
        "method": "POST",
        "headers": {
          "Accept": "application/vnd.api+json",
          "Authorization": "Bearer " + access_token + "",
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{\r\n  \"data\": {\r\n    \"type\": \"Contacts\",\r\n    \"id\": \"" + uid + "\",\r\n    \"attributes\": {\r\n     \"first_name\":\"" + first_name + "\",\r\n     \"email1\":\"" + email + "\"\r\n,\r\n     \"lead_source\":\"Web Site\"\r\n,\r\n     \"title\":\"" + patientdetails + "\"\r\n   }\r\n  }\r\n}\r\n"
      }

      $.ajax(settings).done(function (response) {
        //console.log(response);
        var contactid = response.data.id;
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://crm.unblock.health/Api/V8/module/Accounts/aba27ce2-d758-bdeb-adef-5da4294bf9e8/relationships",
          "method": "POST",
          "headers": {
            "Accept": "application/vnd.api+json",
            "Authorization": "Bearer " + access_token + "",
            "Content-Type": "application/json"
          },
          "processData": false,
          "data": "{  \r\n   \"data\":{  \r\n         \"type\":\"Contacts\",\r\n         \"id\":\"" + contactid + "\"\r\n\t    \r\n      }\r\n}"
        }

        $.ajax(settings).done(function (response) {
          //console.log(response);
          if (response.meta.message != "") {
            $('#name').val('');
            $('#email').val('');
            var $success = $('#success'); // get the reference of the div
            $success.show().html('Your Message was sent successfully');
          }
        });
      });
    });
  });
  $('#contact-submit').click(function (e) {
    var first_name = $('#quickname').val();
    var email = $('#quickemail').val();
    var subject = $('#quicksubject').val();
    var message = $('#quickmessage').val();
    var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (first_name == '') {
      $('#quicknamealert').css('display', 'block');
      return false;
    }
    else {
      $('#quicknamealert').css('display', 'none');
    }
    if (email == '' || email.search(o) == -1) {
      $('#quickemailalert').css('display', 'block');
      return false;
    }
    else {
      $('#quickemailalert').css('display', 'none');
    }
    if (subject == '') {
      $('#quicksubjectalert').css('display', 'block');
      return false;
    }
    else {
      $('#quicksubjectalert').css('display', 'none');
    }
    if (message == '') {
      $('#messagealert').css('display', 'block');
      return false;
    }
    else {
      $('#messagealert').css('display', 'none');
    }
    var description = 'Subject: '+subject;
    description += '&#013;&#010;';
    description += 'Message: '+message;
    var form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("client_id", "93d80a68-5ad0-878d-a787-5da44425070f");
    form.append("client_secret", "_S9UX^KZ&&t9W(aH");
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://crm.unblock.health/Api/access_token",
      "method": "POST",
      "headers": {
        "Accept": "application/vnd.api+json"
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {

      var obj = $.parseJSON(response);
      var access_token = obj.access_token;
      var settings = {
        "url": "https://crm.unblock.health/Api/V8/module",
        "method": "POST",
        "headers": {
          "Accept": "application/vnd.api+json",
          "Authorization": "Bearer " + access_token + "",
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{\r\n  \"data\": {\r\n    \"type\": \"Contacts\",\r\n    \"id\": \"" + uid + "\",\r\n    \"attributes\": {\r\n     \"first_name\":\"" + first_name + "\",\r\n     \"email1\":\"" + email + "\"\r\n,\r\n     \"lead_source\":\"Web Site\"\r\n,\r\n     \"title\":\"GEN\"\r\n,\r\n     \"description\":\"" + description + "\"\r\n   }\r\n  }\r\n}\r\n"
      }

      $.ajax(settings).done(function (response) {
        //console.log(response);
        var contactid = response.data.id;
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://crm.unblock.health/Api/V8/module/Accounts/aba27ce2-d758-bdeb-adef-5da4294bf9e8/relationships",
          "method": "POST",
          "headers": {
            "Accept": "application/vnd.api+json",
            "Authorization": "Bearer " + access_token + "",
            "Content-Type": "application/json"
          },
          "processData": false,
          "data": "{  \r\n   \"data\":{  \r\n         \"type\":\"Contacts\",\r\n         \"id\":\"" + contactid + "\"\r\n\t    \r\n      }\r\n}"
        }

        $.ajax(settings).done(function (response) {
          //console.log(response);
          if (response.meta.message != "") {
            $("#contactform").trigger("reset");
            var $success = $('#successfooter'); // get the reference of the div
            $success.show().html('Your Message was sent successfully');
          }
        });
      });
    });
  });
  var showChar = 85;
  var ellipsestext = "....";
  var moretext = "Read More";
  var lesstext = "Show Less";
  var i=0;
  $('.more').each(function (index) {
    var content = $(this).html();
    if (content.length > showChar) {
      //alert(i);
      var c = content.substr(0, showChar);
      //alert(c);
      var h = content.substr(showChar, content.length - showChar);
      //alert(h);
      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a id="data'+i+'" href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
      i++;
    }
  });
  $(".morelink").click(function () {
    var id = $(this).attr('id');    
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
        if(id == 'data0'){
          $(this).removeClass("Demand_medical_records_show");
          $(this).addClass("Demand_medical_records_read");  
        }
        else if(id == 'data1'){
          $(this).removeClass("Acess_wearables_show");
          $(this).addClass("Acess_wearables_read");
        }
        else if(id == 'data2'){
          $(this).removeClass("Need_for_transparency_show");
          $(this).addClass("Need_for_transparency_read");
        }
        else if(id == 'data3'){
          $(this).removeClass("Correction_of_error_show");
          $(this).addClass("Correction_of_error_read");
        }
        else if(id == 'data4'){
          $(this).removeClass("Rise_for_patients_show");
          $(this).addClass("Rise_for_patients_read");
        }
        else if(id == 'data5'){
          $(this).removeClass("Decisions_for_care_show");
          $(this).addClass("Decisions_for_care_read");
        }
        else if(id == 'data6'){
          $(this).removeClass("Improve_patient_satisfaction_show");
          $(this).addClass("Improve_patient_satisfaction_read");
        }
        else if(id == 'data7'){
          $(this).removeClass("Healthcare_organizations_show");
          $(this).addClass("Healthcare_organizations_read");
        }
        $(this).html(moretext);
    }else {
      if(id == 'data0'){
         $(this).removeClass("Demand_medical_records_read");
         $(this).addClass("Demand_medical_records_show");  
      }
      else if(id == 'data1'){
         $(this).removeClass("Acess_wearables_read");
         $(this).addClass("Acess_wearables_show"); 
      }
      else if(id == 'data2'){
          $(this).removeClass("Need_for_transparency_read");
          $(this).addClass("Need_for_transparency_show");
      }
      else if(id == 'data3'){
          $(this).removeClass("Correction_of_error_read");
          $(this).addClass("Correction_of_error_show");
      }
      else if(id == 'data4'){
          $(this).removeClass("Rise_for_patients_read");
          $(this).addClass("Rise_for_patients_show");
      }
      else if(id == 'data5'){
          $(this).removeClass("Decisions_for_care_read");
          $(this).addClass("Decisions_for_care_show");
      }
      else if(id == 'data6'){
          $(this).removeClass("Improve_patient_satisfaction_read");
          $(this).addClass("Improve_patient_satisfaction_show");
      }
      else if(id == 'data7'){
          $(this).removeClass("Healthcare_organizations_read");
          $(this).addClass("Healthcare_organizations_show");
      }
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
  
  
  $('#myList1 li').each(function (index) {
    var size_li = 0;
    var size_li = $("#myList" + index + " li").size();
    //console.log(size_li);
    x = 1;
    $('#myList' + index + ' li:lt(' + x + ')').show();
    $('#showLess' + index).hide();
    $('#loadMore' + index).click(function () {
      $('#loadMore' + index).hide();
      x = (x + 5 <= size_li) ? x + 5 : size_li;
      //console.log(x);
      $('#myList' + index + ' li:lt(' + x + ')').show();
      $('#showLess' + index).show();
    });
    $('#showLess' + index).click(function () {
      $('#showLess' + index).hide();
      x1 = (x - 5 < 0) ? 2 : 1;
      console.log(x1);
      $('#myList' + index + ' li').not(':lt(' + x1 + ')').hide();
      $('#loadMore' + index).show();

    });
  });
  function timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var duration = getDuration(seconds);
    var suffix = duration.interval > 1 || duration.interval === 0 ? 's' : '';
    return duration.interval + ' ' + duration.epoch + suffix;
  }
  function getDuration(seconds) {
    var epoch, interval;
    var DURATION_IN_SECONDS = {
      epochs: ['year', 'month', 'day', 'hour', 'minute'],
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
      epoch = DURATION_IN_SECONDS.epochs[i];
      interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
      if (interval >= 1) {
        return {
          interval: interval,
          epoch: epoch
        };
      }
    }
  }
  $('#subscribe-submit').prop('disabled', 'disabled');
  $('#subscribe-submit').addClass('is-disabled');
  $('#subscribe').on('blur keyup change', 'textarea,input', function (event) {
    validateForm('#subscribe', '#subscribe-submit');
  });
  $('#contact-submit-live').prop('disabled', 'disabled');
  $('#contact-submit-live').addClass('is-disabled');
  $('#quickcontact').on('blur keyup change', 'textarea,input', function (event) {
    validateForm('#quickcontact', '#contact-submit-live');
  });
  $('#contact-submit').prop('disabled', 'disabled');
  $('#contact-submit').addClass('is-disabled');
  $('#contactform').on('blur keyup change', 'textarea,input', function (event) {
    validateForm('#contactform', '#contact-submit');
  });
  function validateForm(id,buttonId) {
    var valid = $(id).validate().checkForm();
    if (valid) {
      $(buttonId).prop('disabled', false);
      $(buttonId).removeClass('is-disabled');
    } else {
      $(buttonId).prop('disabled', 'disabled');
      $(buttonId).addClass('is-disabled');
    }
  }
});


function twitterShare(tweet_id,screen_name){
  if( tweet_id != undefined && screen_name != undefined ){
    if( tweet_id ){
    var url = "https://twitter.com/statuses/"+tweet_id;
    var text = '';
    window.open('https://twitter.com/home?status='+encodeURIComponent(url), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
  }

console.log("client_credentials");
}








