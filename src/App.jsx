import React from "react";

const games = [
  {
    name: "Back Yard Bug Hunt",
    thumbnail: "/kids-games/images/PBS_Game_BackYardBugHunt-Wint_Small-NEW.png",
    url: "https://springroll-tc.pbskids.org/7a511474-7eb4-447c-ac59-491808007747/e3737f18eb3cbaf850187d671ffe22184931c0b2/release/index.html",
  },
  {
    name: "Elmo & Grover's Farm Time Fun",
    thumbnail: "/kids-games/images/PBS_Game_FarmTimeFun_Small-NEW.png",
    url: "https://springroll-tc.pbskids.org/4be1cd30-6cbb-4800-9eaa-fdff1de5950f/2841424154621804ac405d0a1893d98d410255b5/release/index.html",
  },
  {
    name: "Puppy Pet Care!",
    thumbnail: "/kids-games/images/PBS_Game_PuppyPetCare_Sm-NEW.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-tango/20b282b496ebf1d77ae61c92427ff37d571fa94c/release/index.html",
  },
  {
    name: "The monster at the End of this Game",
    thumbnail: "/kids-games/images/PBS_Game_MATEOTG_Small.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-monster-at-the-end-of-the-game/5e80c10ba5dc3f74c1334f5763d8781a60e944d7/release/index.html",
  },
  {
    name: "Ramp Racers",
    thumbnail: "/kids-games/images/PBS_Game_RampRacers_Small.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-ramp-racers/174a68c23336f9f5955158a37322e2fc387a5fc2/release/index.html",
  },
  {
    name: "Go Green",
    thumbnail: "/kids-games/images/PBS_Game_GoGreen_Small.png",
    url: "https://springroll-tc.pbskids.org/earth-day/f9319008b79d9f59b32a21744580b847ce3737b7/release/index.html",
  },
  {
    name: "Elmo & Rosita's Virtual Playdate",
    thumbnail: "/kids-games/images/PBS_Game_ElmoRositaVirtualPlaydate_Small.png",
    url: "https://springroll-tc.pbskids.org/virtual-playdate/b7a5b260b1ed3ce8f1c26c019837f9cbfc926edf/release/index.html",
  },
  {
    name: "A Job for Me",
    thumbnail: "/kids-games/images/PBS_Game_AJobforMe_Small.png",
    url: "https://springroll-tc.pbskids.org/pretend-play/c50c5f2bfc06c7d6cde0fa215e1e9af6cb4bb581/release/index.html",
  },
  {
    name: "Monster Foodie Truck",
    thumbnail: "/kids-games/images/PBS_Game_MonsterFoodieTruck_Small.png",
    url: "https://springroll-tc.pbskids.org/monster-foodies/f2d0183dc9feee232566da8af5bd161ea4ffaacf/release/index.html",
  },
  {
    name: "Abby & Elmo's Potty Plan",
    thumbnail: "/kids-games/images/PBS_Game_PottyPlan_Small.png",
    url: "https://springroll-tc.pbskids.org/elmo-potty/23669a9f08324c6b1cde75f10b85c088cb5bb5df/release/index.html",
  },
  {
    name: "Abby and Rosita's Wand Chase",
    thumbnail: "/kids-games/images/PBS_Game_AbbyRositaWandChase_Small.png",
    url: "https://springroll-tc.pbskids.org/magic-wand-chase/dd38bb733323d9ff8d82d7b3e485aca05cb220a6/release/index.html",
  },
  {
    name: "Letter Dance Party",
    thumbnail: "/kids-games/images/PBS_Game_LetterDanceParty_Small.png",
    url: "https://springroll-tc.pbskids.org/a-to-z-dance-party/62bf83402fd868c78a70abc559d24b63861435ad/release/index.html",
  },
  {
    name: "Seasons Spinner",
    thumbnail: "/kids-games/images/PBS_Game_SeasonsWinter_Small.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-seasons-spinner/1584e17e3c965a9a78c052eab39ae4746746409b/release/index.html",
  },
  {
    name: "Show Me the Cookies",
    thumbnail: "/kids-games/images/PBS_Game_ShowMeTheCookies_Small.png",
    url: "https://springroll-tc.pbskids.org/cookie-monster-game-show/46b13dea32ee1c32b55da7c434124efbbb456364/release/index.html",
  },
  {
    name: "Monster Music",
    thumbnail: "/kids-games/images/PBS_Game_MonsterMusic_Small.png",
    url: "https://springroll-tc.pbskids.org/monster-music/41962a5fa87b63fd25294fc2c54b61f5f67bfca4/release/index.html",
  },
  {
    name: "Ready, Set, Grow",
    thumbnail: "/kids-games/images/PBS_Game_ReadySetGrow_Small.png",
    url: "https://springroll-tc.pbskids.org/ready-set-grow/1ee121d692b2fd4735506dd2f3fc5028141069be/release/index.html",
  },
  {
    name: "Elmo's World Games",
    thumbnail: "/kids-games/images/PBS_Game_ElmosWorldGames_WINTER_Small.png",
    url: "https://springroll-tc.pbskids.org/org.pbskids.sesame.elmosworld/fd9bf35c640f19d7d8dd5fe2ee2a9a30124549b9/release/index.html",
  },
  {
    name: "Super Salad Diner",
    thumbnail: "/kids-games/images/PBS_Game_SuperSaladDiner_Small_170915_102501.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-super-salad-diner/cf4d70fb36ef09bad9949693897463cb5714b840/release/index.html",
  },
  {
    name: "Storybook Builder",
    thumbnail: "/kids-games/images/PBS_Game_StoryBookBuilder_Small_170915_102408.png",
    url: "https://springroll-tc.pbskids.org/storybook-builder/66972f6d31fb828391215cbbb1259a1420e4547f/release/index.html",
  },
  {
    name: "Rhyme Time",
    thumbnail: "/kids-games/images/PBS_Game_RhymeTime_Small.png",
    url: "https://springroll-tc.pbskids.org/grovers-rhyme-time/77fb547ee9436c66371be2f82242237dfa3614f4/release/index.html",
  },
  {
    name: "Ernie's Dinosaur Daycare",
    thumbnail: "/kids-games/images/PBS_Game_DinosaurDaycare_Small.png",
    url: "https://springroll-tc.pbskids.org/dinosaur-day-care/d35485eee6600f403076cf3263d466f24f795061/release/index.html",
  },
  {
    name: "Dress Up Time Holiday",
    thumbnail: "/kids-games/images/PBS_Game_DressUpTime_Holiday_Small_181210_100348.png",
    url: "https://springroll-tc.pbskids.org/dress-up-time/1b2cc2a67cbeb59d699e5bd2b50842ad1ed95431/release/index.html",
  },
  {
    name: "Elmo's School Friends",
    thumbnail: "/kids-games/images/PBS_Game_ElmosSchoolFriends_Small_170915_102144.png",
    url: "https://springroll-tc.pbskids.org/elmos-school-friends/efca78593f34ac18847cd98192da97f3034ca8f4/release/index.html",
  },
  {
    name: "Abby's Sandbox Search",
    thumbnail: "/kids-games/images/PBS_Game_AbbysSandboxSearch_Small.png",
    url: "https://springroll-tc.pbskids.org/abbys-sandbox-search/16b1fcdb0f4041925daa43be6d9f5f9682b11bb6/release/index.html",
  },
  {
    name: "The Cookie Games",
    thumbnail: "/kids-games/images/PBS_Game_CookieGames_Small_170915_101936.png",
    url: "https://springroll-tc.pbskids.org/the-cookie-games/e5ad232b5b12e540b4bf13dfdfeeab29a5b56130/release/index.html",
  },
  {
    name: "Grover's Winter Games",
    thumbnail: "/kids-games/images/PBS_Game_GroversWinterGames_Small.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-grovers-winter-games/b2d8f070d49849215ddfe3a3737997668e09505f/release/index.html",
  },
  {
    name: "Oscar's Rotten Ride",
    thumbnail: "/kids-games/images/PBS_Game_OscarsRottenRide_Small.png",
    url: "https://springroll-tc.pbskids.org/sesame-street-oscars-rotten-ride/acae218652ea3f04e5c1728a999b1e37068f2a92/release/index.html",
  },
  {
    name: "The Cookie Case",
    thumbnail: "/kids-games/images/PBS_Game_CookieCase_Small.png",
    url: "https://springroll-tc.pbskids.org/cookie-case/053cbdc285031df001b63a258be83d4f60ec229c/release/index.html",
  },
];

