import Map "mo:core/Map";
import Principal "mo:core/Principal";

actor MoodFlix {

  type Mood = {
    id: Text;
    name: Text;
    emoji: Text;
    description: Text;
  };

  type Movie = {
    id: Text;
    title: Text;
    year: Nat;
    genre: Text;
    duration: Text;
    rating: Float;
    description: Text;
    moodIds: [Text];
    posterColor: Text;
  };

  let moods : [Mood] = [
    { id = "happy"; name = "Happy"; emoji = "\u{1F604}"; description = "Feeling joyful and upbeat" },
    { id = "sad"; name = "Sad"; emoji = "\u{1F622}"; description = "Feeling down or melancholic" },
    { id = "romantic"; name = "Romantic"; emoji = "\u{1F60D}"; description = "In a loving mood" },
    { id = "angry"; name = "Angry"; emoji = "\u{1F624}"; description = "Feeling frustrated or intense" },
    { id = "excited"; name = "Excited"; emoji = "\u{1F929}"; description = "Full of energy and enthusiasm" },
    { id = "relaxed"; name = "Relaxed"; emoji = "\u{1F60C}"; description = "Calm and at ease" },
    { id = "scared"; name = "Scared"; emoji = "\u{1F631}"; description = "Feeling tense or frightened" },
    { id = "surprised"; name = "Surprised"; emoji = "\u{1F62E}"; description = "Feeling amazed or shocked" },
  ];

  let movies : [Movie] = [
    { id = "m1"; title = "The Secret Life of Walter Mitty"; year = 2013; genre = "Adventure/Comedy"; duration = "114 min"; rating = 7.3; description = "A daydreamer escapes his anonymous life by living out his impossible fantasies when his job is threatened."; moodIds = ["happy", "excited", "relaxed"]; posterColor = "#FF6B35" },
    { id = "m2"; title = "La La Land"; year = 2016; genre = "Musical/Romance"; duration = "128 min"; rating = 8.0; description = "A jazz pianist falls for an aspiring actress in Los Angeles in this visually stunning musical."; moodIds = ["romantic", "sad", "happy"]; posterColor = "#FFD700" },
    { id = "m3"; title = "The Dark Knight"; year = 2008; genre = "Action/Thriller"; duration = "152 min"; rating = 9.0; description = "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos."; moodIds = ["angry", "excited", "scared"]; posterColor = "#1A1A2E" },
    { id = "m4"; title = "Up"; year = 2009; genre = "Animation/Adventure"; duration = "96 min"; rating = 8.2; description = "A 78-year-old balloon salesman ties thousands of balloons to his house to fulfill his lifelong dream."; moodIds = ["happy", "sad", "excited"]; posterColor = "#4ECDC4" },
    { id = "m5"; title = "The Notebook"; year = 2004; genre = "Romance/Drama"; duration = "123 min"; rating = 7.8; description = "A poor yet passionate young man falls in love with a rich young woman during the early years of WWII."; moodIds = ["romantic", "sad"]; posterColor = "#FF69B4" },
    { id = "m6"; title = "Inception"; year = 2010; genre = "Sci-Fi/Thriller"; duration = "148 min"; rating = 8.8; description = "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."; moodIds = ["excited", "surprised", "scared"]; posterColor = "#00B4D8" },
    { id = "m7"; title = "Forrest Gump"; year = 1994; genre = "Drama/Comedy"; duration = "142 min"; rating = 8.8; description = "The presidencies of Kennedy and Johnson through the eyes of an Alabama man with an extraordinary life."; moodIds = ["happy", "sad", "relaxed"]; posterColor = "#8BC34A" },
    { id = "m8"; title = "John Wick"; year = 2014; genre = "Action/Thriller"; duration = "101 min"; rating = 7.4; description = "An ex-hitman comes out of retirement to track down the gangsters who killed his dog."; moodIds = ["angry", "excited"]; posterColor = "#F44336" },
    { id = "m9"; title = "The Grand Budapest Hotel"; year = 2014; genre = "Comedy/Adventure"; duration = "99 min"; rating = 8.1; description = "The adventures of a legendary hotel concierge and his lobby boy in the fictional Republic of Zubrowka."; moodIds = ["happy", "relaxed", "surprised"]; posterColor = "#E91E63" },
    { id = "m10"; title = "A Beautiful Mind"; year = 2001; genre = "Drama/Biography"; duration = "135 min"; rating = 8.2; description = "After a brilliant mathematician accepts secret work in cryptography, his life takes a drastic turn."; moodIds = ["sad", "surprised"]; posterColor = "#9C27B0" },
    { id = "m11"; title = "The Conjuring"; year = 2013; genre = "Horror/Thriller"; duration = "112 min"; rating = 7.5; description = "Paranormal investigators work to help a family terrorized by a dark presence in their farmhouse."; moodIds = ["scared"]; posterColor = "#212121" },
    { id = "m12"; title = "Pride and Prejudice"; year = 2005; genre = "Romance/Drama"; duration = "129 min"; rating = 7.8; description = "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy."; moodIds = ["romantic", "relaxed"]; posterColor = "#795548" },
    { id = "m13"; title = "Mad Max: Fury Road"; year = 2015; genre = "Action/Sci-Fi"; duration = "120 min"; rating = 8.1; description = "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in a deadly high-speed chase."; moodIds = ["angry", "excited"]; posterColor = "#FF5722" },
    { id = "m14"; title = "The Princess Diaries"; year = 2001; genre = "Comedy/Romance"; duration = "115 min"; rating = 6.3; description = "Mia Thermopolis discovers she is the heir to the throne of a small European principality."; moodIds = ["happy", "romantic"]; posterColor = "#BA68C8" },
    { id = "m15"; title = "Interstellar"; year = 2014; genre = "Sci-Fi/Drama"; duration = "169 min"; rating = 8.6; description = "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."; moodIds = ["excited", "sad", "surprised"]; posterColor = "#263238" },
    { id = "m16"; title = "Mamma Mia!"; year = 2008; genre = "Musical/Comedy"; duration = "108 min"; rating = 6.4; description = "A young woman wants to discover which of three men is her biological father before her wedding."; moodIds = ["happy", "romantic", "excited"]; posterColor = "#00BCD4" },
    { id = "m17"; title = "Get Out"; year = 2017; genre = "Horror/Mystery"; duration = "104 min"; rating = 7.7; description = "A young Black man uncovers a disturbing secret when he meets his white girlfriend's family."; moodIds = ["scared", "surprised", "angry"]; posterColor = "#4CAF50" },
    { id = "m18"; title = "The Holiday"; year = 2006; genre = "Romance/Comedy"; duration = "136 min"; rating = 6.9; description = "Two women swap homes at Christmas and each find unexpected romance."; moodIds = ["romantic", "happy", "relaxed"]; posterColor = "#FF8F00" },
    { id = "m19"; title = "Parasite"; year = 2019; genre = "Thriller/Drama"; duration = "132 min"; rating = 8.5; description = "A poor family schemes to become employed by a wealthy family and infiltrate their household."; moodIds = ["surprised", "scared", "angry"]; posterColor = "#607D8B" },
    { id = "m20"; title = "Amelie"; year = 2001; genre = "Romance/Comedy"; duration = "122 min"; rating = 8.3; description = "An innocent and naive girl decides to help those around her and discovers love."; moodIds = ["happy", "romantic", "relaxed"]; posterColor = "#FF4081" },
    { id = "m21"; title = "Hereditary"; year = 2018; genre = "Horror/Drama"; duration = "127 min"; rating = 7.3; description = "A grieving family is haunted by tragic and disturbing occurrences after the matriarch's death."; moodIds = ["scared"]; posterColor = "#37474F" },
    { id = "m22"; title = "The Wolf of Wall Street"; year = 2013; genre = "Comedy/Crime"; duration = "180 min"; rating = 8.2; description = "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker to his fall."; moodIds = ["angry", "excited", "surprised"]; posterColor = "#F57F17" },
    { id = "m23"; title = "About Time"; year = 2013; genre = "Romance/Drama"; duration = "123 min"; rating = 7.8; description = "A man with the ability to time travel tries to find love and happiness despite his unique gift."; moodIds = ["romantic", "happy", "sad"]; posterColor = "#26A69A" },
    { id = "m24"; title = "Cast Away"; year = 2000; genre = "Drama/Adventure"; duration = "143 min"; rating = 7.8; description = "A FedEx executive survives a plane crash and must find a way to survive alone on a remote island."; moodIds = ["sad", "relaxed", "excited"]; posterColor = "#8D6E63" },
    { id = "m25"; title = "The Prestige"; year = 2006; genre = "Mystery/Thriller"; duration = "130 min"; rating = 8.5; description = "Two stage magicians engage in a rivalry that leads to obsession, tragedy, and the ultimate sacrifice."; moodIds = ["surprised", "excited", "scared"]; posterColor = "#455A64" },
    { id = "m26"; title = "Coco"; year = 2017; genre = "Animation/Family"; duration = "105 min"; rating = 8.4; description = "A young boy gets transported to the Land of the Dead and discovers the secrets of his family history."; moodIds = ["happy", "sad"]; posterColor = "#FF5722" },
    { id = "m27"; title = "The Revenant"; year = 2015; genre = "Adventure/Drama"; duration = "156 min"; rating = 8.0; description = "A frontiersman fights for survival after being mauled by a bear in the uncharted American wilderness."; moodIds = ["angry", "scared", "relaxed"]; posterColor = "#546E7A" },
    { id = "m28"; title = "Crazy Rich Asians"; year = 2018; genre = "Romance/Comedy"; duration = "120 min"; rating = 6.9; description = "An American-born Chinese economics professor accompanies her boyfriend to his best friend's wedding in Singapore."; moodIds = ["romantic", "happy", "surprised"]; posterColor = "#E91E63" },
    { id = "m29"; title = "A Quiet Place"; year = 2018; genre = "Horror/Sci-Fi"; duration = "90 min"; rating = 7.5; description = "A family struggles to survive in a post-apocalyptic world inhabited by blind monsters with an acute sense of hearing."; moodIds = ["scared", "angry"]; posterColor = "#1B5E20" },
    { id = "m30"; title = "The Truman Show"; year = 1998; genre = "Drama/Comedy"; duration = "103 min"; rating = 8.2; description = "An insurance salesman discovers that his whole life is actually a reality TV show."; moodIds = ["surprised", "happy", "sad"]; posterColor = "#039BE5" },
  ];

  let watchlists = Map.empty<Principal, [Text]>();

  public query func getAllMoods() : async [Mood] {
    moods
  };

  public query func getAllMovies() : async [Movie] {
    movies
  };

  public query func getMoviesByMood(moodId: Text) : async [Movie] {
    movies.filter(func(m : Movie) : Bool {
      m.moodIds.find(func(id : Text) : Bool { id == moodId }) != null
    })
  };

  public query func searchMovies(q: Text) : async [Movie] {
    let lower = q.toLower();
    movies.filter(func(m : Movie) : Bool {
      m.title.toLower().contains(#text lower) or
      m.genre.toLower().contains(#text lower)
    })
  };

  public shared(msg) func addToWatchlist(movieId: Text) : async () {
    let caller = msg.caller;
    let current = switch (watchlists.get(caller)) {
      case null { [] };
      case (?list) { list };
    };
    if (current.find(func(id : Text) : Bool { id == movieId }) == null) {
      watchlists.add(caller, current.concat([movieId]));
    };
  };

  public shared(msg) func removeFromWatchlist(movieId: Text) : async () {
    let caller = msg.caller;
    let current = switch (watchlists.get(caller)) {
      case null { [] };
      case (?list) { list };
    };
    watchlists.add(caller, current.filter(func(id : Text) : Bool { id != movieId }));
  };

  public shared(msg) func getWatchlist() : async [Movie] {
    let caller = msg.caller;
    let ids = switch (watchlists.get(caller)) {
      case null { [] };
      case (?list) { list };
    };
    movies.filter(func(m : Movie) : Bool {
      ids.find(func(id : Text) : Bool { id == m.id }) != null
    })
  };
}
