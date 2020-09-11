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

            client_id: '***',
            client_secret: '***',
            refresh_token: '***',
            grant_type: 'refresh_token'
        })
    })
    .then(res => {
        console.log('res', res);
        getActivites(res))
    }
      
}

reAuthorize()
