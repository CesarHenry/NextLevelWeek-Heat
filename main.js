//PARA ALTERAR O CRACHÁ SOMENTE REALIZAR A TROCA NA VARIÁVEL LINKS
const links = {
  github: 'CesarHenry',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changesSocialMedia() {      
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`       
  }
}

changesSocialMedia()


function getGitHubProfile() {
  const url = `https://api.github.com/users/${links.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubProfile()