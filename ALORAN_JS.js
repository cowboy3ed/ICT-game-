const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
textElement.style.fontFamily="monospace"
textElement.style.letterSpacing="1px"
textElement.style.wordSpacing="-5px"

musc = document.getElementById("music");
musc.volume = 0.1;


function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.style.fontFamily="monospace"
      button.style.alignContent="center"
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    document.getElementById('ilust').src=option.imgUrl

  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

function changeImage() {
    if (textNodes = id = 2) {
        document.getElementById('ilust').src="background (2).jpg"
    }
}

const textNodes = [
  {
    id: 1,
    text: 'During the ride here, the rain made its way into your boots. You lock your bike on the rack infront of the museum and run in.',  
    options: [
      {
        text: 'Talk to Reception',
        nextText: 2,
        imgUrl:"chapter1img.png"
      },
    ]
  },
  {
    id: 2,
    text: 'Shaking yourself off at the entrance. You wave at the receptionist.',

    options: [
      {
        text: 'Next',
        nextText: 3,
        imgUrl:"chapter1img.png"
      },
    ]
  },
  {
    id: 3,
    text: '"Maam? Heres my ticket,"',

    options: [
      {
        text: 'Next',
        nextText: 4,
      },
    ]
  },
  {
    id: 4,
    text: 'The Receptionist looks at you and takes it.',

    options: [
      {
        text: 'Next',
        nextText: 5,
      },
    ]
  },
  {
    id: 5,
    text: '"Lots of interesting people today, guess thats because of the artist."',

    options: [
      {
        text: 'Next',
        nextText: 6,
      },
    ]
  },
  {
    id: 6,
    text: 'Giving your ticket back, you walk into the lobby, theres three hallways; left, right and center. You wonder where to go.',

    options: [
        {
          text: 'Left Room',
          nextText: 7,
        },
        {
          text: 'Right Room',
          nextText: 9,
        },
        {
          text: 'Center',
          nextText: 11,
        }
      ]
  },
  {
    id: 7,
    text: 'To your right, bold complementary colors lined the walls of the corridor like a mural, depicting subjects like nature and humans. To your left, a glass wall separates you from the garden surrounded by the museum. At the end of the hallway, you go into a space in the corner of the building, filled with colorful frammed paintings, wooden scuptures, and gadgets.',

    options: [
        {
          text: 'Next',
          nextText: 8
        },
      ]

  },
  {
    id: 8,
    text: 'All the paintings depicted vibrant city life throughout different times. In the center, is a painting of Casa Manilas patio filled with people, appropriately frammed in Narra wood called, "Nurture." by Celda. You assume this artist must be rich. Surprisingly, only a few people are here. Shrugging it off, you choose another room.',

    options: [
        {
          text: 'Right Room',
          nextText: 9
        },
        {
          text: 'Center',
          nextText: 11
        }
      ]

  },
  {
    id: 9,
    text: 'Eerie dark grey concrete lined the left walls corridors, along with paintings framed in dark wood, detailed with precision, and depicting filipino mythical creatures in their habitat. The only comforting thing was the garden behind the glass wall to your right. ',

  options: [
      {
        text: 'Next',
        nextText: 10
      },
    ]

},
{
    id: 10,
    text: 'The end of the hallway had a space in the corner of the building, almost like a room, filled with clay sculptures and dolls of unusual looking fairies. The main centerpiece of this room is a clay sculpture of a woman called, "Nature" by Celda. You get a feeling this artist loves detail. Surprisingly, only a few people are here. Shrugging it off, you choose another room.',

    options: [
        {
          text: 'Left Room',
          nextText: 7
        },
        {
          text: 'Center',
          nextText: 11
        }
      ]

},
{
    id: 11,
    text: 'The room is painted white, the light almost blinding. Mannequins dressed up in several styles surround the main centerpiece. 5 stone statues all having their own identity, splattered with colors of paint though not corresponding to their names. Called "Red, Orange, Yellow, Green, Blue" by Celda.',

    options: [
        {
          text: 'Check the statues.',
          nextText: 12
        },
    ]

},
{
    id: 12,
    text: 'Red is splashed with Green paint. Orange is splashed with Blue. Curiously, Yellow with no blood. \n  You feel a spark of inspiration finally hit you. Turning around to find a seat, the lights turn off.',

    options: [
        {
          text: 'Next',
          nextText: 13
        },
    ]

},
{
    id: 13,
    text: '"What?"',

    options: [
        {
          text: 'Next',
          nextText: 14
        },
    ]

},
{
    id: 14,
    text: 'You turn back around. The statues are gone.',

    options: [
        {
          text: 'Next',
          nextText: 15
        },
    ]

},
{
    id: 15,
    text: '"Is this some sort of performance art???"',

    options: [
        {
          text: 'Next',
          nextText: 16
        },
    ]

},
{
    id: 16,
    text: 'You realize the people who were just here are gone.',

    options: [
        {
          text: 'Reception',
          nextText: 17
        },
        {
          text: 'Left Room',
          setState: {noflashlight: true},
          nextText: 18
        },
        {
          text: 'Right Room',
          setState: {noflashlight: true},
          setState: {noIanRay: true},
          nextText: 27
        }
      ]

},
{
    id: 17,
    text: 'Nobody here. Doors locked. \n Out of desperation, you take a flashlight from behind the desk.',

    options: [
        {
          text: 'Right Room',
          setState: { flashlight: true },
          requiredState: (currentState) => currentState.noIanRay,
          nextText: 27
        },
        {
          text: 'Left Room',
          setState: { flashlight: true },
          nextText: 18
        },
       
      ]
},
{
    id: 18,
    text: 'You find two people stumbling around trying to find their way out.',

    options: [
        {
          text: 'Shine a flashlight at them',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 19
        },
        {
            text: '"Who are you???"',
            requiredState: (currentState) => currentState.noflashlight,
            nextText: 22
          },
      ]

},
{
    id: 19,
    text: '"Are you a guard? What happened?" The red haired man asked, the blue shirted man just seemed to be confused as well.',

    options: [
        {
          text: '"No Im not a guard!"',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 20
        },
      ]

},
{
    id: 20,
    text: '"Well why the flashlight? Whatever, do you know what happened?" The red haired man said.',

    options: [
        {
          text: '"I really dont know either. I was looking for some answers too."',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 21
        },
        {
          text: '"Look, who are you guys?"',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 22
          },
      ]

},
{
    id: 21,
    text: '"Have you checked the other rooms?" The blue shirted man asked.',

    options: [
        {
          text: '"No I havent, the receptionist lady is gone too, and the doors are locked."',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 23
        },
        {
            text: '"No I havent, this was the first room I went to."',
            requiredState: (currentState) => currentState.noflashlight,
            nextText: 22
          },
      ]

},
{
    id: 22,
    text: '"See Ian? We should have introduced first." The blue haired man said. \n "Im sorry for this guys manners. Im Ray, hes Ian."',

    options: [
        {
          text: '"Its fine, its a confusing situation. Im Laykha."',
          nextText: 23
        },
        {
          text: '"You guys went together?"',
          nextText: 24
          },
        {
          text: '"Names Laykha. I think we should find some more people."',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 26
        },
        {
          text: '"Laykha. We should find more people, though itll be hard without light, any phones on you guys?"',
          nextText: 25
        },

      ]

},
{
    id: 23,
    text: '"What do we do now?" Ian says. \n "Seriously what even happened..." Ray sighs.',

    options: [
        {
          text: '"I think we should find some more people. Just follow me, I mean, since Ive got the light."',
          requiredState: (currentState) => currentState.flashlight,
          setState: { IanRay: true },
          nextText: 26
        },
        {
          text: '"We should find more people, though itll be hard without light, any phones on you guys?"',
          setState: { IanRay: true },
          requiredState: (currentState) => currentState.noflashlight,
          nextText: 25
        },

      ]

},
{
    id: 24,
    text: '"Yeah we went with our friends here. 3 other people." Ray says.',

    options: [
        {
          text: '"Well, we should definitely find them."',
          nextText: 26
        },

      ]

},
{
    id: 25,
    text: '"Phones? No not at all." They both shrug. \n ("Must be the types who dont wanna bring phones to the museum.")',

    options: [
        {
          text: '"Alright then. Did you guys go with anybody?"',
          nextText: 24
        },

      ]

},
{
    id: 26,
    text: 'Where to go now?',

    options: [
        {
          text: 'Right Room',
          requiredState: (currentState) => currentState.IanRay,
          nextText: 27
        },

        {
          text: 'Reception',
          requiredState: (currentState) => currentState.flashlight,
          nextText: 38
        },

        {
          text: 'Reception',
          requiredState: (currentState) => currentState.noflashlight,
          nextText: 17
        },
    ]

},

{
    id: 38,
    text: 'Nobody here. Doors locked. \n You find no other flashlights.',

    options: [
        {
          text: 'Right Room',
          requiredState: (currentState) => currentState.IanRay,
          nextText: 27
        },
        {
          text: 'Left Room',
          nextText: 40
        },
       
      ]
},

{
    id: 40,
    text: 'Nothing here anymore.',

    options: [
        {
          text: 'Right Room',
          requiredState: (currentState) => currentState.IanRay,
          nextText: 27
        },
      ]
},

{
    id: 27,
    text: 'When walking through the corridor to the right room. You look outside at the garden.',

    options: [
        {
          text: 'Look closer',
          nextText: 28
        },

    ]

},
{
    id: 28,
    text: 'Theres a dead body.',

    options: [
        {
          text: '"What...?"',
          requiredState: (currentState) => currentState.IanRay,
          nextText: 29
        },
        {
          text: '"What...?"',
          requiredState: (currentState) => currentState.noIanRay,
          nextText: 35
        },

    ]

},
{
    id: 29,
    text: '"Ray." Ians voice cracks. \n "Holy..." Ray looks away.',

    options: [
        {
          text: '"What...?"',
          nextText: 30
        },

    ]

},
{
    id: 30,
    text: '"Is that." Ray goes closer to the glass. "No way." "No way its him." ',

    options: [
        {
          text: '"Who is that??"',
          nextText: 31
        },

    ]

},
{
    id: 31,
    text: '"Its Frank." ',

    options: [
        {
          text: '"Your friend? Oh, Im so sorry..."',
          nextText: 32
        },

    ]

},
{
    id: 32,
    text: '"I cant look anymore..." Ray grips his fist. \n "Lets- Lets find the others." he keeps his gaze away.',

    options: [
        {
          text: '"Yeah, my god, we need to find your other friends. We needs to see if theyre safe."',
          nextText: 33
        },

    ]

},
{
    id: 33,
    text: 'Ian and Ray see two other people. Theyre crying and hug each other. You feel horrible.',

    options: [
        {
          text: '"Im really sorry, do you guys have any info at all?"',
          nextText: 34
        },

    ]
},
{
    id: 34,
    text: '"No nothing." A girl with orange hair sobs while a green eyed girl tries to comfort her.',

    options: [
        {
          text: '"Seriously whose doing this?"',
          nextText: 35
        },

    ]

},
{
    id: 35,
    text: 'You look around and see a security camera.',

    options: [
        {
          text: '"HELLO!?"',
          nextText: 36
        },

    ]

},
{
    id: 36,
    text: '...',

    options: [
        {
          text: '"Hello???"',
          nextText: 37
        },

    ]

},
{
    id: 37,
    text: 'The centerpeice painting in the center falls off. Revealing a screen.',

    options: [
        {
          text: '"What the Hell."',
          nextText: 41
        },

    ]

},

{
    id: 41,
    text: '"Hello." A distorted voice talks.',

    options: [
        {
          text: '"Who are you???"',
            requiredState: (currentState) => currentState.IanRay,
          nextText: 42
        },
        {
          text: '"Who are you???"',
            requiredState: (currentState) => currentState.noIanRay,
          nextText: 43
        },
    ]
},

{
    id: 42,
    text: '"My name isnt important. I am here to... teach you lessons." \n "Is this some sick joke?" The green eyed girl scowls. \n "Is this a prank?" Ray puts his hands on his mouth.',

    options: [
        {
          text: '"What are you talking about?"',
            requiredState: (currentState) => currentState.IanRay,
          nextText: 44
        },
        {
          text: '"Are you serious right now?"',
            requiredState: (currentState) => currentState.noIanRay,
          nextText: 45
        },
    ]
},
{
  id: 43,
  text: '"My name isnt important. I am here to... teach you lessons."',

  options: [
      {
        text: '"What are you talking about?"',
          requiredState: (currentState) => currentState.IanRay,
        nextText: 44
      },
      {
        text: '"Are you serious right now?"',
          requiredState: (currentState) => currentState.noIanRay,
        nextText: 45
      },
  ]
},




]

startGame()