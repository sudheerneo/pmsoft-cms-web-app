<?php

//Create database
$conn = new mysqli("localhost", "root", "","copycrudbase");
if($conn->connect_error){
    die('<hr>Connection failed: '.$conn->connect_error.'<hr>');
}else{
    echo "<hr>Connection success<hr>";
    $fname = "CREATE DATABASE exapmle";
    if($conn->query($sql)){
        echo "<hr>Database creation succes<br>".$sql."<hr>";
    }else{
        echo "<hr>".$sql."<br>".$conn->error."<hr>";
    }
}
$conn->close();
echo "<hr>Connection going to closing now ... closed.<hr>";




//create table data
$conn = new mysqli("localhost", "root", "","copycrudbase");
if($conn->connect_error){
    die('<hr>Connection failed: '.$conn->connect_error.'<hr>');
}else{
    echo "<hr>Connection success<hr>";
    $fname = "Swathi";$lname = "Karthik"; $phnmbr = '9603251273';
    $sql = "CREATE TABLE exapmle(
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        fname VARCHAR(30) NOT NULL,
        lname VARCHAR(30) NOT NULL,
        mobile VARCHAR(30) NULL
    );";
    if($conn->query($sql)){
        echo "<hr>Database table data creation succes<br>".$sql."<hr>";
    }else{
        echo "<hr>".$sql."<br>".$conn->error."<hr>";
    }
}
$conn->close();
echo "<hr>Connection going to closing now ... closed.<hr>";




//insert data into table
$conn = new mysqli("localhost", "root", "","copycrudbase");
if($conn->connect_error){
    die('<hr>Connection failed: '.$conn->connect_error.'<hr>');
}else{
    echo "<hr>Connection success<hr>";
    $fname = "Swathi";$lname = "Karthik"; $phnmbr = '9603251273';
    $sql = "INSERT INTO 
    users (fname, lname, phnmbr)
    VALUES ('$fname', '$lname', '$phnmbr')
    ";
    if($conn->query($sql)){
        echo "<hr>Database TABLE INSERT creation succes<br>".$sql."<hr>";
    }else{
        echo "<hr>".$sql."<br>".$conn->error."<hr>";
    }
}
$conn->close();
echo "<hr>Connection going to closing now ... closed.<hr>";


//update database
$gh = "1234567890";$lname = "babu";
$conn = new mysqli("localhost", "root", "", "copycrudbase");
if($conn->connect_error){
    die("<hr>Connection failed<br>".$conn->connect_error."<hr>");
}else{
    echo"<hr>Coneection Success. further program initiated.<hr>";
    $sql = "UPDATE users SET phnmbr = '$gh', lname = '$lname' WHERE id = 1 ";
    if($conn->query($sql) === TRUE){
        echo "<hr>Below statement exicuted successfully.<br>".$sql."<br>";
    }else{
        echo "<hr>Statement exicution failed<br>".$sql."<br><b>".$conn->error."</b><br>";
    }
}
$conn->close();
echo "<hr>Conection closing....... closed.<hr>";





//display datatable values
$conn = new mysqli("localhost", "root", "", "copycrudbase");
if($conn->connect_error){
    die("<hr>Connection falied for below error: <br>".$conn->connect_error."<hr>");
}else{
    echo "<hr>Connection success<hr>";
    $sql = "SELECT * FROM users"; 
    //due to return values we need to save in result variable
    $res = $conn->query($sql);
    //checking values more than 0 
    if( $res->num_rows > 0 ){
        //having values more than zero and outputting the values with while
        while( $row = $res->fetch_assoc() ){
            echo '<table class="table"><tr><td> '.$row['id'].'</td><td>'.$row['fname'].'</td><td>'.$row['lname'].'</td><td>'.$row['phnmbr'].'</td></tr></table>';
        }     
    }else{
        echo "<hr>zero reluts returned<hr>";
    }
}
$conn->close();
echo "<hr>Connection closing.... closed<hr>";


