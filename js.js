const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: '53115',
            client_secret: 'afbfa66ab8ab19f9e7e192707ce7ce8586dd8e09',
            refresh_token: '0558f35b39536a20ee6d1bbcc7f7ef4f6a59ca80',
            grant_type: 'refresh_token'
        })
    })
    .then(res => getActivites(res))
      
}

reAuthorize()



/*var authLink = 'https://www.strava.com/oauth/token';

  var getActivities = function (res) {
    var activitiesLink = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + res.access_token;
    fetch(activitiesLink)
      .then(function (res) {
        console.log('res: ', res.json());
      })
  }


  var reauthorize = function (refreshToken) {
    fetch(authLink, {
      scope: 'activity:read_all',
      response_type: 'code',
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: '53115',
        client_secret: 'afbfa66ab8ab19f9e7e192707ce7ce8586dd8e09',
        refresh_token: refreshToken, // '0558f35b39536a20ee6d1bbcc7f7ef4f6a59ca80',
        grant_type: 'refresh_token'
      })
    }).then(function (res) {
      console.log('reauth1: ', res);

      return res.json()
    }).then(function (res) {
      console.log('reauth2: ', res);
      return getActivities(res);
    })
  }


  var getRefreshToken = function () {
    fetch(authLink, {
      method: 'POST',
      mode: 'cors',
      scope: 'activity:read_all',
      response_type: 'code',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          client_id: '53115',
          client_secret: 'afbfa66ab8ab19f9e7e192707ce7ce8586dd8e09',
          code: 'fdb2835347cd25a022261a13712a5583b6696f3d', //AUTHORIZATIONCODE
          grant_type: 'authorization_code'
        })

      })
      .then(
        function (res) {
          console.log('refresh_token:', res.refresh_token);
          reauthorize(res.refresh_token);
        }
      )
  }

  getRefreshToken();
*/
