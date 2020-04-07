import {Definitions} from "./definitions"

export class EnglishTerms {
    _id: String;
    wordEnglish: String;
    wordNonEnglish: String;
    wordExpanded: String;
    languageCode: String;
    image: String;
    imageType: String;  
    audio: String;
    audioType: String;
    linkAuthoritative: String;
    linkWikipedia: String;
    linkYouTube: String;
    authorName: String;
    dateCreated: Date;
    dateRevised: Date;
    fieldOfStudy: String;   
    helpYes: Number;
    helpNo: Number;
    _v: Number;
    defString: String; //String that stores entered definition
    definitions: Array<Definitions>;
}