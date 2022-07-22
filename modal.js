const portfolioDetails = [
    {
      id:1,
      name: 'Tonic',
      description: "A daily selection of privately personalized reads; no accounts or  sign-ups required",
      moreDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: 'images/card4.png',
      mobileImg: 'images/photo1.png',
      technologies: ['html','css','ruby','javascript'],
      Tags: ['Canopy','Back End Dev','2015'],
      tagsImg: ['dot.png','dot.png'],
      liveLink:['#'],
      sourceLink:['#']
      
    },
    {
      id:2,
      name: 'Multi-Post Stories',
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming theirfriends.",
      moreDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: 'images/card.png',
      mobileImg: 'images/photo2.png',
      technologies: ['html','css','ruby','javascript'],
      Tags: ['Facebook','Full Stack Dev','2015'],
      tagsImg: ['dot.png','dot.png'],
      liveLink:['#'],
      sourceLink:['#']
      
     
    },
    {
      id:3,
      name: 'Facebook 360',
      description: " Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear   VR..",
      moreDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: 'images/card1.png',
      mobileImg: 'images/photo3.png',
      technologies: ['html','css','ruby','javascript'],
      Tags: ['Facebook','Full Stack Dev','2015'],
      tagsImg: ['dot.png','dot.png'],
      liveLink:['#'],
      sourceLink:['#']
    },
    {
      id:4,
      name: 'Uber Navigation',
      description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
      moreDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: 'images/card2.png',
      mobileImg: 'images/photo4.png',
      technologies: ['html','css','ruby','javascript'],
      Tags: ['Uber','Lead Developer','2015'],
      tagsImg: ['images/dot.png','dot.png'],
      liveLink:['#'],
      sourceLink:['#']
      
    }
  ]
  const container =document.querySelector('#projects-section');
  const pop = document.querySelector('.try-me');

function createCards () {
portfolioDetails.forEach((item) => {
  container.innerHTML += 
 `<div class="left1">
  <div class="project-card">
    <div class="snap1"><img src="${item.img}"></div>
  </div>
  <div class="left-block">
    <h2 class="head">${item.name}</h2>
    <div class="card-detail-box">
      <ul>
        <li class="card-detail canopy">${item.Tags[0]}</li>
        <li class="card-detail option">
          <img src="images/bullets.png" alt="bullet" class="circle" />
          ${item.Tags[0]}
        </li>
        <li class="card-detail option">
          <img src="images/bullets.png" alt="bullet" class="circle" />
          2015
        </li>
      </ul>
  
      <p>
      ${item.description}
      </p>
      <div class="language1-inline">
        <ul>
          <li class="langu">${item.technologies[0]}</li>
          <li class="langu">${item.technologies[1]}</li>
          <li class="langu">${item.technologies[2]}</li>
        </ul>
      </div>
      <button type="button" class="btn-one">See project</button>
    </div>
  </div>
  </div>`
  })
  }
  createCards()

  const containerMobile =document.querySelector('#projects-section-mobile');
 
function createCardsMobile () {
portfolioDetails.forEach((items) => {
  containerMobile.innerHTML += 
 `<div class="left1">
  <div class="project-card">
    <div class="snap1"><img src="${items.mobileImg}"></div>
  </div>
  <div class="left-block">
    <h2 class="head">${items.name}</h2>
    <div class="card-detail-box">
      <ul>
        <li class="card-detail canopy">${items.Tags[0]}</li>
        <li class="card-detail option">
          <img src="images/bullets.png" alt="bullet" class="circle" />
          ${items.Tags[0]}
        </li>
        <li class="card-detail option">
          <img src="images/bullets.png" alt="bullet" class="circle" />
          2015
        </li>
      </ul>
  
      <p>
      ${items.description}
      </p>
      <div class="language1-inline">
        <ul>
          <li class="langu">${items.technologies[0]}</li>
          <li class="langu">${items.technologies[1]}</li>
          <li class="langu">${items.technologies[2]}</li>
        </ul>
      </div>
      <button type="button" class="btn-one">See project</button>
    </div>
  </div>
  </div>`
  })
  }
  createCardsMobile()



















