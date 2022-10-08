window.onload = function () {
  function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return false;
  }

  let companyList = {
    HomeOSVensi: "威士丹利智能科技有限公司",
  };

  let company = document.getElementsByClassName("company");
  let companyName = getQueryString("identification");

  for (var i = 0; i < company.length; i++) {
    if (!companyList[companyName]) {
      company[i].innerHTML = companyList.HomeOSCommon;
    } else {
      company[i].innerHTML = companyList[companyName];
    }
  }

  let phoneObj = {
    HomeOSVensi: "0752-2166072",
  };

  let phones = document.getElementsByClassName("phone");

  for (var i = 0; i < phones.length; i++) {
    if (!phoneObj[companyName]) {
      phones[i].innerHTML = phoneObj.HomeOSCommon;
    } else {
      phones[i].innerHTML = phoneObj[companyName];
    }
  }

  let appNameObj = {
    HomeOSVensi: "威士丹利智能",
  };

  let appNames = document.getElementsByClassName("appName");

  for (var i = 0; i < appNames.length; i++) {
    if (!appNameObj[companyName]) {
      appNames[i].innerHTML = appNameObj.HomeOSCommon;
    } else {
      appNames[i].innerHTML = appNameObj[companyName];
    }
  }
};