//delete table record
$conn = new mysqli("localhost", "root", "", "copycrudbase");
if($conn->connect_error){
    die("<hr>Connection failed:<br>".$conn->connect_error."<hr>");
}else{
    echo "<hr>Connection success<hr>";

    $sql = " DELETE FROM users WHERE id = 3 ";
    if($conn->query($sql) === TRUE){
        echo "<hr>Record Deleted Successfully<hr>";
    }else{
        echo "failed to delete";
    }
}
$conn->close();
echo "<hr>Connection Closing... closed.<hr>"




?>







<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">














<html>
<head>
<!-- <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title> -->
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style type="text/css">
table {
		/* width: 100%; */
		/* background: #D98310; */
		background:rgba(1, 159, 225, 0.2);
		color: #001a4d;
		font-weight: 400;
		border-color: #CCCCCC;
		padding: 0.5em 1em 0.5em 1em;
		text-align: left;
	}

.trhead {
	FONT-FAMILY: verdana; BACKGROUND: 	#A9D0F5
; HEIGHT: 20px; COLOR: #111111; FONT-SIZE: 11px
}

.bold {
	FONT-WEIGHT: bold
}

.rowEven {
	FONT-FAMILY: verdana; BACKGROUND: #F8F8FF; FONT-SIZE: 12px
}
.rowOdd {
	FONT-FAMILY: verdana; BACKGROUND: #FFFAF0; FONT-SIZE: 11px
}
.trhead {
	FONT-FAMILY: verdana; BACKGROUND: 	#A9D0F5
; HEIGHT: 20px; COLOR: #111111; FONT-SIZE: 11px
}
.tableLayout {
	BORDER-BOTTOM: #b5b5b5 0px solid; BORDER-LEFT: #b5b5b5 0px solid; 
	MARGIN: 10px 0px 0px; WIDTH: 100%; BACKGROUND:#ffffff
 ; BORDER-TOP: #b5b5b5 0px solid; BORDER-RIGHT: #b5b5b5 1px solid
}




HTML {
	
}

.formtext {
	FONT-FAMILY: verdana; COLOR: #000000; FONT-SIZE: 11px; VERTICAL-ALIGN: middle
}

.formtextBold {
	FONT-FAMILY: verdana; COLOR: #000000; FONT-SIZE: 11px; VERTICAL-ALIGN: middle; FONT-WEIGHT: bold
}



#RationDataDiv {
	Z-INDEX: 2; BORDER-BOTTOM: #b5b5b5 1px solid; BORDER-LEFT: #b5b5b5 1px solid; PADDING-BOTTOM: 10px;
	MARGIN: -4px 10px 10px 0px; PADDING-LEFT: 5px; WIDTH: 100%; PADDING-RIGHT: 5px; DISPLAY: block; BACKGROUND: #4682B9; CLEAR: both; 
	BORDER-TOP: #b5b5b5 1px solid; BORDER-RIGHT: #b5b5b5 1px solid; PADDING-TOP: 0px
}


.smallheadings {
	MARGIN-TOP: 5px; MIN-HEIGHT: 20px; MARGIN-BOTTOM: 10px; COLOR: #000000; FONT-SIZE: 12px
}




#RationDataDiv {
	Z-INDEX: 2; BORDER-BOTTOM: #b5b5b5 1px solid; BORDER-LEFT: #b5b5b5 1px solid; PADDING-BOTTOM: 10px;
	MARGIN: -4px 10px 10px 0px; PADDING-LEFT: 5px; WIDTH: 100%; PADDING-RIGHT: 5px; DISPLAY: block; BACKGROUND: #4682B9; CLEAR: both; 
	BORDER-TOP: #b5b5b5 1px solid; BORDER-RIGHT: #b5b5b5 1px solid; PADDING-TOP: 0px
	border-radius: 0px;
}
.formtext {
	FONT-FAMILY: verdana; COLOR: #000000; FONT-SIZE: 11px; VERTICAL-ALIGN: middle
	border-radius: 0px
}
.trhead {
	FONT-FAMILY: verdana; BACKGROUND: 	#A9D0F5
; HEIGHT: 20px; COLOR: #111111; FONT-SIZE: 11px
border-radius: 0px
}
.tableLayout {
    border-radius: 0px;
	BORDER-BOTTOM: #b5b5b5 0px solid; BORDER-LEFT: #b5b5b5 0px solid; 
	MARGIN: 10px 0px 0px; WIDTH: 100%; BACKGROUND:#ffffff; BORDER-TOP: #b5b5b5 0px solid; BORDER-RIGHT: #b5b5b5 0px solid
}

