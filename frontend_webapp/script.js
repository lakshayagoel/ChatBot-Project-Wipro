$(document).ready(() => {
    let $userName = "Lakshaya";
    $("#form-start").on("submit", (event) => {
        event.preventDefault();
        $userName = $("#username").val();
        $("#landing").slideUp(300);
        setTimeout(() => {
            $("#start-chat").html("Continue chat");
        }, 300);
    });  
    function $postMessage() {
        $("#message").find("br").remove();
        let $message = $("#message").html().trim();
        $message = $message
            .replace(/<div>/, "<br>")
            .replace(/<div>/, "")
            .replace(/<\/div>/g, "<br>")
            .replace(/<br>/g, " ")
            .trim();
        if ($message) {
            const html = `<div class="post post-user">${
                $message + timeStamp()
                }</span></div>`;
            $("#message-board").append(html); 
            $scrollDown(); 
            botReply($message);
        }
        $("#message").empty();
    }
    $("#message")
        .on("keyup", (event) => {
            if (event.which === 13) $postMessage(); 
        })
        .on("focus", () => {
            $("#message").addClass("focus");
        })
        .on("blur", () => {
            $("#message").removeClass("focus");
        });
    $("#send").on("click", $postMessage);
    function botReply(userMessage) {
        const reply = generateReply(userMessage);
        if (typeof reply === "string") postBotReply(reply);
        else reply.forEach((str) => postBotReply(str));
    }
    /* $('.apireq').click(function(){
        $.ajax({
            url:"",
            type:'POST'
            dataType: "text",
            success: function(data){
                $('#message').empty().append(data);
            }
        });
    }); */
    function generateReply(userMessage) {
        const message = userMessage.toLowerCase();
        let reply = [`Sorry, I didn't understand you. Please try again`];    
        if (/^hi$|^hell?o|^hey|hi bob/.test(message))
            reply = [`Hi ${$userName}`];
        else if(/how are you?/.test(message))
            reply=[`${$userName}, I am fine.`]
        else if (/test/.test(message))
            reply = [`Okay ${$userName}. Feel free to test as much as you want.`];
        else if (/help|emergency|support/.test(message))
            reply = [`I am here to help. What seems to be the problem?`];
        else if (/class\=\"fa/.test(message))
            reply = [
                `Cool! <span class="far fa-grin-beam fa-2x"></span>`
            ];
        else if (/bye/.test(message)) reply = [`Bye ${$userName}. See you soon!`];
        return reply;    
    }

    function postBotReply(reply) {
        const html = `<div class="post post-bot">${reply + timeStamp()}</div>`;
        const timeTyping = 500 + Math.floor(Math.random() * 2000);
        $("#message-board").append(html);
        $scrollDown();
    }

    function timeStamp() {
        const timestamp = new Date();
        const hours = timestamp.getHours();
        let minutes = timestamp.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        const html = `<span class="timestamp">${hours}:${minutes}</span>`;
        return html;
    }

  
    $("#back-button").on("click", () => {
        $("#landing").show();
    });

  
    $("#nav-icon").on("click", () => {
        $("#nav-container").show();
    });

    $("#nav-container").on("mouseleave", () => {
        $("#nav-container").hide();
    });

    $(".nav-link").on("click", () => {
        $("#nav-container").slideToggle(200);
    });


    $("#sign-out").on("click", () => {
        $("#message-board").empty();
        $("#message").empty();
        $("#landing").show();
        $("#username").val("");
        $("#start-chat").html("Start chat");
    });

    function $scrollDown() {
        const $container = $("#message-board");
        const $maxHeight = $container.height();
        const $scrollHeight = $container[0].scrollHeight;
        if ($scrollHeight > $maxHeight) $container.scrollTop($scrollHeight);
    }

    $("#emoi").on("click", () => {
        $("#emoijis").slideToggle(300);
        $("#emoi").toggleClass("fa fa-grin far fa-chevron-down");
    });

    $(".smiley").on("click", (event) => {
        const $smiley = $(event.currentTarget).clone().contents().addClass("fa-lg");
        $("#message").append($smiley);
        $("#message").select(); 
    });
});
