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
            
        }
  
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
                    <li class="nav-item active"><a href="index.php" class="nav-link"><i class="fa fa-home"></i> Home</a></li>
                    <li class="nav-item"><a href="project-creation-tool.php" class="nav-link"><i class="fa fa-search"></i> Project Creation Tool</a></li>
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

<br>
<div class="container-fluid" id="trackRationcard" style="display: none;">

        <div class="jumbotron">
            <div class="row">
                <div class="col-md-5">
                    <div class="img-fluid" id='photo'></div>
                </div>
                <div class="col-md-7 text-center justify-content-center align-items-center">    
                    <h1 class="display-4" id='fhead'>card head name</h1>
                    <p class="lead">Ration card Number: <span id='cno'> Subtitle</span></p><br>
                    <div class="row">
                        <div class="col-md-5 text-left" style="border-right: 1px solid black;">
                            <p>Mother Name: <span id='motherName'></span></p>
                            <p>Father Name: <span id='fatherName'></span></p>
                            <p>Occupation: <span id='occupationMain'></span></p>
                            <p>Anual Income: <span id='taincome'></span> Rs per Year</p>
                            <p>Ration shop Number: <span id='rsno'></span></p>
                            <p>Door No: <span id='dno'></span> - <span id='landmarkMain'></span></p>
                        </div>
                        <div class="col-md-7 text-left " style="padding-left: 30px;"> 
                            <p>Village: <span id='villageMain'></span></p>
                            <p>Mandal: <span id='mandalMain'></span></p>
                            <p>Dist: <span id='distMain'></span></p>
                            <p>State: <span id='stateMain'></span> - <span id="pinMain"><span></p>
                            <p>Gas Connection: <span id='gascount'></span> cylinder's, <span id='gasCompany'></span></p>
                            <p>Gas Agency: C No-<span id='cosnumerNo'></span> - <span id='gasAgency'></span>,</p>
                        </div>
                    </div>
                </div>
            </div>
           
            <hr class="my-4">
            <div id="targetFamTable"></div>
        </div>
</div>


<div id="searchRationcard">
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="form-group">
                <input id="inpurRcno" placeholder="Please enter Valid ration card number" class="form-control text-center">
            </div>
            <div class="form-group">
                <button class='btn btn-success w-100' id="btnCastetracker">Track and Hack Caste data</button><br><br>
                <button class='btn btn-success w-100' id="btnRationtracker">Track Ration card data</button>
            </div>
        </div>
    </div>
</div>
<div class='container' id="console"></div>


<div id="latest"></div>


<?php


function curlPost($url, $data = NULL) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    if(!empty($data)){
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }

    
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);

    if (curl_error($ch)) {
        trigger_error('Curl Error:' . curl_error($ch));
    }

    curl_close($ch);
    echo $response;
}

$headers = ['Content-Type' => 'application/x-www-form-urlencoded', 'charset' => 'utf-8'];
$url = 'https://cors-anywhere.herokuapp.com/https://epdsap.ap.gov.in/epdsAP/';
$data = ['rationcard' => 'WAP050500400097'];
curlPost($url, $data, $headers);

 

?>




