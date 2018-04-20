export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.getMessages();
  }

  getMessages(){
    // view model
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function(result){
      vm.messages = result.data;
    });
  }
  // Use angular http service to post data to the url
  postMessage(){
    this.$http.post('http://localhost:5000/api/message', {msg: this.message});
  }



}
