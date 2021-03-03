let capability = [
  {
    title: 'Quiz',
    artwork: 'images/quiz.png'
  },
  {
    title: 'Tone & Topic',
    artwork: 'images/tonetopic.png'
  },
  {
    title: 'Similar',
    artwork: 'images/similar.png'
  }
];

// Create empty capabilities variable
let capabilities = '';

for (let i = 0; i < capability.length; i++) {
  let capabilityName = capability[i].title;
  let capabilityArtwork = capability[i].artwork;
  let capabilityImage = '<img src="' + capabilityArtwork + '"alt="' + capabilityName + '">';
  let caption = '<figcaption>' + capabilityName + '</figcaption>';
  let figure = '<figure>' + capabilityImage + caption + '</figure>'; 
  capabilities = capabilities + figure;
}

// Find the element "capabilities" 
let capabilitiesElement = document.getElementById('capabilities');
capabilitiesElement.innerHTML = capabilities;
