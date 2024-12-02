//onload BETA
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('cx-msl-button');
    const toggleContent_msl = document.getElementById('Select2_MSL');
	const toggleContent_cx = document.getElementById('Select2_CXD');

    // Retrieve the saved visibility state or default to "visible"
    const isVisible = localStorage.getItem('isVisible') !== 'false'; // Default true

    // Set the initial visibility based on the saved state
    toggleContent_msl.style.display = isVisible ? 'block' : 'none';
	toggleContent_cx.style.display = isVisible ? 'none' : 'block';
    document.getElementById('betatab').innerHTML= isVisible ? 'βLAN MSL' : 'βLAN CX';
	document.getElementById('cx-msl-button').innerHTML= isVisible ? 'CX' : 'MSL';

    toggleButton.addEventListener('click', () => {
        // Toggle the display of the content
        if (toggleContent_msl.style.display === 'none') {
            toggleContent_msl.style.display = 'block';
            toggleContent_cx.style.display = 'none';
			document.getElementById('betatab').innerHTML="βLAN MSL";
			document.getElementById('cx-msl-button').innerHTML="CX";
			
			localStorage.setItem('isVisible', 'true');
			
			
        } else {
            toggleContent_msl.style.display = 'none';
            toggleContent_cx.style.display = 'block';
			localStorage.setItem('isVisible', 'false');
			document.getElementById('betatab').innerHTML="βLAN CX";
			document.getElementById('cx-msl-button').innerHTML="MSL";
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // Load the saved active tab from localStorage
    const activeTab = localStorage.getItem('activeTab') || 'tab1'; // Default to tab1
    activateTab(activeTab);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Get the data-tab attribute for the selected tab
            const selectedTab = tab.dataset.tab;

            // Activate the clicked tab
            activateTab(selectedTab);

            // Save the selected tab in localStorage
            localStorage.setItem('activeTab', selectedTab);
        });
    });

    function activateTab(tabId) {
        // Remove active classes from all tabs and contents
        tabs.forEach(item => item.classList.remove('active-tab'));
        contents.forEach(item => item.classList.remove('active-content'));

        // Add active classes to selected tab and corresponding content
        document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active-tab');
        document.getElementById(tabId).classList.add('active-content');
    }
});



function Gotolink(){
	
beta_detail_list();

const aa=document.getElementById('betatab').innerHTML;

if (aa== "βLAN CX") {

 newwindowlink= "https://162-lan-admin-legacy.hub-beta.linecorp.com/help"+b_cx+c+"/"+a+"/helpArticleViewNew.nhn?articleSequence="+d;
   
} else {

newwindowlink= "https://162-lan-admin-legacy.hub-beta.linecorp.com/help"+b+c+"/"+a+"/helpArticleViewNew.nhn?articleSequence="+d;

}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

 
}

function Gotolink_real(){
	
real_detail_list();

newwindowlink= "https://162-lan-admin-legacy.hub.linecorp.com/help"+b1+c1+"/"+a1+"/helpArticleViewNew.nhn?articleSequence="+d1;

  

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

 
}


 

document.getElementById('open-link').addEventListener('click', () => {
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
chrome.tabs.update(tabs[0].id, { url: "https://liam-hub.hub-beta.linecorp.com/" });
});
});

document.getElementById('open-link-real').addEventListener('click', () => {
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
chrome.tabs.update(tabs[0].id, { url: "https://liam-hub.hub.linecorp.com/" });
});
});



document.getElementById('open1').addEventListener('click', () => {
Gotolink();
});

document.getElementById('open1_real').addEventListener('click', () => {
Gotolink_real();
});



document.getElementById('preview_beta_smartphone').addEventListener('click', () => {
Preview_beta_smartphone();
});

document.getElementById('preview_real_smartphone').addEventListener('click', () => {
Preview_real_smartphone();
});


document.getElementById('preview_beta_PC').addEventListener('click', () => {
Preview_beta_PC();
});

document.getElementById('preview_real_PC').addEventListener('click', () => {
Preview_real_PC();
});

document.getElementById('search1').addEventListener('click', () => {
search_beta();
});

