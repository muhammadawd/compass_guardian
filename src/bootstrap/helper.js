export const helper = {
  prepareObjectToSend: (request_data) => {
    // return JSON.stringify(request_data).replace(/\\n/g, "\\n")
    //   .replace(/\\'/g, "\\'")
    //   .replace(/\\"/g, '\\"')
    //   .replace(/\\&/g, "\\&")
    //   .replace(/\\r/g, "\\r")
    //   .replace(/\\t/g, "\\t")
    //   .replace(/\\b/g, "\\b")
    //   .replace(/\\f/g, "\\f");
    // return this.JSON_to_URLEncoded(request_data)
    return request_data;
  },
  deleteMulti(ids, collection) {
    return _.dropWhile(collection, function (n) {
      return _.includes(ids, n.id);
    });
  },
  getTranslatedData(model, l = 'ar') {
    let lang = _.map(model.details, function (o) {
      if (o.lang == l) return o;
    });
    lang = _.without(lang, undefined);
    return lang[0];
  },
  JSON_to_URLEncoded(element, key, list) {
    var list = list || [];
    if (typeof (element) == 'object') {
      for (var idx in element)
        JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
    } else {
      list.push(key + '=' + encodeURIComponent(element));
    }
    return list.join('&');
  },
  showMessage: (type, vm) => {
    vm.$vs.notify({
      icon: 'icon-alert-circle',
      iconPack: 'feather',
      horizontalAlign: 'center',
      verticalAlign: 'top',
      title: `${type == 'success' ? vm.$ml.get('success') : vm.$ml.get('error')}`,
      text: `${type == 'success' ? vm.$ml.get('success_msg') : vm.$ml.get('error_msg')}`,
      color: type
    });
  },
  validationGroupingData: (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  },
  addErrors: (inputs, errors) => {
    for (let input in inputs) {
      try {
        document.getElementById(input + '_error').innerText = ' ';
      } catch (e) {

      }
    }
    for (const [key, value] of Object.entries(errors)) {
      try{
      console.log(key)
        $(`#${key}_error`).text(value[0]);
        document.getElementById(key + '_error').innerText = value[0];
      } catch (e) {
      }
    }
  },
  handleError: (error, vm) => {
    // request error cause of offline using
    if (!navigator.onLine) return;

    if (error.response) {
      // The request was made and the server responded with a status code

      if (error.response.status == 422) {
        // let validations = window.helper.validationGroupingData(error.response.data.data, 'param');
        let validations = error.response.data.data.validation_errors;
        try {
          window.helper.addErrors(vm.dataModel, validations);
        } catch (e) {

        }
        return;
      }

      vm.$vs.notify({
        icon: "ti-info",
        horizontalAlign: 'center',
        verticalAlign: 'top',
        title: `Server Error Code : ${error.response.status}`,
        message: `${error.response.data.message}`,
        type: 'danger'
      });
      // console.log(error.response.data, error.response.status, error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      vm.$vs.notify({
        icon: "ti-info",
        horizontalAlign: 'center',
        verticalAlign: 'top',
        title: `${vm.$ml.get('error')}`,
        message: `No Response From Server`,
        type: 'danger'
      });
      // console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      vm.$vs.notify({
        icon: "ti-info",
        horizontalAlign: 'center',
        verticalAlign: 'top',
        title: `${vm.$ml.get('error')}`,
        message: error.message,
        type: 'danger'
      });
      // console.log('Error', error.message);
    }
  }
}
