<?php
//include('env.php');
//include(CLASS_PATH . 'class.csv.php');
include('../class.csv.php');
$csv = new parseCSV('data.csv');
?><!DOCTYPE html>
<html lang="en">
<head>
    <title>The NY Daily News quizzes, by the NY Daily News</title>
    <link rel="icon" type="image/png" href="http://interactive.nydailynews.com/favicons.png">
	<!-- DEFAULT -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="apple-touch-icon" href="">
    <meta name="format-detection" content="telephone=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

    <!-- The NY Daily News quizzesS-->
    <meta property="og:title" content='The NY Daily News quizzes' />
    <meta name="twitter:title" content='The NY Daily News quizzes'/>
    <meta name="parsely-title" content='The NY Daily News quizzes' />

    <!-- Look at all the news and entertainment and sports quizzes from the New York Daily News-->
    <meta name="description" content="Behold these news and entertainment and sports quizzes from the New York Daily News. Behold." />
    <meta property="og:description" content="Look at all the news and entertainment and sports quizzes from the New York Daily News" />
    <meta name="twitter:description" content="Look at all the news and entertainment and sports quizzes from the New York Daily News" />

    <!-- KEYWORD -->
    <meta name="keywords" content="quiz,quizzes,news quiz,new york city" />
    <meta name="news_keywords" content="quiz,quizzes,news quiz,new york city" />
    <meta name="parsely-tags" content="interactive,interactive quiz,quizzes" />

    <!-- LINK -->
    <link rel="canonical" href="http://interactive.nydailynews.com/quiz/">
    <meta property="og:url" content="http://interactive.nydailynews.com/quiz/" />
    <meta name="twitter:url" content="http://interactive.nydailynews.com/quiz/">
    <meta name="parsely-link" content="http://interactive.nydailynews.com/quiz/" />

    <!-- THUMBNAIL IMAGE-->
    <meta property="og:image" content="http://interactive.nydailynews.com/quiz/img/split_0310.jpg" />
    <meta name="twitter:image:src" content="http://interactive.nydailynews.com/quiz/img/split_0310.jpg" />
    <meta name="parsely-image-url" content="http://interactive.nydailynews.com/quiz/img/split_0310.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="800" />

    <!-- TIME -->
    <meta name="parsely-pub-date" content="2017-03-11T11:00:00Z" />

    <!-- NO NEED TO FILL -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:domain" content="http://interactive.nydailynews.com"/>
    <meta name="twitter:site" content="@nydailynews">
    <meta name="parsely-type" content="post" />
    <meta name="decorator" content="responsive" />
    <meta name="parsely-section" content="Interactive" />
    <meta name="parsely-author" content="Interactive Quiz" />
    <meta name="nydn_section" content="NY Daily News" />
    <meta name="robots" content="NOARCHIVE" />
    <meta name="msvalidate.01" content="02916AAC0DA8B068EFE01D721E03ED7E" />
    <meta name="p:domain_verify" content="78efe4f5c9935744af497772f68a0ee7" />
    <meta property="fb:app_id" content="107464888913" />
    <meta property="fb:admins" content="1594068001" />
    <meta property="fb:pages" content="268914272540" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="NY Daily News" />
    <meta property="article:publisher" content="https://www.facebook.com/NYDailyNews/" />
    <meta name="themeKey" content="nydailynews" />
    <meta name="mapThemeKey" content="responsive" />
    <meta name="urlPrefix" content="" />
    <meta name="staticContentPrefix" content="http://static.localedge.com/" />
    <meta name="searchBinding" content="/search" />
    <meta name="localeCountry" content="US"/>
    <meta name="localeLanguage" content="en" />

    <!-- ADOBE ANALYTICS -->
    <script src="//assets.adobedtm.com/4fc527d6fda921c80e462d11a29deae2e4cf7514/satelliteLib-c91fdc6ac624c6cbcd50250f79786de339793801.js"></script>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css'>
    <script data-main="http://assets.nydailynews.com/nydn/js/rh.js?r=20170405001" src="http://assets.nydailynews.com/nydn/js/require.js?r=2016LIST" defer></script>
      
    <link rel="stylesheet" type="text/css" href="http://assets.nydailynews.com/nydn/c/rh.css?r=2016LIST">
    <link rel="stylesheet" type="text/css" href="http://assets.nydailynews.com/nydn/c/ra.css?r=2016LIST">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.css" />
	<link href="css/style.css?v3" rel="stylesheet" type="text/css" />
    <script>
    var nydn = nydn || {
        "section": "NYDailyNews",
        "template": "article",
        "revision": "201609014009",
        "targetPath": document.location.pathname
    };
    </script>
    <script>
    var nydnDO = [
        { 
            'title':'xxxThe NY Daily News quizzesxxx', 
            'link':'http://interactive.nydailynews.com/quiz/', 
            'p_type':'interactive', 
            'section':'interactive' }
    ];
    </script>
    
    <!-- ADS-START -->
	<script onload="nydn_ads('quiz');" src="http://interactive.nydailynews.com/includes/ads/ads.js"></script>
    <!-- ADS-END -->
    <script>var nav_params = {section: 'News Quizzes', url: 'http://interactive.nydailynews.com/quiz/'};</script>
    <script src="http://interactive.nydailynews.com/library/vendor-nav/vendor-include.js" defer></script>
