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
   $("a:contains('Read on')").each( function( i, element ) {
        $(this).attr('target','_blank');
     
  });
  /*twitter hashtag feed */
  var ws = new WebSocket('wss://twint.netspective.io:8882');
  let count = 0;
  ws.onmessage = function (unblockTweets) {
    const tweets = unblockTweets.data;
    if (count === 0) {
      $(".twitter-loader").hide();
    }
    const tweetId = tweets.split(' ')[0];
    if (count < 50) {
      createTweet(tweetId);
    }
    count = count + 1;
  };
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
  
  
  if (pathname == '/terms-and-conditions/') {
    $('#top-nav').addClass('confirmregistration');
    $('#top-nav').addClass('animated');
    $('#current').addClass('current');

    //$('#commonfooter').addClass('confirm-page-footer');
  }
  if (pathname == '/patient-impact-stories/') {
    $('#top-nav').addClass('confirmregistration');
    $('#top-nav').addClass('animated');
    $('#current').addClass('current');

    //$('#commonfooter').addClass('confirm-page-footer');
  }
  if (pathname == '/privacy-policy/') {
    $('#top-nav').addClass('confirmregistration');
    $('#top-nav').addClass('animated');
    $('#current').addClass('current');

    //$('#commonfooter').addClass('confirm-page-footer');
  }
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
  if(pathname == '/patient-impact-stories/'){
    $('#current').removeClass('current');
    $('#patientimpact').addClass('current'); 
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
  /*$('#top-nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 1200
  });*/
  
 if ( window.location.pathname == '/' ){
  $('#top-nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 1200
  });
}

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
    console.log(" patientdetails -----------",first_name, email, subject, patientdetails);
    return false;
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
  $('#community-form-submit').click(function (e) {
    var First_Name = $('#community_name').val();
    var Email_Address = $('#community_email').val();
    var Mobile_Number = $('#community_mobilenumber').val();
    var Category = $('#survey-category').val();
    var TwitterHandle = $('#community_twitterhandle').val();
    var LinkedInProfile = $('#community_linkedInprofile').val();
    var fromDate = $('#community_fromDate').val();
    var toDate = $('#community_toDate').val();
    var DateAttendingFrom = ( $('#community_fromDate').val() == '') ? null : '"'+fromDate+'"';
    var DateAttendingTo= ( $('#community_toDate').val() == '') ? null : '"'+toDate+'"';
    var YourInterest =  $('#yourinterest').val();
    var comments =  $('#community_comments').val();
    
   var catarray = [];
    var cat = Category.toString();

    var catarray = cat.split(',');
    
    var selected_categories = catarray;

    var survey_category_ids = [];

    var inner_survey_category_id_pa = {};
    var inner_survey_category_id_cp = {};
    var inner_survey_category_id_patient = {};

    var inner_id_pa = {};
    var inner_id_cp = {};
    var inner_id_patient = {};

    selected_categories.forEach(function(element){
  
      if( element == 'PA'){
        inner_id_pa["id"] = 1;
        inner_survey_category_id_pa["survey_category_id"] = inner_id_pa;
        survey_category_ids.push(inner_survey_category_id_pa);
      }
    
      if( element == 'CP'){
        inner_id_cp["id"] = 2;
        inner_survey_category_id_cp["survey_category_id"] = inner_id_cp;
        survey_category_ids.push(inner_survey_category_id_cp);
      }
  
      if( element == 'Patient'){
        inner_id_patient["id"] = 3;
        inner_survey_category_id_patient["survey_category_id"] = inner_id_patient;
        survey_category_ids.push(inner_survey_category_id_patient);
      }

      })
    
    survey_category_ids = JSON.stringify(survey_category_ids);

    /*var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var filter = /^\d*(?:\.\d{1,2})?$/;
    if (First_Name == '') {
      $('#namealert').css('display', 'block');
      return false;
    }
    else {
      $('#namealert').css('display', 'none');
    }
    if (Email_Address == '' || Email_Address.search(o) == -1) {
      $('#emailalert').css('display', 'block');
      return false;
    }
    else {
      $('#emailalert').css('display', 'none');
    }
    if (Category == '') {
      $('#patientalert').css('display', 'block');
      return false;
    }
    else {
      $('#patientalert').css('display', 'none');
    }*/

  //description = '{ TwitterHandle : '+TwitterHandle+', LinkedInProfile : '+LinkedInProfile+', DateAttendingFrom : '+DateAttendingFrom+', DateAttendingTo  : '+DateAttendingTo+', Your Interest In Unblock Health : '+YourInterest+',Comments : '+comments+', Source:"HIMSS20"}';
  
  description = '{ "TwitterHandle" :\"'+ TwitterHandle +'\", "LinkedInProfile" :\"'+ LinkedInProfile +'\", "DateAttendingFrom" :\"'+ DateAttendingFrom +'\", "DateAttendingTo" :\"'+ DateAttendingTo +'\", "Your Interest In Unblock Health" :\"'+ YourInterest +'\", "Comments" :\"'+ comments +'\", "Source" :"HIMSS20"}';
  description = JSON.stringify(description);
   var settings = {
  "async": true,
  "crossDomain": true,
  //"url": "https://test.admin.app.unblock.health/ubhweb/items/himss20_contact_details",
  "url": "https://d.unblock.health/ubhweb/items/himss20_contact_details",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "processData": false,
  "data": "{\"status\": \"published\", \"full_name\": \"" + First_Name + "\" , \"category\" :" + survey_category_ids + ", \"e_mail\": \"" + Email_Address + "\", \"mobile_number\": \"" + Mobile_Number + "\", \"twitter_handle\": \"" + TwitterHandle + "\", \"linkedin_profile\": \"" + LinkedInProfile + "\", \"dates_attending_from\": "+ DateAttendingFrom + ", \"dates_attending_to\": "+ DateAttendingTo + ",  \"your_interest_in_unblock_health\": \"" + YourInterest + "\", \"comments\": \"" + comments + "\" ,  \r\n     \"source\":\"HIMSS20\"\r\n  } \r\n\r\n"
}

$.ajax(settings).done(function (response) {
  //console.log(response);
});
   
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
    //var $success = $('#success'); // get the reference of the div
    //$success.show().html('<div id="loader">Loading...</div>');
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
        "data": "{\r\n  \"data\": {\r\n    \"type\": \"Contacts\",\r\n    \"id\": \"" + uid + "\",\r\n    \"attributes\": {\r\n     \"first_name\":\"" + First_Name + "\",\r\n     \"email1\":\"" + Email_Address + "\"\r\n, \r\n     \"title\":\"" + Category + "\"\r\n,\r\n     \"description\": "+ description  +",\r\n     \"phone_mobile\":\"" + Mobile_Number + "\"\r\n, \r\n     \"lead_source\":\"Conference\"\r\n   }\r\n  }\r\n}\r\n"
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
            $("#communityform").trigger("reset");
            var $success = $('#community_success'); // get the reference of the div
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
  $('#quickcontact').on('blur keyup change', 'textarea,input,select', function (event) {
     quickContactValidation = validateForm('#quickcontact', '#contact-submit-live');
     if((quickContactValidation==true)&&($("#name").val().length > 0)&&($("#email").val().length > 0)&&($("#patientoption").val()=="PA" ||$("#patientoption").val()=="HIM")){ 
        $('#contact-submit-live').prop('disabled', false);
        $('#contact-submit-live').removeClass('is-disabled');
     }
  });
  $('#community-form-submit').prop('disabled', 'disabled');
  $('#community-form-submit').addClass('is-disabled');
  $('#communityform').on('blur keyup change', 'textarea,input,select', function (event) {
   
    //console.log(comunityValidation);
    //console.log($("#community_name").val().length);
  //console.log($("#community_email").val().length);
  var survey_category_value = $("#survey-category").val();
  var comunityValidation = validateForm('#communityform', '#community-form-submit', survey_category_value);
  if ((comunityValidation == true) && $("#community_name").val().length > 0 && $("#community_email").val().length > 0 && $("#survey-category").val() != null )
    {
      $('#community-form-submit').prop('disabled', false);
      $('#community-form-submit').removeClass('is-disabled');
    }
  });
  $('#contact-submit').prop('disabled', 'disabled');
  $('#contact-submit').addClass('is-disabled');
  $('#contactform').on('blur keyup change', 'textarea,input', function (event) {
    validateForm('#contactform', '#contact-submit');
  });
  function validateForm(id, buttonId, survey_category = "PA") {
    var valid = $(id).validate().checkForm();
    if (valid &&  survey_category != null ) {
      $(buttonId).prop('disabled', false);
      $(buttonId).removeClass('is-disabled');
      return true;
    } else {
      $(buttonId).prop('disabled', 'disabled');
      $(buttonId).addClass('is-disabled');
      return false;
    }
  }

 // $( "#community_fromDate" ).datepicker();
 // $( "#community_toDate" ).datepicker();
  $("#community_fromDate").datepicker({
        numberOfMonths: 1,
        dateFormat: 'yy-mm-dd', 
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() + 1);
            $("#community_toDate").datepicker("option", "minDate", dt);
        }
    });
    $("#community_toDate").datepicker({
        numberOfMonths: 1,
        dateFormat: 'yy-mm-dd', 
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() - 1);
            $("#community_fromDate").datepicker("option", "maxDate", dt);
        }
    });
    
    $('#patient_impact_story_form').on('blur keyup change', 'textarea,input,select', function (event) {

      var comunityValidation = validateForm('#patient_impact_story_form', '#patient-story-form-submit');
      if ((comunityValidation == true) && $('#agree_checkbox').prop("checked") == true && $("#patient_first_name").val().length > 0 && $("#patient_last_name").val().length > 0 && $("#patient_email").val().length > 0 )
        {
          $('#patient-story-form-submit').prop('disabled', false);
          $('#patient-story-form-submit').removeClass('is-disabled');
        }
    });
});