document.getElementById('search1_real').addEventListener('click', () => {
search_real();
});



//*****************************************************************************

	  
 //////////////////////////For local storage/////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const inputFields = [
        document.getElementById('Select1'),
		document.getElementById('Select1_CXD_real'),
        document.getElementById('Select2_MSL'),
		document.getElementById('Select2_CXD'),
		document.getElementById('Select2_CXD_real'),
        document.getElementById('Select3'),
		document.getElementById('Select3_CXD_real'),
        document.getElementById('SearchReal'),
        document.getElementById('ContentID'),
		document.getElementById('ContentID_real')
    ];

    // Load saved values for each input field
    inputFields.forEach((inputField, index) => {
        const savedValue = localStorage.getItem(`input${index + 1}`);
        if (savedValue !== null) {
            inputField.value = savedValue;
        }
    });

    // Save the value of each input field when it changes
    inputFields.forEach((inputField, index) => {
        inputField.addEventListener('input', () => {
            localStorage.setItem(`input${index + 1}`, inputField.value);
        });
    });
});




function beta_detail_list()
{
	
	d=document.getElementById("ContentID").value;

//language
       combo1 = document.getElementById("Select1");
      switch (combo1.selectedIndex) {
        case 0:
          a = "ja";
         break;
        case 1:
          a = "en";
         
          break;
        case 2:
          a = "zh-Hant";
         
          break;
        case 3:
          a = "zh-Hans";
         
          break;
        case 4:
          a = "id";
         
          break;
        case 5:
          a = "es";
         
          break;
        case 6:
          a = "ko";
         
          break;
        case 7:
          a = "th";
         
          break;
       
      }

  //service
     combo2 = document.getElementById("Select2_MSL");
      switch (combo2.selectedIndex) {
case 0: b="/line"; break;
case 1: b="/creators"; break;
case 2: b="/usersticker"; break;
case 3: b="/LINEMusic"; break;
case 4: b="/LINE_LIVE"; break;
case 5: b="/LINELIVE"; break;
case 6: b="/linepoints"; break;
case 7: b="/webstore"; break;
case 8: b="/business_id"; break;
case 9: b="/line_at_application"; break;
case 10: b="/line_at_id"; break;
case 11: b="/line_reserve_management"; break;
case 12: b="/line_at_th"; break;
case 13: b="/official_account"; break;
case 14: b="/official_account_jp"; break;
case 15: b="/official_account_tw"; break;
case 16: b="/official_account_th"; break;
case 17: b="/official_account_id"; break;
case 18: b="/admanager"; break;
case 19: b="/admanager_tw"; break;
case 20: b="/admanager_th"; break;
case 21: b="/linemanga"; break;
case 22: b="/lbdmanga"; break;
case 23: b="/LINKME"; break;
case 24: b="/B612"; break;
case 25: b="/looks"; break;
case 26: b="/coupon_book"; break;
case 27: b="/line_notify"; break;
case 28: b="/linecamera2"; break;
case 29: b="/line_antivirus"; break;
case 30: b="/Foodie"; break;
case 31: b="/FoodieChina"; break;
case 32: b="/BitBox"; break;
case 33: b="/BitMax"; break;
case 34: b="/LINEBlockchainWallet"; break;
case 35: b="/BITMAX_Wallet"; break;
case 36: b="/DCONNECT"; break;
case 37: b="/line_list"; break;
case 38: b="/TRIVIAGO"; break;
case 39: b="/linepay_jp"; break;
case 40: b="/GlobalNFTWallet"; break;
case 41: b="/DosiBrandStore"; break;
case 42: b="/DOSI_Citizen";break;
case 43: b="/linemusic_for_artists";break;

}

//for CX
combo2_cx = document.getElementById("Select2_CXD");
switch (combo2_cx.selectedIndex) {

case 0: b_cx="/line"; break;
case 1: b_cx="/linespcampaign"; break;
case 2: b_cx="/creators"; break;
case 3: b_cx="/usersticker"; break;
case 4: b_cx="/LINEMusic"; break;
case 5: b_cx="/LINEInsurance"; break;
case 6: b_cx="/kakeibo"; break;
case 7: b_cx="/ticketapp"; break;
case 8: b_cx="/CONOMI"; break;
case 9: b_cx="/Pasha"; break;
case 10: b_cx="/STEP"; break;
case 11: b_cx="/odekake_now"; break;
case 12: b_cx="/lineflyer"; break;
case 13: b_cx="/LINE_LIVE"; break;
case 14: b_cx="/LINELIVE"; break;
case 15: b_cx="/ClovaJP"; break;
case 16: b_cx="/clovaauto"; break;
case 17: b_cx="/linefortune"; break;
case 18: b_cx="/linefortune_chat"; break;
case 19: b_cx="/Charmmy"; break;
case 20: b_cx="/TalkCARE"; break;
case 21: b_cx="/ask_lawer"; break;
case 22: b_cx="/LINE_Healthcare"; break;
case 23: b_cx="/LINE_Healthcare_CMS"; break;
case 24: b_cx="/linepoints"; break;
case 25: b_cx="/webstore"; break;
case 26: b_cx="/lineinvest"; break;
case 27: b_cx="/line_travel"; break;
case 28: b_cx="/line_shopping"; break;
case 29: b_cx="/line_shopping_for_partners"; break;
case 30: b_cx="/business_id"; break;
case 31: b_cx="/line_at_application"; break;
case 32: b_cx="/line_at_id"; break;
case 33: b_cx="/line_reserve_management"; break;
case 34: b_cx="/line_at_th"; break;
case 35: b_cx="/official_account"; break;
case 36: b_cx="/official_account_jp"; break;
case 37: b_cx="/official_account_tw"; break;
case 38: b_cx="/official_account_th"; break;
case 39: b_cx="/official_account_id"; break;
case 40: b_cx="/admanager"; break;
case 41: b_cx="/admanager_tw"; break;
case 42: b_cx="/admanager_th"; break;
case 43: b_cx="/linemanga"; break;
case 44: b_cx="/lbdmanga"; break;
case 45: b_cx="/linemanga_chweb"; break;
case 46: b_cx="/LINENovel"; break;
case 47: b_cx="/line_blog2"; break;
case 48: b_cx="/line_friends_store"; break;
case 49: b_cx="/linebaito"; break;
case 50: b_cx="/linebaito_cms"; break;
case 51: b_cx="/LINECareer"; break;
case 52: b_cx="/link_me"; break;
case 53: b_cx="/B612"; break;
case 54: b_cx="/looks"; break;
case 55: b_cx="/coupon_book"; break;
case 56: b_cx="/line_notify"; break;
case 57: b_cx="/linecamera2"; break;
case 58: b_cx="/line_antivirus"; break;
case 59: b_cx="/Foodie"; break;
case 60: b_cx="/FoodieChina"; break;
case 61: b_cx="/BitBox"; break;
case 62: b_cx="/BitMax"; break;
case 63: b_cx="/Disney"; break;
case 64: b_cx="/line_delima"; break;
case 65: b_cx="/DCONNECT"; break;
case 66: b_cx="/linetaxi"; break;
case 67: b_cx="/line_list"; break;
case 68: b_cx="/TRIVIAGO"; break;
case 69: b_cx="/4CAST"; break;
case 70: b_cx="/line_pocketmoney"; break;
case 71: b_cx="/line_score"; break;
case 72: b_cx="/LINESecurities"; break;
case 73: b_cx="/LINEReservationKR"; break;
case 74: b_cx="/LINEBlockchainWallet"; break;
case 75: b_cx="/BITMAX_Wallet"; break;
case 76: b_cx="/linepay_jp"; break;
case 77: b_cx="/mysmartstore"; break;    
case 78: b_cx="/mysmartstore_for_biz"; break;
case 79: b_cx="/GlobalNFTWallet"; break;    
case 80: b_cx="/NFTSVC"; break;    
case 81: b_cx="/DosiBrandStore"; break;
case 82: b_cx="/DOSI_Citizen";break;
case 83: b_cx="/LINEgift_BusinessSupport"; break;
case 84: b_cx="/LINEgift_BS_Regulation";break;

}


      

//device
combo3 = document.getElementById("Select3");
      switch (combo3.selectedIndex) {
          case 0:
        c = "/smartphone";
          break;
	case 1:
        c = "/desktop";
          break;
	
	case 2:
        c = "/ios";
          break;
        case 3:
         c = "/android";
          break;
        case 4:
          c = "/IOSSecondary";
          break;
        case 5:
          c = "/win";
          break;
        case 6:
          c = "/mac";
          break;
        case 7:
          c = "/chrome";
          break;
        case 8:
          c = "/web";
          break;
      }
	
	
	helpcheckbetacountry = document.getElementById("countrybeta");
      switch (helpcheckbetacountry.selectedIndex) {

        case 0:
          e = "JA";
          break;

        case 1:
          e = "TH";
          break;

        case 2:
          e = "TW";
          break;

        case 3:
          e = "CN";
          break;

        case 4:
          e = "IN";
          break;

        case 5:
          e = "KO";
          break;
	
}

}

