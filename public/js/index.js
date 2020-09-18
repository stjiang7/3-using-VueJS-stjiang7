var app = new Vue({
    el: '#random',
    data: {
      userName: 'John Doe',
      userEmail: 'jdoe@iu.edu',
    },
    created() {
      this.fetchUser();
    },

    methods: {
      fetchUser: function() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data =>  {
          var userData =data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userCountry = userData.location.country
          this.userDOB = userData.dob.date[0,9]
          this.userAge = userData.dob.age
          this.userEmail = userData.email
        })
      }}
  })