tabs>li.active>a:hover
{

}


.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover
{
     color: #555;
    cursor: default;
    background-color: #b53f7d;
    border: 1px solid #ddd;
    border-bottom-color: transparent;

}

</style>
	

</head>

<script type="text/javascript">

function meeseavalloc()
{
	var districtcode=$('#districtcode').val();
	var meesevaappid=$('#rationcardHist').val();
	
	//alert("========="+meesevaappid);
	
	
	
	 $.ajax({
	        type: "get",       
	        data: "districtcode="+districtcode+"&rationcard="+meesevaappid,
	        url: "login/rationCardHistoryDataPopup.jsp",
	        cache: false,
	         success: function (html)
	        {
	        	 
	        	 $("#historydiv").html(html);
	            
	        } 
	     
	    });
		
	
}

function allotement()
{
	//var districtcode=$('#districtcode').val();
	var rationcard=$('#rcnumber').val();
	
	//alert("========="+rationcard);
	
	
	
	 $.ajax({
	        type: "get",       
	        data: "rcnumber="+rationcard,
	        url: "login/AllotementSearch.jsp",
	        cache: false,
	         success: function (html)
	        {
	        	 
	        	 $("#historydivkey").html(html);
	            
	        } 
	     
	    });
		
	
}


function meesevasearch()
{
	

	
	//alert("===========");
    //var personName = $(e.relatedTarget).data('meeseva-name');
    $('#diaplaydatmeeseva').html('<img align="center" src="images/imgload.gif" style="max-height: 80px; max-width: 80px;"><font color="green"> Please Wait !Data is loading...</font>');
   // $("data-dismiss").close();
    
    var meesevaappid=$("#meesevaappidinsearch").val();
    //alert("meeseva:"+meesevaappid);
   
    if(meesevaappid=="")
    	{
    	
    	$("#cheakcard").text("Enter Ration card");
    	alert("Enter Application Number");
    	$("data-dismiss").close();
    	alert("Enter Application Number");
    	}
    else
    	{
    	
   //=======================================
	 if($('#meesevaappidinsearch').val().indexOf("WAP") >= 0|| $('#meesevaappidinsearch').val().indexOf("RAP") >= 0|| $('#meesevaappidinsearch').val().indexOf("TAP") >= 0|| $('#meesevaappidinsearch').val().indexOf("PAP") >= 0|| $('#meesevaappidinsearch').val().indexOf("YAP") >= 0
			 || $('#meesevaappidinsearch').val().indexOf("JAP") >= 0|| $('#meesevaappidinsearch').val().indexOf("AAP") >= 0|| $('#meesevaappidinsearch').val().indexOf("WAD") >= 0|| $('#meesevaappidinsearch').val().indexOf("RC5") >= 0|| $('#meesevaappidinsearch').val().indexOf("CC5") >= 0)
	   {
		 
    $.ajax({
        type: "post",
        data: "meesevaappid="+ meesevaappid,
        url: "login/MeesevasearchWithoutDistrict.jsp",
        
        cache: false,
        success: function (html)
        {
            $("#diaplaydatmeeseva").html(html);
        }
    });
	   }
	 else	 
	//if($.isNumeric($('#meesevaappid').val()))
		 {
		 //$.isNumeric($('#meesevaappid').val()) ||
		 $.ajax({
	            type: "post",
	            data: "meesevaappid="+ meesevaappid,
	            url: "login/Meesevasearch.jsp",
	            cache: false,
	            success: function (html)
	            {
	                $("#diaplaydatmeeseva").html(html);
	            }
	        });
		 
		 }
  //===============================  
    	}
   
   // $("#meesevaappidinsearch").val("");

	}



