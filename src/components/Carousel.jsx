const slides = [
  { 
    imageUrl: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png"
  },
  // { 
    // imageUrl: "https://ellipsesolutions.com/wp-content/uploads/2024/04/Microsoft-Dynamics-365-Logo.png"
  // },
  { 
    imageUrl: "https://cdn.prod.website-files.com/60ff451f4874316baf91d00d/6238e10567b270682aaa9d91_Dynamics-365-Logo-652.png"
  },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/SAP-Logo.svg",
  },
  // { 
  //   imageUrl: "https://1000logos.net/wp-content/uploads/2021/12/Dynamics-365-logo.png",
  // },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg",
  },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
  },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg",
  },
  { 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  }
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AMicrosoft_logo_%25282012%2529.svg&psig=AOvVaw0q_waFYMPVK0SwJYBnWVBh&ust=1756833102403000&source=images&cd=vfe&opi=89978449&ved=0CBUQjhxqFwoTCJCFgbmHuI8DFQAAAAAdAAAAABAE
];

const Carousel = () => {
  const allSlides = [...slides, ...slides];

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Platforms We Support</h2>
      <div className="relative w-full overflow-hidden max-w-7xl mx-auto">
        <style>
          {`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 60s linear infinite;
            }

            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="flex w-fit animate-scroll whitespace-nowrap">
          {allSlides.map((slide, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center w-[250px] mx-4 my-4 p-4 cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <img
                src={slide.imageUrl}
                alt="Technology Logo"
                className="w-50 h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
