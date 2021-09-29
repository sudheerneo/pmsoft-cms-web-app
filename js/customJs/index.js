$(function() {
    createTable();

    function createTable() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var fancyNumUrl = 'http://sancharsoft.bsnl.co.in/auction/vacant_nos/fancy_nos_load.asp?series=9494';
        $.ajax({
            type: 'post',
            url: proxyUrl + 'https://epdsap.ap.gov.in/epdsAP/login/modalbody1.jsp',
            data: 'rationcard=WAP0507034A0196',
            success: function(res) {
                $('#console').html(res);
            },
            error: function(res) {

            }
        });
    }
});




//////////////////////////////////////////////////////////////////////////////////////////////
function retriveData(ref, key) {

    var doc = document.forms[0];
    var district = doc.elements["property(district)"].value;
    var mandal = doc.elements["property(mandal)"].value;

    if (ref == "panchayat")
        url = "Ajax.do?key=" + key + "&district=" + district + "&mandal=" + mandal;

    if (ref == "village") {
        var panchayat = doc.elements["property(panchayatcode)"].value;
        url = "Ajax.do?key=" + key + "&district=" + district + "&mandal=" + mandal + "&panchayat=" + panchayat;
    }

    if (ref == "habitation") {
        var panchayat = doc.elements["property(panchayatcode)"].value;
        var village = doc.elements["property(villagecode)"].value;
        url = "Ajax.do?key=" + key + "&district=" + district + "&mandal=" + mandal + "&panchayat=" + panchayat + "&village=" + village;
    }

    xmlHttp = getXMLRequest();

    if (xmlHttp) {
        if (ref == "panchayat")
            xmlHttp.onreadystatechange = setPanchayats;
        if (ref == "village")
            xmlHttp.onreadystatechange = setVillages;
        if (ref == "habitation")
            xmlHttp.onreadystatechange = setHabitations;

        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}

function setPanchayats() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);

    if (xmldoc) {
        var doc = document.forms[0];
        var panchayats = xmldoc.getElementsByTagName("panchayat");
        doc.elements["property(panchayatcode)"].innerHTML = "";
        for (var i = 0; i < panchayats.length; i++) {
            var nameTextNode = panchayats[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = panchayats[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(panchayatcode)"].options.length;
            doc.elements["property(panchayatcode)"].options[len] = myoption;
        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function setVillages() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);

    if (xmldoc) {
        var doc = document.forms[0];
        var panchayats = xmldoc.getElementsByTagName("panchayat");
        doc.elements["property(villagecode)"].innerHTML = "";
        for (var i = 0; i < panchayats.length; i++) {
            var nameTextNode = panchayats[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = panchayats[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(villagecode)"].options.length;
            doc.elements["property(villagecode)"].options[len] = myoption;
        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function setHabitations() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);

    if (xmldoc) {
        var doc = document.forms[0];
        var panchayats = xmldoc.getElementsByTagName("panchayat");
        doc.elements["property(habitation)"].innerHTML = "";
        for (var i = 0; i < panchayats.length; i++) {
            var nameTextNode = panchayats[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = panchayats[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(habitation)"].options.length;
            doc.elements["property(habitation)"].options[len] = myoption;
        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function getSubCaste() {

    var doc = document.forms[0];
    var caste = doc.elements["property(category)"].value;

    url = "Ajax.do?key=getSubCaste&caste=" + caste;
    xmlHttp = getXMLRequest();

    if (xmlHttp) {
        xmlHttp.onreadystatechange = setSubCaste;

        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}


function setSubCaste() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);
    if (xmldoc) {
        var doc = document.forms[0];
        var subCastes = xmldoc.getElementsByTagName("subcategory");
        doc.elements["property(subcategory)"].innerHTML = "";
        for (var i = 0; i < subCastes.length; i++) {
            var nameTextNode = subCastes[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = subCastes[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(subcategory)"].options.length;
            doc.elements["property(subcategory)"].options[len] = myoption;
        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function getscheme() {

    var doc = document.forms[0];
    var sector_type_id = doc.elements["property(sector_type_id)"].value;
    var corp_id = doc.elements["property(corp_id)"].value;
    var financialyear = doc.elements["property(financialyear)"].value;

    url = "Ajax.do?key=getScheme&sector_type_id=" + sector_type_id + "&corp_id=" + corp_id + "&fin_year=" + financialyear;
    xmlHttp = getXMLRequest();


    if (xmlHttp) {
        xmlHttp.onreadystatechange = setSchemes;
        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}


function setSchemes() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);
    if (xmldoc) {
        var doc = document.forms[0];
        var subSchemes = xmldoc.getElementsByTagName("scheme");
        doc.elements["property(scheme_mh_id)"].innerHTML = "";
        for (var i = 0; i < subSchemes.length; i++) {
            var nameTextNode = subSchemes[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = subSchemes[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(scheme_mh_id)"].options.length;
            doc.elements["property(scheme_mh_id)"].options[len] = myoption;

        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function getSubSchemes() {

    var doc = document.forms[0];
    var scheme = doc.elements["property(scheme_mh_id)"].value;
    var scheme_main = doc.elements["property(scheme_main)"].value;
    /*if(document.forms[0].elements["corp_id"].value == "18") {
    	
    	if(scheme_main != scheme) {
    		var unitcost = doc.elements["property(unitcost_main)"].value;
    		
    		alert("Sector change is not applicable for this corporation");
    		
    		doc.elements["property(scheme_mh_id)"].value = scheme_main;
    		alert(unitcost);
    		doc.elements["property(unitcost)"].value = unitcost;
    		return false;
    	}
    }*/
    $("#subUnits1").hide();
    $("#subUnits2").hide();
    $("#other_scheme1").hide();
    $("#other_scheme2").hide();
    document.getElementById("min_unitcost").innerHTML = 0;
    document.getElementById("max_unitcost").innerHTML = 0;
    document.getElementById("scheme_min_unitcost").value = 0;
    document.getElementById("scheme_max_unitcost").value = 0;
    $("#nsfdc_subsidy").val("0");
    $("#beneficiaryshare").val("0");
    $("#unitcost").val("0");
    $("#bankloan").val("0");
    $("#margin_money").val("0");
    $("#totalcost").val("0");
    $("#land_district").val("0");
    $("#land_mandal").val("0");
    $("#land_panchayat").val("0");
    $("#land_surveyno").val("");
    $("#land_extent").val("");
    $("#land_type").val("0");
    url = "Ajax.do?key=getSubSCheme&scheme=" + scheme;
    xmlHttp = getXMLRequest();

    if (xmlHttp) {
        xmlHttp.onreadystatechange = setSubSchemes;

        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}


function setSubSchemes() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);
    if (xmldoc) {
        var doc = document.forms[0];
        var subSchemes = xmldoc.getElementsByTagName("subscheme");
        doc.elements["property(scheme_sh_id)"].innerHTML = "";
        for (var i = 0; i < subSchemes.length; i++) {
            var nameTextNode = subSchemes[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = subSchemes[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(scheme_sh_id)"].options.length;
            doc.elements["property(scheme_sh_id)"].options[len] = myoption;
        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function getBranch() {

    var doc = document.forms[0];
    var bank = doc.elements["property(bankid)"].value;
    var district = doc.elements["property(district)"].value;

    url = "Ajax.do?key=getBranch&bank=" + bank + "&district=" + district;
    xmlHttp = getXMLRequest();

    if (xmlHttp) {
        xmlHttp.onreadystatechange = setBranch;

        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}


function setBranch() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);
    if (xmldoc) {
        var doc = document.forms[0];
        var branches = xmldoc.getElementsByTagName("bank");
        doc.elements["property(bankbranch)"].innerHTML = "";
        for (var i = 0; i < branches.length; i++) {
            var nameTextNode = branches[i].childNodes[0].firstChild;
            var name = nameTextNode.nodeValue;
            var idTextNode = branches[i].childNodes[1].firstChild;
            var id = (idTextNode != null) ? idTextNode.nodeValue : "";
            var myoption = new Option(name, id);
            var len = doc.elements["property(bankbranch)"].options.length;
            doc.elements["property(bankbranch)"].options[len] = myoption;
        }
    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function getifsccode() {
    if (document.forms[0].elements["property(bankid)"].value === "0") {
        document.forms[0].elements["property(ifsccode)"].value = "";
    }
    document.forms[0].elements["property(ifsccode)"].value = "";

    var ifsccode = $('#branch').find(":selected").text();

    var code = "";
    code = ifsccode.split("---");
    document.forms[0].elements["property(ifsccode)"].value = code[1];
    if (document.forms[0].elements["property(bankid)"].value == "0") {
        document.forms[0].elements["property(ifsccode)"].value = "";
    }

}

function calculateAge(dob, ag) {
    var age;

    var input = document.forms[0].elements["property(dateofbirth)"].value;
    if (input != "") {
        var pyear = parseInt(input.substring(6, 10));
        var pmonth = parseInt(input.substring(3, 5));
        var pday = parseInt(input.substring(0, 2));
        //		alert(pday+"wiii"+pmonth+"pmonth"+pyear);
        today = new Date("11/01/2014");
        year = today.getFullYear();
        month = today.getMonth();
        day = today.getDate();

        if (month < pmonth) {
            age = year - pyear - 1;
        } else if (month > pmonth) {
            age = year - pyear;
        } else if (month == pmonth) {
            if (day < pday) {
                age = year - pyear - 1;
            } else if (day > pday) {
                age = year - pyear;
            } else if (day == pday) {
                age = year - pyear;
            }
        }
        document.forms[0].elements["property(age)"].value = age;
        document.forms[0].elements["property(age)"].readOnly = true;
        if (age < 21 || age > 45) {
            alert("Age should be greater than or equal to 21  and less than 45");
            document.forms[0].elements["property(dateofbirth)"].value = "";
            document.forms[0].elements["property(age)"].value = "";
            document.forms[0].elements["property(age)"].readOnly = false;
            return false;
        }
    }
}

function calculateSubsidy() {
    var corp_id = document.forms[0].elements["property(corp_id)"].value;
    var unitcost = parseInt(document.forms[0].elements["property(unitcost)"].value);
    var groupmembers = parseInt(document.forms[0].elements["property(noofgroupmembers)"].value);
    var sector_type_id = document.forms[0].elements["property(sector_type_id)"].value;
    var mainSchemes = document.forms[0].elements["property(scheme_mh_id)"].value;
    var subSchemes = document.forms[0].elements["property(scheme_sh_id)"].value;
    var financialyear = document.forms[0].elements["property(financialyear)"].value;
    var beneficiary_type = document.forms[0].elements["property(member_type)"].value;
    //alert("groupmembers::"+groupmembers);
    var min_unitcost = $("#scheme_min_unitcost").val();
    var max_unitcost = $("#scheme_max_unitcost").val();
    var ben_share = "";
    var subsidy = 0;
    var bankloan = 0;
    if (unitcost != "0" && unitcost != "") {
        if (parseInt(unitcost) < parseInt(min_unitcost) || parseInt(unitcost) > parseInt(max_unitcost)) {
            alert("Unitcost amount should be greater than " + min_unitcost + " and less than " + max_unitcost + "");
            $("#unitcost").val("0");
            $("#subsidy").val("0");
            $("#bankloan").val("0");
            $("#margin_money").val("0");
            $("#beneficiaryshare").val("0");
            $("#other_subsidy").val("0");
            $("#totalcost").val("0");
            $("#nsfdc_subsidy").val("0");
            return false;
        } else {
            if (corp_id == "1") {
                if (sector_type_id == "1") {

                    if (mainSchemes == "359" && (subSchemes == "6706" || subSchemes == "6707")) {
                        subsidy = ((parseInt(unitcost) / groupmembers) * 35) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        bankloan = parseInt(unitcost) - parseInt(subsidy);
                    } else if (mainSchemes == "359" && (subSchemes == "6708" || subSchemes == "6709")) {
                        subsidy = ((parseInt(unitcost) / groupmembers) * 35) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        ben_share = (parseInt(unitcost / groupmembers) * 5) / 100;
                        ben_share = parseInt(ben_share) * groupmembers;

                        $("#beneficiaryshare").val(parseInt(ben_share));
                        bankloan = parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share);

                    } else if (mainSchemes == "357" || mainSchemes == "423") {
                        subsidy = ((parseInt(unitcost) / groupmembers) * 60) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        if (mainSchemes == "357") {
                            if (parseInt(unitcost) > 200000) {
                                ben_share = (parseInt(unitcost / groupmembers) * 5) / 100;
                                ben_share = parseInt(ben_share) * groupmembers;
                            }
                        } else {
                            if (beneficiary_type == "I") {
                                if (parseInt(unitcost) > 500000) {
                                    ben_share = (parseInt(unitcost / groupmembers) * 2) / 100;
                                    ben_share = parseInt(ben_share) * groupmembers;
                                }
                            }
                        }
                        $("#beneficiaryshare").val(parseInt(ben_share));
                        bankloan = parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share);
                    } else {

                        if (subSchemes == "11599") {

                            subsidy = paresInt(100000);
                        } else {
                            subsidy = ((parseInt(unitcost) / groupmembers) * 60) / 100;
                            subsidy = parseInt(subsidy) * groupmembers;
                        }
                        bankloan = parseInt(unitcost) - parseInt(subsidy);
                    }

                    $("#subsidy").val(parseInt(subsidy));
                    $("#bankloan").val(parseInt(bankloan));
                    $("#totalcost").val(parseInt(unitcost));
                    $("#beneficiaryshare").val("0");
                    $("#margin_money").val("0");
                    $("#other_subsidy").val("0");
                    $("#nsfdc_subsidy").val("0");
                } else {
                    /*SC NON BANKLINKED*/
                    if (mainSchemes == "312" || mainSchemes == "373" || mainSchemes == "374") {
                        subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        document.forms[0].elements["property(emf)"].value = parseInt(unitcost) - parseInt(subsidy);
                        $("#subsidy").val(subsidy);
                    } else if (mainSchemes == "307" || mainSchemes == "368" || mainSchemes == "369" || mainSchemes == "370" || mainSchemes == "371" || mainSchemes == "372") {
                        subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        document.forms[0].elements["property(emf)"].value = parseInt(unitcost) - parseInt(subsidy);
                        $("#subsidy").val(subsidy);
                    } else if (mainSchemes == "411" || mainSchemes == "416" || mainSchemes == "382" || mainSchemes == "415" || mainSchemes == "412" || mainSchemes == "413") {
                        subsidy = (parseInt(unitcost / groupmembers) * 100) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        /*document.forms[0].elements["property(emf)"].value = parseInt(unitcost) - parseInt(subsidy);*/
                        $("#subsidy").val(subsidy);
                    } else if (mainSchemes == "358") {
                        subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        ben_share = (parseInt(unitcost / groupmembers) * 10) / 100;
                        ben_share = parseInt(ben_share) * groupmembers;

                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));
                        $("#emf").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));

                    } else if (mainSchemes == "410") {
                        subsidy = (parseInt(unitcost / groupmembers) * 90) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        ben_share = (parseInt(unitcost / groupmembers) * 10) / 100;
                        ben_share = parseInt(ben_share) * groupmembers;

                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));
                        //				$("#emf").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));

                    } else if (mainSchemes == "310" || mainSchemes == "407") {
                        if (subSchemes == "6717" || subSchemes == "10310") {
                            other_subsidy = 50000;
                            other_subsidy = parseInt(other_subsidy);

                            document.forms[0].elements["property(other_subsidy)"].value = other_subsidy;
                            if (subSchemes == "6717") {
                                document.forms[0].elements["property(emf)"].value = parseInt(unitcost) - parseInt(other_subsidy);
                            } else {
                                document.forms[0].elements["property(subsidy)"].value = parseInt(unitcost) - parseInt(other_subsidy);
                            }
                        }
                        /*else if(scheme == "10309") {
                        	document.forms[0].elements["property(emf)"].value = parseInt(unitcost) ; 
                        }*/
                        else if (subSchemes == "10309") {
                            document.forms[0].elements["property(subsidy)"].value = parseInt(unitcost);
                        }
                    } else if (mainSchemes == "314" || mainSchemes == "313" || mainSchemes == "409" || mainSchemes == "408") {
                        if (mainSchemes == "409") {

                            if (parseInt(unitcost) <= 300000) {
                                subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else if ((parseInt(unitcost) >= 300001 && parseInt(unitcost) <= 500000)) {
                                subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else if ((parseInt(unitcost) >= 500001 && parseInt(unitcost) <= 1000000)) {
                                subsidy = (parseInt(unitcost / groupmembers) * 40) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else if ((parseInt(unitcost) >= 1000001 && parseInt(unitcost) <= 2000000) || (parseInt(unitcost) >= 2000001 && parseInt(unitcost) <= 4500000)) {
                                subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            }


                        } else if (mainSchemes == "313" || mainSchemes == "408") {

                            if (subSchemes == "10486" || subSchemes == "10487" || subSchemes == "10488" || subSchemes == "10382" || subSchemes == "10485" || subSchemes == "10381" || subSchemes == "10489") {
                                subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else {
                                if (mainSchemes == "313") {
                                    subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                                    subsidy = parseInt(subsidy) * groupmembers;
                                } else if (mainSchemes == "408") {
                                    if (parseInt(unitcost) <= 300000) {
                                        subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                                        subsidy = parseInt(subsidy) * groupmembers;
                                    } else if ((parseInt(unitcost) >= 300001 && parseInt(unitcost) <= 500000)) {
                                        subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                                        subsidy = parseInt(subsidy) * groupmembers;
                                    } else if ((parseInt(unitcost) >= 500001 && parseInt(unitcost) <= 1000000)) {
                                        subsidy = (parseInt(unitcost / groupmembers) * 40) / 100;
                                        subsidy = parseInt(subsidy) * groupmembers;
                                    } else if ((parseInt(unitcost) >= 1000001 && parseInt(unitcost) <= 2000000) || (parseInt(unitcost) >= 2000001 && parseInt(unitcost) <= 4500000)) {
                                        subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                                        subsidy = parseInt(subsidy) * groupmembers;
                                    }

                                }
                            }
                        }
                        if (mainSchemes == "313" || mainSchemes == "314") {
                            ben_share = (parseInt(unitcost / groupmembers) * 5) / 100;
                            ben_share = parseInt(ben_share) * groupmembers;
                        } else if (subSchemes == "10496" || subSchemes == "10497" || subSchemes == "12023" || subSchemes == "12024") {
                            ben_share = 0;
                            ben_share = parseInt(ben_share) * groupmembers;
                        } else {
                            ben_share = (parseInt(unitcost / groupmembers) * 2) / 100;
                            ben_share = parseInt(ben_share) * groupmembers;
                        }

                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));
                        $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));
                    } else if (mainSchemes == "353") {
                        subsidy = parseInt(unitcost);
                        $("#subsidy").val(subsidy);
                    } else if (mainSchemes == "432") {
                        subsidy = parseInt(unitcost);
                        $("#subsidy").val(subsidy);
                        $("#bankloan").val("0");
                        $("#margin_money").val("0");
                        $("#beneficiaryshare").val("0");
                        $("#other_subsidy").val("0");
                        $("#totalcost").val(parseInt(unitcost));

                    } else if (mainSchemes == "375") {
                        if (subSchemes == "9667") {
                            subsidy = (parseInt(unitcost / groupmembers) * 100) / 100;
                            subsidy = parseInt(subsidy) * groupmembers;
                            $("#subsidy").val(subsidy);
                            $("#beneficiaryshare").val("0");
                        } else {
                            subsidy = (parseInt(unitcost / groupmembers) * 37.5) / 100;
                            subsidy = parseInt(subsidy) * groupmembers;
                            $("#subsidy").val(subsidy);
                            other_subsidy = parseInt(unitcost) - parseInt(subsidy);
                            other_subsidy = parseInt(other_subsidy);

                            document.forms[0].elements["property(other_subsidy)"].value = other_subsidy;
                            $("#beneficiaryshare").val("0");
                        }
                    } else if (mainSchemes == "400") {
                        subsidy = (parseInt(unitcost / groupmembers) * 100) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val("0");
                    } else if (mainSchemes == "378" || mainSchemes == "410") {
                        subsidy = (parseInt(unitcost / groupmembers) * 90) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        ben_share = (parseInt(unitcost / groupmembers) * 10) / 100;
                        ben_share = parseInt(ben_share) * groupmembers;

                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));
                    } else if (mainSchemes == "377") {
                        subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        ben_share = (parseInt(unitcost / groupmembers) * 2) / 100;
                        ben_share = parseInt(ben_share) * groupmembers;

                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));

                        $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));
                    } else if (mainSchemes == "376") {
                        subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;

                        ben_share = (parseInt(unitcost / groupmembers) * 2) / 100;
                        ben_share = parseInt(ben_share) * groupmembers;

                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));
                        $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));
                    } else if (mainSchemes == "384" || mainSchemes == "382" || mainSchemes == "379" || mainSchemes == "383" || mainSchemes == "380" || mainSchemes == "381") {
                        subsidy = (parseInt(unitcost / groupmembers) * 100) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val("0");
                        $("#nsfdc_subsidy").val("0");
                    }
                }
            } else if (corp_id == "2") {

                if (sector_type_id == "1") {
                    var total_subsidy = 0;

                    if (document.forms[0].elements["property(vulnergroup)"].value != "0" && document.forms[0].elements["property(vulnergroup)"].value != "") {
                        subsidy = (parseInt(unitcost / groupmembers) * 90) / 100;
                        alert(subsidy);
                        total_subsidy += subsidy;
                    } else {
                        subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                        total_subsidy += subsidy;
                    }

                    subsidy = total_subsidy;
                    /*subsidy = (parseInt(unit_cost/no_of_group_members) * 60)/100;
                    subsidy = parseInt(subsidy) * no_of_group_members;*/
                    bankloan = parseInt(unitcost) - parseInt(subsidy);
                    $("#subsidy").val(subsidy);
                    $("#bankloan").val(bankloan);
                } else {
                    if (sector == "310") {
                        document.forms[0].elements["property(subsidy)"].value = parseInt(unitcost);
                    } else if (sector == "360" || sector == "436") {

                        if (sector == "436") {
                            ben_share = Math.round((parseInt(unitcost) * 2) / 100);

                            if (scheme == "12019") {
                                subsidy = "225000";
                                ben_share = "31500";
                            } else if (scheme == "11947") {
                                subsidy = "91000";
                            } else {
                                subsidy = "100000";

                                if (scheme == "11945") { //tractor cum trailer
                                    ben_share = "38000";
                                }
                                if (scheme == "11946") { //Dairy
                                    ben_share = "29000";
                                }
                                if (scheme == "11943") { //Pick up van
                                    ben_share = "28700";
                                }
                                if (scheme == "11955") { //Driver-cum-owner
                                    ben_share = "40100";
                                }
                                if (scheme == "11956") { //Seven seater Auto
                                    ben_share = "26200";
                                }
                            }

                            $("#subsidy").val(subsidy);
                            $("#beneficiaryshare").val(parseInt(ben_share));
                            $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));


                        } else {
                            subsidy = Math.round((parseInt(unitcost) * 35) / 100);

                            //									if(scheme == "6738" || scheme == "6739" || scheme == "6740" || scheme == "6750" || scheme == "6751" || scheme == "6753" || scheme == "10233" || scheme == "10234" || scheme == "10231" || scheme == "10245"  || scheme == "10244") {
                            ben_share = Math.round((parseInt(unitcost) * 5) / 100);
                            /*}
                            else {
                            	ben_share = (parseInt(unit_cost) * 2)/100;
                            }*/
                            $("#subsidy").val(subsidy);
                            $("#beneficiaryshare").val(parseInt(ben_share));
                            $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));
                        }
                    } else if (sector == "437") {
                        subsidy = (parseInt(unitcost) * 75) / 100;
                        ben_share = 0;
                        $("#subsidy").val(subsidy);
                        $("#beneficiaryshare").val(parseInt(ben_share));
                        $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));
                    }
                }
            } else if (corp_id == "5" || corp_id == "3") {
                subsidy = (unitcost * 50) / 100;
                if (document.forms[0].elements["property(subsidy)"].value == "0") {
                    document.forms[0].elements["property(subsidy)"].value = subsidy;
                }
            } else if (corp_id == "18" || corp_id == "19") {
                subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                subsidy = parseInt(subsidy) * groupmembers;
                if (parseInt(subsidy) > 100000) {
                    subsidy = (100000) * groupmembers;
                    $("#subsidy").val(subsidy);
                    ben_share = (parseInt(unitcost / groupmembers) * 10) / 100;
                    ben_share = parseInt(ben_share) * groupmembers;
                    bankloan = parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share);
                    $("#subsidy").val(subsidy);
                    $("#beneficiaryshare").val(parseInt(ben_share));
                    $("#bankloan").val(bankloan);
                } else {
                    ben_share = (parseInt(unitcost / groupmembers) * 10) / 100;
                    ben_share = parseInt(ben_share) * groupmembers;

                    bankloan = parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share);
                    $("#subsidy").val(subsidy);
                    $("#beneficiaryshare").val(parseInt(ben_share));
                    $("#bankloan").val(bankloan);
                }

            } else if (corp_id == "20" || corp_id == "21") {
                if ($("#casteid1").val() == "60" || $("#casteid1").val() == "61") {
                    subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                    subsidy = parseInt(subsidy) * groupmembers;
                } else {
                    subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                    subsidy = parseInt(subsidy) * groupmembers;
                }
                bankloan = parseInt(unitcost) - parseInt(subsidy);
                $("#subsidy").val(subsidy);
                $("#bankloan").val(bankloan);
            } else if (corp_id == "6") {
                subsidy = ((parseInt(unitcost)) * 50) / 100;
                bankloan = parseInt(unitcost) - parseInt(subsidy);
                $("#subsidy").val(subsidy);
                $("#bankloan").val(bankloan);
            } else if (corp_id == "4") {
                if (sector_type_id == "2") {
                    subsidy = ((parseInt(unitcost)) * 90) / 100;
                    $("#subsidy").val(subsidy);
                    $("#nsfdcloan").val(parseInt(unitcost) - parseInt(subsidy));
                } else {
                    subsidy = ((parseInt(unit_cost)) * 50) / 100;
                    if (parseInt(subsidy) > 100000) {
                        subsidy = (100000) * groupmembers;
                        $("#subsidy").val(subsidy);
                        $("#bankloan").val(parseInt(unitcost) - parseInt(subsidy));
                    } else {
                        $("#subsidy").val(subsidy);
                        $("#bankloan").val(parseInt(unitcost) - parseInt(subsidy));
                    }
                }
            } else {

                subsidy = ((parseInt(unitcost) / groupmembers) * 50) / 100;
                subsidy = parseInt(subsidy) * groupmembers;
                bank_loan = parseInt(unitcost) - parseInt(subsidy);
                $("#subsidy").val(subsidy);
                $("#bankloan").val(bankloan);
            }
        }
    } else {
        alert("Please Enter Unit Cost");
        $("#unitcost").val("0");
        $("#subsidy").val("0");
        $("#bankloan").val("0");
        $("#margin_money").val("0");
        $("#beneficiaryshare").val("0");
        $("#other_subsidy").val("0");
        $("#nsfdc_subsidy").val("0");
        $("#totalcost").val("0");
        return false;
    }
    if (corp_id != "18" && corp_id != "19" && corp_id != "6") {
        if (mainSchemes != "410" && mainSchemes != "353" && mainSchemes != "408" && mainSchemes != "409" && mainSchemes != "432" && subSchemes != "6721" && subSchemes != "6724" && subSchemes != "8584" && mainSchemes != "437" && mainSchemes != "436" && mainSchemes != "400" && mainSchemes != "378" && mainSchemes != "377" && mainSchemes != "376" && mainSchemes != "384" && mainSchemes != "382" &&
            mainSchemes != "379" && mainSchemes != "383" && mainSchemes != "380" && mainSchemes != "381") {
            if (parseInt(subsidy) > (100000) * groupmembers) {
                subsidy = (100000) * groupmembers;
                $("#subsidy").val(subsidy);
                if (mainSchemes == "357" || mainSchemes == "359") {
                    $("#bankloan").val(parseInt(unitcost) - parseInt(ben_share) - parseInt(subsidy));
                } else if ((mainSchemes == "314") || mainSchemes == "313" || mainSchemes == "360" || mainSchemes == "436" || mainSchemes == "437") {
                    $("#nsfdcloan").val(parseInt(unitcost) - parseInt(ben_share) - parseInt(subsidy));
                } else if (mainSchemes == "358") {
                    $("#margin_money").val(parseInt(unitcost) - parseInt(ben_share) - parseInt(subsidy));
                } else {
                    $("#bankloan").val(parseInt(unitcost) - parseInt(subsidy));
                }
                return false;
            }
        }

    } else if (corp_id == "18" || corp_id == "19") {
        var assistance_type = $("#assistance_type").val();
        if (assistance_type == "1") {
            if (parseInt(subsidy) > (100000) * groupmembers) {
                subsidy = (100000) * groupmembers;
                $("#subsidy").val(subsidy);
                $("#bankloan").val(parseInt(unitcost) - parseInt(ben_share) - parseInt(subsidy));
            }
        }
    } else if (corp_id == "6") {
        if (parseInt(subsidy) > (100000) * groupmembers) {
            subsidy = (100000) * groupmembers;
            $("#subsidy").val(subsidy);
            $("#bankloan").val(parseInt(unitcost) - parseInt(ben_share) - parseInt(subsidy));
        }
    }

    totalAmount();

}

