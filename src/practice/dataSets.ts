class Job{
    title: string;
    company: string;
    location: string;
    url: string;
    datePosted: string;
    contact: string;
    status: string;
    description: string;
    notes: string;

    constructor(title:string, company:string, location:string, url:string, datePosted:string, contact:string, status:string, description:string, notes:string){
        this.title = title;
        this.company = company;
        this.location = location;
        this.url = url;
        this.datePosted = datePosted;
        this.contact = contact;
        this.status = status;
        this.description = description;
        this.notes = notes;
    }
}

const testData: Array<Job>= [
    new Job(
        "QA Engineer",
        "CMC Flex",
        "Sandy, Utah",
        "cmcflex.com",
        "10/20/20",
        "8011234567",
        "Accepted offer",
        "2 years experiences, jira, automation testing",
        "B.S degree"
    ),
    new Job(
        "Software Engineer",
        "Google",
        "CA",
        "google.com",
        "11/30/20",
        "3451234569",
        "Applying",
        "5 years experiences, C#, python, SQL",
        "B.S degree"
    )

]