function createTweet(tweetId) {
  twttr.widgets.createTweet(tweetId,
    document.getElementById('twitter_feed'),
    {
      align: 'left'
    })
    .then(function (el) {
      // console.log("Tweet displayed..")
    });
}
function twitterShare(tweet_id, screen_name) {
  if (tweet_id != undefined && screen_name != undefined) {
    if (tweet_id) {
      var url = "https://twitter.com/statuses/" + tweet_id;
      var text = '';
      window.open('https://twitter.com/home?status=' + encodeURIComponent(url), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
  }

console.log("client_credentials");
}


$('#patient-story-form-submit').click(function (e) {
  if($(this).val() == 'Please wait..'){
    return false;
  }
  $(this).val('Please wait..');
  $(this).attr('disabled',true);
  var First_Name = $('#patient_first_name').val();
  var Last_Name = $('#patient_last_name').val();
  var Email_Address = $('#patient_email').val();
  var story_title = $('#story_title').val();
  var story_description =  $('#story_description').val();
  var authorization_granted = $('#agree_checkbox').prop("checked");

  
  var token= "7sTXwg4jeFampJVOa6YxTRBv";

    var jform = new FormData();
    jform.append('data',$('#imgInp').get(0).files[0]); // Here's the important bit
    
    $.ajax({
        url: 'https://test.admin.web.unblock.health/directus/files',
        type: 'POST',
        data: jform,
        dataType: 'json',
        mimeType: 'multipart/form-data', // this too
        contentType: false,
        cache: false,
        processData: false,
        headers: {
          "Authorization": "bearer "+ token,
          
        },
        success: function(data, status, jqXHR){
          console.log(data);
          
          var photo = data.data.id;      
          var full_url =   data.data.data.full_url;      
        
          var settings = {
            "async": true,
            "crossDomain": true,
            //"url": "https://test.admin.app.unblock.health/ubhweb/items/himss20_contact_details",
            "url": "https://test.admin.web.unblock.health/directus/items/patient_stories",
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "bearer "+ token,
            },
            "processData": false,
        
            "data": "{\"status\": \"published\", \"first_name\": \"" + First_Name + "\" , \"last_name\" : \"" + Last_Name + "\" , \"email_id\": \"" + Email_Address + "\", \"story_title\": \"" + story_title + "\", \"story_description\": \"" + story_description + "\", \"photo\": " + photo + ", \"authorization_granted\": " + photo + "   \r\n       } \r\n\r\n"
          }
          $.ajax(settings).done(function (response) {
            $("#patient_impact_story_form").trigger("reset");
            sendm(token,Email_Address,First_Name,Last_Name,story_title,story_description,full_url);

            var $success = $('#patient_impact_story_success'); // get the reference of the div
              $success.show().html('Your Story was sent successfully');
              $('#patient-story-form-submit').val('Submit Your Story');
              $('#patient-story-form-submit').attr('disabled',false);
          });
    
        },
        error: function(jqXHR,status,error){
            // Hopefully we should never reach here
            var $success = $('#patient_impact_story_error'); // get the reference of the div
              $success.show().html('Sorry, The story was not able to sent, please check all fields are provided.');
              $('#patient-story-form-submit').attr('disabled',false);
        }
    });
  
 
});





function sendm(token,to,First_Name,Last_Name,story_title,story_description,full_url){
  var subject = 'Unblock Health - Story Submitted';
  var to = ["mary.john@netspective.org","enlighteningresults@gmail.com"];
  //var to = ["vishnu.prasad@citrusinformatics.com"];
  
  var body = "";
  body += " <div  style='text-align: left;' trbidi='on'>";
  body += "<br />";
  body += "HI ,<br />";
  body += "<br />";
  body += First_Name + " " + Last_Name +" added new story with the following details.<br />";
  body += "<br />";
  body += "<b>First Name:</b>&nbsp;"+ First_Name + "<br />";
  body += "<br />";
  body += "<b>Last Name:</b>&nbsp;"+ Last_Name +"<br />";
  body += "<br />";
  body += "<b>Story Title:</b>&nbsp;"+ story_title +"<br />";
  body += "<br />";
  body += "<div width:250px;><b>Story Description:</b>&nbsp;"+story_description +"</div><br/>";
  body += "</br> <div class='separator' style='clear: both; text-align: center;'>";
  body += "<b> Photo:</b>&nbsp;<a href='"+ full_url +"' style='margin-left: 3px; margin-right: 3px; text-decoration: underline;'>";
  body += "</br>View Image";
  // body += "<img border='0' data-original-height='1000' data-original-width='1500' height='425' src='"+ full_url +"' width='640' />";
  body += "</a>";
  body += "</div>";
  body += "<br /></div>";
  body += "  </div>";
  
  var settings = {
    "async": true,
    "crossDomain": true,
    //"url": "https://test.admin.app.unblock.health/ubhweb/items/himss20_contact_details",
    "url": "https://test.admin.web.unblock.health/directus/mail",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "bearer "+ token,
    },
    "processData": false,
    "data": JSON.stringify({"to": to, "subject": subject , "body" :  body })
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}


$('#story_description').keyup(function() {
    
  var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');
    
  current.text(characterCount);
 
  
  /*This isn't entirely necessary, just playin around*/
  
  
  if (characterCount >= 500) {
    maximum.css('color', '#8f0001');
    current.css('color', '#8f0001');
    theCount.css('font-weight','bold');
  } else {
    maximum.css('color','#666');
    theCount.css('font-weight','normal');
  }
  
      
});


$(document).on('click', '#close-preview', function(){ 
  $('.image-preview').popover('hide');
  // Hover befor close the preview
  $('.image-preview').hover(
      function () {
         $('.image-preview').popover('show');
      }, 
       function () {
         $('.image-preview').popover('hide');
      }
  );    
});

$(function() {
  // Create the close button
  var closebtn = $('<button/>', {
      type:"button",
      text: 'x',
      id: 'close-preview',
      style: 'font-size: initial;',
  });
  closebtn.attr("class","close pull-right");
  // Set the popover default content
  $('.image-preview').popover({
      trigger:'manual',
      html:true,
      title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
      content: "There's no image",
      placement:'right'
  });
  // Clear event
  $('.image-preview-clear').click(function(){
      $('.image-preview').attr("data-content","").popover('hide');
      $('.image-preview-filename').val("Add Your Photo*");
      $('.image-preview-clear').hide();
      $('.image-preview-input input:file').val("");
      $(".image-preview-input-title").text("Browse"); 
  }); 
  // Create the preview image
  $(".image-preview-input input:file").change(function (){     
      var img = $('<img/>', {
          id: 'dynamic',
          width:250,
          height:200
      });      
      var file = this.files[0];
      var reader = new FileReader();
      // Set preview image into the popover data-content
      reader.onload = function (e) {
          $(".image-preview-input-title").text("Change");
          $(".image-preview-clear").show();
          $(".image-preview-filename").val(file.name);            
          img.attr('src', e.target.result);
          $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
      }        
      reader.readAsDataURL(file);
  });  
});

$(window).on("load",function(){
var iframe = $('#patient-frame-slider').contents();

iframe.find('#patient-last-slide').click(function(event){
   console.log('click triggered');
    $('html, body').animate({
        'scrollTop' : $("#patient_impact_story_desc").position().top
    });
});
  
});