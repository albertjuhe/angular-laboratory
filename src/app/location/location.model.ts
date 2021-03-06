export class Location {
    name: string;
    description: string;
    dateFrom: string;
    detoTo: string;
    stars: number;
    watch: number;
    forks: number;
    user: string;
    url: String = 'http://35.167.24.186/travelexperience/web/app.php/';
    breadcrum: String;
    budget: number = 0;

    constructor(name: string,
        description: string,
        dateFrom: string,
        detoTo: string,
        stars: number,
        watch: number,
        forks: number,
        user: string,
        breadcrum: string) {

        this.name = name;
        this.description = description;
        this.dateFrom = dateFrom;
        this.detoTo = detoTo;
        this.stars = stars;
        this.watch = watch;
        this.forks = forks;
        this.user = user;
        this.breadcrum = breadcrum;

    }

    incWatch() {
        this.watch += 1;
    }

    incStar() {
        this.stars += 1;
    }

    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.url.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }

    equal(location: Location) {
        return (
            this.name === location.name
        )
    }
}