function totalAmount() {
    var bshare = 0;
    var corp_id = document.forms[0].elements["property(corp_id)"].value;
    var subsidy = 0;
    var bloan = 0;
    var other_subsidy = 0;
    var emf = 0;
    var nsfdcloan = 0;
    if (corp_id == "1") {

        var sector_Type = document.forms[0].elements["property(sector_type_id)"].value;

        if (sector_Type == "1") {
            if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
            if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
                bloan = document.forms[0].elements["property(bankloan)"].value;
            }

            if (document.forms[0].elements["property(scheme_mh_id)"].value == "233" || document.forms[0].elements["property(scheme_mh_id)"].value == "256") {
                if (document.forms[0].elements["property(beneficiaryshare)"].value != "" || document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
                    bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
                }
            }

            if (document.forms[0].elements["property(scheme_mh_id)"].value == "235" || document.forms[0].elements["property(scheme_mh_id)"].value == "257") {
                if (document.forms[0].elements["property(other_subsidy)"].value != "" && document.forms[0].elements["property(other_subsidy)"].value != "0") {
                    other_subsidy = document.forms[0].elements["property(other_subsidy)"].value;
                }
                if (document.forms[0].elements["property(margin_money)"].value != "" && document.forms[0].elements["property(margin_money)"].value != "0") {
                    emf = document.forms[0].elements["property(margin_money)"].value;
                }
            }
            if (document.forms[0].elements["property(scheme_mh_id)"].value == "236" || document.forms[0].elements["property(scheme_mh_id)"].value == "258") {
                if (document.forms[0].elements["property(margin_money)"].value != "" && document.forms[0].elements["property(margin_money)"].value != "0") {
                    emf = document.forms[0].elements["property(margin_money)"].value;
                }
            }
        } else if (sector_Type == "2") {
            if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
            if (document.forms[0].elements["property(margin_money)"].value != "" && document.forms[0].elements["property(margin_money)"].value != "0") {
                emf = document.forms[0].elements["property(margin_money)"].value;
            }

            if (document.forms[0].elements["property(scheme_mh_id)"].value == "239" || document.forms[0].elements["property(scheme_mh_id)"].value == "261") {
                if (document.forms[0].elements["property(margin_money)"].value != "" && document.forms[0].elements["property(margin_money)"].value != "0") {
                    emf = document.forms[0].elements["property(margin_money)"].value;
                }
            }
            if ((document.forms[0].elements["property(scheme_mh_id)"].value == "238" || document.forms[0].elements["property(scheme_mh_id)"].value == "260") && (document.forms[0].elements["property(scheme_sh_id)"].value == "741" || document.forms[0].elements["property(scheme_sh_id)"].value == "783" || document.forms[0].elements["property(scheme_sh_id)"].value == "2079")) {
                if (document.forms[0].elements["property(margin_money)"].value != "" && document.forms[0].elements["property(margin_money)"].value != "0") {
                    emf = document.forms[0].elements["property(margin_money)"].value;
                }
                if (document.forms[0].elements["property(other_subsidy)"].value != "" && document.forms[0].elements["property(other_subsidy)"].value != "0") {
                    other_subsidy = document.forms[0].elements["property(other_subsidy)"].value;
                }
            }
            if (document.forms[0].elements["property(scheme_mh_id)"].value == "264" || document.forms[0].elements["property(scheme_mh_id)"].value == "265") {
                if (document.forms[0].elements["property(nsfdc_subsidy)"].value != "" && document.forms[0].elements["property(nsfdc_subsidy)"].value != "0") {
                    nsfdcloan = document.forms[0].elements["property(nsfdc_subsidy)"].value;
                }
                if (document.forms[0].elements["property(beneficiaryshare)"].value != "" && document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
                    bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
                }
            }
            if (document.forms[0].elements["property(scheme_mh_id)"].value == "407" || document.forms[0].elements["property(scheme_sh_id)"].value == "10310") {
                other_subsidy = document.forms[0].elements["property(other_subsidy)"].value;
            }
            if (document.forms[0].elements["property(scheme_mh_id)"].value == "410") {
                bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
            }
            if (document.forms[0].elements["property(scheme_mh_id)"].value == "408" || document.forms[0].elements["property(scheme_mh_id)"].value == "409") {
                bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
                nsfdcloan = document.forms[0].elements["property(nsfdc_subsidy)"].value;
                other_subsidy = document.forms[0].elements["property(other_subsidy)"].value;
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
        }
        //alert(parseInt(bshare) + parseFloat(subsidy) + parseInt(emf) + parseInt(other_subsidy) + parseInt(bloan)+parseInt(nsfdcloan));
        document.forms[0].elements["property(totalcost)"].value = parseInt(bshare) + parseFloat(subsidy) + parseInt(emf) + parseInt(other_subsidy) + parseInt(bloan) + parseInt(nsfdcloan);
        if (parseInt(document.forms[0].elements["property(totalcost)"].value) > parseInt(document.forms[0].elements["property(unitcost)"].value)) {
            alert("Total Amount should be equal to unit cost");
            document.forms[0].elements["property(other_subsidy)"].value = 0;
            document.forms[0].elements["property(bankloan)"].value = 0;
            document.forms[0].elements["property(margin_money)"].value = 0;
            if (document.forms[0].elements["property(scheme_mh_id)"].value != "233") {
                document.forms[0].elements["property(beneficiaryshare)"].value = 0;
                document.forms[0].elements["property(totalcost)"].value = subsidy;
            } else
                document.forms[0].elements["property(totalcost)"].value = parseInt(subsidy) + parseInt(bshare);

        }



    } else if (corp_id == "2") {
        if (document.forms[0].elements["property(beneficiaryshare)"].value != "" && document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
            bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
        }
        if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
            subsidy = document.forms[0].elements["property(subsidy)"].value;
        }
        if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
            bloan = document.forms[0].elements["property(bankloan)"].value;
        }
        if (document.forms[0].elements["property(other_subsidy)"].value != "" && document.forms[0].elements["property(other_subsidy)"].value != "0") {
            other_subsidy = document.forms[0].elements["property(other_subsidy)"].value;
        }
        document.forms[0].elements["property(totalcost)"].value = parseInt(bshare) + parseInt(subsidy) + parseInt(bloan) + parseInt(other_subsidy);

        if (parseInt(document.forms[0].elements["property(totalcost)"].value) > parseInt(document.forms[0].elements["property(unitcost)"].value)) {
            alert("Total Amount should be equal to unit cost");
            document.forms[0].elements["property(other_subsidy)"].value = 0;
            document.forms[0].elements["property(bankloan)"].value = 0;
            document.forms[0].elements["property(totalcost)"].value = subsidy;

        }

    } else if (corp_id == "18") {
        if (document.forms[0].elements["property(scheme_mh_id)"].value != "254" && document.forms[0].elements["property(scheme_mh_id)"].value != "255" && document.forms[0].elements["property(scheme_mh_id)"].value != "271") {
            if (document.forms[0].elements["property(beneficiaryshare)"].value != "" && document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
                bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
            }
            if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
            if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
                bloan = document.forms[0].elements["property(bankloan)"].value;
            }

            document.forms[0].elements["property(totalcost)"].value = parseInt(bshare) + parseInt(subsidy) + parseInt(bloan);

            if (parseInt(document.forms[0].elements["property(totalcost)"].value) > parseInt(document.forms[0].elements["property(unitcost)"].value)) {
                alert("Total Amount should be equal to unit cost");

                document.forms[0].elements["property(bankloan)"].value = 0;
                document.forms[0].elements["property(totalcost)"].value = subsidy;

            }
        } else {
            if (document.forms[0].elements["property(beneficiaryshare)"].value != "" && document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
                bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
            }
            if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
            if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
                bloan = document.forms[0].elements["property(bankloan)"].value;
            }
            document.forms[0].elements["property(totalcost)"].value = parseInt(bshare) + parseInt(subsidy) + parseInt(bloan);

            if (parseInt(document.forms[0].elements["property(totalcost)"].value) > parseInt(document.forms[0].elements["property(unitcost)"].value)) {
                alert("Total Amount should be equal to unit cost");
                document.forms[0].elements["property(benficiaryShare)"].value = 0;
                document.forms[0].elements["property(bankloan)"].value = 0;
                document.forms[0].elements["property(totalcost)"].value = subsidy;

            }
        }


    } else if (corp_id == "19") {

        if (document.forms[0].elements["property(scheme_mh_id)"].value != "299") {

            if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
            if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
                bloan = document.forms[0].elements["property(bankloan)"].value;
            }

            document.forms[0].elements["property(totalcost)"].value = parseInt(subsidy) + parseInt(bloan);

            if (parseInt(document.forms[0].elements["property(totalcost)"].value) > parseInt(document.forms[0].elements["property(unitcost)"].value)) {
                alert("Total Amount should be equal to unit cost");

                document.forms[0].elements["property(bankloan)"].value = 0;
                document.forms[0].elements["property(totalcost)"].value = subsidy;

            }
        } else {

            if (document.forms[0].elements["property(beneficiaryshare)"].value != "" && document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
                bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
            }
            if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
                subsidy = document.forms[0].elements["property(subsidy)"].value;
            }
            if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
                bloan = document.forms[0].elements["property(bankloan)"].value;
            }
            document.forms[0].elements["property(totalcost)"].value = parseInt(bshare) + parseInt(subsidy) + parseInt(bloan);

            if (parseInt(document.forms[0].elements["property(totalcost)"].value) > parseInt(document.forms[0].elements["property(unitcost)"].value)) {
                alert("Total Amount should be equal to unit cost");
                document.forms[0].elements["property(benficiaryShare)"].value = 0;
                document.forms[0].elements["property(bankloan)"].value = 0;
                document.forms[0].elements["property(totalcost)"].value = subsidy;

            }
        }


    } else {
        if (document.forms[0].elements["property(beneficiaryshare)"].value != "" && document.forms[0].elements["property(beneficiaryshare)"].value != "0") {
            bshare = document.forms[0].elements["property(beneficiaryshare)"].value;
        }
        if (document.forms[0].elements["property(subsidy)"].value != "" && document.forms[0].elements["property(subsidy)"].value != "0") {
            subsidy = document.forms[0].elements["property(subsidy)"].value;
        }
        if (document.forms[0].elements["property(bankloan)"].value != "" && document.forms[0].elements["property(bankloan)"].value != "0") {
            bloan = document.forms[0].elements["property(bankloan)"].value;
        }
        document.forms[0].elements["property(totalcost)"].value = parseInt(bshare) + parseFloat(subsidy) + parseInt(bloan);
    }
}

