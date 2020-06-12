function get_game_text(game) {
	switch (game) {
		case "siege":
			return "Rainbow Six Siege is a team based competitive tactical shooter. Similar to TF2 and Overwatch it lets you select an operator to play as, all of which have special abilities and weapons. This is one of my favorite games and one of my most played. The video is of a casual round with us on the defence.";
		case "overwatch": 
			return "Overwatch is a hero team based shooter. This use to be one of my go to games and I racked up many hours. My main is Pharah. This is also the only game I ever played ranked in. It was only a few matches as I dropped the game fairly soon after. I played as healers as the role lock system was introduced around that time and the DPS queue was like 5-10 minutes. The video is me picking the game up after years of not playing so I was very rusty. I will eventaully come back to this game but I haven't been in the mood to play it in a long time.";
		case "payday2":
			return "Payday 2 a co-op FPS which has you commit heists and bank robberies. This is fairly enjoyable game as I game gotten to a level where I have played every mission at least 2 dozen times and am I high level so the game is very laid back. I don't play really play six skulls especially after the difficulty rebalance made even 4 skulls a pretty good challenge at level 100. I always had the joke that I wanted to play one down four stores stealth and one day I said I wanted to do that in a lobby and they actually wanted to do it. After a few tries we actually pulled the mission off making it my only one down mission ever completed (this was back when 6 skulls was one down).";
		case "rising_storm":
			return "Rising Storm 2 a fairly hardcode FPS game in the Vietnam War setting. Most rifles will kill in a single round and the recoil is stout for firearms. The game has many technical flaws holding it back but when there's no issues it's extremely immersive and intense. My prefered role is a sniper cause I enjoy sitting 200 meters away and picking people off with a scoped M14. In this clip I joined an ongoing match so all the sniper roles were already taken. I was part of the North Vietnam military defending an objective.";
		case "planetside": 
			return "Planetside 2 is massive FPS game. The game involves attacking and defending provinces. There are four main maps each one being 8km by 8km and supporting up to 2000 people in total. There are three factions that fight each other over the provices of each map. The video is merely one battle of the 4 battles my faction was enganged in at the time. Other than the scale of the game one of the coller aspects is that it can feel like one continious battle. The transition we had from defending our province to going on the offensive was seamless. One minute we were pushing out attackers and the next I was in a vehicle on the way to help attack the province next door.";
		case "h3vr": 
			return "Hotdogs, Horseshoes, and Handgrenades is a VR firearm simulation. Every weapon in the game (which there are many with more being added regularly) is realistically simulated in function, appearance, and handling. Different ammunitions do different amounts of damage and have realistic bullet ballistics. This is easily my favorite VR game and has the most amount of hours of any VR game I own. The video is of me playing one of the main game modes called Take and Hold which involves taking objectives and defending them. The weapon spawn was set to random so every time I spent points on a gun I could get a .22 pistol or a mingun. The monitor only displays the left eye which is why you may not see everything.";
		case "zomboid": 
			return "Project Zomboid is a zombie apocalypse simulation. The game has base building mechanics, a crafting system, many stats/skills, an in depth health system, and a Walking Dead stylezombie behaivor/AI. I have mods installed that greatly extend the cradting and construction in the game. The game map is based on the real county Kentuky with multple towns. This game is fairly relaxing as a lot of the time will be spent lurking around avoiding zombies, looting, constructing, and leveling certain stats. My typical strat is to find a farm house or some kind of large building right outside the city I spawn in. I then use the existing building to create a self sustaining base.";
		case "rimworld": 
			return "Rimworld is a base building game inspired by the cult classic Dwarf Fortress where you build a base, defend from attackers, and in the late game venture out to do quests, trades, and attacking enemy bases. I partically like the game as I like playing games like Dwarf Fortress but don't want to go through the STEEP learning curve. Dwarf Fortress requires me to look at the game wiki to do anything. Rimworld on the other hand not only looks nicer but is also much easier to learn. The one drawnback the game has is that the visual complexity means that Z-levels are not present and will never be added. The game is relaxing and very laid back and fills a gaming niche I enjoy which is why this is one of my favorite game.";
		case "minecraft":
			return "Minecraft requires no explanation. It's one of the most ubiquitious and universally enjoyed games. Despite clearly being kid oriented the experience this game gives is enjoyed by many people well into their adulthood. While the base mechanis are fairly simple the strong gaming comminity continues to put out high quality mods that adds mechanics or even rework the entire experience that feels like a totally new game. I personally just really enjoy the exploration aspect of the game. I also enjoy acting like a Lord of the Rings Dwarf and mining underground for hours.";
	}
}



function change_video(selected_game) {
	if (selected_game == "siege" || selected_game == "overwatch" || selected_game == "payday2" || selected_game == "rising_storm" || 
	selected_game == "planetside" || selected_game == "h3vr" || selected_game == "zomboid" || selected_game == "rimworld" || selected_game == "minecraft") {
		document.getElementById("vid_source").src = selected_game + ".mp4";	
		document.getElementById("game_player").load();
		document.getElementById("game_player").play();
		document.getElementById("game_text").innerHTML = get_game_text(selected_game);
	}
}