<script>

   
      $('#btnCastetracker').on('click', function(){
          var inputRation = $('#inpurRcno').val();
          if(inputRation === ""){
            //alert('No value');
            xmlTrack()
          }else{
            //trackRationcard(inputRation);
            //tracker();
           // xmlTrack()
          }
         
      });

      $('#btnRationtracker').on('click', function(){
          var inputRation = $('#inpurRcno').val();
          if(inputRation === ""){
            //alert('No value');
            trackRationcard();
          }else{
            //trackRationcard(inputRation);
            //tracker();
           // xmlTrack()
          }
         
      });



      function xmlTrack(){
        console.log('start')
        var promesevadataUrl = 'https://cors-anywhere.herokuapp.com/';
        var baseUrl = 'https://apobmms.cgg.gov.in/';
        var reqUrl = 'Ajax.do?key=validMeesevaCasteNo&msevacaste=CGC011817262749';
        $.ajax({
            type: 'get',
           // url: '/xml.xml',
           url : promesevadataUrl+baseUrl+reqUrl,
            success: function(xhr, status, error) {
                console.log(xhr.responseText);
                console.log('success')
            },
            error: function(xhr, status, error) {
            var dada = xhr.responseText;
            dada.replace('<Meeseva', '<Meeseva>');
           // var x  = 'CGC011817262747$BOBBILI SWATHI$BOBBILI SUBBARAO$MADIGA (SC) $$$HINDU$05$H NO- 5-6-540, NEAR OLD BUS STAND, JANGAREDDIGUDEM     ,Jangareddigudem,West Godavari                 , 534447,9640405005$30$15/08/1989$F$16/05/2018';
            console.log(dada);
            var mesevadata = dada.split('$');
            console.log(mesevadata);
            $('#console').append(
                '<h5>Candidate Name: '+mesevadata[1]+
                '</h5><p>Gender: '+mesevadata[11]+
                '<br>Age and DOB: '+mesevadata[9]+', '+mesevadata[10]+
                '<br>Certificate Date: '+mesevadata[12]+
                '<br> Certificate Number: '+mesevadata[0]+
                '<br>S/O: '+mesevadata[2]+
                '<br>Caste: '+mesevadata[3]+mesevadata[4]+mesevadata[5]+
                '<br>Religion: '+mesevadata[6]+' '+mesevadata[7]+
                '<br>Address: '+mesevadata[8]+
                ''
            );
            
            
            ////////////////////////
            }
        });
      }



  

      //var url="https://apobmms.cgg.gov.in:443/corporationWise.do?mode=beneficiaryPDF&benficiary_id="
			//	+ benficiary_id + "&corp_id=" + corp_id;

     function trackRationcard(cardNo) {
         console.log('ration card tracking started');
        var rationcard  = 'JAP050500400013'; 
        var promesevadataUrl = 'https://cors-anywhere.herokuapp.com/';
        var baseUrl = 'https://epdsap.ap.gov.in/epdsAP/';
        $.ajax({
                    type: "post",       
                    data: "rationcard=WAP050500400097",
                    url: promesevadataUrl+baseUrl+"login/modalbody1.jsp",
                    //url: '/rationdata.php',
                    cache: false,
                    success: function (html)
                    {
                        $('#trackRationcard').show();
                        $('#searchRationcard').hide();
                        var data = html;
                        $('#console').html(data);
                        $('#console').hide();
                        //alert('this your input data: '+cardNo)
                        var photo = $('#familyphoto').html();
                        var familyHead = $('#hodfamilll').html();
                        var cno = $('.formtext').val();


                        $('#photo').html(photo);
                        $('#familyphoto').css({
                            'height' : '400px',
                            'width' : '500px'
                        });
                        $('#familyphoto').addClass('img-thumbnail');
                        $('#fhead').html(familyHead);
                        $('#cno').html(cno);

                        var fmemTable = $('#displaydata').html();
                        $('#targetFamTable').append(fmemTable);
                        $('#targetFamTable').addClass('table table-striped table-inverse table-responsive');
                        $('#targetFamTable tbody tr ').removeClass('trhead bold rowEven');
                        //$('#targetFamTable tbody tr ').removeAttr('style');
                        //$('#targetFamTable tbody tr td').removeClass('formtext');
                    // $('#targetFamTable tbody tr ').removeAttr('align');
                        //$('#targetFamTable tbody tr td').removeAttr('style');
                        var theader = $('#targetFamTable tbody tr:first').html();
                        var headerCode = '<thead class="thead-light">'+theader+'</thead>';
                        //$('#targetFamTable').prepend(headerCode);
                        $('#targetFamTable').css({
                            'zoom' : '120%',
                            'color' : 'red',
                        });
                        $('#rcno').text($('#rcnumber').val());
                        $('#motherName').text($('#mothernameeng').text());
                        $('#fatherName').text($('#fathereng').text());
                        $('#occupationMain').text($('#occupation').text());
                        $('#taincome').text($('#income').text());
                        $('#rsno').text($('#shopno').text());
                        $('#dno').text($('#hono').text());
                        $('#landmarkMain').text($('#landmark').text());
                        $('#villageMain').text($('#village').text());
                        $('#mandalMain').text($('#town').text());
                        $('#distMain').text($('#dist').text());
                        $('#stateMain').text($('#state').text());
                        $('#pinMain').text($('#pin').text());
                        $('#gascount').text($('#cylindercount').text());
                        $('#gasCompany').text($('#gascompaname').text());
                        $('#cosnumerNo').text($('#consumno').text());
                        $('#gasAgency').text($('#gasagennane').text());
                    } 
                });
      }


		
</script>

<!--
<script src="djs/customJs/index.js"></script>-->
</body>

</html>