function App() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  React.useEffect(() => {
    const checkFullscreen = () => {
      // Ensure screen is defined before attempting to access its properties
      if (typeof screen !== "undefined") {
        console.log(screen.height, window.innerHeight);
        const isFs = window.innerHeight === screen.height;
        setIsFullscreen(isFs);
      }
    };

    // Check fullscreen status on initial render
    checkFullscreen();

    // Add event listeners to check fullscreen status on resize
    window.addEventListener("resize", checkFullscreen);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", checkFullscreen);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const launchGame = (url) => {
    window.open(url, "_blank", "fullscreen=yes");
  };

  React.useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Cleanup
    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);

  return (
    <>
      <div className="app">
        {!isFullscreen && (
          <div className="bg-red-500 text-white text-center text-2xl px-4 py-4">
            Press F11 (or Fn + F11) to toggle fullscreen mode. CTRL + W will close the game.
          </div>
        )}{" "}
        <div className="flex flex-wrap justify-center gap-4 py-10 ">
          {games.map((game, index) => (
            <div
              key={index}
              className="group rounded-t-xl w-1/ lg:1/5 bg-green-700 hover:bg-green-600 transition-all cursor-pointer"
              onClick={() => launchGame(game.url)}
            >
              <img className="w-full" src={game.thumbnail} alt={game.name} />
              <p className="bg-green-800 group-hover:bg-green-700 transition-all px-4 py-2 text-white uppercase text-center">
                {game.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
