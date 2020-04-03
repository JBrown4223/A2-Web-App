import {Definitions} from "./definitions"


export class NonEnglishTerms {
    _id: String;
    termEnglishId: String;
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
    definitions: [Definitions];
}