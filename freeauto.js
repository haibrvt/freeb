// ==UserScript==
// @name         Hệ Thống Tự Động Roll Free BOT
// @namespace    Sửa bởi haibrvt
// @version      7.0
// @description  thu nghiem
// @author       haibrvt
// @match        https://freebitco.in/*
// @match https://www.google.com/recaptcha/*
// @grant        none
// ==/UserScript==
var min = 714;
var max = 1365;

function Sleep(milliseconds) {
     return new Promise(resolve => setTimeout(resolve, milliseconds));
};

async function Click() {
     var randVal = Math.floor(Math.random() * (max - min + 1)) + min;
     await Sleep(randVal); // Pausiert die Funktion für X Millisekunden
     document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
     console.log('click after ' + randVal + ' milliseconds');
};

var oldOnload = window.onload;

window.onload = function () {

    if (typeof oldOnload == 'function') {
       oldOnload();
    }
    Click();
};

(function() {
    'use strict';
    var numMinutes = 10;
    window.setTimeout("document.location.reload();", numMinutes*60*1000);

    var points = {};



//===================================================================================================
    if ($('.close-reveal-modal').is(':visible'))
        setTimeout(function(){ $('.close-reveal-modal').click(); },2000);
    if ($('.push_notification_modal').css('display') != 'none')
        setTimeout(function(){ $('.pushpad_deny_button').click(); },2000);
    if ($('.palert-box').css('display') != 'none')
        setTimeout(function(){ $('.close').click(); },2000);

    setTimeout(function(){ $('.close_daily_jackpot_main_container_div').click(); },2000);
//===================================================================================================

            if ($('#free_play_form_button').css('display') != 'none'){
        setTimeout(function(){ $('#free_play_form_button').click(); },10000);};
//======================================================================================================
    if ($('#bonus_eligible_msg').css('display') != 'none'){
        if($('#bonus_eligible_msg .dep_bonus_max').text()<$('#balance').text()){
            setTimeout(function(){ $('#claim_bonus_link').click(); },2000);
            setTimeout(function(){ $('#accept_bonus_terms').click(); },2000);
            setTimeout(function(){ $('#claim_bonus_button').click(); },2000);
        }
    }
//=====================================================================================================


//=====================================================================================================
    var reward = {};
    reward.select = function() {
        reward.points = parseInt($('.user_reward_points').text().replace(',',""));

        if ($('#bonus_container_free_points').length === 0) {
            if (reward.points < 12) {
                console.log("waiting for points");
            }
            else if (reward.points < 120) {
                console.log("waiting for points 60");
               RedeemRPProduct('free_points_1');
            }
            else if (reward.points < 600) {
                console.log("waiting for points 120");
                RedeemRPProduct('free_points_10');
            }
            else if (reward.points < 1200) {
                console.log("waiting for points 600");
               RedeemRPProduct('free_points_50');
            }
            else {
               RedeemRPProduct('free_points_100');
            }

        }
/*          if ($('#bonus_container_free_points').length === 0)
             if (reward.points >= 4400)
                RedeemRPProduct('fp_bonus_1000'); */

    };

//================================================================================================
    setTimeout(reward.select,1000);
    setInterval(reward.select,60000);
//================================================================================================
if (parseInt($('.user_reward_points').text().replace(',',""))>101200){
    setTimeout(function(){ $('#encash_points_number').val(100000); },2000);
    setTimeout(function(){ RedeemRPProduct('cash'); },2000);
}
//================================================================================================
    var body = $('body');
        body.prepend(
        $('<div/>').attr('style',"position:fixed;bottom:0px;left:0;z-index:999;width:350px;background-color:black;color: #00FF00; text-align: left;")
            .append(
                $('<div/>').attr('id','autofaucet')
                .append($('<p/>').text('Account: '+document.getElementById('contact_form_email').value))
                .append($('<p/>').text('Reward: '+parseInt($('.user_reward_points').text().replace(',',""))))
                .append($('<p/>').text('Balance: '+$('#balance').text()+ ' BTC'))
                .append($('<p/>').text('Lottery: '+parseInt($('#user_lottery_tickets').text().replace(',',""))))
                .append($('<p/>').text('Bonus: '+$('#bonus_eligible_msg .dep_bonus_max').text()))
                //.append($('<p/>').text('Unlock: '+$('#account_unblock_span.option_fp_bonus_span').text()))
                    .append($('<p/>')
                    )
            )
    ).prepend($('<style/>')
        .text("#autofaucet p { margin: 0; margin-left: 2px;  text-align: left; }")
)

})();