//real list

function real_detail_list()
{
	
	d1=document.getElementById("ContentID_real").value;

//language
       combo1_real = document.getElementById("Select1_CXD_real");
      switch (combo1_real.selectedIndex) {
        case 0:
          a1 = "ja";
          
          break;
        case 1:
          a1 = "en";
          
          break;
        case 2:
          a1 = "zh-Hant";
          
          break;
        case 3:
          a1 = "zh-Hans";
          
          break;
        case 4:
          a1 = "id";
          
          break;
        case 5:
          a1 = "es";
          
          break;
        case 6:
          a1 = "ko";
          
          break;
        case 7:
          a1 = "th";
          
          break;
       
      }

  //service
     combo2_real = document.getElementById("Select2_CXD_real");
      switch (combo2_real.selectedIndex) {
case 0: b1="/line"; break;
case 1: b1="/linespcampaign"; break;
case 2: b1="/creators"; break;
case 3: b1="/usersticker"; break;
case 4: b1="/LINEMusic"; break;
case 5: b1="/card"; break;
case 6: b1="/LINEInsurance"; break;
case 7: b1="/kakeibo"; break;
case 8: b1="/ticketapp"; break;
case 9: b1="/CONOMI"; break;
case 10: b1="/Pasha"; break;
case 11: b1="/STEP"; break;
case 12: b1="/odekake_now"; break;
case 13: b1="/lineflyer"; break;
case 14: b1="/LINE_LIVE"; break;
case 15: b1="/LINELIVE"; break;
case 16: b1="/ClovaJP"; break;
case 17: b1="/clovaauto"; break;
case 18: b1="/linefortune"; break;
case 19: b1="/linefortune_chat"; break;
case 20: b1="/Charmmy"; break;
case 21: b1="/TalkCARE"; break;
case 22: b1="/ask_lawer"; break;
case 23: b1="/LINE_Healthcare"; break;
case 24: b1="/LINE_Healthcare_CMS"; break;
case 25: b1="/linepoints"; break;
case 26: b1="/webstore"; break;
case 27: b1="/lineinvest"; break;
case 28: b1="/line_travel"; break;
case 29: b1="/line_shopping"; break;
case 30: b1="/line_shopping_for_partners"; break;
case 31: b1="/business_id"; break;
case 32: b1="/line_at_application"; break;
case 33: b1="/line_at_id"; break;
case 34: b1="/line_reserve_management"; break;
case 35: b1="/line_at_th"; break;
case 36: b1="/official_account"; break;
case 37: b1="/official_account_jp"; break;
case 38: b1="/official_account_tw"; break;
case 39: b1="/official_account_th"; break;
case 40: b1="/official_account_id"; break;
case 41: b1="/admanager"; break;
case 42: b1="/admanager_tw"; break;
case 43: b1="/admanager_th"; break;
case 44: b1="/linemanga"; break;
case 45: b1="/lbdmanga"; break;
case 46: b1="/linemanga_chweb"; break;
case 47: b1="/LINENovel"; break;
case 48: b1="/line_blog2"; break;
case 49: b1="/line_friends_store"; break;
case 50: b1="/linebaito"; break;
case 51: b1="/linebaito_cms"; break;
case 52: b1="/LINECareer"; break;
case 53: b1="/link_me"; break;
case 54: b1="/B612"; break;
case 55: b1="/looks"; break;
case 56: b1="/coupon_book"; break;
case 57: b1="/line_notify"; break;
case 58: b1="/linecamera2"; break;
case 59: b1="/line_antivirus"; break;
case 60: b1="/Foodie"; break;
case 61: b1="/FoodieChina"; break;
case 62: b1="/BitBox"; break;
case 63: b1="/BitMax"; break;
case 64: b1="/Disney"; break;
case 65: b1="/line_delima"; break;
case 66: b1="/DCONNECT"; break;
case 67: b1="/linetaxi"; break;
case 68: b1="/line_list"; break;
case 69: b1="/TRIVIAGO"; break;
case 70: b1="/4CAST"; break;
case 71: b1="/line_pocketmoney"; break;
case 72: b1="/line_score"; break;
case 73: b1="/LINESecurities"; break;
case 74: b1="/LINEReservationKR"; break;
case 75: b1="/LINEBlockchainWallet"; break;
case 76: b1="/BITMAX_Wallet"; break;
case 77: b1="/linepay_jp"; break;
case 78: b1="/mysmartstore"; break;    
case 79: b1="/mysmartstore_for_biz"; break;    
case 80: b1="/GlobalNFTWallet"; break;
case 81: b1="/NFTSVC"; break;
case 82: b1="/DosiBrandStore"; break;
case 83: b1="/DOSI_Citizen";break;
case 84: b1="/LINEgift_BusinessSupport"; break;
case 85: b1="/LINEgift_BS_Regulation";break;

}
      

//device
combo3_real = document.getElementById("Select3_CXD_real");
      switch (combo3_real.selectedIndex) {
          case 0:
        c1 = "/smartphone";
          break;
	case 1:
        c1 = "/desktop";
          break;
	
	case 2:
        c1 = "/ios";
          break;
        case 3:
         c1 = "/android";
          break;
        case 4:
          c1 = "/IOSSecondary";
          break;
        case 5:
          c1 = "/win";
          break;
        case 6:
          c1 = "/mac";
          break;
        case 7:
          c1 = "/chrome";
          break;
        case 8:
          c1 = "/web";
          break;
      }
	
	
	helpcheckbetacountry_real = document.getElementById("countryreal");
      switch (helpcheckbetacountry_real.selectedIndex) {

        case 0:
          e1 = "JA";
          break;

        case 1:
          e1 = "TH";
          break;

        case 2:
          e1 = "TW";
          break;

        case 3:
          e1 = "CN";
          break;

        case 4:
          e1 = "IN";
          break;

        case 5:
          e1 = "KO";
          break;
	
}

}