function validateSubsidy() {
    var corp_id = document.forms[0].elements["property(corp_id)"].value;
    var unitcost = parseInt(document.forms[0].elements["property(unitcost)"].value);
    var subsidy = document.forms[0].elements["property(subsidy)"].value;
    var groupmembers = parseInt(document.forms[0].elements["property(noofgroupmembers)"].value);
    var mainSchemes = document.forms[0].elements["property(scheme_mh_id)"].value;
    var beneficiaryShare = document.forms[0].elements["property(beneficiaryshare)"].value;
    var financialyear = document.forms[0].elements["property(financialyear)"].value;

    if (corp_id == "2") {

        if (mainSchemes != "246" && mainSchemes != "298") {
            if (financialyear == "2014-15") {
                var value = (unitcost * 60) / 100;
            } else {
                if (document.forms[0].elements["property(vulnergroup)"].value != "0" && groupmembers == "1") {
                    var value = (unitcost * 90) / 100;
                } else {
                    var value = (unitcost * 60) / 100;
                }
            }

            if (subsidy > value) {
                alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost/60% or unitcost/90%");
                document.forms[0].elements["property(subsidy)"].value = "";
                return false;
            }
        } else if (mainSchemes == "246" || mainSchemes == "298") {
            var value = unitcost;
            if (subsidy != value) {
                alert("The Subsidy Amount For This Corporation Should equal to unitcost");
                document.forms[0].elements["property(subsidy)"].value = "";
                return false;
            }
        }
    } else if (corp_id == "1") {
        var sector_type_id = document.forms[0].elements["property(sector_type_id)"].value;

        if (sector_type_id == "1") {
            var value = (unitcost * 60) / 100;
            if (subsidy > value) {
                alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost/60%");
                document.forms[0].elements["property(subsidy)"].value = "";
                return false;
            }
        } else {

            if (mainSchemes == "221" || mainSchemes == "240" || mainSchemes == "262" || mainSchemes == "266") {
                var value = unitcost;
                if (subsidy != value) {
                    alert("The Subsidy Amount For This Corporation Should Be Equal to unitcost");
                    document.forms[0].elements["property(subsidy)"].value = "";
                    return false;
                }
            } else if (mainSchemes == "220" || mainSchemes == "222" || mainSchemes == "241" || mainSchemes == "239" || mainSchemes == "263" || mainSchemes == "261") {
                var value = (unitcost * 50) / 100;
                if (subsidy > value) {
                    alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost/50%");
                    document.forms[0].elements["property(subsidy)"].value = "";
                    return false;
                }
            } else if (mainSchemes == "219" || mainSchemes == "238" || mainSchemes == "260") {

                if (document.forms[0].elements["property(scheme_sh_id)"].value == "740" || document.forms[0].elements["property(scheme_sh_id)"].value == "782") {
                    var value = unitcost;
                    if (document.forms[0].elements["property(margin_money)"].value != value) {
                        alert("The EMF Amount For This Scheme Should Be equal to Unitcost");
                        return false;
                    }
                }
            } else if (mainSchemes == "264" || mainSchemes == "265") {
                var value = (unitcost * 60) / 100;
                if (subsidy > value) {
                    alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost/60%");
                    document.forms[0].elements["property(subsidy)"].value = "";
                    return false;
                }
            }
        }
    } else if (corp_id == "18") {
        var value = 0;
        if (mainSchemes != "253" && mainSchemes != "254" && mainSchemes != "255") {
            value = (unitcost * 50) / 100;
            if (subsidy > value) {
                alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost/50%");
                document.forms[0].elements["property(subsidy)"].value = "";
                return false;
            }
        } else {
            value = (unitcost * 75) / 100;

            if (subsidy > value) {
                alert("The Subsidy Amount For This Corporation and this roshini scheme Should Not Be greater than unitcost/75%");
                document.forms[0].elements["property(subsidy)"].value = "";
                return false;
            }

            if (mainSchemes == "255" || mainSchemes == "254") {

                var benshare = (unitcost * 5) / 100;

                if (beneficiaryShare > benshare) {
                    alert("The Beneficiary Contribution Amount For This Corporation and this roshini scheme Should Not Be greater than unitcost/5%");
                    document.forms[0].elements["property(beneficiaryshare)"].value = "0";
                    return false;
                }

            }
        }


    }
    //    else if (corp_id == "5" || corp_id == "18" || corp_id == "19"|| corp_id == "20"|| corp_id == "21") {
    else {
        var value = (unitcost * 50) / 100;
        if (subsidy > value) {
            alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost/50%");
            document.forms[0].elements["property(subsidy)"].value = "";
            return false;
        }
    }


    if (corp_id != "1" && corp_id != "2") {
        if (subsidy >= unitcost) {
            alert("The Subsidy Amount For This Corporation Should Not Be greater than unitcost");
            document.forms[0].elements["property(subsidy)"].value = "";
            return false;
        }
    }
    if (corp_id == "7" || corp_id == "8" || corp_id == "9" || corp_id == "10" || corp_id == "11" || corp_id == "12" || corp_id == "13" || corp_id == "14" || corp_id == "15" || corp_id == "16") {
        var alt_cost = 0;
        if (financialyear != "2016-17") {
            var alt_cost = groupmembers * 50000;
        } else {
            var alt_cost = groupmembers * 200000;
        }
        if (unitcost > alt_cost) {
            alert("Unit Cost Amount Grater than than Society Amount." + alt_cost);
            unitcost = alt_cost;
            document.forms[0].elements["property(unitcost)"].value = alt_cost;
        }
        subsidy = (unitcost * 50) / 100;
        document.forms[0].elements["property(subsidy)"].value = subsidy;
        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy);
        return false;
    } else {
        if (corp_id != "1") {
            if (corp_id == "2") {
                if (mainSchemes == "244") {
                    if (parseInt(subsidy) > 100000) {
                        subsidy = "100000";
                        document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                        document.forms[0].elements["property(bankloan)"].value = 0;
                        document.forms[0].elements["property(other_subsidy)"].value = 0;
                        return false;
                    }
                } else {

                    if (financialyear == "2015-16") {
                        if (groupmembers == "1") {
                            if (parseInt(subsidy) > 100000) {
                                subsidy = "100000";
                                document.forms[0].elements["property(subsidy)"].value = parseInt(subsidy);
                                document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy);
                                return false;
                            }
                        } else if (parseInt(groupmembers) > 1) {
                            var subsidy_allowed = 100000 * parseInt(groupmembers);
                            if (parseInt(subsidy) > parseInt(subsidy_allowed)) {
                                document.forms[0].elements["property(subsidy)"].value = parseInt(subsidy_allowed);
                                document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy_allowed);
                                return false;
                            }
                        }
                    } else {
                        if (subsidy >= 100000) {
                            var sub = "100000";
                            document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                            document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(sub);
                            return false;
                        } else {
                            document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy);
                            return false;
                        }
                    }
                }
            } else if (corp_id == "5") {
                if (subsidy > 100000) {
                    var sub = "100000";
                    document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                    document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(sub);
                    return false;
                } else {
                    document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy);
                    return false;
                }
            } else if (corp_id == "18") {
                if (mainSchemes != "253" && mainSchemes != "254" && mainSchemes != "255") {
                    if (subsidy > 100000) {
                        var sub = "100000";
                        document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(sub);
                        return false;
                    }
                } else if (mainSchemes == "255" && unitcost <= 10000) {
                    if (beneficiaryShare > 250) {

                        var benshare = "250";

                        document.forms[0].elements["property(beneficiaryshare)"].value = benshare;
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(document.forms[0].elements["property(subsidy)"].value) - parseInt(benshare);
                        return false;
                    }
                } else if (mainSchemes == "255" && unitcost > 10000 && unitcost <= 15000) {
                    if (beneficiaryShare > 500) {

                        var benshare = "500";

                        document.forms[0].elements["property(beneficiaryshare)"].value = benshare;
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(document.forms[0].elements["property(subsidy)"].value) - parseInt(benshare);
                        return false;
                    }
                } else if (mainSchemes == "255" && unitcost > 15000 && unitcost <= 25000) {
                    if (beneficiaryShare > 1000) {

                        var benshare = "1000";

                        document.forms[0].elements["property(beneficiaryshare)"].value = benshare;
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(document.forms[0].elements["property(subsidy)"].value) - parseInt(benshare);
                        return false;
                    }
                } else {
                    if (mainSchemes == "254" || mainSchemes == "255") {

                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(document.forms[0].elements["property(subsidy)"].value);
                        return false;
                    } else {
                        document.forms[0].elements["property(beneficiaryshare)"].value = beneficiaryShare;
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(document.forms[0].elements["property(subsidy)"].value) - parseInt(beneficiaryShare);
                        return false;
                    }


                }
            } else if (corp_id == "19") {
                if (mainSchemes == "299") {
                    if (subsidy > 100000) {
                        var sub = "100000";
                        document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                        document.forms[0].elements["property(beneficiaryshare)"].value = parseInt(beneficiaryShare);
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy) - parseInt(beneficiaryShare);
                        return false;
                    } else {
                        document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy) - parseInt(beneficiaryShare);
                        return false;
                    }
                }
            } else {
                if (subsidy >= 100000) {
                    var sub = "100000";

                    document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                    document.forms[0].elements["property(bankloan)"].value = unitcost -
                        parseInt(sub);
                    return false;
                } else {
                    document.forms[0].elements["property(bankloan)"].value = unitcost - parseInt(subsidy);
                    return false;
                }
            }

        } else if (corp_id == "1") {
            if (mainSchemes == "314" || mainSchemes == "313" || mainSchemes == "409" || mainSchemes == "408") {
                if (mainSchemes == "409") {

                    if (parseInt(unitcost) <= 300000) {
                        subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                    } else if ((parseInt(unitcost) >= 300001 && parseInt(unitcost) <= 500000)) {
                        subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                    } else if ((parseInt(unitcost) >= 500001 && parseInt(unitcost) <= 1000000)) {
                        subsidy = (parseInt(unitcost / groupmembers) * 40) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                    } else if ((parseInt(unitcost) >= 1000001 && parseInt(unitcost) <= 2000000) || (parseInt(unitcost) >= 2000001 && parseInt(unitcost) <= 4500000)) {
                        subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                    }


                } else if (mainSchemes == "313" || mainSchemes == "408") {

                    if (subSchemes == "10486" || subSchemes == "10487" || subSchemes == "10488" || subSchemes == "10382" || subSchemes == "10485" || subSchemes == "10381" || subSchemes == "10489") {
                        subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                        subsidy = parseInt(subsidy) * groupmembers;
                    } else {
                        if (mainSchemes == "313") {
                            subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                            subsidy = parseInt(subsidy) * groupmembers;
                        } else if (mainSchemes == "408") {
                            if (parseInt(unitcost) <= 300000) {
                                subsidy = (parseInt(unitcost / groupmembers) * 60) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else if ((parseInt(unitcost) >= 300001 && parseInt(unitcost) <= 500000)) {
                                subsidy = (parseInt(unitcost / groupmembers) * 50) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else if ((parseInt(unitcost) >= 500001 && parseInt(unitcost) <= 1000000)) {
                                subsidy = (parseInt(unitcost / groupmembers) * 40) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            } else if ((parseInt(unitcost) >= 1000001 && parseInt(unitcost) <= 2000000) || (parseInt(unitcost) >= 2000001 && parseInt(unitcost) <= 4500000)) {
                                subsidy = (parseInt(unitcost / groupmembers) * 35) / 100;
                                subsidy = parseInt(subsidy) * groupmembers;
                            }

                        }
                    }
                }
                if (mainSchemes == "313" || mainSchemes == "314") {
                    ben_share = (parseInt(unitcost / groupmembers) * 5) / 100;
                    ben_share = parseInt(ben_share) * groupmembers;
                } else if (subSchemes == "10496" || subSchemes == "10497" || subSchemes == "12023" || subSchemes == "12024") {
                    ben_share = 0;
                    ben_share = parseInt(ben_share) * groupmembers;
                } else {
                    ben_share = (parseInt(unitcost / groupmembers) * 2) / 100;
                    ben_share = parseInt(ben_share) * groupmembers;
                }

                $("#subsidy").val(subsidy);
                $("#beneficiaryshare").val(parseInt(ben_share));
                $("#nsfdc_subsidy").val(parseInt(unitcost) - parseInt(subsidy) - parseInt(ben_share));
            }

        } else {
            if (mainSchemes == "221" || mainSchemes == "240" || mainSchemes == "262" || mainSchemes == "266") {
                if (subsidy != unitcost) {
                    alert("The Subsidy Amount For This Corporation Should Be equal to unitcost");
                    document.forms[0].elements["property(subsidy)"].value = "";
                    return false;
                }
            } else {
                if ((mainSchemes == "233" || mainSchemes == "256") && document.forms[0].elements["property(noofgroupmembers)"].value > 1) {
                    if (subsidy > 180000) {
                        var sub = "180000";
                        document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                        document.forms[0].elements["property(other_subsidy)"].value = 0;
                        document.forms[0].elements["property(margin_money)"].value = 0;
                        return false;
                    }
                } else if (mainSchemes == "264" || mainSchemes == "265") {
                    if (mainSchemes == "264" && document.forms[0].elements["property(scheme_sh_id)"].value == "2159") {
                        if (parseInt(subsidy) > 500000) {
                            subsidy = "500000";
                            document.forms[0].elements["property(subsidy)"].value = parseInt(subsidy);
                            document.forms[0].elements["property(other_subsidy)"].value = 0;
                            document.forms[0].elements["property(margin_money)"].value = 0;
                            return false;
                        }
                    } else {
                        if (subsidy > 100000) {
                            subsidy = "100000";
                            document.forms[0].elements["property(subsidy)"].value = parseInt(subsidy);
                            document.forms[0].elements["property(other_subsidy)"].value = 0;
                            document.forms[0].elements["property(margin_money)"].value = 0;
                        }
                    }
                } else {
                    if (subsidy >= 100000) {
                        var sub = "100000";
                        document.forms[0].elements["property(subsidy)"].value = parseInt(sub);
                        document.forms[0].elements["property(other_subsidy)"].value = 0;
                        document.forms[0].elements["property(margin_money)"].value = 0;
                        return false;
                    }
                }
            }
        }
    }
}

