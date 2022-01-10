$(document).ready(function() {
  //var winOpen = window.open;
  var bugout = new debugout();
  $('#Page').click(function() {
    $(bugout.log('Clicked Page'));
    $(this).toggleClass('Clicked Unclicked');
    if ($(this).hasClass('Clicked')) {
      $('.Add_Page_Unselected').attr('class', 'Add_Page_Selected');
    } else {
      $('.Add_Page_Selected').attr('class', 'Add_Page_Unselected');
    }
  });

  /*window.open = function() {
      var win = winOpen.apply(this, arguments);
      return win;
  };*/

  $('#Textbox').click(function() {
    $(bugout.log('Clicked Textbox'));
    $(this).toggleClass('Clicked Unclicked');
    if ($(this).hasClass('Clicked')) {
      $('.Add_Textbox_Unselected').attr('class', 'Add_Textbox_Selected');
    } else {
      $('.Add_Textbox_Selected').attr('class', 'Add_Textbox_Unselected');
    }
  });

  $('#Text').click(function() {
    $(bugout.log('Clicked Text'));
    $(this).toggleClass('Clicked Unclicked');
    if ($(this).hasClass('Clicked')) {
      $('.Add_Text_Unselected').attr('class', 'Add_Text_Selected');
    } else {
      $('.Add_Text_Selected').attr('class', 'Add_Text_Unselected');
    }
  });

  $('#Image').click(function() {
    $(bugout.log('Clicked Image'));
    $(this).toggleClass('Clicked Unclicked');
    if ($(this).hasClass('Clicked')) {
      $('.Add_Image_Unselected').attr('class', 'Add_Image_Selected');
    } else {
      $('.Add_Image_Selected').attr('class', 'Add_Image_Unselected');
    }
  });

  $('#Link').click(function() {
    $(bugout.log('Clicked Image'));
    $(this).toggleClass('Clicked Unclicked');
    if ($(this).hasClass('Clicked')) {
      $('.Add_Link_Unselected').attr('class', 'Add_Link_Selected');
    } else {
      $('.Add_Link_Selected').attr('class', 'Add_Link_Unselected');
    }
  });

  $('#Name').click(function() {
    $(bugout.log('Clicked Name'));
    $(this).toggleClass('Clicked Unclicked');
    if ($(this).hasClass('Clicked')) {
      $('.Set_Name_Unselected').attr('class', 'Set_Name_Selected');
    } else {
      $('.Set_Name_Selected').attr('class', 'Set_Name_Unselected');
    }
  });

  $('#Undo').click(function() {
    $(bugout.log('Clicked First Undo'));
    $(window.open("pop_up_page.htm", null, "height=600,width=1200,status=yes,scrollbars=1"));
  });

  $('#Home').click(function() {
    $(bugout.log('Clicked Home'));
    window.location.replace("page.htm");
  });

  $('#Select_All').click(function() {
    $(bugout.log('Clicked Select All'));
    $('.page_label').prop('checked', true);
    $('#Undo').removeAttr('disabled');
  });

  $('#Deselect_All').click(function() {
    $(bugout.log('Clicked Deselect All'));
    $('#Undo').attr('disabled', 'true');
    $('.page_label').prop('checked', false);
  });

  $('#Reset').click(function() {
    $(bugout.log('Clicked Reset'));
    $('#Page').prop('class', 'Unclicked');
    $('#Textbox').prop('class', 'Unclicked');
    $('#Text').prop('class', 'Unclicked');
    $('#Image').prop('class', 'Unclicked');
    $('#Name').prop('class', 'Unclicked');
    $('.Add_Page_Selected').prop('class', 'Add_Page_Unselected');
    $('.Add_Textbox_Selected').prop('class', 'Add_Textbox_Unselected');
    $('.Add_Text_Selected').prop('class', 'Add_Text_Unselected');
    $('.Add_Image_Selected').prop('class', 'Add_Image_Unselected');
    $('.Set_Name_Selected').prop('class', 'Set_Name_Unselected');
  });

  $('#Complete_Undo').click(function() {
    alert("Congratulations! You have just completed the experiment.");
    $(window.close());
    $(bugout.log('Clicked Final Undo'));
    $(bugout.downloadLog());
  });

  $('input').click(function() {
    if ($(this).prop('checked') == true) {
      $(bugout.log('Checked Checkbox'));
      $('#Undo').removeAttr('disabled');
    } else if ($('.page_label:checked').length == 0) {
      $(bugout.log('Unchecked Checkbox'));
      $('#Undo').attr('disabled', 'true');
    }
  });

  $('.text').click(function() {
    $(bugout.log('Page Label Clicked'));
    if ($(this).prop('id') == 'abruzzo') {
      window.location.replace("abruzzo.htm");
    }
  });

  $('.button').click(function() {
    $(bugout.log('Region Button Clicked'));
    var id = $(this).prop('id');
    window.location.replace(id + ".htm");
  });

  $('.label').click(function() {
    $(bugout.log('Navigation Item Clicked'));
    var id = $(this).prop('id');
    window.location.replace(id + ".htm");
  });

  $('img').hover(function() {
    $(bugout.log('Hovered Over Thumbnail'));
    var newSrc = $(this).prop('src');
    $('#Magnifier').prop('src', newSrc);
    $('#Magnifier').toggleClass('Magnified Not_Magnified');
  });
});