function checkcrossscript(myid){
	 
	   var fn=document.getElementById(myid).value;
	    var regex = /^[0-9a-zA-Z\_]+$/;
	 
	    if(regex.test(fn))
	    	{
	    	return true;
	    	}
	    else
	    	{
	    	//alert("NOT ALLOWED");
	    	document.getElementById(myid).value = "";
	    	return false;
	    	}
	}
</script>
<script type="text/javascript">
       function myFunction(id) {
          
           $('<form action="'+id+'" method="POST"> '+

         '</form>').appendTo('body').submit();
              }

</script>

<body>
	





<div class="container">
  
  <ul class="nav nav-tabs" style="background: lavender;color: white">
    <li class="active" style="background-color: #3F51B5"><a data-toggle="tab" href="#home" style="color: white;">Transaction History</a></li>
    <li style="background-color: #3F51B5"><a data-toggle="tab" href="#menu1" style="color: white;">Application Search</a></li>
    <li style="background-color: #3F51B5"><a data-toggle="tab" href="#menu2" style="color: white;">DKR SEARCH</a></li>
    
  </ul>
  
<table >
<tr>
<td></td></tr>
</table>
<table>
<tr>
<td></td></tr>
</table>
  <div class="tab-content" align="CENTER">
    <div id="home" class="tab-pane fade in active">
     
      <font color="green" size="3" style=" font-weight: bold;">Transaction History:</font><input type="text" name="rationcard" size="20" id="rationcardHist" value=WAP0507034A0196 class="formtext" style="height:23px; color:green;size: 5px;font-weight: bold" onkeyup="return checkcrossscript(this.id)">
<input type="button" class="btn btn-primary btn-xs"  style="margin: 3px 10px 0 0;" value="search" onclick="meeseavalloc();" />
      
    </div>
    <div id="menu1" class="tab-pane fade">
      
      <font color="green" size="3" style=" font-weight: bold;">Application Search:</font><input type="text" name="meesevaappid" size="20" id="meesevaappidinsearch" value=WAP0507034A0196 class="formtext" style="height:23px; color:green;size: 5px;font-weight: bold" onkeyup="return checkcrossscript(this.id)">
<input type="button" class="btn btn-primary btn-xs"  style="margin: 3px 10px 0 0;" value="search" onclick="meesevasearch();" />
      
       </div>
    <div id="menu2" class="tab-pane fade">
      
      
<font color="green" size="3" style=" font-weight: bold;">DKR SEARCH:</font><input type="text" name="rcnumber" size="20" id="rcnumber" value=WAP0507034A0196 class="formtext" style="height:23px; color:green;size: 5px;font-weight: bold" onkeyup="return checkcrossscript(this.id)">
<input type="button" class="btn btn-primary btn-xs"  style="margin: 3px 10px 0 0;" value="search" onclick="allotement();" />
      
      
          </div>
    
  </div>
</div>


<table>
<tr>
<td></td></tr>
</table>
<!-- <div align="LEFT"><font color="red" size="2" type="Verdana">
	<span style="display: none;" ></span></font></div>
	
<div align="center" class="smallheadings bold"><span >FORM D1</span></div>

<div align="left" class="smallheadings bold">

<font color="green" size="2">Transaction History:</font><input type="text" name="rationcard" size="20" id="rationcardHist" placeholder="Enter Ration card" class="formtext" style="height:23px; color:green;size: 5px;font-weight: bold">
<input type="button" class="btn btn-primary btn-xs" style="margin: 3px 10px 0 0;" value="search" onclick="meeseavalloc();" />

<font color="green" size="2">Application Search:</font><input type="text" name="meesevaappid" size="20" id="meesevaappidinsearch" placeholder="Enter Ration card" class="formtext" style="height:23px; color:green;size: 5px;font-weight: bold">
<input type="button" class="btn btn-primary btn-xs" style="margin: 3px 10px 0 0;" value="search" onclick="meesevasearch();" />


<font color="green" size="2">Know Your Allotment:</font><input type="text" name="rcnumber" size="20" id="rcnumber" placeholder="Enter Ration card" class="formtext" style="height:23px; color:green;size: 5px;font-weight: bold">
<input type="button" class="btn btn-primary btn-xs" style="margin: 3px 10px 0 0;" value="search" onclick="allotement();" />


