<!DOCTYPE html>
<html lang="en">

<head>
    <title>Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--<link rel="stylesheet" href="css/bootstrap3.3.7.min.css">-->
    <link rel="stylesheet" href="css/bootstrap4.min.css">
    <link rel="stylesheet" href="css/fontawesome.min.css">
    <link href="css/brands.css" rel="stylesheet">
    <link href="css/solid.css" rel="stylesheet">
    <script src="js/jquery3.3.1.min.js"></script>
    <!--
  	<script src="js/bootstrap3.3.7.min.js"></script>-->
    <script src="js/bootstrap4.min.js"></script>

    <!-- custom scripts and css of this page -->
    <link rel="stylesheet" type="text/css" href="css/customCss/index.css">
    <style type="text/css">
        body {
            -moz-transform: scale(0.9, 0.9);
            /* for moz browser*/
            zoom: 0.9;
            /* other non webkit browser*/
            zoom: 90%;
            /*web kit browser*/
        }
    </style>
    <?php
	$ip = getenv('REMOTE_ADDR');


?>



</head>

<body>

    <!-- navigation bar area -->
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
        <div class="container">
            <a href="#" class="navbar-brand" id='logo'>Website.com</a>
            <button class="navbar-toggler" type="button" data-toggle='collapse' data-target='#navMenu'>
				<span class="navbar-toggler-icon"></span>
			</button>
            <div class="collapse navbar-collapse justify-content-end" id='navMenu'>
                <ul class="nav navbar-nav text-white">
                    <li class="nav-item active"><a href="index.php" class="nav-link"><i class="fa fa-home"></i> Home</a></li>
                    <li class="nav-item"><a href="search.php" class="nav-link"><i class="fa fa-search"></i> Search</a></li>
                    <li class="nav-item"><a href="jobtweat.php" class="nav-link"><i class="fa fa-tv"></i> JobTweat</a></li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle='dropdown'><i class="fa fa-book"></i> PostJob</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item"><i class="fa fa-truck"></i> GovtJob</a>
                            <a href="#" class="dropdown-item"><i class="fa fa-car"></i> PivateJob</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle='dropdown'><i class="fa fa-user"></i> MyProfle</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-wrench"></i> Settings</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-circle"></i> Notifications <span class="badge badge-primary">5</span></a>
                            <a class="dropdown-item" href="#"><i class="fa fa-car"></i> Security</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-mobile"></i> logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!---->
    <div class="jumbotron text-center bg-secondary text-white">
        <h1>Hello Welcome I am Php output :
            <?php echo $ip; ?>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>



    <!--carousel with animated features
<div class="carousel slide" id='demo' data-ride='carousel'>
	
	<!-- indiacators 
	<ul class="carousel-indicators">
		<li class="active" data-target='#demo' data-slide-to='0'></li>
		<li data-target='#demo' data-slide-to='1'></li>
		<li data-target='#demo' data-slide-to='2'></li>
	</ul>
	
	<!--slideshow>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img class="img-fluid" src="/images/cr1.jpg" alt='chicago'>
		</div>
		<div class="carousel-item">
			<img class="img-fluid" src="images/cr2.jpg" alt='bengaluru'>
		</div>
		<div class="carousel-item">
			<img class="img-fluid" src="images/cr3.jpg" alt='hyderabad'>
		</div>
	</div>

	<!--left and right controls 
	<a href="#demo" class="carousel-control-prev" data-slide='prev'>
		<span class="carousel-control-prev-icon"></span>
	</a>
	<a href="#demo" class="carousel-item-control-next" data-slide='next'>
		<span class="carousel-control-next-icon"></span>
	</a>

</div>

<!-- content area -->
    <div class="container"><br>
        <div class="col-md-8 offset-md-2">
            <div class="progress">
                <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" id="prgrsUpdt" style="width: 70%">70%</div>
            </div>
        </div>

        <!--Pagination--><br>
        <ul class="pagination pagination-sm justify-content-center">
            <li class="page-item"><a href="#" class="page-link">previous</a></li>
            <li class="page-item"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><a href="#" class="page-link">3</a></li>
            <li class="page-item"><a href="#" class="page-link">next</a></li>
        </ul>


        <div class="card text-center">
            <div class="card-header bg-primary card-dark">
                <h4> Sudheer Babu</h4>
            </div>
            <div class="card-body">
                <h4 class="card-title">Console Output Javascript</h4>
                <p class="card-text" id='outPut'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="card-footer"> Designed By Sudheer</div>
        </div>



        <!-- collapsed <br>
	<button type="button" class="btn btn-primary" data-toggle='collapse' data-target='#menuMM'>Collapse button below text</button>
	<div id='menuMM' class="collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br>


	<a href="#dataH" class="text-decoration-none" data-toggle='collapse'>Anchoro link collapse</a>
	<div id='dataH' class="collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br>

	
<div class="spinner-grow text-muted"></div>
<div class="spinner-grow text-primary"></div>
<div class="spinner-grow text-success"></div>
<div class="spinner-grow text-info"></div>
<div class="spinner-grow text-warning"></div>
<div class="spinner-grow text-danger"></div>
<div class="spinner-grow text-secondary"></div>
<div class="spinner-grow text-dark"></div>
<div class="spinner-grow text-light"></div>
<!-- footer links -->
        <br><br>
   
    </div>

        <div style="margin-bottom: 50px;"></div>
        <div>
            <p class="footer"><span id='time' class="whitetxt"> </span>Powered by <a href="#" class="footerLink text-decoration-none">SudheerInfoTech</a> services copy right @ 2014 to 2019</p>
        </div>
    
    <script>

      class Schools {
          constructor(_name, _class,){
              this.name = _name;
              this.class = _class;
          }
          stdInfo(){
                return 'Hello sir I am '+this.name+' and i am studying '+this.class+' standard';
               // return "Hello sir I am ${this.name} and I am studying ${this.class} standard";
          }
      }

      var student = new Schools('Raja', '9th');
      <?php
        $number = 1;
         
        while($number <= 10){
            echo $number.'<br>';
            $number++;
        }

      ?>
      $('#outPut').text(student.stdInfo());

    </script>

        <!--
<script src="js/customJs/index.js"></script>-->
</body>

</html>
