

$(function(){
    
    $("#button_login").click(function(){
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_error").addClass("active");
        $("#click_button").addClass("active");
    });

    $("#alert_popup_error").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_error").removeClass("active");
        $("#click_button").removeClass("active");
    });

    $("#button_admin").click(function(){
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_info").addClass("active");
        $("#click_button").addClass("active");
    });

    $("#alert_popup_info_cancle_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info").removeClass("active");
        $("#click_button").removeClass("active");
    });
    $("#alert_popup_accept_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info").removeClass("active");
        $("#click_button").removeClass("active");
    });

    $("#button_delete").click(function(){
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_info_select").addClass("active");
        $("#click_button").addClass("active");
    });

    $(" #alert_popup_info_select_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info_select").removeClass("active");
        $("#click_button").removeClass("active");
    });
});