var app = new Vue({
    el: '#random',
    data: {
      userName: 'John Doe',
      userCountry: 'Canada',
      userDOB: '1998-09-17',
      userAge: '22',
      userEmail: 'jdoe@iu.edu',
      userImgLarge:'',
      userImgThumb:'',
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
          this.userDOB = userData.dob.date.slice(0,10)
          this.userAge = userData.dob.age
          this.userEmail = userData.email
          this.userImgLarge = userData.picture.large;
          this.userImgThumb = userData.picture.thumbnail;
        })
        .catch((error)=>{
          console.error('Error:',error);
          fetch('./JSON/randomuser.me-sample.json')
          .then(response => response.json())
          .then(data =>  {
            var userData =data.results[0];
            console.log(userData);
            this.userName = userData.name.first + " " + userData.name.last;
            this.userCountry = userData.location.country
            this.userDOB = userData.dob.date.slice(0,10)
            this.userAge = userData.dob.age
            this.userEmail = userData.email
            this.userImgLarge = userData.picture.large;
            this.userImgThumb = userData.picture.thumbnail;
          })
        });
      }}
  })