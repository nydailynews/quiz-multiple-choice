$.getJSON("quiz_content.json", function(input) {

    //calculate variables
    var qnumber, 
        currentQuestion = 0,
        answer,
        score = 0

    // social media variables
    var facebook = "<img class='social_icon' src='icons/facebook_logo.png'>";
    var twitter = "<img class='social_icon' src='icons/twitter_logo.png'>";
    var link = appConfig.project_url;
    var short_link = appConfig.short_link;
    var twitter_line = appConfig.twitter_line;
    var twitter_line_2 = appConfig.twitter_line_2;

    // load headline section
    var loadHeader = function () {
        $(".headline").html(input[0].headline);
        $(".description").html(input[0].description);
        $(".facebook").html("<a class=\"fb-share\" href='http://www.facebook.com/sharer.php?u=" + link + "' target='_blank'></a>");
        $(".twitter").html("<a class=\"twitter-share\" href='http://twitter.com/share?url=" + short_link + "&text=" + twitter_line + " @nydailynews' target='_blank'></a>");
    }

    $(".side_ad").css("display", "none");

    // $(window).resize(function() {
    //     resetFooterResize();
    // });

    // create a new question
    var buildQuiz = function () {
            // load content section
            qnumber = currentQuestion + 1;

            $(".quiz-container").html("<div class='progressbar large-12 medium-12 small-12 columns'>" + qnumber + " / " + input.length + "</div><div class='image_box large-6 medium-6 small-12 columns'><img class='quiz_banner' src='icons/quiz_banner.png'><img class='image' src='img/" + input[currentQuestion].image.trim() + "'><div class='credit'></div><div class='blurb'>" + input[currentQuestion].blurb + "<div class='info_source'><a target='_blank' href='" + input[currentQuestion].source + "'>See source</a></div></div></div><div class='selections large-6 medium-6 small-12 columns'><div class='question'>" + input[currentQuestion].question + "</div><div id='option-a' class='list list_long'><span class='button_box'><div class='option_button grey_button'>A</div></span><div class='option_text'>" + input[currentQuestion].a + "</div></div><div id='option-b' class='list list_long'><span class='button_box'><div class='option_button grey_button'>B</div></span><div class='option_text'>" + input[currentQuestion].b + "</div></div><div id='option-c' class='list list_long'><span class='button_box'><div class='option_button grey_button'>C</div></span><div class='option_text'>" + input[currentQuestion].c + "</div></div><div id='option-d' class='list list_long'><span class='button_box'><div class='option_button grey_button'>D</div></span><div class='option_text'>" + input[currentQuestion].d + "</div></div><div class='next'><button class='next_btn'>NEXT</button></div></div>"
                );
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

                      $(".correct").find(".option_button").html("<img class='right' src='icons/correct.png'>");
                      $(".correct").find(".option_button").addClass("correct_button");
                      $(".correct").find(".option_button").css("padding","0px");
                      $(".incorrect").find(".option_button").html("<img class='wrong' src='icons/incorrect.png'>");
                      $(".incorrect").find(".option_button").addClass("incorrect_button");
                      $(".incorrect").find(".option_button").css("padding","0px");
                      $(".option_button").css("opacity","1");

                      $(".next_btn").prop('disabled', false);
                      $(".next_btn").attr("style", "background-color: #40BEF1 !important");
                      $(".next_btn").mouseover(function() {
                        $(".next_btn").css("opacity", "0.8");
                      })
                      $(".next_btn").mouseout(function() {
                        $(".next_btn").css("opacity", "1");
                      })
                      $(".blurb").css("display","block");
                       $(".info_source").css("display","block");
                      $(".image").attr("src","img/" + input[currentQuestion].image2.trim());
                });

            $(".next_btn").prop('disabled', true);
            
            // change next button text for different questions
            if (currentQuestion == (input.length-1)) {
                $(".next_btn").html("CHECK RESULT");
                $(".next_btn").on("click", finalScore);
            } else if (currentQuestion == 4) {
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

    // display final score card and social media sharing
    var finalScore = function () {

            $(".quiz-container").html("<div class='result large-6 medium-6 small-12 large-centered medium-centered small-centered columns'><div class='smaller-result'><div class='final_score'><div class='final_score_right'>RIGHT<br><img class='correct_result_image' src='icons/correct_big.png'><div class='correct_number'>" + score + "</div></div><div class='final_score_wrong'>WRONG<br><img class='incorrect_result_image' src='icons/incorrect_big.png'><div class='incorrect_number'>" + (input.length - score) + "</div></div><div class='replay'>TRY QUIZ AGAIN<img class='replay_image' src='icons/replay.png'></div></div><div class='challenge'><div class='challenge_text'>CHALLENGE YOUR FRIENDS!</div><div class='social_media'></div></div></div></div></div><div class='more_quiz large-12 medium-12 small-12 large-centered medium-centered small-centered columns'><div class='more_quiz_title'>Take another QUIZ</div><a target='_blank' href='" + window.appConfig.quiz1_link + "'><div class='large-3 medium-3 small-6 columns another_quiz'><img class='quiz_image' src='" + window.appConfig.quiz1_image + "'><p>" + window.appConfig.quiz1 + "</p></div></a><a target='_blank' href='" + window.appConfig.quiz2_link + "'><div class='large-3 medium-3 small-6 columns another_quiz'><img class='quiz_image' src='" + window.appConfig.quiz2_image + "'><p>" + window.appConfig.quiz2 + "</p></div></a><a target='_blank' href='" + window.appConfig.quiz3_link + "'><div class='large-3 medium-3 small-6 columns another_quiz'><img class='quiz_image' src='" + window.appConfig.quiz3_image + "'><p>" + window.appConfig.quiz3 + "</p></div></a><a target='_blank' href='" + window.appConfig.quiz4_link + "'><div class='large-3 medium-3 small-6 columns another_quiz'><img class='quiz_image' src='" + window.appConfig.quiz4_image + "'><p>" + window.appConfig.quiz4 + "</p></div></a></div>");
            $(".social_media").html("<a class=\"twitter-share\" href='http://twitter.com/share?url=" + short_link + "&text=" + twitter_line_2 + "I got " + score + " correct! @nydailynews' target='_blank'><button class='social_icon_box twitter_button'>TWITTER<img class='social_icon twitter_icon' src='icons/twitter.png'></button></a><a class=\"fb-share\" href='http://www.facebook.com/sharer.php?u=" + link + "' target='_blank'><button class='social_icon_box facebook_button'>FACEBOOK<img class='social_icon facebook_icon' src='icons/facebook.png'></button></a>");

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
        if ( score == input.length) {
            $(".smaller-result").prepend("<p>" + input[3].result + "</p>")
        } else if ( score >= b && score < c) {
            $(".smaller-result").prepend("<p>" + input[2].result + "</p>")
        } else if ( score > a && score < b) {
            $(".smaller-result").prepend("<p>" + input[1].result + "</p>")
        } else if ( score < 6) {
            $(".smaller-result").prepend("<p>" + input[0].result + "</p>")
        }

        $(".headline").css("display","none");
        $(".description").css("display","none");
        $(".credit").css("display","none");
        $(".byline").css("display","none");

        // resetFooter();
        
    };

    var loadTopAd = function () {
        $("#top_ad").append("<div id='div-gpt-ad-1423507761396-0'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-0'); });</script></div>")
    };

    // load nydn footer
    var loadFooter = function () {
        $("#nydn-footer").append('<div id="bottom_ad" align="center"><div id="div-gpt-ad-1423507761396-1"><script type="text/javascript">googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423507761396-1"); });</script></div></div><div id="nydn-footer-services"><ul><li><a href="http://www.nydailynews.com/services">Services</a></li><li><a href="http://www.nydailynews.com/services/media-kit/">Media Kit</a></li><li><a href="http://www.nydailynews.com/autos">Autos</a></li><li><a href="https://homedelivery.nydailynews.com" target="_blank">Home Delivery</a></li><li><a href="http://www.nydailynews.com/login">Newsletters</a></li><li><a href="http://local.nydailynews.com/search/en-US/" target="_blank">Businesses</a></li><li><a href="http://nydailynews.adperfect.com" target="_blank">Place an Ad</a></li><li><a href="http://www.nydailynews.com/services/privacy-policy#third_party_ads">About our Ads</a></li><li><a href="http://www.nydailynews.com/services/contact-us">Contact Us</a></li><li><a href="http://www.nydailynews.com/services/careers">Careers</a></li><li><a href="http://www.nydailynews.com/services/faqs">FAQ\'s</a></li><li><a href="http://www.nydailynews.com/services/feeds">Feeds</a></li><li><a href="http://www.nydailynews.com/services/sitemap">Site Map</a></li></ul></div><div id="nydn-disclaimer"><p>Use of this website signifies your agreement to the <a href="http://www.nydailynews.com/services/terms-services">Terms of Service</a> and <a href="http://www.nydailynews.com/services/privacy-policy">Privacy Policy</a>.</p><p>© Copyright 2015 NYDailyNews.com. All rights reserved.</p></div>');
    };

    var resetFooter = function () {
        var space = $(document).height() - $('#nydn-footer').offset().top - $('#nydn-footer').outerHeight();
        console.log(space);
        if (space > 0 ) {
            $('#nydn-footer').css("position","fixed");
            $('#nydn-footer').css("bottom","0");
        } else {
            $('#nydn-footer').css("position","relative");
            $('#nydn-footer').css("bottom","0");
        }
    };

    var resetFooterResize = function () {
        var space = $(document).height() - $('#nydn-footer').offset().top - $('#nydn-footer').outerHeight();
        console.log(space);
        if (space > 10 ) {
            $('#nydn-footer').css("position","fixed");
            $('#nydn-footer').css("bottom","0");
        } else {
            $('#nydn-footer').css("position","relative");
            $('#nydn-footer').css("bottom","0");
        }
    };

    loadHeader();
    loadTopAd();
    buildQuiz(input);
    loadFooter();
    // setTimeout(function() { resetFooter(); }, 1000);
            
}); 


