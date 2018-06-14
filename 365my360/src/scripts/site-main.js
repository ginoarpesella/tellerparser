let peterBio =
  "Peter Griffin (Seth MacFarlane) is the central character of Family Guy. He and his family live in Quahog, Rhode Island. Speaking with a thick New England accent, he operates as if he is smarter than everyone else, but in reality, he's clueless. He spends his free time drinking at the Drunken Clam with his buddies, Quagmire, Cleveland and Joe. Peter has worked for various companies, including the Pawtucket Patriot Brewery and the Happy-Go-Lucky Toy Factory (no doubt modeled after Hasbro, which is headquartered in Providence, Rhode Island). Also, Peter has a long history of fighting with a large, yellow chicken.";
let loisBio =
  "Lois Griffin (Alex Borstein, Mad TV) is Peter's wife. She comes from the wealthy Pewterschmidt family and married Peter against their wishes. Lois is an accomplished piano player and singer. She's considered to be very attractive, which is proven by Quagmire's not-so-subtle advances toward her, as well as her short-lived career as a model ('Model Misbehavior'). She may be more sophisticated than Peter, but we have seen occasionally that she shares his low brow humor and lustfulness.";
let stewieBio =
  "Stewie Griffin (Seth MacFarlane) may be a baby, but he is as diabolical as the worst villain. He is highly intelligent, but he's still very attached to his teddy bear, Rupert. He has schemed many times to destroy Lois but has failed at every attempt. In early seasons, it was insinuated that Stewie is homosexual. In recent seasons, the writers have become more obvious with his sexual leanings, though the humor is usually couched in Stewie's complete ignorance of his own comments.";
let brainBio =
  "Brian (Seth MacFarlane) is the Griffin family's dog. He seems to be the wisest and most sensible of all the characters, regardless of the fact that he  still urinates on the carpet in Lois' presence. Yes, that's right, he is in love with Lois. Brian has had a girlfriend, Jillian, and enjoys the occasional martini. He and Stewie are usually pitted against each other, or drawn together, by extreme circumstances, such as a road trip to find Brian's mother (the former) or recruitment into the military (the latter). Brian can often be found";
let megBio =
  "Meg Griffin (Mila Kunis, That 70s Show) is the only daughter of Peter and Lois. She is frequently the butt of the family's jokes. She is considered to be unattractive and a loser. She and Peter bonded when his driver's license was revoked and she chauffeured him around town. She was given a chance to shine as a star in 'Don't Make Me Over.' Also, she has a crush on Luke Perry.";
let chrisBio =
  "Chris Griffin (Seth Green) is Peter and Lois' eldest son. He's not terribly bright, but he is a talented artist ('The Son Also Draws') and rock singer ('Saving Private Brian'). He admires his father and follows blindly into many of Peter's misadventures. Also, he fears the crazy monkey in his closet.";
export function getData() {
  let data = [];
  data.push(new PersonData("Peter Griffin", peterBio, "img/peteryellow.jpg"));
  data.push(new PersonData("Stewie Griffin", stewieBio, "img/stewie.jpg"));
  data.push(new PersonData("Brian Dog", brainBio, "img/brian.jpg"));
  data.push(new PersonData("Chris Griffin", chrisBio, "img/chris.jpg"));
  data.push(new PersonData("Lois Griffin", loisBio, "img/lois.jpg"));
  data.push(new PersonData("Meg Griffin", megBio, "img/meg.jpg"));
  return data;
}

class PersonData {
  constructor(name, infoTxt, img) {
    this.name = name;
    this.infoTxt = infoTxt;
    this.img = img;
  }
}