function Preview_beta_smartphone(){

beta_detail_list();	

newwindowlink= "https://help.line-beta.me"+b+c+"/sp?contentId="+d+"&lang="+a+"&country="+e;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

}


function Preview_real_smartphone(){

real_detail_list();	

newwindowlink= "https://help.line.me"+b1+c1+"/sp?contentId="+d1+"&lang="+a1+"&country="+e1;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

}


function Preview_beta_PC(){

beta_detail_list();	

newwindowlink= "https://help.line-beta.me"+b+c+"/?contentId="+d+"&lang="+a+"&country="+e;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

}


function Preview_real_PC(){

real_detail_list();	

newwindowlink= "https://help.line.me"+b1+c1+"/?contentId="+d1+"&lang="+a1+"&country="+e1;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

}


function search_beta(){

var seachbeta=document.getElementById('SearchBeta').value;

newwindowlink= "https://162-lan-admin-legacy.hub-beta.linecorp.com/help/line/smartphone/th/searchResultNew.nhn?q="+seachbeta;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

}

function search_real(){

var seachreal=document.getElementById('SearchReal').value;

newwindowlink= "https://162-lan-admin-legacy.hub.linecorp.com/help/line/smartphone/th/searchResultNew.nhn?q="+seachreal;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: newwindowlink });

});

}



