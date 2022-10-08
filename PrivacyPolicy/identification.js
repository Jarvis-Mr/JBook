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
    ClockWidget: "",
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
    ClockWidget: "",
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
    ClockWidget: "Clock Widget",
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