function checkAdhaarNo(obj) {

    var adhaar = trim(obj.value);
    if (adhaar != "") {
        var noofNumbers = adhaar.length;
        if (noofNumbers != 12) {
            alert("Invalid Adhaar number....You Entered " + noofNumbers +
                " Numbers Only.");
            obj.focus();

            // obj.focus();
            obj.value = "";

            return false;
        }

        var a = adhaar.verhoeffCheck();
        if (a == false) {
            alert("Please Enter valid Aadhar card no");
            obj.value = "";
            return false;
        }

    }

}

function checkAadharcardvalid(Aadhar) {

    Aadharcardvalue = Aadhar;

    var AadharcardId = document.getElementById(Aadhar).value;
    var AadharcardId_backup = document.elements["property(aadhaar_backup)"].value;

    if (AadharcardId == "" || AadharcardId == "0") {
        return false;
    }

    nxmlHTTP = new getXMLRequest();
    var url = "Ajax.do?key=checkAadharcardBackup&AadharcardId=" + AadharcardId + "&AadharcardId_backup" + AadharcardId_backup;
    if (nxmlHTTP) {
        nxmlHTTP.onreadystatechange = Aadharcardnolist;
        nxmlHTTP.open("GET", url, true);
        nxmlHTTP.send(null);
    }

}

function Aadharcardnolist() {
    if (!(nxmlHTTP.readyState == 4 || nxmlHTTP.readyState == "complete"))
        return;
    var xmldoc = getResponseData(nxmlHTTP);

    while (list.length > 0)
        list.pop();
    if (xmldoc) {
        var val = xmldoc.getElementsByTagName("count")[0];
        var count = val.childNodes[0].nodeValue;

        if (count != "0") {
            alert("the Aadhar No already exist with beneficiaryid : " + count);
            document.getElementById(Aadharcardvalue).value = "";

        }
    } else
        alert("NO XMLRequest Found ! Cannot proceed !");
}

function getMeesevaCasteDuplicateExist() {

    var doc = document.forms[0];
    var caste_no = doc.elements["property(mscasteno)"].value;
    var ben_id = doc.elements["property(benficiary_id)"].value;
    if (caste_no == "") {
        return false;
    }

    url = "Ajax.do?key=getMeesevaCasteDuplicateExist&msevacaste=" + caste_no + "&ben_id=" + ben_id;
    xmlHttp = getXMLRequest();

    if (xmlHttp) {
        xmlHttp.onreadystatechange = setMeesevaCasteDuplicateExist;

        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }

}

