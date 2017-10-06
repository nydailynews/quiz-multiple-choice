$.getJSON("quiz_content.json", function(input) {

    //calculate variables
    var qnumber, 
        currentQuestion = 0,
        answer,
        score = 0;

    // social media variables
    var facebook = "<img class='social_icon' src='/quiz/icons/facebook_logo.png' alt=''>";
    var twitter = "<img class='social_icon' src='/quiz/icons/twitter_logo.png' alt=''>";
    var link = appConfig.project_url;
    var short_link = appConfig.short_link;
    var twitter_line = appConfig.twitter_line;
    var twitter_line_2 = appConfig.twitter_line_2;

    // load headline section
    var loadHeader = function () {
        $(".facebook").html("<a class=\"fb-share\" href='http://www.facebook.com/sharer.php?u=" + link + "' target='_blank'></a>");
        $(".twitter").html("<a class=\"twitter-share\" href='http://twitter.com/share?url=" + short_link + "&text=" + twitter_line + "&via=nydni&related=nydailynews,nydni' target='_blank'></a>");
    }

    $(".side_ad").css("display", "none");

    // create a new question
    var buildQuiz = function () {
            // load content section
            qnumber = currentQuestion + 1;

            // Build the markup for the quiz container
            if ( typeof input[currentQuestion].blurb === 'undefined' ) input[currentQuestion].blurb = '';
            var source_markup = "";
            if ( typeof input[currentQuestion].source !== 'undefined' && input[currentQuestion].source.trim() !== '' ) {
                source_markup = "<a target='_blank' href='" + input[currentQuestion].source + "'>See the source of this answer</a>";
            }
            var markup = {
                header: "<div class='progressbar large-12 medium-12 small-12 columns'>" + qnumber + " / " + input.length + "</div>",
                body: "<div class='image_box large-6 medium-6 small-12 columns'>\n\
<img class='quiz_banner' src='/quiz/icons/quiz_banner.png' alt=''>\n\
<img class='image' src='img/" + input[currentQuestion].image.trim() + "' alt=''>\n\
<p class='credit'></p>\n\
<div class='blurb'>" + input[currentQuestion].blurb + "\n\
    <p class='info_source'> " + source_markup + "</p>\n\
</div></div>\n\
<div class='selections large-6 medium-6 small-12 columns'>\n\
    <div class='question'>" + input[currentQuestion].question + "</div><div id='option-a' class='list list_long'><span class='button_box'><div class='option_button grey_button'>A</div></span><div class='option_text'>" + input[currentQuestion].a + "</div></div><div id='option-b' class='list list_long'><span class='button_box'><div class='option_button grey_button'>B</div></span><div class='option_text'>" + input[currentQuestion].b + "</div></div>",
                footer: "<div class='next'><button class='next_btn'>NEXT</button></div></div>"
            }
            if ( 'c' in input[currentQuestion] && input[currentQuestion].c !== '' ) markup.body += "<div id='option-c' class='list list_long'><span class='button_box'><div class='option_button grey_button'>C</div></span><div class='option_text'>" + input[currentQuestion].c + "</div></div>";
            if ( 'd' in input[currentQuestion] && input[currentQuestion].d !== '' ) markup.body += "<div id='option-d' class='list list_long'><span class='button_box'><div class='option_button grey_button'>D</div></span><div class='option_text'>" + input[currentQuestion].d + "</div></div>";
            $(".quiz-container").html(markup.header + markup.body + markup.footer);
            $(".credit").html(input[currentQuestion].credit);

            // style changes when user hover answers
            $(".list").mouseover(function() {
                $(".hovered").removeClass("hovered");
                $(this).addClass("hovered").fadeIn;;
            });

            $(".list").mouseout(function() {
                $(".hovered").removeClass("hovered");
            });

            // style changes when user click answers
            $(".list").click(function() {
                $('.list').off('click');
                $('.list').off('mouseover');
                answer = $(this).find('.option_text').text();
                if (answer.trim() == input[currentQuestion].answer.trim()) {
                    score++;
                    $(this).addClass("correct");
                } else if (input[currentQuestion].a.trim() == input[currentQuestion].answer.trim()) {
                    $(this).addClass("incorrect");
                    $("#option-a").addClass("correct");
                } else if (input[currentQuestion].b.trim() == input[currentQuestion].answer.trim()) {
                    $(this).addClass("incorrect");
                    $("#option-b").addClass("correct");
                } else if (input[currentQuestion].c.trim() == input[currentQuestion].answer.trim()) {
                    $(this).addClass("incorrect");
                    $("#option-c").addClass("correct");
                } else if (input[currentQuestion].d.trim() == input[currentQuestion].answer.trim()) {
                    $(this).addClass("incorrect");
                    $("#option-d").addClass("correct");
                };

                $(".correct").find(".option_button").html("<img class='right' alt='Correct' src='/quiz/icons/correct.png'>");
                $(".correct").find(".option_button").addClass("correct_button");
                $(".correct").find(".option_button").css("padding","0");
                $(".incorrect").find(".option_button").html("<img class='wrong' alt='Incorrect' src='/quiz/icons/incorrect.png'>");
                $(".incorrect").find(".option_button").addClass("incorrect_button");
                $(".incorrect").find(".option_button").css("padding","0");
                $(".option_button").css("opacity","1");

                $(".next_btn").prop('disabled', false);
                $(".next_btn").attr("style", "background-color: #40BEF1 !important");
                $(".next_btn").mouseover(function() { $(".next_btn").css("opacity", "0.8"); })
                $(".next_btn").mouseout(function() { $(".next_btn").css("opacity", "1"); })
                if ( input[currentQuestion].blurb !== '' || source_markup !== '' ) {
                    $(".blurb").css("display","block");
                    $(".info_source").css("display","block");
                }
                $(".image").attr("src","img/" + input[currentQuestion].image2.trim());
                if ( typeof input[currentQuestion].credit2 !== 'undefined' ) $(".credit").html(input[currentQuestion].credit2.trim());
            });

            $(".next_btn").prop('disabled', true);
            
            // change next button text for different questions
            if (currentQuestion == (input.length-1)) {
                $(".next_btn").html("CHECK RESULT");
                $(".next_btn").on("click", finalScore);
            } else if (currentQuestion == 5) {
                $(".next_btn").on("click", showAd);
            } else {
                $(".next_btn").on("click", nextQuestion);
            }

    };

    $(".continue_btn").click(function() {
        currentQuestion++; 
        buildQuiz();
        $(".side_ad").css("display", "none");
        $(".continue_btn").css("display", "none");
    }); 

    var nextQuestion = function () {
            $(".info_source").css("display","none");
            $(".blurb").css("display","none");
            currentQuestion++; 
            buildQuiz();
    }; 

    var showAd = function () {
        $(".quiz-container").html("");
        $(".side_ad").css("display", "inline");
        $(".continue_btn").css("display", "inline");
        // resetFooterResize();
    };

    // Display final score card and social media sharing
    // Log score in database, if appropriate.
    var finalScore = function () {

        // Log the answer in the db
        var correct = this.correct_count;
        var params = '?slug=' + appConfig.slug + '&correct=' + score + '&callback=';
        var jqxhr = $.getJSON( '/quiz/multiple-handler.php' + params, function(data) 
        {
            // SUCCESS
            // Display how the reader has done compared to everyone else.
            // data will look something like:
            // { "correct": "0", "count": "246", "all_correct": "14", "mean": "3.2073587398374", "worse_than": "175", "better_than": "0"}
            var mean = Math.round(data.mean*10) / 10;
            var number_missed = input.length - score;

            var spanclass = '';
            //if ( +data.count < 100 ) spanclass = 'hide';
            $('#result').append('<span class="' + spanclass + '">' + data.count + ' other people played.</span>\n\
                An average player got ' + mean + ' correct.');
            if  ( typeof data.all_correct !== 'undefined' )
            {
                var people = "people";
                if ( +data.all_correct == 1 ) people = "person";

                var percent_right = Math.round(data.all_correct/data.count*1000)/10;
                if ( +data.count == 0 ) percent = 0;

                $('#result').append(' ' + data.all_correct + ' ' + people + ' (' + percent_right + '%) got them all right.');

                // Calculate the percent of people they did worse / better than.
                var s = "s";
                if ( +data.worse_than == 1 ) s = "";
                percent_worse = Math.round(data.worse_than/data.count*1000)/10;
                percent_better = Math.round(data.better_than/data.count*1000)/10;

                // If they didn't do worse than anyone, we give them a positive message of accomplishment
                if ( +data.worse_than == 0 )
                {
                    if ( data.better_than == 1 ) s = "";
                    $('#result').append('<br>You did better than <span class="' + spanclass + '">' + data.better_than + ' other player' + s + '.\n\
                        That means you did better than</span> ' + percent_better + '% of the people who played this, and tied the other ' + percent_right + '%');
                }
                else if ( +data.correct == 0 )
                {
                    $('#result').append('<br><strong>You got zero correct,</strong>\n\
                        which means a. you have lots of room for improvement and b. you did worse than the ' + data.worse_than + ' people who got at least one answer.');
                }
                else
                {
                    $('#result').append('<br>You did better than <span class="' + spanclass + '">' + data.better_than + ' other player' + s + '.\n\
                        That means you did better than </span>' + percent_better + '% of the people who played this.');
                }

                if ( number_missed == 0 && data.all_correct == 1 )
                {
                    $('#result').append(' <span style="color:red; clear: both;">You\'re the first to get them all right!!</span>');
                }
                else if ( number_missed == 0 && data.all_correct < 21 )
                {
                    $('#result').append(' <span style="color:red; clear: both;">You\'re the ' + to_ordinal(data.correct) + ' to get them all right!!</span>');
                }
            }
            })
            .fail(function() {
                $('#result').append('Sorry, we could not reach the upstream servers.');
                $('#result').addClass('error');
            })
            .always(function() {
                $("#answer_field").addClass('finished');
                $("#timer").addClass('hide');
                $("#answer_field").append($('p#result'));
            });

        // New ads, a pv.
        if ( typeof googletag !== 'undefined' ) googletag.pubads().refresh();
        if ( typeof PARSELY !== 'undefined' ) PARSELY.beacon.trackPageView({ url: document.location.href, urlref: document.location.href, js: 1 });
        // Let the parent frame know, if it's listening
        window.parent.postMessage({'quiz': 1}, '*');

        $(".quiz-container").html("<div class='result large-6 medium-6 small-12 large-centered medium-centered small-centered columns'>\n\
<div class='smaller-result'>\n\
<div class='final_score'>\n\
<div class='final_score_right'>RIGHT<br><img alt='' class='correct_result_image' src='/quiz/icons/correct_big.png'>\n\
<div class='correct_number'>\n\
" + score + "</div>\n\
</div>\n\
<div class='final_score_wrong'>\n\
WRONG<br>\n\
<img alt='' class='incorrect_result_image' src='/quiz/icons/incorrect_big.png'>\n\
<div class='incorrect_number'>\n\
" + (input.length - score) + "</div>\n\
</div>\n\
<div class='replay'>\n\
TRY QUIZ AGAIN<img alt='Replay quiz' class='replay_image' src='/quiz/icons/replay.png'>\n\
</div>\n\
</div>\n\
<div class='challenge'>\n\
<div class='challenge_text'>\n\
CHALLENGE YOUR FRIENDS!</div>\n\
<div class='social_media'>\n\
</div>\n\
</div>\n\
</div>\n\
</div>\n\
</div>\n\
<div class='more_quiz large-12 medium-12 small-12 large-centered medium-centered small-centered columns'>\n\
<div class='more_quiz_title'>\n\
Take another QUIZ</div>\n\
<a target='_blank' href='" + window.appConfig.quiz1_link + "'>\n\
<div class='large-3 medium-3 small-6 columns another_quiz'>\n\
<img alt='' class='quiz_image' src='" + window.appConfig.quiz1_image + "'>\n\
<p>\n\
" + window.appConfig.quiz1 + "</p>\n\
</div>\n\
</a>\n\
<a target='_blank' href='" + window.appConfig.quiz2_link + "'>\n\
<div class='large-3 medium-3 small-6 columns another_quiz'>\n\
<img alt='' class='quiz_image' src='" + window.appConfig.quiz2_image + "'>\n\
<p>\n\
" + window.appConfig.quiz2 + "</p>\n\
</div>\n\
</a>\n\
<a target='_blank' href='" + window.appConfig.quiz3_link + "'>\n\
<div class='large-3 medium-3 small-6 columns another_quiz'>\n\
<img alt='' class='quiz_image' src='" + window.appConfig.quiz3_image + "'>\n\
<p>\n\
" + window.appConfig.quiz3 + "</p>\n\
</div>\n\
</a>\n\
<a target='_blank' href='" + window.appConfig.quiz4_link + "'>\n\
<div class='large-3 medium-3 small-6 columns another_quiz'>\n\
<img alt='' class='quiz_image' src='" + window.appConfig.quiz4_image + "'>\n\
<p>\n\
" + window.appConfig.quiz4 + "</p>\n\
</div>\n\
</a>\n\
</div>");

        $(".social_media").html("<a class=\"twitter-share\" href='http://twitter.com/share?url=" + short_link + "&text=I got " + score + " correct! " + twitter_line_2 +"&via=nydni&related=nydailynews,nydni' target='_blank'><button class='social_icon_box twitter_button'>TWITTER<img alt='' class='social_icon twitter_icon' src='/quiz/icons/twitter.png'></button></a><a class=\"fb-share\" href='http://www.facebook.com/sharer.php?u=" + link + "' target='_blank'><button class='social_icon_box facebook_button'>FACEBOOK<img alt='' class='social_icon facebook_icon' src='/quiz/icons/facebook.png'></button></a>");

        $(".replay").click(function() {
            location.reload();
        });

         $(".another_quiz").mouseover(function() {
            $(this).css("color","#40BEF1");
            $(this).find(".quiz_image").css("border","solid 2px #40BEF1");
        });

        $(".another_quiz").mouseout(function() {
            $(this).css("color","black");
            $(this).find(".quiz_image").css("border","solid 2px #E8E8E8");
        });

        var a = window.appConfig.a,
            b = window.appConfig.b,
            c = window.appConfig.c,
            d = window.appConfig.d

        // compare score and find the max
        // Sometimes we have four answer "buckets" and sometimes three.
        // The weird thing about how this works is if we have three, we only merge 
        // the "perfect score" answer in with the result that comes after.
        var bucket_adjust = 0;
        if ( input[3].result === '' ) bucket_adjust = 1;
        console.log(input.length)
        if ( score == input.length) {
            $(".smaller-result").prepend("<p>" + input[3 - bucket_adjust].result + "</p>")
        } else if ( score >= b && score <= c) {
            // The next-best result gets confetti.
            $('body').append('<canvas id="confetti" style="z-index:-1;position:fixed; top: 0; left: 0; width: 100%; height: 100%;"></canvas">');
            var s = document.createElement('script');
            s.setAttribute('src', '/poll/keep-em-dump-em/js/confetti.js');
            s.setAttribute('onload', "window.setTimeout('DeactivateConfetti(); ', 1500)");
            document.getElementsByTagName('head')[0].appendChild(s);
            window.setTimeout('$(\"#confetti\").remove();', 8000);
            $(".smaller-result").prepend("<p>" + input[2].result + "</p>")
        } else if ( score > a && score < b) {
            $(".smaller-result").prepend("<p>" + input[1].result + "</p>")
        } else {
            $(".smaller-result").prepend("<p>" + input[0].result + "</p>")
        }

        $(".credit").css("display","none");
        $(".byline").css("display","none");
        $(".description").css("display","none");

        // resetFooter();
        
    };

    var loadTopAd = function () {
        $("#top_ad").append("<div id='div-gpt-ad-1423507761396-1'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-1'); });</script></div>")
    };

    loadHeader();
    loadTopAd();
    buildQuiz(input);
}); 

var is_iframe = 0;
if ( window.top !== window.self ) { is_iframe = 1; }
if ( is_iframe === 1 ) {
    $('.headline, .description, h1, p.description, p.byline, #templateheader, #templatefooter').remove();
    $('#content .blurb').css('display', 'none');
    $('body').css('background-color', '#fafafa');
}
