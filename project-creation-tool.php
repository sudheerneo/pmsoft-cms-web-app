<!DOCTYPE html>
<html lang="en">

<head>
    <title>Web End Friend</title>
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
            zoom: 100%;
            /*web kit browser*/
            font-style: 
        }
        .card ul li {color: silver; font-size: 15px;}
        .modal{margin-top: 50px;}
        #ptReplace, #pt{font-weight: bold;opacity:0.6;}
        h4{font-weight: bold; opacity: 0.5; }
        .card{padding: 15px;margin-1left: 0px;}
        .flexBox{ display: flex;justify-content: center;}
        .flexBox div{border: 2px solid silver;margin: 3px;padding: 10px; border-radius: 5px;}
        .flexBox div p{font-size:13px; opacity: 0.8;}.flexBox div h5{text-align:center; font-size:15px; }
        .din1 h5 {opacity:0.9;}
    </style>


</head>

<body>
    <!-- navigation bar area -->
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
        <div class="container">
            <a href="#" class="navbar-brand" id='logo'>Project Management</a>
            <button class="navbar-toggler" type="button" data-toggle='collapse' data-target='#navMenu'>
				<span class="navbar-toggler-icon"></span>
			</button>
            <div class="collapse navbar-collapse justify-content-end" id='navMenu'>
                <ul class="nav navbar-nav text-white text-center">
                    <li class="nav-item"><a href="index.php" class="nav-link"><i class="fa fa-home"></i> Home</a></li>
                    <li class="nav-item active"><a href="project-creation-tool" class="nav-link"><i class="fa fa-search"></i> Project Creation Tool</a></li>
                    <li class="nav-item"><a href="jobtweat.php" class="nav-link"><i class="fa fa-tv"></i> Cover Letter</a></li>
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
        

        <div class="container"><br>
            <div style = "border: 2px solid silver; padding: 70px;border-radius: 5px;"> 
                <div class="row text-center">
                    <div class="col-md-6">
                        <h4>Create New Website Project</h4> <br>
                        <div class="form-inline">&nbsp
                           <input placeholder="Enter project name" id='pt' type="createProject" class="form-control">&nbsp &nbsp &nbsp
                           <button class="btn btn-success" id='ptBtn' data-toggle="modal">Create Project</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4>Display Website Project lists</h4>
                    </div>
                    <br>
                </div>
            <div>
        </div>

  

        <div class="modal" id='modalDiv'>
            <div class="modal-dialog modal-lg mw-100 w-100">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title w-100 text-center">What is the purpose of your <span id="ptReplace"></span></h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="purpose">Describe your info between 500 to 1500 words:</label>
                            <textarea class="form-control" rows="10" id="purpose"></textarea>                        
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success" type="close">Next</button>
                    </div>
                </div>
            </div>
        </div>
</div></div>
<div class="container-fluid" id='projectDemo'><br>
<h4 class="text-center">Deployment stages of web project</h4>
        <div class="flexBox">
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">Analysis</h4>
                <p><i class="fas fa-hand-point-right"></i> Website Purpose</p>
                <p><i class="fas fa-hand-point-right"></i> Website Goals</p>
                <p><i class="fas fa-hand-point-right"></i> Target Audience</p>
            </div>
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">Planning</h4>
                <p><i class="fas fa-hand-point-right"></i> Sitemap</p>
                <p><i class="fas fa-hand-point-right"></i> Website Structure</p>
                <p><i class="fas fa-hand-point-right"></i> Texchnology Used</p>
            </div>
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">Design</h4>
                <p><i class="fas fa-hand-point-right"></i> Wireframe Models</p>
                <p><i class="fas fa-hand-point-right"></i> Visual Style</p>
                <p><i class="fas fa-hand-point-right"></i> Usability, UI, UX</p>
            </div>
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">Content</h4>
                <p><i class="fas fa-hand-point-right"></i> Copywriting</p>
                <p><i class="fas fa-hand-point-right"></i> Photos & videos</p>
                <p><i class="fas fa-hand-point-right"></i> SEO</p>
            </div>
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">UI & Development</h4>
                <p><i class="fas fa-hand-point-right"></i> Coding</p>
                <p><i class="fas fa-hand-point-right"></i> Database</p>
                <p><i class="fas fa-hand-point-right"></i> Responsive Design</p>
            </div>
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">Testing</h4>
                <p><i class="fas fa-hand-point-right"></i> Technical Testing</p>
                <p><i class="fas fa-hand-point-right"></i> Browser Compatibility</p>
                <p><i class="fas fa-hand-point-right"></i> Fullfil its Purpose?</p>
            </div>
            <div class="din1">
               <h5 class="bg-primary p-2 text-white">Deployment</h4>
                <p><i class="fas fa-hand-point-right"></i> Monitoring</p>
                <p><i class="fas fa-hand-point-right"></i> Bugfixes</p>
                <p><i class="fas fa-hand-point-right"></i> Maintenance</p>
            </div>
           
        </div>
</div><!-- project demo-->


 
<!-- bottom scripts -->
<script>
    $(window).ready(function(){
            $('#ptBtn').click(function(){
                var projectName = $('#pt').val();
                if(projectName == ""){
                    alert('novalue')
                    return;
                }
                $('#ptReplace').text(projectName);
                $('#modalDiv').modal();
            });
           
        });    
</script>
<script src="js/customJs/index.js"></script>
</body>

</html>