</div> -->
<div id="historydiv"></div>

<table>
<tr>
<td></td></tr>
</table>

<div id="diaplaydatmeeseva"></div>

<table>
<tr>
<td></td></tr>
</table>

<div id="historydivkey"></div>


<h1>RATION CARD SEARCH</h1><BR>

	<div id="principal">
	<div id="RationDataDiv" style="border-radius:0px">

	<table align="center" border="0" cellpadding="4" cellspacing="1px"
		class="tableLayout" id="allocationtable" style="border-radius:0px;border-color: red" >
		<TR>
			<TD>
			<table>
				
				<tr>
					
					<TD class="formtext" align="left">Ration Card No</TD>
					<TD align="left"  class="formtext"><span>WAP0507034A0196</span></TD>
					<TD class="formtext" align="left"> Card Type</TD>
					<TD align="left" ><span class="formtextBold">WHITE</span></TD>
					<TD class="formtext"  align="left">NFSA Type &nbsp; <b style="color:black">NFSA</b></TD> 
					
					
			
				</tr>
				<tr>
					
					<TD class="formtext"  align="left">Card Status</td>
					
					
					<TD align="left" ><span class="formtextBold">Active </span></TD>
					
				</tr>
				<tr style="border-radius:0px">
					
					<td colspan="7" align="center" id="familyphoto" style="border-radius:0px">
					
					<img  style="border-radius:0px" height="250" width="250" id="familyphoto" src="data:image/jpg;base64,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 "/>
					
					
					</td>
				</tr>
				<TR>
					
						
						<TD class="formtext" width="30%" align="left">Office</TD>
					<TD align="left" width="20%" class="formtext" id="officename"><span
						class="formtextBold" >Jangareddigudem</span></TD>
					<TD width="10%"></TD>
					<TD class="formtext" width="20%" align="left">Shop No</TD>
					<TD align="left" width="20%"><span class="formtextBold" id="shopno">0507034</span></TD>
				</TR>
				
				
				<!-- <TR>
				<TD align="center">Mobile No:</TD>
				<TD><input type="text" name="mobile" id="mobile_no"/></TD>
				<TD align="center">OTP</TD>
				<TD><input type="text" name="otp" id="otpno"/></TD>
				</TR> -->
				<!-- <TR>class="trhead bold"
					<TD class="formtext" width="20%" align="left"><span
						 wicket:id="bpllabel" /></TD>
					<TD align="left" width="20%"><span class="formtextBold"
						wicket:id="bplfamilyid" /></TD>
				</TR>-->

				<tr class="trhead bold" style="border-radius:0px">
					<td colspan="12" align="left" style="border-radius:0px">Personal Details</td>
				</TR>

				<TR>
					<TD class="formtext" align="left">Name of Head Of Family(LL)</TD>
					<TD align="left" class="formtext"><span class="formtextBold" id="hodfamilll">Neetangi Devadasu</span></TD>
					<TD width="1%"></TD>
					<TD class="formtext" ALIGN="left">Name of Head Of Family</TD>
					<TD align="left"><span class="formtextBold" id="hodfamileng">Neetangi Devadasu</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">Mother's Name(LL)</TD>

					<TD align="left" class="formtextBold"><span class="formtext" id="motherll">NA</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Mother's Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="mothernameeng">NA</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">Father's Name(LL)</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="fatherll">Kamaiah</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Father's Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="fathereng">Kamaiah</span></TD>
				</TR>

	
				
				
				<tr class="trhead bold" style="border-radius:0px">
					<td colspan="12" align="left" style="border-radius:0px">Present Address</td>
				</tr>
				<TR>
					<TD class="formtext" align="left">House No/House Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="hono">
					
					*****</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Landmark/Locality/Colony</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="landmark">
					*****</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">Village/Town</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="village">Jangareddigudem</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Mandal</TD>
					
				<TD align="left" class="formtextBold"><span class="formtext" id="town">Jangareddigudem</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">District</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="dist">West Godavari</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">State Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="state">AP</span></TD>
				</TR>
				<tr>
					<TD class="formtext" align="left">PIN</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="pin">500000</span></TD>
				</TR>

				<tr class="trhead bold">
					<td colspan="12" align="left" style="border-radius:0px">Permanent Address</td>
				</tr>
				<TR>
				
				
				
				
					<TD class="formtext" align="left">House No/House Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="phono" >*****</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Landmark/Locality/Colony</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="planmark">*****</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">Village/Town</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="pvillage">Jangareddigudem</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Mandal</TD>
					
					<TD align="left" class="formtextBold"><span class="formtext" id="town">Jangareddigudem</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">District</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="pdist">West Godavari</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">State Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="pstate">AP</span></TD>
				</TR>

				<tr>
					<TD class="formtext" align="left">PIN</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="ppin">500000</span></TD>
				</TR>

				<tr class="trhead bold">
					<td colspan="12" align="left" style="border-radius:0px">Professional Details</td>
				</tr>
				<TR>
					<TD class="formtext" align="left">Occupation</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="occupation">LABOUR/Cooli/Porter/Hand Cart Puller</span></TD>
					<TD></TD>
					
					
					<TD class="formtext" align="left">Total Annual Income</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="income">*****</span></TD>
				</TR>

				<tr class="trhead bold" style="border-radius:0px">
					<td colspan="12" align="left" style="border-radius:0px">Gas Connection Details</td>
				</tr>
				<TR>
					<TD class="formtext" align="left">No of Cylinder</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="cylindercount">1</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Gas Company Name</TD>
					
				
				<TD align="left" class="formtextBold"><span class="formtext" id="gascompaname">NA</span></TD>
				</TR>

				<TR>
					<TD class="formtext" align="left">Gas Agency Name</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="gasagennane">NA</span></TD>
					<TD></TD>
					<TD class="formtext" align="left">Consumer No</TD>
					<TD align="left" class="formtextBold"><span class="formtext" id="consumno">NA</span></TD>
				</TR>
			</table>
			</td>
		</tr>
	</table>
	</DIV>
	<div id="RationDataDiv" style="border-radius:0px">

	<table align="center" cellpadding="4" cellspacing="1px"
		class="tableLayout" id="allocationtable" style="border-radius:0px;border-color: red">

		<tr>
			<td>
			<table border="1" cellpadding="4" cellspacing="1px"
				class="tableLayout" id="displaydata" style="border-radius:0px;border-color: black;line-height: 0.99em"">
				
				<TR class="trhead bold" style="FONT-FAMILY: verdana;BACKGROUND:#A9D0F5;HEIGHT: 20px;COLOR: #111111;FONT-SIZE: 11px;" >


					
					<td align="center" style="border-radius:0px">Name(Including Head of Family)</td>
					<td align="center" style="border-radius:0px">Gender</td>
					<td align="center" style="border-radius:0px">Age</td>
					<td align="center" style="border-radius:0px">UID</td>
					
					
					
					<td align="center" style="border-radius:0px">Status</td>
					<td align="center" style="border-radius:0px">Date of Birth(DD/MM/YYYY)</td>
					<td align="center" style="border-radius:0px">Mother's Name</td>
					<td align="center" style="border-radius:0px">Father's Name</td>
					<td align="center" style="border-radius:0px">Spouse Name</td>
					<td align="center" style="border-radius:0px">Relationship With Head</td>
					<td align="center">Rejected(Remarks)</td>

				</TR>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					<TR  class="rowEven" >


					<TD class="formtext"  align="left">NEETANGI DEVADASU</TD>
					<TD class="formtext"  align="left">FEMALE</TD>
					<TD class="formtext"  align="center">*****</TD>
					<TD class="formtext"  align="center">********</TD>
			        <TD class="formtext" align="center"  >R</TD>
			        <TD class="formtext" align="center" >*****</TD>
					<TD class="formtext"  align="left">*****</TD>
					<TD class="formtext" align="left">*****</TD>
					<TD class="formtext"  align="left">NA</TD>
					<TD class="formtext" align="left">SELF</TD>
					
					
					<TD class="formtext" align="left">
					  
					Death Case from PSS 2018-08-21
					</TD>
					
				</TR>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					<TR  class="rowEven" >


					<TD class="formtext"  align="left">NEETANGI NIRMALAKUMARI</TD>
					<TD class="formtext"  align="left">FEMALE</TD>
					<TD class="formtext"  align="center">*****</TD>
					<TD class="formtext"  align="center">********</TD>
			        <TD class="formtext" align="center"  >A</TD>
			        <TD class="formtext" align="center" >*****</TD>
					<TD class="formtext"  align="left">*****</TD>
					<TD class="formtext" align="left">*****</TD>
					<TD class="formtext"  align="left">NA</TD>
					<TD class="formtext" align="left">WIFE</TD>
					
					
					<TD class="formtext" align="left">
					  
					NA
					</TD>
					
				</TR>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					<TR  class="rowEven" >


					<TD class="formtext"  align="left">NEETANGI JYOTHI</TD>
					<TD class="formtext"  align="left">FEMALE</TD>
					<TD class="formtext"  align="center">*****</TD>
					<TD class="formtext"  align="center">********</TD>
			        <TD class="formtext" align="center"  >R</TD>
			        <TD class="formtext" align="center" >NA</TD>
					<TD class="formtext"  align="left">*****</TD>
					<TD class="formtext" align="left">*****</TD>
					<TD class="formtext"  align="left">NA</TD>
					<TD class="formtext" align="left">DAUGHTER</TD>
					
					
					<TD class="formtext" align="left">
					  
					NA
					</TD>
					
				</TR>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					<TR  class="rowEven" >


					<TD class="formtext"  align="left">NEETANGI LUDHIYA</TD>
					<TD class="formtext"  align="left">FEMALE</TD>
					<TD class="formtext"  align="center">*****</TD>
					<TD class="formtext"  align="center">********</TD>
			        <TD class="formtext" align="center"  >R</TD>
			        <TD class="formtext" align="center" >NA</TD>
					<TD class="formtext"  align="left">*****</TD>
					<TD class="formtext" align="left">*****</TD>
					<TD class="formtext"  align="left">NA</TD>
					<TD class="formtext" align="left">DAUGHTER</TD>
					
					
					<TD class="formtext" align="left">
					  
					NA
					</TD>
					
				</TR>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					<TR  class="rowEven" >


					<TD class="formtext"  align="left">NEETANGI SWATHI</TD>
					<TD class="formtext"  align="left">FEMALE</TD>
					<TD class="formtext"  align="center">*****</TD>
					<TD class="formtext"  align="center">********</TD>
			        <TD class="formtext" align="center"  >A</TD>
			        <TD class="formtext" align="center" >*****</TD>
					<TD class="formtext"  align="left">*****</TD>
					<TD class="formtext" align="left">*****</TD>
					<TD class="formtext"  align="left">NA</TD>
					<TD class="formtext" align="left">DAUGHTER</TD>
					
					
					<TD class="formtext" align="left">
					  
					NA
					</TD>
					
				</TR>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					<TR  class="rowEven" >


					<TD class="formtext"  align="left">NEETANGI RAJESH</TD>
					<TD class="formtext"  align="left">MALE</TD>
					<TD class="formtext"  align="center">*****</TD>
					<TD class="formtext"  align="center">********</TD>
			        <TD class="formtext" align="center"  >A</TD>
			        <TD class="formtext" align="center" >*****</TD>
					<TD class="formtext"  align="left">*****</TD>
					<TD class="formtext" align="left">*****</TD>
					<TD class="formtext"  align="left">NA</TD>
					<TD class="formtext" align="left">SON</TD>
					
					
					<TD class="formtext" align="left">
					  
					NA
					</TD>
					
				</TR>
				
				
				
			</TABLE>
			
			
		</tr>
	</table>
	</DIV>

	
	</div>
	<div style="background-color:DarkSlateGray">
<center> <strong><font style="color: orange" size="4">NOTE*:-- Due to Security Reasons Some Information is Masked.</font></strong></center>
	
	</div>
	<br><br>
	
	<div>

	
	</div>
	
	
   
	
</body>
</html>