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
