
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Pratik`s page</title>
</head>
<body>

<div style="color:99999">
    <div style="color:#99999" align="center">
    <h3>This is a heading</h3>
<p>This is a paragraph.</p>
</div>
<div style="color:#99999" align="center">
    <button type="button"><H3>Click Me!</H3></button>
</div>
</div>

</body>
</html>-->

<head>

    <!--- Basic Page Needs
    ================================================== -->
<meta charset="utf-8">
    <title>Pratik WebData</title>
<meta name="description" content="">
    <meta name="author" content="">

        <!-- Mobile Specific Metas
        ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <!-- CSS
        ================================================== -->
    <link rel="stylesheet" href="../css/default.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/media-queries.css">
    <link rel="stylesheet" href="../css/magnific-popup.css">

        <!-- Script
        ================================================== -->
    <script src="../js/modernizr.js"></script>

        <!-- Favicons
         ================================================== -->
    <link rel="shortcut icon" href="favicon.png" >

    </head>

    <body>

        <!-- Header
        ================================================== -->
    <header id="home">

    <nav id="nav-wrap">

    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
<a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>



</nav> <!-- end #nav-wrap -->

<div class="row banner">
    <div class="banner-text">
    <h1 class="responsive-headline">I'm Pratik Naik.</h1>
<h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
effective visual identities for companies of all sizes around the globe. Let's <a class="smoothscroll" href="#about">start scrolling</a>
and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
<hr />
<ul class="social">
    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></l    i>
<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
<li><a href="#"><i class="fa fa-skype"></i></a></li>
</ul>
</div><div> </br> </div>
<input  type="button" value="Click"
onclick="my();" />

    <script language="javascript" type="text/javascript">
    function my() {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "Data.json",
            cache: false,
            beforeSend: function() {
                $('#res2').html('loading please wait...');
            },
            success: function(jsondata) {

                var str = '';
                str += '<ul>';
                $.each(jsondata, function(idx, obj) {
                    str += '<li>' + obj.title + ' - ' + obj.capital + '</li>';
                });
                str += '</ul>';
                $('#res2').html(str);
            }
        });
    }
    </script>
    </div>


    </header> <!-- Header End -->

        <!-- Java Script
        ================================================== -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../js/jquery-1.10.2.min.js"><\/script>')</script>
    <script type="text/javascript" src="../js/jquery-migrate-1.2.1.min.js"></script>

    <script src="js/jquery.flexslider.js"></script>
    <script src="js/waypoints.js"></script>
    <script src="js/jquery.fittext.js"></script>
    <script src="js/magnific-popup.js"></script>
    <script src="js/init.js"></script>

    </body>

    </html>
