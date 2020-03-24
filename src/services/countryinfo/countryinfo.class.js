/* eslint-disable no-unused-vars */
exports.Countryinfo = class Countryinfo {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  // async get (id, params) {
  //   // return {
  //   //   id, text: `A new message with ID: ${id}!`
  //   // };
  // }

  async get(id){
    soapRequest(id);
    
    var soapResponse = '';
    function soapRequest(id) {
      let countrycode = `${id}`.toUpperCase();
      var str =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">' +
        '<soapenv:Header/>' +
        '<soapenv:Body>' +
        '<web:FullCountryInfo>' +
        '<web:sCountryISOCode>' + countrycode + '</web:sCountryISOCode>' +
        '</web:FullCountryInfo>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';

      function createCORSRequest(method, url) {

        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xhr = new XMLHttpRequest();

        if ('withCredentials' in xhr) {
          xhr.open(method, url, true);
        } else if (typeof XDomainRequest != 'undefined') {
          this.alert;
          xhr = new this.XDomainRequest();
          xhr.open(method, url);
        } else {
          console.log('CORS not supported');
          this.alert('CORS not supported');
          xhr = null;
        }
        return xhr;
      }
      var xhr = createCORSRequest(
        'POST',
        'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso'
      );
      if (!xhr) {
        console.log('XHR issue');
        return;
      }

      xhr.onload = function() {
        var results = xhr.responseText;
        console.log(results);
        return soapResponse = results;
      };

      xhr.setRequestHeader('Content-Type', 'text/xml');
      xhr.send(str);
      console.log(soapResponse);
      
    }
    console.log(soapResponse);
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