</head>
<body id="nydailynews" data-section="nydailynews" data-subsection="NY Daily News" class="">

<!-- SITEHEADER-START -->
<header id="templateheader"></header>
<!-- SITEHEADER-END -->

<style type="text/css">

body#nydailynews article {
    max-width: 1100px;
    margin: auto;
    float: none;
}
#rh-subnav-wrap { display: none; }
#sidebar {
	float: right;
	width: 300px;
}
@media screen and (max-width: 642px) {
	#sidebar {
		float: none;
		width: 100%;
	}
}
</style>
  <article class="column">
    <h1 class="center">NY Daily News Quizzes</h1>
    <p class="description center">Look at all the news and entertainment and sports quizzes from the New York Daily News</p>
	<section id="sidebar" class="column">
		<h2>Game of Thrones</h2>
		<p>Our collection of Game of Thrones special projects.</p>
		<ul>
			<li><a href="http://interactive.nydailynews.com/project/choose-your-weapon/">Game of Thrones weapon-name generator</a></li>
			<li><a href="http://interactive.nydailynews.com/project/game-of-thrones-house/">Game of Thrones house motto generator</a></li>
			<li><a href="http://interactive.nydailynews.com/quiz/game-of-thrones-death/">QUIZ: Match the GoT character to the way they died</a></li>
			<li><a href="http://www.nydailynews.com/entertainment/tv/quiz-dead-characters-game-thrones-article-1.3326545">QUIZ: How many of the GoT dead can you name?</a></li>
			<li><a href="http://www.nydailynews.com/entertainment/tv/game-thrones-character-iron-throne-article-1.3365102">RANKER: Vote which character will end up on the Iron Throne</a></li>
	</section>
<?php
$prev_year = '';
foreach ( $csv->data as $key => $item ):
    if ( trim($item['year']) != trim($prev_year) ): 
		if ( $prev_year != '' ) echo '	</ul>';
		$prev_year = $item['year'];
?>
    <h2><?php echo $item['year']; ?> news quizzes</h2>
	<ul>
<?php endif;
    echo "      <li><a href='" . $item['url'] . "'>" . $item['title'] . "</a></li>\n";
endforeach;
?>
	</ul>
	<hr noshade>
	<h2>Games from the New York Daily News</h2>
	<p><a href="http://games.nydailynews.com/">Play in-browser games</a>, such as <a href="http://games.nydailynews.com/games/daily-sudoku/">Sudoku</a> and the <a href="http://games.nydailynews.com/games/daily-crossword/">crossword</a> and <a href="http://games.nydailynews.com/category/arcade">a bunch of arcade games</a>.</p>
    
        <script src="js/social.js" defer></script>
<hr>
  <div class="center" style="float: left; width: 50%;">
    <span style="font-size:10px; color:#999;font-family:sans-serif;">ADVERTISEMENT</span>
    <div id='div-gpt-ad-1423507761396-2'>
              <script>
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-2'); });
              </script>
    </div>
  </div>
  <div class="center" style="margin-bottom: 18px">
    <span style="font-size:10px; color:#999;font-family:sans-serif;">ADVERTISEMENT</span>
    <div id='div-gpt-ad-1423507761396-1'>
              <script>
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-1'); });
              </script>
    </div>
  </div>
  <div class="center" style="margin-bottom: 18px">
    <span style="font-size:10px; color:#999;font-family:sans-serif;">ADVERTISEMENT</span>
    <div id='div-gpt-ad-x105'>
              <script>
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-x105'); });
              </script>
    </div>
  </div>
<hr>

  </article>
 
<!-- FOOTER-START -->
<footer id="templatefooter"></footer>
<!-- FOOTER-END -->

<div id="ra-bp"></div> <section id="rao">  <div id="rao-close"></div> <div id="rao-wrap"></div> </section> 
<div id="r-scripts">
    <div id="parsely-root" style="display: none">
        <span id="parsely-cfg" data-parsely-site="nydailynews.com"></span>
    </div>
    <div class="r-ad">
        <div id="div-gpt-ad-x100">
        </div>
    </div>
</div>
</body>
</html>