function setMeesevaCasteDuplicateExist() {
    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var xmldoc = getResponseData(xmlHttp);
    if (xmldoc) {
        var doc = document.forms[0];
        var benid = xmldoc.getElementsByTagName("benid");
        var ben = benid[0].firstChild.nodeValue;
        if (ben != "0") {
            alert("Meeseva Caste No already exist with the beneficiary :" + ben);
            document.forms[0].elements["property(mscasteno)"].value = "";
        } else {
            validMeesevaCasteNo();
        }

    } else {
        alert("NO XMLRequest Found ! Cannot proceed !");
    }
}

function validMeesevaCasteNo() {
    var doc = document.forms[0];
    var caste_no = doc.elements["property(mscasteno)"].value;
    if (caste_no == "") {
        return false;
    }
    url = "Ajax.do?key=validMeesevaCasteNo&msevacaste=" + caste_no;
    xmlHttp = getXMLRequest();

    if (xmlHttp) {
        xmlHttp.onreadystatechange = meesevacastenolist;

        xmlHttp.open('GET', url, true);
        xmlHttp.send(null);
    }
}

function meesevacastenolist() {

    if (!(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete"))
        return;
    var doc = document.forms[0];
    var xmldoc = getResponseData(xmlHttp);
    if (xmldoc) {
        var count = xmldoc.getElementsByTagName("ben");

        var bens = count[0].firstChild.nodeValue;

        if (bens == "0") {
            alert("The MeeSeva Caste is not a Valid number : ");
            document.forms[0].elements["property(mscasteno)"].value = "";
        } else {
            var ben_details = bens.split("$");
            var castename = ben_details[3];
            var caste_name = trim(document.getElementById("caste_name").value);

            if (castename.search(caste_name) == -1) {
                alert("The MeeSeva Caste Number  not a Belongs to " + caste_name + " Caste : " + castename);
                document.forms[0].elements["property(mscasteno)"].value = "";
                return false;
            }

            var district_code;
            var district_length = document.getElementById("district").value.length;
            if (district_length == 1)
                district_code = "0" + document.getElementById("district").value;
            else
                district_code = document.getElementById("district").value;

            /*if(parseInt(district_code) != parseInt(ben_details[7])) {
            	alert("The MeeSeva Caste Number Not belongs to this District");
            	document.forms[0].elements["property(mscasteno)"].value="";
            	return false;
            }*/
            /*if(trim(ben_details[4])!="" && trim(ben_details[4])!= null && trim(ben_details[4])!="null") {
            	if(document.forms[0].elements["property(ration_no)"].value != ben_details[7]) {
            		alert("The MeeSeva Caste Number Ration Card  Not Matching with Application Ration Card");
            		document.forms[0].elements["property(mscasteno)"].value="";
            		return false;
            	}
            }*/
            if (trim(ben_details[5]) != "" && trim(ben_details[5]) != null && trim(ben_details[5]) != "null") {
                document.forms[0].elements["property(uid)"].value = trim(ben_details[5]);
                document.forms[0].elements["property(uid)"].readOnly = true;
            }

            document.forms[0].elements["property(dateofbirth)"].value = trim(ben_details[10]);
            calculateAge(document.forms[0].elements["property(dateofbirth)"].value, document.forms[0].elements["property(age)"].value);

        }
    } else
        alert("NO XMLRequest Found ! Cannot proceed !");
}

function isChecked(name) {
    var checked = false;

    if (name) {
        var element = document.forms[0].elements[name];

        if (element) {
            var length = element.length;

            for (var i = 0; i < length; i++) {
                if (element[i].checked) {
                    checked = true;
                    break;
                }
            }
        }
    }
    return checked;
}

/*
 * to check radio button
 */

function checkRadio(name, value) {
    var element = isElement(name);
    var status = true;
    if (element) {
        var length = element.length;

        for (var i = 0; i < length; i++) {
            if (element[i].value === value) {
                element[i].checked = true;
                break;
            } else {
                status = false;
            }
        }
    }
    return status;
}

/*
 * to check the value is empty or default value
 */

function isSelected(name, msg) {
    var selected = false;

    var element = isElement(name);
    //alert(element.value);
    if (element) {
        if (element.value === "" || element.value === "0") {
            alert(msg);
        } else
            selected = true;
    }
    //alert(selected);
    return selected;
}

function checkSelect(name, val) {
    var status = false;
    var element = isElement(name);

    if (element) {
        if (element.value === val) {
            status = true;
        }
    }
    return status;
}

function isNotEmpty(name, msg) {
    var selected = false;
    var element = isElement(name);
    var empty = isEmpty(element);

    if (empty) {
        alert(msg);
        element.focus();
    } else {
        selected = true;

    }

    return selected;
}

function isNotEmptyZero(name, msg) {

    var element = isElement(name);
    var empty = isEmptyzero(element);

    if (empty) {
        alert(msg);
        element.focus();
    }

    return !empty;
}

function isEmptyzero(element) {
    var empty = true;

    if (element) {
        var val = element.value;
        if (val.fulltrim() !== "" && val.fulltrim() != "0") {
            empty = false;
        }
    }

    return empty;
}

function isEmpty(element) {
    var empty = true;

    if (element) {
        var val = element.value;
        if (val.fulltrim() !== "") {
            empty = false;
        }
    }

    return empty;
}

function isElement(name) {
    var element;

    if (name)
        element = document.forms[0].elements[name];

    return element;
}

function updateBeneficiary() {
    var doc = document.forms[0];

    if (!isNotEmpty("property(fname)", "Enter Father/Husband Name")) return false;

    if (!isNotEmpty("property(dateofbirth)", "Enter Date  Of Birth")) return false;

    if (!isChecked("property(gender)")) {
        alert("Select Gender");
        return false;
    }
    //checkRadio("property(gender)", "Select Gender");
    if (!(document.forms[0].elements["property(corp_id)"].value == "18" || document.forms[0].elements["property(corp_id)"].value == "19" || document.forms[0].elements["property(corp_id)"].value == "3")) {
        if (!isSelected("property(category)", "Select Caste")) return false;
        if (!isSelected("property(sub_caste_name)", "Select Sub Caste")) return false;
    }

    if (!isChecked("property(schemeplace)")) {
        alert("Select  Rural Urban Area");
        return false;
    }

    //checkRadio("property(schemeplace)", "Select Rural Urban Area");
    if (!isSelected("property(qualification_id)", "Select Qualification")) return false;
    if (!isSelected("property(occupation)", "Select Occupation")) return false;
    if (!isChecked("property(phyhandicap)")) {
        alert("Select Physically Handicapped Yes or No");
        return false;
    }

    //checkRadio("property(phyhandicap)", "Select Physically Handicapped Yes or No");
    if (!isSelected("property(mandal)", "Select Mandal")) return false;
    if (!isSelected("property(panchayatcode)", "Select Panchayat")) return false;
    /*isSelected("property(villagecode)", "Select Village");*/

    if (!isNotEmpty("property(beneficiary_adrs)", "Enter Beneficiary address")) return false;
    if (!isNotEmpty("property(ben_address)", "Enter Beneficiary Full Address")) return false;

    if (!isSelected("property(scheme_mh_id)", "Select Scheme")) return false;

    if (!isSelected("property(scheme_sh_id)", "Select Sub Scheme")) return false;

    if (document.forms[0].elements["property(scheme_sh_id)"].value == "2189" && document.forms[0].elements["property(scheme_mh_id)"].value == "259") {
        if (parseInt(document.forms[0].elements["property(noofgroupmembers)"].value) != 2) {
            alert("2 members are applicable for this sector and scheme");
            return false;
        }
    }
    if (document.forms[0].elements["property(scheme_sh_id)"].value == "2159" && document.forms[0].elements["property(scheme_mh_id)"].value == "264") {
        if (parseInt(document.forms[0].elements["property(noofgroupmembers)"].value) != 5) {
            alert("Minimum 5 members are applicable for this sector and scheme. Please select other scheme");
            return false;
        } else if (document.forms[0].elements["property(unitcost)"].value > 1500000) {
            alert("Unitcost should be less than 1500000");
            document.forms[0].elements["property(unitcost)"].value = 0;
            document.forms[0].elements["property(subsidy)"].value = 0;
            document.forms[0].elements["property(bankloan)"].value = 0;
            document.forms[0].elements["property(other_subsidy)"].value = 0;
            document.forms[0].elements["property(nsfdc_subsidy)"].value = 0;
            return false;
        }
    }


    if (document.forms[0].elements["property(corp_id)"].value == "18" && (document.forms[0].elements["property(scheme_mh_id)"].value == "253" || document.forms[0].elements["property(scheme_mh_id)"].value == "255")) {
        if (!isSelected("property(vulnergroup)", "Select Vulnerable Group")) return false;
    }
    if (!isNotEmptyZero("property(unitcost)", "Enter Unit Cost")) return false;
    /*if(!isNotEmptyZero("property(subsidy)", "Enter Subsidy")) return false;*/

    if (document.forms[0].elements["property(unitcost)"].value != document.forms[0].elements["property(totalcost)"].value) {
        alert("total cost amount should be equal to Unit cost");
        return false;
    }
    //	isSelected("property(branchmandalcode)", "Select Mandal For Branch");
    //	isSelected("property(bankid)", "Select Bank");
    if (doc.elements["property(sector_type_id)"].value == "1") {
        if (!isSelected("property(bankid)", "Select Bank")) {

            return false;
        }
        if (!isSelected("property(bankbranch)", "Select Bank Branch")) return false;
        if (!isNotEmpty("property(ifsccode)", "Enter Ifsc code")) return false;

        if (!isNotEmptyZero("property(bankloan)", "Enter bankloan")) return false;
    }
    /*if(document.forms[0].elements["property(beneficiary_photo_loc)"].value=="" || document.forms[0].elements["property(beneficiary_photo_loc)"].value=="null" || document.forms[0].elements["property(beneficiary_photo_loc)"].value==null) {
    	alert("Upload Beneficiary Photo");
    	document.forms[0].elements["property(beneficiary_photo_loc)"].focus();
    	return false;
    }
    if(document.forms[0].elements["property(beneficiary_photo_loc)"].value!=""  && getSize(document.forms[0].elements["property(beneficiary_photo_loc)"]) > 204800 ) {
    	alert("Beneficiary Photo  must be less than 200 kB");
    	document.forms[0].elements["property(beneficiary_photo_loc)"].focus();
    	return false;
    }*/
    doc.elements["property(sector_type_id)"].disabled = false;
    if (!isSelected("property(sector_type_id)", "Select Sector Type")) return false;



    if (confirm("Are you sure to Update ??")) {
        doc.key.value = "updateDetails";
        doc.submit();
    } else {
        return false;
    }
}

function is_bank_emf(obj) {
    obj = obj.value;
    var corp_id = document.forms[0].elements["property(corp_id)"].value;
    document.forms[0].elements["property(totalcost)"].value = 0;
    if (corp_id == "1") {
        document.getElementById("emf_block").style.display = "";
        document.getElementById("emf_block1").style.display = "";
    } else {

        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
    }

    if (obj == 1 && corp_id == "1") {
        document.getElementById("bankbranchblock").style.display = "";
        document.getElementById("bankbranchmandal").style.display = "";
        document.getElementById("bankloan_block").style.display = "";
        document.getElementById("bankloan_block1").style.display = "";
        document.getElementById("other_block").style.display = "none";
        document.getElementById("other_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "none";
        document.getElementById("benshare_block1").style.display = "none";
        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;

        document.forms[0].elements["property(totalcost)"].value = 0;
    } else if (obj == 2 && corp_id == "1") {
        document.getElementById("bankbranchblock").style.display = "none";
        document.getElementById("bankbranchmandal").style.display = "none";
        document.getElementById("bankloan_block").style.display = "none";
        document.getElementById("bankloan_block1").style.display = "none";
        document.getElementById("other_block").style.display = "none";
        document.getElementById("other_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "none";
        document.getElementById("benshare_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
        document.getElementById("emf_block").style.display = "";
        document.getElementById("emf_block1").style.display = "";

        document.forms[0].elements["property(totalcost)"].value = 0;
    } else {

        if (corp_id == "2") {
            if (obj == 1) {
                document.getElementById("bankbranchblock").style.display = "";
                document.getElementById("bankbranchmandal").style.display = "";
                document.getElementById("bankloan_block").style.display = "";
                document.getElementById("bankloan_block1").style.display = "";
                document.getElementById("other_block").style.display = "none";
                document.getElementById("other_block1").style.display = "none";
                document.getElementById("benshare_block").style.display = "none";
                document.getElementById("benshare_block1").style.display = "none";
                document.getElementById("emf_block").style.display = "none";
                document.getElementById("emf_block1").style.display = "none";
                document.forms[0].elements["property(beneficiaryshare)"].value = 0;
                document.forms[0].elements["property(totalcost)"].value = 0;
            } else if (obj == 2) {
                document.getElementById("bankbranchblock").style.display = "none";
                document.getElementById("bankbranchmandal").style.display = "none";
                document.getElementById("bankloan_block").style.display = "none";
                document.getElementById("bankloan_block1").style.display = "none";
                document.getElementById("other_block").style.display = "none";
                document.getElementById("other_block1").style.display = "none";
                document.getElementById("benshare_block").style.display = "none";
                document.getElementById("benshare_block1").style.display = "none";
                document.getElementById("emf_block").style.display = "none";
                document.getElementById("emf_block1").style.display = "none";
                document.forms[0].elements["property(beneficiaryshare)"].value = 0;

                document.forms[0].elements["property(totalcost)"].value = 0;
            }
        } else {
            document.getElementById("bankbranchblock").style.display = "";
            document.getElementById("bankbranchmandal").style.display = "";
            document.getElementById("bankloan_block").style.display = "";
            document.getElementById("bankloan_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.forms[0].elements["property(totalcost)"].value = 0;
        }

    }
}

function getEmf(obj) {
    var sector_Type = document.forms[0].elements["property(sector_type_id)"].value;
    var corp_id = document.forms[0].elements["property(corp_id)"].value;
    obj = obj.value;

    /*if(corp_id == "18") {
    	
    	var scheme=document.forms[0].elements["property(scheme_mh_id)"].value;
    	var scheme_main=document.forms[0].elements["property(scheme_main)"].value;
    	if(scheme_main != scheme) {
    		
    		var unitcost = document.forms[0].elements["property(unitcost_main)"].value;
    		
    		alert("Sector change is not applicable for this corporation");
    		
    		document.forms[0].elements["property(scheme_mh_id)"].value = scheme_main;
    		document.forms[0].elements["property(scheme_sh_id)"].value = sub_scheme_main;
    		document.forms[0].elements["property(unitcost)"].value = unitcost;
    		return false;
    	}
    }*/

    document.forms[0].elements["property(unitcost)"].value = 0;
    document.forms[0].elements["property(subsidy)"].value = 0;
    document.forms[0].elements["property(margin_money)"].value = 0;
    document.forms[0].elements["property(bankloan)"].value = 0;
    document.forms[0].elements["property(beneficiaryshare)"].value = 0;
    document.forms[0].elements["property(other_subsidy)"].value = 0;
    document.forms[0].elements["property(nsfdc_subsidy)"].value = 0;
    document.forms[0].elements["property(totalcost)"].value = 0;
    if (sector_Type != "2" && document.forms[0].elements["property(scheme_mh_id)"].value != "238" && document.forms[0].elements["property(scheme_mh_id)"].value != "260") {
        document.forms[0].elements["property(unitcost)"].value = 0;
        document.forms[0].elements["property(subsidy)"].value = 0;
        document.forms[0].elements["property(margin_money)"].value = 0;
        document.forms[0].elements["property(bankloan)"].value = 0;
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
        document.forms[0].elements["property(other_subsidy)"].value = 0;
        document.forms[0].elements["property(totalcost)"].value = 0;
    }

    if (sector_Type == "1" && corp_id == "1") {
        if (obj == 236 || obj == 258) {
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "none";
            document.getElementById("benshare_block1").style.display = "none";
            document.forms[0].elements["property(beneficiaryshare)"].value = 0;
            document.getElementById("emf_block").style.display = "";
            document.getElementById("emf_block1").style.display = "";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
        } else if (obj == 235 || obj == 257) {
            document.getElementById("other_block").style.display = "";
            document.getElementById("other_block1").style.display = "";
            document.getElementById("benshare_block").style.display = "none";
            document.getElementById("benshare_block1").style.display = "none";
            document.forms[0].elements["property(beneficiaryshare)"].value = 0;
            document.getElementById("emf_block").style.display = "";
            document.getElementById("emf_block1").style.display = "";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
        } else if (obj == 233 || obj == 256) {
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
            document.forms[0].elements["property(bankloan)"].readOnly = false;
        } else {

            document.getElementById("benshare_block").style.display = "none";
            document.getElementById("benshare_block1").style.display = "none";
            document.forms[0].elements["property(beneficiaryshare)"].value = 0;
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
        }
    } else if (sector_Type == "2" && corp_id == "1") {
        if (obj == 264 || obj == 265) {
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "";
            document.getElementById("nsfdc_block1").style.display = "";
            document.getElementById("bankloan_block").style.display = "none";
            document.getElementById("bankloan_block1").style.display = "none";
            $("#land_details").hide();
        } else if (obj == 408 || obj == 409) {
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "";
            document.getElementById("nsfdc_block1").style.display = "";
            document.getElementById("bankloan_block").style.display = "none";
            document.getElementById("bankloan_block1").style.display = "none";
            $("#land_details").hide();
        } else if (obj == 407) {
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "none";
            document.getElementById("benshare_block1").style.display = "none";
            document.getElementById("other_block").style.display = "";
            document.getElementById("other_block1").style.display = "";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
            document.getElementById("bankloan_block").style.display = "none";
            document.getElementById("bankloan_block1").style.display = "none";
            $("#land_details").hide();
        } else if (obj == 410) {
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
            document.getElementById("bankloan_block").style.display = "none";
            document.getElementById("bankloan_block1").style.display = "none";
            $("#land_details").hide();
        } else if (obj == 432) {
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
            document.getElementById("bankloan_block").style.display = "none";
            document.getElementById("bankloan_block1").style.display = "none";
            $("#land_details").show();
        } else if (obj == 412 || obj == 413 || obj == 416) {
            document.getElementById("emf_block").style.display = "none";
            document.getElementById("emf_block1").style.display = "none";
            document.getElementById("benshare_block").style.display = "";
            document.getElementById("benshare_block1").style.display = "";
            document.getElementById("other_block").style.display = "none";
            document.getElementById("other_block1").style.display = "none";
            document.getElementById("nsfdc_block").style.display = "none";
            document.getElementById("nsfdc_block1").style.display = "none";
            document.getElementById("bankloan_block").style.display = "none";
            document.getElementById("bankloan_block1").style.display = "none";
            $("#land_details").hide();
        }
    } else if (sector_Type == "1" && corp_id == "2" && obj == 244) {
        document.getElementById("other_block").style.display = "";
        document.getElementById("other_block1").style.display = "";
        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "none";
        document.getElementById("benshare_block1").style.display = "none";
        document.getElementById("nsfdc_block").style.display = "none";
        document.getElementById("nsfdc_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
        document.getElementById("bankloan_block").style.display = "";
        document.getElementById("bankloan_block1").style.display = "";
    } else if (corp_id == "18") {

        document.getElementById("other_block").style.display = "none";
        document.getElementById("other_block1").style.display = "none";
        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "";
        document.getElementById("benshare_block1").style.display = "";
        document.getElementById("nsfdc_block").style.display = "none";
        document.getElementById("nsfdc_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
        document.getElementById("bankloan_block").style.display = "";
        document.getElementById("bankloan_block1").style.display = "";
    } else if (corp_id == "19") {

        document.getElementById("other_block").style.display = "none";
        document.getElementById("other_block1").style.display = "none";
        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "";
        document.getElementById("benshare_block1").style.display = "";
        document.getElementById("nsfdc_block").style.display = "none";
        document.getElementById("nsfdc_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
    } else {

        /*if(corp_id=="5") {
        	document.getElementById("emf_block").style.display = "";
        	document.getElementById("emf_block1").style.display = "";
        }
        else {*/
        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
        /*}*/
        document.getElementById("other_block").style.display = "none";
        document.getElementById("other_block1").style.display = "none";
        document.getElementById("nsfdc_block").style.display = "none";
        document.getElementById("nsfdc_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "none";
        document.getElementById("benshare_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
    }
}

function getOtherSubsidy(obj) {
    var sector_Type = document.forms[0].elements["property(sector_type_id)"].value;
    var corp_id = document.forms[0].elements["property(corp_id)"].value;
    var mainSchemes = document.forms[0].elements["property(scheme_mh_id)"].value;
    document.forms[0].elements["property(unitcost)"].value = 0;
    document.forms[0].elements["property(subsidy)"].value = 0;
    document.forms[0].elements["property(margin_money)"].value = 0;
    document.forms[0].elements["property(bankloan)"].value = 0;
    document.forms[0].elements["property(beneficiaryshare)"].value = 0;
    document.forms[0].elements["property(other_subsidy)"].value = 0;
    document.forms[0].elements["property(totalcost)"].value = 0;
    obj = obj.value;

    if (sector_Type == "2" && corp_id == "1") {
        if (mainSchemes == "238" || mainSchemes == "260") {
            if (obj == 783 || obj == 2079) {
                document.getElementById("other_block").style.display = "";
                document.getElementById("other_block1").style.display = "";
            } else {
                document.getElementById("other_block").style.display = "none";
                document.getElementById("other_block1").style.display = "none";
            }
        } else if (mainSchemes == "407") {
            if (obj == 10310) {
                document.getElementById("other_block").style.display = "";
                document.getElementById("other_block1").style.display = "";
            }
        }
    } else if (corp_id == "2" && mainSchemes == "244") {
        document.getElementById("other_block").style.display = "";
        document.getElementById("other_block1").style.display = "";
        document.getElementById("emf_block").style.display = "none";
        document.getElementById("emf_block1").style.display = "none";
        document.getElementById("benshare_block").style.display = "none";
        document.getElementById("benshare_block1").style.display = "none";
        document.getElementById("nsfdc_block").style.display = "none";
        document.getElementById("nsfdc_block1").style.display = "none";
        document.forms[0].elements["property(beneficiaryshare)"].value = 0;
    } else {
        document.getElementById("other_block").style.display = "none";
        document.getElementById("other_block1").style.display = "none";
        if (obj == 2189) {
            if (parseInt(document.forms[0].elements["property(noofgroupmembers)"].value) != 2) {
                alert("2 members are applicable for this sector and scheme");
                document.forms[0].elements["property(scheme_sh_id)"].value = "0";
                document.forms[0].elements["property(unitcost)"].value = "0";
                document.forms[0].elements["property(subsidy)"].value = "0";
                document.forms[0].elements["property(nsfdc_subsidy)"].value = "0";
                document.forms[0].elements["property(beneficiaryshare)"].value = "0";
                document.forms[0].elements["property(totalcost)"].value = "0";
                return false;
            }
        }

        if (obj == 2159) {
            if (parseInt(document.forms[0].elements["property(noofgroupmembers)"].value) < 5) {
                alert("No. of group members is less than 5");
                document.forms[0].elements["property(scheme_sh_id)"].value = "0";
                document.forms[0].elements["property(unitcost)"].value = "0";
                document.forms[0].elements["property(subsidy)"].value = "0";
                document.forms[0].elements["property(nsfdc_subsidy)"].value = "0";
                document.forms[0].elements["property(beneficiaryshare)"].value = "0";
                document.forms[0].elements["property(totalcost)"].value = "0";
                return false;
            } else {
                document.forms[0].elements["property(unitcost)"].value = "1500000";
                document.forms[0].elements["property(subsidy)"].value = "500000";
                document.forms[0].elements["property(nsfdc_subsidy)"].value = "925000";
                document.forms[0].elements["property(beneficiaryshare)"].value = "75000";
                document.forms[0].elements["property(totalcost)"].value = "1500000";
                document.forms[0].elements["property(unitcost)"].readOnly = true;
                document.forms[0].elements["property(subsidy)"].readOnly = true;
                document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
                document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
            }
        } else if (obj == 2149 || obj == 2151 || obj == 2160 || obj == 2161 || obj == 2167 || obj == 2168 || obj == 2171 || obj == 2186 || obj == 2185) {
            //alert("in 2186");
            document.forms[0].elements["property(unitcost)"].value = "300000";
            document.forms[0].elements["property(subsidy)"].value = "100000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "185000";
            document.forms[0].elements["property(beneficiaryshare)"].value = "15000";
            document.forms[0].elements["property(totalcost)"].value = "300000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2150 || obj == 2166) {
            document.forms[0].elements["property(unitcost)"].value = "250000";
            document.forms[0].elements["property(subsidy)"].value = "100000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "137500";
            document.forms[0].elements["property(beneficiaryshare)"].value = "12500";
            document.forms[0].elements["property(totalcost)"].value = "250000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2182 || obj == 2169 || obj == 2170 || obj == 2173 || obj == 2175 || obj == 2176 || obj == 2177 || obj == 2178) {
            document.forms[0].elements["property(unitcost)"].value = "200000";
            document.forms[0].elements["property(subsidy)"].value = "100000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "90000";
            document.forms[0].elements["property(beneficiaryshare)"].value = "10000";
            document.forms[0].elements["property(totalcost)"].value = "200000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2152 || obj == 2153 || obj == 2155 || obj == 2157 || obj == 2158 || obj == 2163 || obj == 2180 || obj == 2183 || obj == 2191) {
            document.forms[0].elements["property(unitcost)"].value = "150000";
            document.forms[0].elements["property(subsidy)"].value = "90000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "52500";
            document.forms[0].elements["property(beneficiaryshare)"].value = "7500";
            document.forms[0].elements["property(totalcost)"].value = "150000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2162 || obj == 2165 || obj == 2164 || obj == 2179 || obj == 2181 || obj == 2187 || obj == 2188 || obj == 2192) {
            document.forms[0].elements["property(unitcost)"].value = "100000";
            document.forms[0].elements["property(subsidy)"].value = "60000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "35000";
            document.forms[0].elements["property(beneficiaryshare)"].value = "5000";
            document.forms[0].elements["property(totalcost)"].value = "100000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2154 || obj == 2172) {
            document.forms[0].elements["property(unitcost)"].value = "100000";
            document.forms[0].elements["property(subsidy)"].value = "60000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "30000";
            document.forms[0].elements["property(beneficiaryshare)"].value = "10000";
            document.forms[0].elements["property(totalcost)"].value = "100000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2174) {
            document.forms[0].elements["property(unitcost)"].value = "175000";
            document.forms[0].elements["property(subsidy)"].value = "100000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "66250";
            document.forms[0].elements["property(beneficiaryshare)"].value = "8750";
            document.forms[0].elements["property(totalcost)"].value = "175000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2156) {
            document.forms[0].elements["property(unitcost)"].value = "125000";
            document.forms[0].elements["property(subsidy)"].value = "75000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "43750";
            document.forms[0].elements["property(beneficiaryshare)"].value = "6250";
            document.forms[0].elements["property(totalcost)"].value = "125000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else if (obj == 2184) {
            document.forms[0].elements["property(unitcost)"].value = "600000";
            document.forms[0].elements["property(subsidy)"].value = "100000";
            document.forms[0].elements["property(nsfdc_subsidy)"].value = "470000";
            document.forms[0].elements["property(beneficiaryshare)"].value = "30000";
            document.forms[0].elements["property(totalcost)"].value = "600000";
            document.forms[0].elements["property(unitcost)"].readOnly = true;
            document.forms[0].elements["property(subsidy)"].readOnly = true;
            document.forms[0].elements["property(nsfdc_subsidy)"].readOnly = true;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = true;
        } else {
            /*document.forms[0].elements["property(unitcost)"].readOnly = false;
            document.forms[0].elements["property(subsidy)"].readOnly = false;
            document.forms[0].elements["property(beneficiaryshare)"].readOnly = false;*/
        }
    }
}

function getUnitcostAmount(obj, selector) {
    //alert(scheme_id);
    var scheme_id = obj.value;
    var corp_id = $("#corp_id").val();


    /*if(scheme_id==265 || scheme_id==264) {
    	return false;
    	
    }*/
    var fin_year = $("#financialyear").val();

    var unitcost = $(selector);

    var tagname = "unitcost";
    var parameters = {
        "key": "getUnitcost",
        "tagname": tagname,
        "scheme_id": scheme_id,
        "corp_id": corp_id,
        "fin_year": fin_year
    };
    callAjax1(obj, unitcost, "Ajax.do", parameters, tagname, true, setUnitcost);

}

function callAjax1(obj, unitcost, url, parameters, tagname, attribute, callback) {

    $.ajax({
        type: "POST",
        url: url,
        dataType: "xml",
        data: parameters,
        success: function(data) {
            callback(obj, unitcost, tagname, attribute, data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            return false;
        }
    });
}

function setUnitcost(obj, unitcost, tagname, attribute, data) {
    var $exist_unitcost = $(data).find(tagname);
    var exists = "",
        unitcost_exist = "";
    if (attribute) {
        exists = $exist_unitcost.attr("status");
        unitcost_exist = $exist_unitcost.attr("unitcost");
    } else {
        exists = $exist_unitcost.find("status").text();
        unitcost_exist = $exist_unitcost.find("unitcost").text();
    }

    if (exists === "exists") {
        if (unitcost_exist != "0") {
            document.getElementById("unitcost").value = unitcost_exist;
            document.getElementById("unitcost").readOnly = true;
            calculateSubsidy();
            validateSubsidy();
            totalAmount();
        } else {
            document.getElementById("unitcost").value = 0;
            document.getElementById("unitcost").readOnly = false;
            return false;

        }
    }

}

function fixVulnergroup(obj) {
    var corp_id = $("#corp_id").val();
    if (corp_id != "2") {
        return false;

    }
    var sub_caste_id = obj.value;
    if (sub_caste_id == "90" || sub_caste_id == "91" || sub_caste_id == "93" || sub_caste_id == "94" || sub_caste_id == "95") {
        document.forms[0].elements["property(vulnergroup)"].value = "10";
    } else if (sub_caste_id == "86") {
        document.forms[0].elements["property(vulnergroup)"].value = "18";
    } else {
        document.forms[0].elements["property(vulnergroup)"].value = "0";
    }
    calculateSubsidy();
    validateSubsidy();
}

function fixSubcaste(obj) {
    var corp_id = $("#corp_id").val();
    var sub_caste_id = $("#subcategory").val();
    if (corp_id != "2") {
        return false;

    }
    var vulnergroup = obj.value;
    if (vulnergroup == "10") {
        if (sub_caste_id == "90" || sub_caste_id == "91" || sub_caste_id == "93" || sub_caste_id == "94" || sub_caste_id == "95") {
            document.forms[0].elements["property(vulnergroup)"].value = "10";
        } else {
            document.forms[0].elements["property(vulnergroup)"].value = "0";
        }
    }

    if (vulnergroup == "18") {
        if (sub_caste_id == "86") {
            document.forms[0].elements["property(vulnergroup)"].value = "18";
        } else {
            document.forms[0].elements["property(vulnergroup)"].value = "0";
        }
    }

    calculateSubsidy();
    validateSubsidy();
}

function getVulnerableGroups(obj, selector) {
    var scheme_id = obj.value;

    var corp_id = $("#corp_id").val();
    if (corp_id != "18" || scheme_id == 0) {

        return false;
    }
    var vulnerable_groups = $(selector); // "select[name='property(mandal)']" or #mandal

    vulnerable_groups.html('');
    addOption(vulnerable_groups, "--Select--", "0");

    var tagname = "vulner";

    var parameters = {
        "key": "getVulnerableGroups",
        "tagname": tagname,
        "scheme_id": scheme_id
    };
    callAjax(vulnerable_groups, "Ajax.do", parameters, tagname, true, selectBox);
}

function checkMeesevacasteduplicateexist(mseva_casteno, category, ration, Aadhar, district_name, age, datepicker, i) {
    meesevacastevalue = mseva_casteno;
    caste = category;
    rationcard = ration;
    Aadharno = Aadhar;
    district = district_name;
    age1 = age;
    date = datepicker;
    ivalue = i;
    var meesevacasteno = document.getElementById(mseva_casteno).value;

    var benid = document.getElementById("benficiary_id").value;
    /*var applicationtype =  document.forms[0].elements["property(financialyear)"].value.trim();
    applicationtype1 = applicationtype;*/
    var meesevacasteno_backup = meesevacasteno;
    meesevacasteno_backup1 = meesevacasteno_backup;
    if (meesevacasteno == "") {
        document.getElementById("meeseva_caste_name").value = "";
        document.getElementById("sub_caste_name").value = "";
        return false;
    }
    if (meesevacasteno.substring(0, 3) != "CGC" && meesevacasteno.substring(0, 3) != "CND" && meesevacasteno.substring(0, 3) != "OBC") {
        alert("Invalid Caste No.");

        document.getElementById(mseva_casteno).value = "";
        document.getElementById("meeseva_caste_name").value = "";
        document.getElementById("sub_caste_name").value = "";
        return false;
    }
    nxmlHTTP = new getXMLRequest();
    var url = "myajax.do?sid=" + Math.random() +
        "&mode=checkMeesevacasteduplicateexistBackup&meesevacasteno=" +
        meesevacasteno + "&meesevacasteno_backup=" +
        meesevacasteno_backup + "&benid=" + benid;

    if (nxmlHTTP) {
        nxmlHTTP.onreadystatechange = meesevacasteduplicateexistlist;
        nxmlHTTP.open("GET", url, true);
        nxmlHTTP.send(null);
    }

}

function meesevacasteduplicateexistlist() {
    if (!(nxmlHTTP.readyState == 4 || nxmlHTTP.readyState == "complete"))
        return;
    var xmldoc = getResponseData(nxmlHTTP);

    /*while (list.length > 0)
    	list.pop();*/
    if (xmldoc) {

        var val = xmldoc.getElementsByTagName("count")[0];
        var count = val.childNodes[0].nodeValue;
        if (count != "0") {
            alert("The MeeSeva Caste No already exist with beneficiary Id: " +
                count);
            document.getElementById(meesevacastevalue).value = "";
            document.getElementById("meeseva_caste_name").value = "";
            document.getElementById("sub_caste_name").value = "";

        } else {
            checkMeesevaCastevalid(meesevacastevalue, category, rationcard,
                Aadharno, district, age1, date, ivalue);
        }
    } else
        alert("NO XMLRequest Found ! Cannot proceed !");
}

function checkMeesevaCastevalid(meesevacastevalue, category, rationcard, Aadharno, district, age1, date, ivalue) {
    meesevacaste1 = meesevacastevalue;
    casteidvalue1 = category;
    rationcard1 = rationcard;
    /*Aadharno1 = Aadharno;
    district1 = district;*/
    age2 = age1;
    date1 = date;
    var meesevacasteno = document.getElementById(meesevacastevalue).value;
    var group = document.forms[0].elements["property(member_type)"].value;

    if (group === "G") {
        var caste_value = $(
                "select[name= 'property(category" + ivalue + ")'] :selected").text()
            .replace(/-/g, '');

    } else {
        var caste_value = $(
                "select[name= 'property(category)'] :selected").text()
            .replace(/-/g, '');
    }

    var caste_id = document.getElementById("category").value;

    if (meesevacasteno == "") {
        return false;
    }

    if (meesevacasteno.substring(0, 3) != "CGC" && meesevacasteno.substring(0, 3) != "CND" && meesevacasteno.substring(0, 3) != "OBC") {
        alert("Invalid Caste No.");
        document.getElementById(mseva_casteno).value = "";
        return false;
    }
    if (caste_id == "0" || caste_id == "") {
        alert("Select Caste");
        return false;
    }

    nxmlHTTP = new getXMLRequest();
    var url = "myajax.do?sid=" + Math.random() +
        "&mode=checkMeesevacasteno&meesevacasteno=" + meesevacasteno +
        "&caste=" + caste_value;

    if (nxmlHTTP) {
        nxmlHTTP.onreadystatechange = meesevacastenolist;
        nxmlHTTP.open("GET", url, true);
        nxmlHTTP.send(null);
    }

}

function meesevacastenolist() {

    if (!(nxmlHTTP.readyState == 4 || nxmlHTTP.readyState == "complete"))
        return;
    var xmldoc = getResponseData(nxmlHTTP);

    /*while (list.length > 0)
    	list.pop();*/
    if (xmldoc) {
        var val = xmldoc.getElementsByTagName("count")[0];
        var count = val.childNodes[0].nodeValue;
        var caste = xmldoc.getElementsByTagName("caste")[0];

        if (caste.childNodes[0].nodeValue != "") {
            var caste_value = caste.childNodes[0].nodeValue;
        }

        if (count == "0") {
            alert("The MeeSeva Caste Number  not a valid : ");
            document.getElementById(meesevacaste1).value = "";
            document.getElementById(casteidvalue1).readOnly = false;
        } else {
            var meesevadetails = count.split("$");

            var castename = meesevadetails[3];
            var group = document.forms[0].elements["property(member_type)"].value;
            var members = Number(document.forms[0].elements["property(noofgroupmembers)"].value);
            if (group === "G") {
                var caste_name = caste_value;
            } else {
                var caste_name = $("select[name='property(category)'] :selected")
                    .text().replace(/-/g, '');
            }

            if (document.forms[0].elements["property(corp_id)"].value == "20") {
                var caste_name = $("select[name='property(category)'] :selected")
                    .text().replace(/-/g, '');
                if (document.forms[0].elements["property(category)"].value == "0") {
                    alert("Select Caste");
                    document.getElementById(meesevacaste1).value = "";
                    document.forms[0].elements["property(category)"].focus();
                    return false;
                }
            }
            if (castename.search(caste_name) == -1) {

                alert("The MeeSeva Caste Number  not a Belongs to " +
                    caste_name + " Caste : " + castename);
                document.getElementById(meesevacaste1).value = "";
                return false;

            };
            var dcode;
            var dc = document.getElementById("district").value.length;
            if (dc == 1) {
                dcode = "0" + document.getElementById("district").value;
            } else {
                dcode = document.getElementById("district").value;
            }

            /*if(document.getElementById(date1).value=="") {
            	document.getElementById(date1).value = trim(meesevadetails[10]);
            	calculateAge(date1, age2);
            }*/
            /*alert(meesevadetails[1]);*/
            /*document.getElementById("mseva_casteno").value = meesevadetails[1];*/
            document.getElementById("sub_caste_name").value = meesevadetails[3];
            document.getElementById("address").value = meesevadetails[8];
            document.getElementById("beneficiary_adrs").value = "";

            document.getElementById("sub_caste_select").style.display = "none";
            document.getElementById("sub_caste_text").style.display = "";


        }
    } else
        alert("NO XMLRequest Found ! Cannot proceed !");
}

function getUnitcosts(obj) {

    var scheme = obj.value;
    var sector = $("#scheme_mh_id").val();
    var tagname = "unitcost";
    if (scheme == "" || scheme == "0" || sector == "408" || sector == "409") {
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "CommonAjax.do",
            dataType: "xml",
            data: { key: "getUnitcosts", scheme: scheme, tagname: tagname },
            success: function(data) {
                $(data).find(tagname).each(function() {
                    document.getElementById("min_unitcost").innerHTML = $(this).attr("scheme_min_unitcost");
                    document.getElementById("max_unitcost").innerHTML = $(this).attr("scheme_max_unitcost");
                    document.getElementById("scheme_min_unitcost").value = $(this).attr("scheme_min_unitcost");
                    document.getElementById("scheme_max_unitcost").value = $(this).attr("scheme_max_unitcost");
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Some errror occured : Try again");
            }
        });
    }
}

function getSubUnits() {
    var $subunit = $("#subunit");
    var $sector = $("#scheme_mh_id").val();
    var $scheme = $("#scheme_sh_id").val();
    var noofgroupmembers = $("#noofgroupmembers").val();
    var $beneficiary_type = "";
    if (noofgroupmembers == "1") {
        $beneficiary_type = "I";
    } else {
        $beneficiary_type = "G";
    }
    var tagname = "subunit";
    var $corp_id = $("#corp_id").val();
    $subunit.html('');
    addOption($subunit, "Select", "0");
    $("#other_scheme").val("");
    if ($sector == "0" || $scheme == "0") {
        return false;
    } else if ($sector == "408" || $sector == "409") {
        $("#subUnits1").show();
        $("#subUnits2").show();
        $("#other_scheme1").hide();
        $.ajax({
            type: "POST",
            url: "Ajax.do",
            dataType: "xml",
            data: { key: "getSubunits", sector: $sector, scheme: $scheme, tagname: tagname, beneficiary_type: $beneficiary_type, corp_id: $corp_id },
            success: function(data) {
                $(data).find(tagname).each(function() {
                    addOption($subunit, $(this).attr("name"), $(this).attr("id"));
                    document.getElementById("min_unitcost").innerHTML = 0;
                    document.getElementById("max_unitcost").innerHTML = 0;
                    document.getElementById("scheme_min_unitcost").value = 0;
                    document.getElementById("scheme_max_unitcost").value = 0;
                    $("#nsfdc_subsidy").val("0");
                    $("#beneficiaryshare").val("0");
                    $("#unitcost").val("0");
                    $("#bankloan").val("0");
                    $("#margin_money").val("0");
                    $("#totalcost").val("0");
                });

            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Some errror occured : Try again");
            }
        });
    } else {
        $("#subUnits1").hide();
        $("#subUnits2").hide();
    }
}

function getsubUnitcosts(obj) {
    var subunit = obj.value;
    var subunit_name = $(obj).find('option:selected').text();
    var scheme = $("#scheme_sh_id").val();
    var sector = $("#scheme_mh_id").val();
    var tagname = "unitcost";
    $("#other_scheme").val("");
    if (subunit == "" || subunit == "0") {
        return false;
    } else {
        if (subunit_name == "Others") {
            $("#other_scheme1").show();
            $("#other_scheme2").show();
        } else {
            $("#other_scheme1").hide();
            $("#other_scheme2").hide();
        }
        $.ajax({
            type: "POST",
            url: "Ajax.do",
            dataType: "xml",
            data: { key: "getsubUnitcosts", subunit: subunit, tagname: tagname },
            success: function(data) {
                $(data).find(tagname).each(function() {
                    document.getElementById("min_unitcost").innerHTML = $(this).attr("scheme_min_unitcost");
                    document.getElementById("max_unitcost").innerHTML = $(this).attr("scheme_max_unitcost");
                    document.getElementById("scheme_min_unitcost").value = $(this).attr("scheme_min_unitcost");
                    document.getElementById("scheme_max_unitcost").value = $(this).attr("scheme_max_unitcost");
                });
                $("#other_scheme").val("");
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Some errror occured : Try again");
            }
        });
    }
}

function getOthers() {
    var scheme = $("#scheme_sh_id").val();
    var sector = $("#scheme_mh_id").val();
    var scheme_name = $("#scheme_sh_id").find('option:selected').text();
    if (scheme_name == "Others") {
        $("#other_scheme1").show();
        $("#other_scheme2").show();
    } else {
        $("#other_scheme1").hide();
        $("#other_scheme2").hide();
    }
}

function getlandMandals(obj) {
    var $district = obj.value;
    var $mandal = $("#land_mandal");
    var tagname = "mandal";
    $mandal.html('');

    addOption($mandal, "Select", "0");
    if ($district == "0") {
        $("#land_panchayat").html('');
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "CommonAjax.do",
            dataType: "xml",
            data: { key: "getMandal", district: $district, tagname: tagname },
            success: function(data) {
                var $exist_ben = $(data).find(tagname);
                $(data).find(tagname).each(function() {
                    addOption($mandal, $(this).attr("name"), $(this).attr("id"));
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Some errror occured : Try again");
            }
        });

    }
}

function getLandPanchayaths(obj) {
    var $district = $("#land_district").val();
    var $mandal = obj.value;

    var $panchayat = $("#land_panchayat");
    var tagname = "panchayat";
    $panchayat.html('');
    addOption($panchayat, "Select", "0");
    if ($district == "0" || $mandal == "0") {
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "CommonAjax.do",
            dataType: "xml",
            data: { key: "getPanchayat", district: $district, mandal: $mandal, tagname: tagname },
            success: function(data) {
                var $exist_ben = $(data).find(tagname);

                $(data).find(tagname).each(function() {
                    addOption($panchayat, $(this).attr("name"), $(this).attr("id"));
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Some errror occured : Try again");
            }
        });
    }
}

function getPhysicallyHandicappedCertificate(obj) {
    var corp_id = $("#corp_id").val();
    var gender = document.getElementById("gender").checked;
    var gender1 = document.getElementById("gender1").checked;
    var gender2 = document.getElementById("gender2").checked;
    var phy_handicapped_value = obj.value;
    if (corp_id == "20") {
        if ((gender == false && gender1 == false && gender2 == true)) {
            //document.forms[0].elements["property(phyhandicap"+i+")"][0].checked = true;
        } else {
            if (phy_handicapped_value == "NO") {
                alert("Select only Physically Handicapped is Yes for Disabled Corporation");
                document.forms[0].elements["property(phyhandicap)"][0].checked = true;
                return false;
            }
        }
    }
    if (phy_handicapped_value == "YES") {
        document.getElementById("phy_handicapped_cert1").style.display = "";
        document.getElementById("phy_handicapped_cert2").style.display = "";
    } else if (phy_handicapped_value == "NO") {
        document.getElementById("phy_handicapped_cert1").style.display = "none";
        document.getElementById("phy_handicapped_cert2").style.display = "none";
        $("input[name='property(phy_handicapped_cert)']").val("");
        $("input[name='property(phc_cert_path)']").val("");
    }
}

function uploadCertificate(obj) {
    var vulner_group_value = $(obj).val();
    if (vulner_group_value != "0") {
        document.getElementById("safai_karmacharis_group_cert1").style.display = "";
        document.getElementById("safai_karmacharis_group_cert2").style.display = "";
    } else {
        document.getElementById("safai_karmacharis_group_cert1").style.display = "none";
        document.getElementById("safai_karmacharis_group_cert2").style.display = "none";
    }
}

function checkGender() {
    var corp_id = $("#corp_id").val();

    if (document.forms[0].elements["property(scheme_mh_id)"].value == "437" && corp_id == "2") {
        if (document.forms[0].elements["property(gender)"].value != 'F') {
            alert("Only Female members are eligible to apply in Land Purchase Sector ");
            document.getElementById("gender").checked = false;
            document.getElementById("gender2").checked = false;
            return false;
        }
    }

    var gender = document.getElementById("gender").checked;
    var gender1 = document.getElementById("gender1").checked;
    var gender2 = document.getElementById("gender2").checked;

    var casteid = $("#category").val();
    if (gender == false && gender1 == false && gender2 == true) {
        $("#transgender1").show();
        $("#transgender2").show();
    } else {
        $("#transgender1").hide();
        $("#transgender2").hide();
        $("#transgender_cert").val("");

    }
    if (corp_id == "20") {
        if (gender == false && gender1 == false && gender2 == true) {
            $("#sadaram_certificate_id").removeClass("required");
            $("#sadaram_certificate_id").removeClass("focus");
            datepick("datepicker" + id);
            $("#meeseva1").hide();
            $("#meeseva2").hide();
            $("mscasteno").val("");
            $("#sub_caste_th1").hide();
            $("#sub_caste_th2").hide();
            $("#sub_caste_name").val("");
            $("#mscasteno").removeClass("required");
            $("#mscasteno").removeClass("focus");
        } else if (!(casteid == "62" || casteid == "72") && ((gender == true && gender1 == false && gender2 == false) || (gender == false && gender1 == true && gender2 == false))) {
            $("#sadaram_certificate_id").addClass("required");
            $("#meeseva1").show();
            $("#sub_caste_th1").show();
            $("#mscasteno").addClass("required");
            document.forms[0].elements["property(phyhandicap)"][0].checked = true;
            var phy_handicapped_value = document.forms[0].elements["property(phyhandicap)"].value;
            if (phy_handicapped_value == "YES") {
                document.getElementById("phy_handicapped_cert1").style.display = "";
                document.getElementById("phy_handicapped_cert2").style.display = "";
            } else {
                document.getElementById("phy_handicapped_cert1").style.display = "none";
                document.getElementById("phy_handicapped_cert2").style.display = "none";
                $("input[name='property(phy_handicapped_cert)']").val("");
            }
        } else if ((casteid == "62" || casteid == "72") && ((gender == true && gender1 == false && gender2 == false) || (gender == false && gender1 == true && gender2 == false))) {
            $("#meeseva1").hide();
            $("#meeseva2").hide();
            $("#mscasteno").val("");
            $("#sub_caste_th1").hide();
            $("#sub_caste_th2").hide();
            $("#sub_caste_name").val("");
            $("#mscasteno").removeClass("required");
            $("#mscasteno").removeClass("focus");
            $("#sadaram_certificate_id").addClass("required");
            document.forms[0].elements["property(phyhandicap)"][0].checked = true;
            var phy_handicapped_value = document.forms[0].elements["property(phyhandicap)"].value;
            if (phy_handicapped_value == "YES") {
                document.getElementById("phy_handicapped_cert1").style.display = "";
                document.getElementById("phy_handicapped_cert2").style.display = "";
            } else {
                document.getElementById("phy_handicapped_cert1").style.display = "none";
                document.getElementById("phy_handicapped_cert2").style.display = "none";
                $("input[name='property(phy_handicapped_cert)']").val("");
            }
        }
    }

}

function validateSadaramNo(sadaram_no) {
    var sadaram_certificate_no = trim($("#sadaram_certificate_id").val());
    var sector_type_id = $("#sector_type_id").val();
    var sector = $("#scheme_mh_id").val();
    var corp_id = $("#corp_id").val();
    var tagname = "sadaram";
    if (sadaram_certificate_no == null || sadaram_certificate_no == "" || sadaram_certificate_no == "0") {
        alert("Please Enter sadaram Certificate No");
        $("#sadaram_certificate_id_" + i + "").focus();
        return false;
    }
    if (sadaram_certificate_no.length < 17) {
        alert("sadaram Certificate No Should be 17 digits");
        $("#sadaram_certificate_id").val("");
        $("#sadaram_certificate_id").focus();
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "CommonAjax.do",
            dataType: "xml",
            data: { key: "checkSadaramCertificateDetails", sadaram_certificate_no: sadaram_certificate_no, tagname: tagname, corp_id: corp_id },
            success: function(data) {
                var $exist_ben = $(data).find(tagname);

                $(data).find(tagname).each(function() {

                    if (($(this).attr("status")) == "already_exists") {
                        alert("Sadaram Certificate No. is already exists with the Beneficiary Id " + $(this).attr("ben_id"));
                        $("#" + sadaram_no + "").val("");
                        document.getElementById("sadaram_" + i + "").style.display = "";
                        document.getElementById("disable_type_row1" + i).style.display = "";
                        document.getElementById("disable_type_row2" + i).style.display = "";

                        document.getElementById("disable_percentage_row1").style.display = "";
                        document.getElementById("disable_percentage_row2").style.display = "";
                        document.getElementById("sub_disability_id_row1" + i + "").style.display = "";
                        document.getElementById("sub_disability_id_row2" + i + "").style.display = "";
                        document.getElementById("cause_of_disability_row1").style.display = "";
                        document.getElementById("cause_of_disability_row2").style.display = "";
                        document.getElementById("reassement_row1").style.display = "none";
                        document.getElementById("reassement_row2").style.display = "none";
                        document.forms[0].elements["property(disable_type)"].value = "";
                        document.forms[0].elements["property(disable_percent)"].value = "";
                        return false;
                    } else if (($(this).attr("status")) == "not_found") {
                        alert("Sadaram Certificate Number  not a valid");
                        $("#" + sadaram_no + "").val("");
                        document.getElementById("sadaram1").style.display = "";
                        document.getElementById("sadaram2").style.display = "";
                        document.getElementById("disable_type_row1").style.display = "";
                        document.getElementById("disable_type_row2").style.display = "";
                        document.getElementById("disable_type1").style.display = "none";
                        document.getElementById("disable_type2").style.display = "none";
                        document.getElementById("disable_percentage_row1").style.display = "";
                        document.getElementById("disable_percentage_row2").style.display = "";
                        document.getElementById("disable_percentage1").style.display = "none";
                        document.getElementById("disable_percentage2").style.display = "none";

                        document.getElementById("sub_disability_id_row1").style.display = "";
                        document.getElementById("sub_disability_id_row2").style.display = "";
                        document.getElementById("cause_of_disability_row1").style.display = "";
                        document.getElementById("cause_of_disability_row2").style.display = "";
                        document.getElementById("reassement_row1").style.display = "";
                        document.getElementById("reassement_row2").style.display = "";


                        document.forms[0].elements["property(disable_type)"].value = "";
                        document.forms[0].elements["property(disable_percent)"].value = "";
                        return false;
                    } else {
                        document.getElementById("sadaram1").style.display = "";
                        document.getElementById("sadaram2").style.display = "";
                        document.getElementById("disable_type_row1").style.display = "none";
                        document.getElementById("disable_type_row2").style.display = "none";
                        document.getElementById("disable_type1").style.display = "";
                        document.getElementById("disable_type2").style.display = "";


                        //$(".disable_percentage"+i+"").removeClass("required");
                        //$(".disableid"+i+"").removeClass("required");
                        document.getElementById("disable_percentage_row1").style.display = "none";
                        document.getElementById("disable_percentage_row2").style.display = "none";
                        document.getElementById("disable_percentage1").style.display = "";
                        document.getElementById("disable_percentage2").style.display = "";
                        document.getElementById("sub_disability_id_row1").style.display = "";
                        document.getElementById("sub_disability_id_row2").style.display = "";
                        document.getElementById("cause_of_disability_row1").style.display = "";
                        document.getElementById("cause_of_disability_row2").style.display = "";
                        document.getElementById("reassement_row1").style.display = "";
                        document.getElementById("reassement_row2").style.display = "";


                        document.forms[0].elements["property(disable_type)"].value = $(this).attr("disable_type");
                        document.forms[0].elements["property(disable_percent)"].value = $(this).attr("disable_percentage");

                        document.forms[0].elements["property(sub_disability_id)"].value = $(this).attr("sub_disability_id");

                        document.forms[0].elements["property(cause_of_disability)"].value = $(this).attr("cause_of_disability");

                        document.forms[0].elements["property(reassement)"].value = $(this).attr("reassement");

                    }
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert("Some errror occured : Try again");
            }
        });

    }
}

function valid_photo(obj) {
    var imgpath = obj;
    var upload_file = obj.value;

    if (upload_file == "") {
        alert("Upload Beneficiary Photo for Beneficiary " + i);
        return false;
    } else {

        var ext = upload_file.substring(upload_file.lastIndexOf('.') + 1).toLowerCase();

        if (ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif") {
            alert("Upload jpg or png or gif images only for Beneficiary Photo scanned copy.");
            imgpath.value = "";
            return false;
        }
    }
    if (!imgpath.value == "") {
        var img = imgpath.files[0].size;
        var imgsize = img / (1024);
        if (imgsize >= 200 || imgsize <= 50) {
            alert("File Size should be greater than 50KB and less than 200KB");
            imgpath.value = "";
            return false;
        }
    }

}

// mine ration card - WAP050500400097

// booking data- presscount=1&cnt=0&mobno=9381967704&gsmno=9494633833&pin=
//booking url - http://sancharsoft.bsnl.co.in/auction/vacant_nos/update_gsm_choice.asp


//pin submission
//url - http://sancharsoft.bsnl.co.in/auction/vacant_nos/update_gsm_choice.asp
//data - presscount=2&cnt=1&mobno=9640405005&gsmno=8985465441&pin=2780309

//search number
//search data - _search=true&nd=1561637381077&rows=500&page=1&sidx=gsmno&sord=desc&searchField=gsmno&searchString=9492&searchOper=bw&filters=
//search normal nmbr url - http://sancharsoft.bsnl.co.in/auction/vacant_nos/gsm_no_choice_load.asp
//search fancy nmbr - http://sancharsoft.bsnl.co.in/auction/vacant_nos/fancy_nos_load.asp?series=9494













//var proxyUrl - https://cors-anywhere.herokuapp.com


//rationcard search photo with number
//post url - https://epdsap.ap.gov.in/epdsAP/login/modalbody1.jsp
//data - rationcard=WAP0507034A0196