var TGTopics = {};
(function () {
        TGTopics.addTopic = function () {
                GDT.addTopics([
	{
		id: "TGMod/Samurai",
		name: "Samurai".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.7, 0.6, 0.8],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Housework",
		name: "Housework".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 1.0, 0.7, 1.0],
		audienceWeightings: [0.9, 1.0, 0.8]
	},
	{
		id: "TGMod/Beach",
		name: "Beach".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.7, 0.9, 0.6, 1.0],
		audienceWeightings: [1.0, 1.0, 1.0]
	},
	{
		id: "TGMod/Spelling",
		name: "Spelling".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 1.0, 0.9, 1.0],
		audienceWeightings: [1.0, 1.0, 0.6]
	},
	{
		id: "TGMod/Ecchi",
		name: "Ecchi".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.9, 0.6, 1.0],
		audienceWeightings: [0.7, 0.9, 1.0]
	},
	{
		id: "TGMod/Otome",
		name: "Otome".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.9, 0.9, 0.6, 1.0],
		audienceWeightings: [0.8, 1.0, 0.9]
	},
	{
		id: "TGMod/Chess",
		name: "Chess".localize("game topic"),
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 0.9],
		audienceWeightings: [0.8, 0.9, 1.0]
	},
	{
		id: "TGMod/Aerial Defense",
		name: "Aerial Defense".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 0.9, 0.7],
		audienceWeightings: [0.6, 0.9, 1.0]
	},
	{
		id: "TGMod/Tower Defense",
		name: "Tower Defense".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.8, 0.8, 1.0, 1.0],
		audienceWeightings: [0.8, 1.0, 0.9]
	},
	{
		id: "TGMod/Education",
		name: "Education".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.8, 1.0, 0.9, 1.0],
		audienceWeightings: [1.0, 1.0, 0.8]
	},
	{
		id: "TGMod/Puzzle",
		name: "Puzzle".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.9, 1.0, 1.0, 1.0],
		audienceWeightings: [1.0, 1.0, 0.8]
	},
	{
		id: "TGMod/Cascade Matching",
		name: "Cascade Matching".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 0.6, 1.0, 1.0],
		audienceWeightings: [0.9, 1.0, 0.9]
	},
	{
		id: "TGMod/Cooking",
		name: "Cooking".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 0.6, 0.9],
		audienceWeightings: [0.9, 1.0, 0.8]
	},
	{
		id: "TGMod/Survival Horror",
		name: "Survival Horror".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 0.6, 0.8],
		audienceWeightings: [0.6, 0.8, 1.0]
	},
	{
		id: "TGMod/Espionage",
		name: "Espionage".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 0.9, 1.0, 0.6],
		audienceWeightings: [0.6, 0.8, 1.0]
	},
	{
		id: "TGMod/Unicycling",
		name: "Unicycling".localize("game topic"),
		genreWeightings: [0.9, 0.9, 0.6, 1.0, 0.6, 0.9],
		audienceWeightings: [1.0, 1.0, 0.8]
	},
	{
		id: "TGMod/Robots",
		name: "Robots".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.8, 0.9, 0.8, 0.8],
		audienceWeightings: [1.0, 1.0, 1.0]
	},
	{
		id: "TGMod/Console Wars(Anime)",
		name: "Console Wars(Anime)".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.6, 0.8, 0.8],
		audienceWeightings: [0.9, 1.0, 1.0]
	},
	{
		id: "TGMod/Console Wars(Real)",
		name: "Console Wars(Real)".localize("game topic"),
		genreWeightings: [0.6, 0.6, 0.6, 0.9, 1.0, 1.0],
		audienceWeightings: [0.7, 0.9, 1.0]
	},
	{
		id: "TGMod/Mafia",
		name: "Mafia".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 0.6, 0.7, 0.6],
		audienceWeightings: [0.6, 0.7, 1.0]
	},
	{
		id: "TGMod/Sniper",
		name: "Sniper".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 0.8, 0.7, 0.6],
		audienceWeightings: [0.6, 0.8, 1.0]
	},
	{
		id: "TGMod/Street Racing",
		name: "Street Racing".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 0.6, 0.8],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Toys",
		name: "Toys".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 0.7, 1.0],
		audienceWeightings: [1.0, 0.9, 0.6]
	},
	{
		id: "TGMod/Hide n Seek",
		name: "Hide n Seek".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 1.0, 0.9],
		audienceWeightings: [1.0, 0.8, 0.8]
	},
	{
		id: "TGMod/Mechanic",
		name: "Mechanic".localize("game topic"),
		genreWeightings: [0.9, 0.9, 0.6, 1.0, 0.7, 1.0],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Hentai",
		name: "Hentai".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.8, 0.6, 1.0],
		audienceWeightings: [0.6, 0.6, 1.0]
	},
	{
		id: "TGMod/Anime",
		name: "Anime".localize("game topic"),
		genreWeightings: [0.9, 0.9, 0.9, 0.8, 0.8, 1.0],
		audienceWeightings: [0.9, 1.0, 0.8]
	},
	{
		id: "TGMod/Children's Anime",
		name: "Children's Anime".localize("game topic"),
		genreWeightings: [0.9, 0.9, 1.0, 0.6, 0.6, 1.0],
		audienceWeightings: [1.0, 0.9, 0.6]
	},
	{
		id: "TGMod/Mature Anime",
		name: "Mature Anime".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.6, 1.0, 0.6],
		audienceWeightings: [0.6, 0.8, 1.0]
	},
	{
		id: "TGMod/Zombie Apocalypse",
		name: "Zombie Apocalypse".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.7, 0.6, 0.8, 0.8],
		audienceWeightings: [0.6, 0.8, 1.0]
	},
	{
		id: "TGMod/Photography",
		name: "Photography".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 1.0, 0.6, 1.0],
		audienceWeightings: [0.9, 1.0, 0.8]
	},
	{
		id: "TGMod/Painting",
		name: "Painting".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 1.0, 0.7, 1.0],
		audienceWeightings: [1.0, 1.0, 1.0]
	},
	{
		id: "TGMod/Psychological",
		name: "Psychological".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 0.9, 0.6, 1.0],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Psychological Horror",
		name: "Psychological Horror".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 0.9, 0.6, 0.8],
		audienceWeightings: [0.6, 0.9, 1.0]
	},
	{
		id: "TGMod/Crafting",
		name: "TGMod/Crafting".localize("game topic"),
		genreWeightings: [0.9, 0.9, 0.9, 1.0, 0.8, 1.0],
		audienceWeightings: [1.0, 1.0, 0.7]
	},
	{
		id: "TGMod/Escape",
		name: "Escape".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 0.8, 1.0, 0.6],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Orcs",
		name: "Orcs".localize("game topic"),
		genreWeightings: [1.0, 1.0, 1.0, 0.6, 0.6, 0.6],
		audienceWeightings: [0.9, 1.0, 1.0]
	},
	{
		id: "TGMod/Monster Girls",
		name: "Monster Girls".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.7, 0.6, 1.0],
		audienceWeightings: [0.7, 0.9, 1.0]
	},
	{
		id: "TGMod/Knights",
		name: "Knights".localize("game topic"),
		genreWeightings: [1.0, 1.0, 1.0, 0.7, 0.8, 0.6],
		audienceWeightings: [1.0, 1.0, 1.0]
	},
	{
		id: "TGMod/Designer",
		name: "Designer".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 1.0, 0.8, 1.0],
		audienceWeightings: [0.9, 1.0, 0.9]
	},
	{
		id: "TGMod/Underwater",
		name: "Underwater".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.8, 0.9, 0.6, 1.0],
		audienceWeightings: [1.0, 1.0, 1.0]
	},
	{
		id: "TGMod/Deathmatch",
		name: "Deathmatch".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.7, 0.9, 0.9, 0.6],
		audienceWeightings: [0.6, 0.9, 1.0]
	},
	{
		id: "TGMod/Religion",
		name: "Religion".localize("game topic"),
		genreWeightings: [0.8, 0.8, 0.6, 0.9, 0.6, 1.0],
		audienceWeightings: [1.0, 0.8, 0.9]
	},
	{
		id: "TGMod/Cultural",
		name: "Cultural".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.6, 1.0, 0.6, 0.9],
		audienceWeightings: [0.9, 1.0, 0.8]
	},
	{
		id: "TGMod/Warlords",
		name: "Warlords".localize("game topic"),
		genreWeightings: [1.0, 1.0, 0.9, 0.6, 1.0, 0.7],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Shoujou",
		name: "Shoujou".localize("game topic"),
		genreWeightings: [0.6, 0.6, 0.8, 0.8, 0.6, 1.0],
		audienceWeightings: [0.8, 1.0, 1.0]
	},
	{
		id: "TGMod/Shounen",
		name: "Shounen".localize("game topic"),
		genreWeightings: [0.6, 0.6, 0.8, 0.8, 0.6, 1.0],
		audienceWeightings: [0.9, 1.0, 0.9]
	}

	    ]);
	};
	/*  */		       
})();