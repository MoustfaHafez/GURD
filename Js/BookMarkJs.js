

var SiteID = document.getElementById('SiteID');
var SiteURL = document.getElementById('SiteURL');
var Btn = document.getElementById('Btn');
var DIS = document.getElementById('DIS');
var IDValidation = document.getElementById('IDValidation');
var URLValidation = document.getElementById('URLValidation');
var tableContent = document.getElementById('tableContent');

var websitelist = [];




////////////////////////////////////////////////////////////////////////////


Btn.onclick = function () {


    if (ISsValidURL() == true && IsSiteIDValid() == true) {
        AddWebSite();
        // URLValidation.innerHTML = '';
        // IDValidation.innerHTML = '';
       
    }
    else {
        DataIsNotValid();
    }

    Displaywebsite();
    ClearForm();
}




function AddWebSite() {

    var Website =
    {
        ID: SiteID.value,
        URL: SiteURL.value
    }

    if( ! IsWebSiteExist())
    {
        websitelist.push(Website);
        swal("Added", "", "success");
    }
    else
    {
        swal("WebsiteIsRepeated", "", "info");
    }

}



function IsWebSiteExist()
{

    var Website =
    {
        ID:  SiteID.value,
        URL: SiteURL.value
    }


    for(var i=0;i<websitelist.length;i++)
    {
        if(websitelist[i].ID==Website.ID && websitelist[i].URL==Website.URL)
        {
           return 1;
        }
    }

    return 0;
}




function Displaywebsite() {
    var box = '';

    for (var i = 0; i < websitelist.length; i++) {
        box += `
        <tr>
        <td>${i}</td>
        <td>${websitelist[i].ID}</td>
        <td>

        <a href="${websitelist[i].URL}" target="_blank">
            <button type="submit" class="btn btn-info px-3" id="Btn">Visit</button>
        </a>
       </td>

        <td>
        <button type="submit" class="btn btn-danger px-3" id="Del" onclick="Delete(${i})">Delete</button>
        </td>
        
        </tr>
          
        `
    }


    tableContent.innerHTML = box;

}

function Delete(index) {
    websitelist.splice(index, 1);
    Displaywebsite();
}


function ClearForm() {

    SiteID.value = '';
    SiteURL.value = '';
}



function IsSiteIDValid() {
    var regex = /^[A-Z]/;
    return regex.test(SiteID.value);
}


function ISsValidURL() {
    var urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return urlRegex.test(SiteURL.value);
}




function DataIsNotValid() {
    if (IsSiteIDValid() == false) {
        if (SiteID.value == '') {
            // IDValidation.innerHTML = 'input required'
            swal("Input Required", "", "info")
        }
        else {
            IDValidation.innerHTML = 'not match'
            swal("Not match", "", "error")
        }
    }

    if (ISsValidURL() == false) {
        if (SiteURL.value == '') {
            // URLValidation.innerHTML = 'input required'
            swal("Input Required", "", "info");
        }
        else {
            // URLValidation.innerHTML = 'not match';
            swal("Not match", "", "error");

        }
    }

}


