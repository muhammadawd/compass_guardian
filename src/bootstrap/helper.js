export const helper = {
  prepareObjectToSend: (request_data) => {
    return request_data;
  },
  hasAccessPermission: (permission) => {
    let user = JSON.parse(localStorage.getItem('auth_data'));
    if (permission == 'ALLOW_ALL') {
      return true
    } else if (user.permissions.includes(permission)) {

      return true;
    } else {

      return false;
    }
    // if (user.permissions.includes(permission)) return true;
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
  showMessage: (type, vm, message = '') => {
    vm.$vs.notify({
      icon: 'icon-alert-circle',
      iconPack: 'feather',
      horizontalAlign: 'center',
      verticalAlign: 'top',
      title: `${type == 'success' ? vm.$ml.get('success') : vm.$ml.get('error')}`,
      text: `${type == 'success' ? vm.$ml.get('success_msg') + message : vm.$ml.get('error_msg') + message}`,
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
        // console.log(input)
        document.getElementById(input + '_error').innerText = ' ';
      } catch (e) {

        console.log(e)
      }
    }
    for (const [key, value] of Object.entries(errors)) {
      try {
        // console.log(key)
        $(`#${key}_error`).text(value[0]);
        setTimeout(() => {
          document.getElementById(key + '_error').innerText = value[0];
        }, 300)
      } catch (e) {
        console.log(e)
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
          for (const [key, value] of Object.entries(validations)) {
            if (key == 'error_delete') vm.displayError = true;
          }
          window.helper.addErrors(vm.dataModel, validations);
        } catch (e) {

        }
        return;
      }
      if (error.response.status == 401) {
        vm.$router.push({name: 'login'})
        return;
      }

      if (error.response.status == 403) {
        vm.$router.push({name: 'pageError403'})
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
};
